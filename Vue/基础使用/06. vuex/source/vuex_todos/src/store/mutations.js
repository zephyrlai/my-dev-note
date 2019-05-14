import {ADD_ITEM,DEL_ITEM } from './mutation-type'

export default{
    // 第一个参数固定是state，自定义参数用对象的形式接受
    // 中括号将一个字符串变成一个变量
    [ADD_ITEM](state,{item}) {
        state.todoList.unshift(item);
    },
    [DEL_ITEM](state,{index}) {
        state.todoList.splice(index,1);
    }
}