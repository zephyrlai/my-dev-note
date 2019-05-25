一.故障现象：
[root@c1node01 ~]# service network restart
Shutting down loopback insterface:                                                       [   OK  ]  
Bringing up loopback insterface:                                                            [   OK  ]  
Bringing up interface eth0:  Device eth0 does not seem to be present,delaying initialization.                    [FAILED]  
 
解决办法：
[root@c1node01 ~]# rm -rf /etc/udev/rules.d/70-persistent-net.rules  
[root@c1node01 ~]# reboot ………………  
[root@c1node01 ~]# service network restart  
Shutting down loopback insterface:                                                         [   OK   ]  
Bringing up loopback insterface:                                                              [   OK   ]  
Bringing up interface eth0:                                                                     [   OK   ]  
 
二.另一种方法
造成这样的原因，是因为在虚拟机（Vmware）中移动了Centos系统对应的文件，导致重新配置时，网卡的MAC地址变了，输入ifconfig -a,找不到eth0  
 
安装完一个centos虚拟机，又拷贝一份，开机后网卡无法正常启动，报错：Device eth0 does not seem to be present,  delaying initialization

解决：# mv /etc/sysconfig/network-scripts/ifcfg-eth0 sysconfig/network-scripts/ifcfg-eth1
vim  sysconfig/network-scripts/ifcfg-eth1

修改DEVICE="eth0" 
为DEVICE="eth1"

>https://blog.csdn.net/xiaobei4929/article/details/40515247