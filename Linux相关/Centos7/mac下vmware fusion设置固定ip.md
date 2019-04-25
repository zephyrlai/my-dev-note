1. 获取虚拟机中linux的mac地址：  
    ![images text](../images/static-ip00.png)
1. 访问：/Library/Preferences/VMware\ Fusion/vmnet8/dhcpd.cnf，获取网关、子网掩码等信息：  
    ![images text](../images/static-ip01.png)
1. 修改Linux网络配置：  
    ```vi /etc/sysconfig/network-scripts/ifcfg-ens33```  
    ![images text](../images/static-ip02.png)
1. 重启网络：  
    ```service restart network```  
    ![images text](../images/static-ip03.png)
1. ping一下网络并查看ip
    ![images text](../images/static-ip04.png)
    
