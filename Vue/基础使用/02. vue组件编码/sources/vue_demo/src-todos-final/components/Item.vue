<template>
    <li @mouseenter="handleMouse(true)" @mouseleave="handleMouse(false)" :style='{background: bgColor}'>
        <label>
        <input type="checkbox" v-model="Item.flag"/>
        <span>{{Item.title}}</span>
        </label>
        <button class="btn btn-danger" v-show="showFlag" @click='deleteTodo(index)'>删除</button>
    </li>
</template>

<script>

import PubSub from 'pubsub-js'
export default {
    props: {
        'Item': Object,
        'index': Number,
        'deleteItem': Function
    },
    data() {
        return{
            showFlag: false,
            bgColor: '#FFF'
        }
    },
    methods:{
        handleMouse(flag){
            if(flag){
                this.showFlag=true;
                this.bgColor='#eee';
            }else{
                this.showFlag=false;
                this.bgColor='#fff';
            }
        },
        deleteTodo(index) {
            const item = this.Item
            if(window.confirm('确认删除'+item.title+'？'))
                // this.deleteItem(index);
                PubSub.publish('deleteItem',index);
        }
    }
}
</script>

<style>
</style>
