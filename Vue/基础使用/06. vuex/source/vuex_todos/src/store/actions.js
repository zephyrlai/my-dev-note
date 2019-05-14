import { ADD_ITEM,DEL_ITEM } from "./mutation-type";

export default{
    // 单条增加
    add_item({commit},item) {
        commit(ADD_ITEM,{item}); // 将参数封装成对象，传入mutations 
    },
    deleteItem({commit},index){
        commit(DEL_ITEM,{index});
    }
}