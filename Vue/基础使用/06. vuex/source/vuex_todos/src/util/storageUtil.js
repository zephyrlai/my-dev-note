/* 对外暴露对localstorage的读、写方法 */
export default{
    write2LocalStorage(value){
        console.log('write')
        window.localStorage.setItem('todoList',JSON.stringify(value))
    },
    readArrayFromLocalStorage(key){
        console.log('read')
        return JSON.parse(window.localStorage.getItem(key) || '[]');
    },
    readObjectFromLocalStorage(key){
        return JSON.parse(window.localStorage.getItem(key) || '{}');
    }
}