1. docker架构图：  
    ![image text](images/dockerbase00.png) 
1. docker三要素：
1. 关于docker logo的解读：海洋表示宿主机、鲸鱼表示docker、集装箱表示docker容器（来源于docker镜像文件）
1. 镜像常用命令：
    1. docker version
    1. docker info
    1. docker --help
    1. docker images:查看本地的docker镜像  
        ![image text](images/dockerbase01.png) 
        一个仓库源可以有多个tag，表示这个仓库源的不同版本，可以使用REPOSITORY:TAG来唯一定义不同的镜像，如果在使用镜像时不指定tag，docker将默认使用"latest"的tag，表示将会选取最新版本的tag
            1. -a：列出本地所有镜像（含中间映像层）
            1. -q：只显示镜像id
            1. --digests：显示镜像的摘要信息
            1. --no-trunc：显示完整的镜像信息
    1. docker search:从www.dockerhub.com上查找镜像信息  
        ![image text](images/dockerbase02.png) 
        1. --no-trunc:显示完整的镜像描述
        1. -s：列出收藏数不小于指定值的镜像
        1. --automated：只列出automated build类型的镜像
    1. docker pull :从镜像仓库拉取指定的镜像  
        ![image text](images/dockerbase03.png) 
    1. docker rmi:删除镜像
        ![image text](images/dockerbase04.png)
        1. 删除多个镜像：docker rmi 镜像名1:TAG 镜像名2:TAG
        1. 全部删除(类似于SQL语句)：docker rmi -f $(docker images -qa)
1. 容器常用命令：
    1. docker run:启动基于某个镜像的容器
        1. -i:已交互的方式运行容器，通常与-t同时使用
        1. -t:为容器重新分配一个伪输入终端，通常与-i同时使用
        1. -name="xxx":为容器指定一个名称  
        ![image text](images/dockerbase05.png)
        1. -d：后台运行容器，并返回容器id，机启动守护式容器
    1. docker ps:列出当前所有正在运行的容器  
        ![image text](images/dockerbase06.png)  
        1. -a：列出当前所有正在运行的容器 + 历史上运行过的容器
        1. -l：显示最近创建的容器。
        1. -n：显示最近创建的n个容器
        1. -q：静默模式，只显示容器编号
        1. --no-trunc：不截断输出
    1. 退出容器：
        1. 输入："exit"，关闭容器并退出
        1. 键盘快捷键：ctrl+p+q，离开容器但不关闭容器
    1. docker start:（根据id或name）启动容器（主要用于之前doceker run过后，关闭掉的容器）
        ![image text](images/dockerbase07.png)  
    1. docker restart:（根据id或name）重启容器
    1. docker stop:（根据id或name）停止容器
    1. docker kill:（根据id或name）强制停止容器
