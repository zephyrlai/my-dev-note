<template>
    <div id="root">
        <div class="todo-container">
            <div class="todo-wrap">
                <Header :addItem ='addItem'/>
                <Items :todoList='todoList' :deleteItem='deleteItem'/>
                <Footer :todoList='todoList'/>
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
            todoList: [
                {title:"吃饭",flag:false},
                {title:"睡觉",flag:false},
                {title:"打豆豆",flag:true}
            ]
        }
    },
    methods: {
        addItem(todo){
            this.todoList.unshift(todo);
        },
        deleteItem(index){
            this.todoList.splice(index,1);
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
