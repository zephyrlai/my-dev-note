/* 对外暴露对localstorage的读、写方法 */
export default{
    write2LocalStorage(value){
        window.localStorage.setItem('todoList',JSON.stringify(value))
    },
    readArrayFromLocalStorage(key){
        return JSON.parse(window.localStorage.getItem(key) || '[]');
    },
    readObjectFromLocalStorage(key){
        return JSON.parse(window.localStorage.getItem(key) || '{}');
    }
}