1. 下载离线安装包：https://github.com/goharbor/harbor/releases  
1. 配置修改（主要涉及2个配置文件）：
    1. harbor.cfg(系统配置以及秘钥文件的挂载目录)
        1. 通常改一下域名即可安装  
            ![image text](images/docker-harbor01.png)
    1. docker-compose.yml(文件挂载目录的配置，根据需要更改，默认不进行更改)
1. 安装：
    harbor目录下运行：  
    ```./install.sh```  
    ![image text](images/docker-harbor02.png)
1. 访问仓库（默认用户名：admin，密码：Harbor12345，在harbor.cfg中配置）： 
    ![image text](images/docker-harbor03.png)  
    ![image text](images/docker-harbor04.png)

