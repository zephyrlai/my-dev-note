## 二、 Vue组件化编码
### 1. 使用vue-cli创建模板项目
1. 说明：
    1. vue-cli 是 vue 官方提供的脚手架工具
    1. github: https://github.com/vuejs/vue-cli
    1. 作用: 从 https://github.com/vuejs-templates 下载模板项目
1. 创建vue项目
    1. 依次执行如下指令(如遇权限不足，则使用```sudo```提权)：
        ``` sh
        npm install -g vue-cli
        vue init webpack vue_demo 
        cd vue_demo
        npm install
        npm run dev
        ```  
    1. 最终将出现如下所示：  
        ![](images/vue17.png)  
    1. 访问： 
        ![](images/vue16.png)
    1. 模板项目的结构：  
        ![](images/vue18.png)
### 2. 基于脚手架编写项目
1. 删除src目录下main.js文件、App.vue文件、components文件夹，自己重新写一份
1. 文件关系：  
    App.vue将components下的组件编译到App.vue中，main.js将App.vue中的组件编译到index.html中
1. components/HelloWorld.vue:
    ``` html
    <!-- 3要素：html、js、css -->
    <template>
        <div>
            <p>{{msg}}</p>
        </div>
    </template>

    <script>
        export default {
            data () {
                return {
                msg: 'hello world!'
                }
            }
        }
    </script>

    <style>
        p{
            color:#bbb;
            font-size:30px;
        }
    </style>
    ```  
1. App.vue:  
    1. 引入HelloWorld组件
    2. 映射HelloWorl组件标签
    3. 使用HelloWorld标签   
    ``` html
    <template>
        <div>
            <img src='./assets/logo.png'/>
            <!-- 3. 使用标签 -->
            <HelloWorld/>
        </div>
    </template>

    <script>
    // 1. 引入组件
    import HelloWorld from './components/HelloWorld'
    export default {
    // 2. 将组件映射为标签
    components: {
            HelloWorld
        }
    }
    </script>

    <style lang="">
    </style>
    ```
1. main.js(入口js)：创建vue实例，最终将App.vue渲染至index.html中  
    1. 引入App组件
    2. 映射App组件标签
    3. 使用App标签（通过template方式） 
    ``` js
    import Vue from 'vue'
    import App from './App.vue'

    /* eslint-disable no-new */
    new Vue({
        el: '#app',
        components: {
            App
        },
        template: '<App/>'
    })
    ```
1. 运行```npm run dev```  
1. 效果：  
    ![](images/vue19.png)



          
