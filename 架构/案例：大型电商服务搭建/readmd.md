### 0. 大型电商网站的缓存架构

### 1. 环境搭建
1. 搭建4台虚拟机集群，centos6，
    1. 网络环境配置
        1. 首先设置网卡开机启动：  
            ``` sh
            vi /etc/sysconfig/network-scripts/ifcfg-eth0 
            ```
            ``` sh
            DEVICE=eth0
            TYPE=Ethernet
            ONBOOT=yes
            BOOTPROTO=dhcp
            ```
        1. 重启网卡服务后获取ip：  
            ``` sh
            service network restart
            ```
            ![](images/0101.png)
        1. 将ip固定，再重启网卡服务(桥接模式，子网掩码是固定值，网关采用宿主机的网关)：  
            ``` sh
            DEVICE=eth0
            TYPE=Ethernet
            ONBOOT=yes
            BOOTPROTO=static

            IPADDR=192.168.0.121
            NETMASK=255.255.255.0
            GATEWAY=192.168.0.1
            ```
        1. 关闭防火墙服务，并禁止开机启动：  
            ``` sh
            service iptables stop
            chkconfig iptables off
            ```
            ![](images/0102.png)
        1. 配置yum
            ``` sh
            yum clean all
            yum makecache
            yum install -y wget
            ```
    1. 安装jdk、perl
        1.[安装jdk](https://github.com/zephyrlai/my-architect-note/blob/master/99.%20%E5%90%84%E7%B1%BB%E5%AE%89%E8%A3%85%E6%95%99%E7%A8%8B/01.%20Linux%E4%B8%8Bjdk%E5%AE%89%E8%A3%85.md)
        1. 安装perl
            1. 安装gcc环境
                ``` sh
                yum install -y gcc
                ```
            1. 下载安装包
                ``` sh
                wget http://www.cpan.org/src/5.0/perl-5.16.1.tar.gz
                ```
            1. 解压后编译并安装
                ``` sh
                tar -xzf perl-5.16.1.tar.gz
                cd perl-5.16.1
                ./Configure -des -Dprefix=/usr/local/perl
                make && make test && make install
                ```
            1. 查看版本号： 
                ``` sh
                perl -v
                ```
                ![](images/0103.png)
    1. 配置4台CentOS为ssh免密码互相通信
        1. 生成本机的公钥(过程中不断敲回车即可，ssh-keygen命令默认会将公钥放在/root/.ssh目录下)
            ``` sh
            ssh-keygen -t rsa
            ```
        1. 将公钥复制为authorized_keys文件，此时使用ssh连接本机就不需要输入密码了
            ``` sh
            cd /root/.ssh
            cp id_rsa.pub authorized_keys
            ```
        1. 配置三台机器互相之间的ssh免密码登录
            ``` sh
            ssh-copy-id -i hostname
            ```
        1. 效果：  
            ![](images/0104.png)
    1. redis安装（生产环境标准）
        1. 

### 2. redis持久化
1. 概述：  
    1. 持久化的作用：数据备份与灾难恢复
    1. 如果不使用持久化：一旦遭遇到灾难性故障，将丢失所有数据
    1. redis持久化的故障恢复机制：  
        ![](images/0201.png)
1. 2种持久化方案（RDB、AOF）：
    1. RDB（Redis DataBase）：对redis中的数据执行周期性的持久化，即每隔一段时间，生成一份当前完整redis的数据快照：  
        ![](images/0202.png)
        1. 优点
            1. RDB会生成多个数据文件，每个数据文件都代表了某一个时刻中redis的数据，这种多个数据文件的方式，非常适合做冷备，可以将这种完整的数据文件发送到一些远程的安全存储上去，比如说Amazon的S3云服务上去，在国内可以是阿里云的ODPS分布式存储上，以预定好的备份策略来定期备份redis中的数据
            1. RDB对redis对外提供的读写服务，影响非常小，可以让redis保持高性能，因为redis主进程只需要fork一个子进程，让子进程执行磁盘IO操作来进行RDB持久化即可
            1. 相对于AOF持久化机制来说，直接基于RDB数据文件来重启和恢复redis进程，更加快速
        1. 缺点
            1. 如果想要在redis故障时，尽可能少的丢失数据，那么RDB没有AOF好。一般来说，RDB数据快照文件，都是每隔5分钟，或者更长时间生成一次，这个时候就得接受一旦redis进程宕机，那么会丢失最近5分钟的数据
            1. RDB每次在fork子进程来执行RDB快照数据文件生成的时候，如果数据文件特别大，可能会导致对客户端提供的服务暂停数毫秒，或者甚至数秒
    1. AOF（Append Only File）：对每条写入命令作为日志，以append-only的模式写入一个日志文件中，在redis重启的时候，可以通过回放AOF日志中的写入指令来重新构建整个数据集
        1. AOF记录的是写指令，其文件内容只会增加，而不会减少
        1. redis的内存数据存满时（例如限定了1G的内存空间），会执行LRU算法，清理掉一部份不常用的数据，而AOF中对应的无效数据的写指令不会被删除；而AOF文件过大时，redis会基于当前的redis数据新建一个AOF文件，仅存放基于当前redis数据的写指令，删除原有的AOF文件  
            ![](images/0203.png)
        1. 优点
            1. AOF可以更好的保护数据不丢失，一般AOF会每隔1秒，通过一个后台线程执行一次fsync操作，最多丢失1秒钟的数据
            1. AOF日志文件以append-only模式写入，所以没有任何磁盘寻址的开销，写入性能非常高，而且文件不容易破损，即使文件尾部破损，也很容易修复
            1. AOF日志文件即使过大的时候，出现后台重写操作，也不会影响客户端的读写。因为在rewrite log的时候，会对其中的指导进行压缩，创建出一份需要恢复数据的最小日志出来。再创建新日志文件的时候，老的日志文件还是照常写入。当新的merge后的日志文件ready的时候，再交换新老日志文件即可。
            1. AOF日志文件的命令通过非常可读的方式进行记录，这个特性非常适合做灾难性的误删除的紧急恢复。比如某人不小心用flushall命令清空了所有数据，只要这个时候后台rewrite还没有发生，那么就可以立即拷贝AOF文件，将最后一条flushall命令给删了，然后再将该AOF文件放回去，就可以通过恢复机制，自动恢复所有数据
        1. 缺点
            1. 对于同一份数据来说，AOF日志文件通常比RDB数据快照文件更大
            1. AOF开启后，支持的写QPS会比RDB支持的写QPS低，因为AOF一般会配置成每秒fsync一次日志文件，当然，每秒一次fsync，性能也还是很高的
            1. 以前AOF发生过bug，就是通过AOF记录的日志，进行数据恢复的时候，没有恢复一模一样的数据出来。所以说，类似AOF这种较为复杂的基于命令日志/merge/回放的方式，比基于RDB每次持久化一份完整的数据快照文件的方式，更加脆弱一些，容易有bug。不过AOF就是为了避免rewrite过程导致的bug，因此每次rewrite并不是基于旧的指令日志进行merge的，而是基于当时内存中的数据进行指令的重新构建，这样健壮性会好很多。
1. RDB和AOF到底该如何选择
    1. 不要仅仅使用RDB，因为那样会导致你丢失很多数据
    1. 也不要仅仅使用AOF，因为那样有两个问题，  
        第一，你通过AOF做冷备，没有RDB做冷备，来的恢复速度更快;   
        第二，RDB每次简单粗暴生成数据快照，更加健壮，可以避免AOF这种复杂的备份和恢复机制的bug  
    1. 综合使用AOF和RDB两种持久化机制，用AOF来保证数据不丢失，作为数据恢复的第一选择; 用RDB来做不同程度的冷备，在AOF文件都丢失或损坏不可用的时候，还可以使用RDB来进行快速的数据恢复
1. RDB持久化实验： 
    1. 修改redis.conf，新增rdb写入规则： 每3s检测一次，如果有5个键发生改动，则写入rdb文件，重启redis后生效：  
        ![](images/0204.png)  
    1. 新增三个键，rdb文件中没有写入：  
        ![](images/0205.png)
    1. 再新增2个键，rdb文件中写入了5个键：  
        ![](images/0206.png)  
1. AOF持久化实验：
        1. 修改redis.conf，开启AOF持久化机制（每秒一次fsync）、开启AOF的rewrite机制(重启生效)  
            ![](images/0207.png)  
            ![](images/0208.png)  
        1. 插入一个键值对，查看AOF（日志）文件：  
            ![](images/0209.png)
        1. AOF的rewrite流程：  
            ![](images/0210.png)
1. 企业级数据备份与数据恢复的容灾演练
    1. 持久化方案： RDB、AOF同时打开，RDB的复写频率与AOF的rewrite频率使用redis的默认配置即可，也可以根据实际需要进行调整，AOF的fsync频率建议使用everysec；
    1. 数据备份方案：  
        1. 写 __crontab__ 定时调度脚本去做数据备份  
            ``` sh
            crontab -e
            0 * * * * sh /usr/local/redis/copy/redis_rdb_copy_hourly.sh
            ```
        1. __每小时__ 都copy一份rdb的备份，到一个目录中去，仅仅保留最近48小时的备份  
            ``` sh
            #! /bin/sh
            # 获取当前时间
            cur_date=`date +%Y%m%d%k`
            # 备份当前文件
            cp -f /var/redis/6379/dump.rdb /usr/local/mysoftware/redis/backup/snapshotting/$cur_date.rdb
            # 删除48小时之前的文件
            del_date=`date -d -48hour +%Y%m%d%k`
            rm -rf /usr/local/mysoftware/redis/backup/snapshotting/$del_date.rdb
            ```  
            ![](images/0212.png)
        1. __每天__ 都保留一份当日的rdb的备份，到一个目录中去，仅仅保留最近1个月的备份  
            ``` sh
            #!/bin/sh 
            cur_date=`date +%Y%m%d`
            cp /var/redis/6379/dump.rdb /usr/local/redis/snapshotting/$cur_date.rdb

            del_date=`date -d -1month +%Y%m%d`
            rm -rf /usr/local/redis/snapshotting/$del_date.rdb
            ```
        1. 每次copy备份的时候，都把太旧的备份给删了（通常删除 __48小时__ 或者 __1个月__ 之前的数据）
        1. 每天晚上将当前服务器上 __所有的数据备份__，发送一份到远程的云服务上去
    1. 数据恢复方案（分5种情形讨论）：  
        1. 如果是redis进程挂掉：直接重启即可，redis会立即根据aof文件进行数据恢复；
        1. 如果是redis进程所在机器挂掉，那么重启机器后，尝试重启redis进程，尝试直接基于AOF日志文件进行数据恢复。如果AOF没有破损，也是可以直接基于AOF恢复的（AOF append-only，顺序写入）。如果AOF文件破损，那么用redis-check-aof fix 修复aof文件后恢复
        1. 如果redis挂掉，且当前最新的AOF和RDB文件出现了丢失/损坏（人为：rm -rf之类的），这种情况相对比较麻烦，单独讲解一下：
            1. 核心思路：利用最近一次备份的rdb文件生成aof文件，而不要使用redis重启后自动生成的空的aof文件  
            1. 在配置文件中关闭aof，重新拷入最近一次备份的rdb文件后，重启redis服务（将数据恢复到最近一次rdb备份的时刻）
            1. 使用redis热配置的方式打开aof持久化，关闭redis服务（只是暂用了热配置的方式开启了aof，而实际的配置文件并没有修改），配置文件中打开aof持久化开关，重启redis
            1. 此时可以看到数据可以取到，且aof文件正常
        1. 如果当前机器上的所有RDB文件全部损坏，那么从远程的云服务上拉取最新的RDB快照回来恢复数据
        1. 如果是发现有重大的数据错误，比如某个小时上线的程序一下子将数据全部污染了，数据全错了，那么可以选择某个更早的时间点，对数据进行恢复