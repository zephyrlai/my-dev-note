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
### 2. Quick Start（转换）
1. 案例：生成随机数并输出到文件（sources/01/quickstart.ktr）
    1. 新建随机数生成组件(输入)：  
        ![](images/0101.png)
    1. 新建输出到文本文件组件（输出）：  
        ![](images/0102.png)
    1. 连线： 
        ![](images/0103.png)
    1. 执行转换： 
        ![](images/0104.png)
    1. 查看输出效果： 
        ![](images/0105.png)
1. 字段选择：  
    1. 作用：转换并提取部分数据  
        ![](images/0106.png)
1. 获取同一个转换的多个结果：
    1. 右键选择“改变开始复制的数量”，本质是多线程并行执行  
        ![](images/0108.png)
    1. 效果： 
        ![](images/0109.png)
1. 计算器： 
    1. 功能：将源数据根据设定的计算规则，计算后输出（可以输出源数据，也可以输出计算结果）  
        ![](images/0110.png)
    1. 效果：  
        ![](images/0111.png)
1. 记录集连接
    1. 功能：（个人理解）实现类似于
sql中join的效果
    1. 自定义常量数据：类似于一个数据库的表，元数据就是列明
    1. 效果：  
        ![](images/0112.png)