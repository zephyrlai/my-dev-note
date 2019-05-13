<template>
    <div id="root">
        <div class="todo-container">
            <div class="todo-wrap">
               <!--  <Header @addItem ='addItem'/>
                <Items :todoList='todoList' />
                <Footer :todoList='todoList' :selectAllItems='selectAllItems' :deleteCheckedItems='deleteCheckedItems'/>
                 -->
                <Header/>
                <Items/>
                <Footer/>
            </div>
        </div>
    </div>
</template>

<script>
import PubSub from 'pubsub-js'
import Items from './components/Items.vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import storageUtil from './util/storageUtil'


export default {
    components:{
        Items,
        Header,
        Footer
    },
    computed: {
        calComplete(){
            return this.todoList.reduce((preTotal,todo) => preTotal + (todo.flag?1:0),0);
        },
        selectAllFlag: {
            get(){
                if(this.todoList.length === 0)
                    return false;
                return this.todoList.length === this.calComplete;
            },
            set(value) {
                this.selectAllItems(value)
            }

        }
    },
    // 深度监视
    /* watch: {
        todoList:{
            deep: true,
            // handler: function(value){
            //     window.localStorage.setItem("todoList",JSON.stringify(value))
            // }
            handler: storageUtil.write2LocalStorage
        }
    }, */
    methods: {
        addItem(todo){
            this.todoList.unshift(todo);
        },
        deleteItem(index){
            this.todoList.splice(index,1);
        },
        selectAllItems(value){
            this.todoList.forEach(element => {
                element.flag=value
            });
        },
        deleteCheckedItems(){
            this.todoList = this.todoList.filter(item => item.flag===false);
        }
    },
    /* mounted() {
        this.$refs.header.$on('addItem',this.addItem);
        // 订阅消息
        PubSub.subscribe('deleteItem',(msg,index)=>{
            console.dir(msg);
            this.deleteItem(index);
        })
    }, */
}
</script>

<style>
/*app*/
.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
