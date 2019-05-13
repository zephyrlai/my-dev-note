import {ADD_ITEM } from './mutation-type'

export default{
    // 第一个参数固定是state，自定义参数用对象的形式接受
    [ADD_ITEM](state,{item}) {
        state.todoList.unshift(item);
    }
}