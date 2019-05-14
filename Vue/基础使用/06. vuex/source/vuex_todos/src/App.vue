<template>
    <div id="root">
        <div class="todo-container">
            <div class="todo-wrap">
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


export default {
    components:{
        Items,
        Header,
        Footer
    },
    mounted() {
        this.$store.dispatch('readTodoList');
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
