<template>
      <ul class="todo-main">
        <Item v-for="(item,index) in todoList" :key='index' :item='item' :index:='index'/>
      </ul>
</template>

<script>
import storageUtil from '../util/storageUtil'
import {mapState,mapActions} from 'vuex'
import Item from './Item.vue'

export default {
    computed: {
        // 注意要放在computed中，而不是放在data中
        ...mapState(['todoList'])
    },
    components: {
        Item
    },
    watch: {
      // 监视todoList的所有变化
      todoList: {
        deep:true, // 深度监视
        handler: storageUtil.write2LocalStorage // 写入localstorage
      }
    },
}
</script>

<style>
/*base*/
body {
  background: #fff;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn:focus {
  outline: none;
}
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}

</style>
