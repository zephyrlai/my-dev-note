/**
 * 包含所有基于state的getter计算属性的对象
 */
export default{
    // 已完成数量
    completedSize(state) {
        return state.todoList.reduce((preTotal,todo) => preTotal + (todo.flag?1:0),0);
    },
    // 总数量
    totalSize(state) {
        return state.todoList.length;
    },
    // 是否全选（默认传入自身[getters对象]）
    selectAll(state,getters) {
        return getters.completedSize === getters.allSize && state.todoList.length>0
    }
}