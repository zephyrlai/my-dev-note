## 一、 安装
1. npm安装： 
    ``` sh
    npm install -g less
    ```
1. 编译less： 
    1. 生成css文件到默认的stdout文件夹：  
        ``` sh
        lessc styles.less
        ```
    1. 生成css文件到指定的文件夹
        ``` sh
            lessc styles.less > target/styles.css
        ```

## 二、基础语法
1. 注释
    1. 以```//```开头的注释 __不会__ 被编译到css文件中
    2. 以```/*  */```包裹的注释 __会__ 被编译到css文件中
1. 变量（）
    1. 使用```@```来声明/定义变量
        1. 做为普通属性值来使用：直接使用```@param```
        1. 做为属性名或选择器名：```@{param}```
        1. 做为url：```@{param}```
    1. 变量的延迟加载
        1. less编译机制：读完所有css（中间可能会包含less变量的多次赋值），然后再整体编译
        1. less变量的作用域：当前{}内部有效
1. 嵌套规则
    1. 基本嵌套规则
        1. 基本的嵌套规格就是父子级之间的嵌套
        1. less源码
            ``` css
                .a {
                    color: red
                    .b {
                        border:1px solid #ccc
                    }
                }
            ```
        1. 编译后的css代码：  
            ``` css
            .a {
                color: red
            }
            .a .b {
                color: red
                border:1px solid #ccc
                }
            ```
    1. &的使用
        1. 场景：子选择器上添加伪类选择器，需要的效果是```.a .b:hover```，而如果使用基本的嵌套规则，则会产生如下的效果```.a .b :hover```（:hover前多了一个空格）。此时引入&符：
        1. less源码： 
            ``` css
            .a {
                color: red
                .b {
                    border:1px solid #ccc
                    &:hover{
                        background-color:#aaa
                    }
                }
            } 
            ```
        1. 编译后的css代码： 
            ``` css
            .a {
                color: red
            }
            .a .b {
                color: red
                border:1px solid #ccc
            }
            .a .b:hover{
                border:1px solid #ccc
                background-color:#aaa
            }
            ```

