<template>
    <div id="root">
        <div class="todo-container">
            <div class="todo-wrap">
                <Header :addItem ='addItem'/>
                <Items :todoList='todoList' :deleteItem='deleteItem'/>
                <Footer :todoList='todoList' :selectAllItems='selectAllItems' :deleteCheckedItems='deleteCheckedItems'/>
            </div>
        </div>
    </div>
</template>

<script>
import Items from './components/Items.vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'


export default {
    components:{
        Items,
        Header,
        Footer
    },
    data() {
        return {
            // 初始赋值
           /*  todoList: [
                {title:"吃饭",flag:false},
                {title:"睡觉",flag:false},
                {title:"打豆豆",flag:true}
            ] */
            // 从localStroage中读取
            todoList: JSON.parse(window.localStorage.getItem("todoList") || '[]'),
        }
    },
    // 深度监视
    watch: {
        todoList:{
            deep: true,
            handler: function(value){
                window.localStorage.setItem("todoList",JSON.stringify(value))
            }
        }
    },
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
