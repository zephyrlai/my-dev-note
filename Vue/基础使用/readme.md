## 一、Vue核心
### 1. 入门尝试
1. 中国官网：https://cn.vuejs.org/
1. 特点：
    1. 遵循MVVM模式（M：模型（数据对象），V：视图（模板对象），VM:view model,视图模型(Vue实例)）  
        ![image text](images/vue01.png)   
    1. 它本身只关注 UI, 可以轻松引入 vue 插件或其它第三库开发项目（渐进式 JavaScript 框架 ）
1. 快速体验： 
    ``` html
    <body>
        <div id="app">
            <input type="text" v-model="username">
            <p>hello {{username}}</p>
        </div>
    </body>

    <script src="js/vue.js"></script>
    <script>
        const vm = new Vue({
            el:'#app',
            data:{
                username:"haha"
            }
        })
    </script>
    ```  
1. 效果： 
        ![image text](images/vue02.gif)
### 2. 模板语法：
1. 
1. 参考代码：
    ``` html
    <body>
        <div id='app'>
        <h4>双大括号语法</h4>
        <p>{{msg}}</p>
        <p>{{msg.toUpperCase()}}</p>  <!-- 直接在大括号里写js -->
        <p v-html="htmlCode"></p>  <!-- 相当于innerHtml -->
        <p v-text="msg"></p> <!-- 相当于textContent -->
        <h4>指令一：强制数据绑定</h4>
        <img src="imgUrl" alt="???"> 
        <img v-bind:src="imgUrl" alt="">
        <img :src="imgUrl" alt=""> <!-- 简写 -->
        <h4>指令二：绑定事件监听</h4>
        <button v-on:click='myClick'>点击1</button>
        <button @click='myClick'>点击2</button> <!-- 简写 -->
        <button v-on:mouseOver='myOver("abcd")'>悬浮</button> <!-- 传参  -->

        </div>
    </body>
    <script src="js/vue.js"></script>
    <script>
        new Vue({
            el: '#app',
            data:{
                msg:'haha',
                htmlCode:'<a href="http://www.baidu.com">谷歌</a>',
                imgUrl:'images/googlelogo.png'
            },
            methods: {
                myClick(){
                    alert('哈哈1😄');
                },
                myOver(content){
                    alert(content+'😄');
                }
            }
        })
    </script>
    ```  
1. 效果：  
    ![image text](images/vue03.gif)
### 3. 计算属性与监视
1. 计算属性：在vue对象的computed属性对象中定义计算属性的方法，在页面上使用{{方法名}}来显示计算结果（或用v-model）
1. 监视属性：通过vue对象的$watch()或者watch配置来监视指定的属性，当属性变化时，回调函数自动调用，在函数内部进行计算
1. 计算属性高级：通过getter、setter方法实现对属性的显示与监视。【计算属性存在缓存：若多次读取，则只执行一次getter计算】
1. 参考代码：
    ``` html
    <body>
        <div class="app">
        <p>姓</p> <input type="text" v-model='firstName'> <br>
        <p>名</p> <input type="text" v-model='lastName'> <br>
        <p>全名1</p> <input type="text" v-model='fullName1'> <br>
        <p>全名2</p> <input type="text" v-model='fullName2'> <br>
        <p>全名3</p> <input type="text" v-model='fullName3'> <br>
        </div>
    </body>
    <script src='js/vue.js'></script>
    <script>
        const vm = new Vue({ 
            el:'.app',
            data:{
                firstName:'A',
                lastName:'B',
                // fullName1:'',  // 计算属性时，不能赋初值
                fullName2:'',
                // fullName3:'',
            },
            /* 计算属性 */
            /* 执行时机：初始化显示或相关data属性发生改变 */
            computed: {
                fullName1(){
                    return this.firstName+this.lastName;
                },
                fullName3:{
                    // 回调函数：属性值发生改变时调用（根据方法更新其他属性的值 ）
                    set(value){
                        const nameArray = value.split(' ');
                        this.firstName = nameArray[0]
                        this.lastName = nameArray[1]
                    },
                    // 回调函数：读取当前属性值时调用（根据方法重新计算）
                    get(){
                        return this.firstName+' '+this.lastName;
                    }
                }   
            },
            /* 配置监视 */
            watch: {
                // firstName发生改变时，自动改变fullName2的值
                // firstName:function(oldVal,newVal)
                firstName:function(value){
                    this.fullName2 = value+' '+this.lastName;
                }
            }
        });
        // 方法监视：lastName发生改变时，自动更新fullName2的值
        vm.$watch('lastName',function(value){
            console.log(1);
            this.fullName2 = this.firstName +' '+ value;
        })

    </script>
    ```
1. 效果：
    ![image text](images/vue04.gif)
### 4. class与style绑定
1. class/style绑定就是专门用来实现动态样式的 
1. class绑定： ```:class='xxx'```
    xxx可以是字符串、对象、数组
1. style绑定: ```:style="{attr1:param1,attr2:param2}"```,attr是css属性，param是vue对象中data中的属性
1. 参考代码：
    ``` html
    <style>
        .redClass{
            color:red;
        }
        .greenClass{
            color:green;
        }
        .bigClass{
            font-size:40px;
        }
    </style>
    <body>
        <div class="app">
            <button @click='myClick'>点击</button>
            <h4>1. class绑定：class='xxx'</h4>
            <p :class='myClass'>字符串形式</p> <!-- 字符串形式 -->
            <p :class='{greenClass:greenFlag,bigClass:bigFlag}'>对象形式</p> <!-- 对象形式 -->
            <p :class='["greenClass",myClass]'>数组形式</p> <!-- 数组形式(注意要固定类名上要写引号) -->
        <h4>2. style绑定</h4>
            <p :style="{color:myColor,fontSize:mySize+'px'}">灰色,变大</p>
        </div>
    </body>
    <script src="js/vue.js"></script>
    <script>
        new Vue({
            el:".app",
            data:{
                myClass:"bigClass",
                greenFlag:true,
                bigFlag:false,
                myColor:'#aaa',
                mySize:'10',
            },
            methods: {
                myClick(){
                this.myClass='redClass' ;
                this.greenFlag=false;
                this.bigFlag=true;
                this.mySize="30";
                }
            },
        })
    </script>
    ```
1. 效果：  
    ![image text](images/vue05.gif)
