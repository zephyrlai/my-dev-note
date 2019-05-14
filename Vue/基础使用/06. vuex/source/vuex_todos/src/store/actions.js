import { ADD_ITEM,DEL_ITEM,SELECT_ALL,DELETE_CHECKED_ITEMS,LOAD_TODO_LIST } from "./mutation-type";
import storageUtil from '../util/storageUtil'

export default{
    // 单条增加
    add_item({commit},item) {
        commit(ADD_ITEM,{item}); // 将参数封装成对象，传入mutations 
    },
    // 单条删除
    deleteItem({commit},index){
        commit(DEL_ITEM,{index});
    },
    // 全选、全不选
    selectAll({commit},value){
        commit(SELECT_ALL,{value});
    },
    deleteCheckedItems({commit}){
        commit(DELETE_CHECKED_ITEMS);
    },
    // 从localstorage中加载todoList
    readTodoList({commit}){
        const todos = storageUtil.readArrayFromLocalStorage('todoList')
        commit(LOAD_TODO_LIST,todos);
    },
}