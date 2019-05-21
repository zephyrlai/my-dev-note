## 〇、介绍
1. ETL：是英文Extract-Transform-Load的缩写，用来描述将数据从来源端经过萃取（extract）、转置（transform）、加载（load）至目的端的过程。
    1. 抽取(Extract):一般抽取过程需要连接到不同的数据源，以便为随后的步 骤提供数据。
    1. 转换(Transform):任何对数据的处理过程都是转换。
    1. 加载(Load):将数据加载到目标系统的所有操作。
1. ETL的工作职能：从不同的数据源统一抽取数据，经整理后对外提供：  
    ![](images/0100.png)
1. Kettle的特性：  
    ![](images/0114.png)

## 一、Kettle的基本使用
### 1. 下载与使用
1. [官网下载](https://sourceforge.net/projects/pentaho/files/latest/download)
1. 启动:
    1. 图形界面启动：windows下运行spoon.bat，macOS下运行spoon.sh，启动成功效果如图：  
        ![](images/0115.png)
    1. Kettle 的几个子程序的功能
        1. Spoon.bat: 图形界面方式启动作业和转换设计器。 
        1. Pan.bat: 命令行方式执行转换。
        1. Kitchen.bat: 命令行方式执行作业。
        1. Carte.bat: 启动web服务，用于 Kettle 的远程运行或 集群运行。
        1. Encr.bat: 密码加密