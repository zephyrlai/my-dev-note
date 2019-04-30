(function(){
    let MyPlugin = {};
    MyPlugin.install = function (Vue, options) {
        // 1. 添加全局方法或属性
        Vue.myGlobalMethod = function () {
            console.log('全局方法')
        }
    
        // 2. 添加全局资源
        Vue.directive('my-directive', (el,bind)=>{
            el.innerHTML = bind.value.toUpperCase();
        })
    
        // 3. 注入组件选项
        /* Vue.mixin({
        created: function () {
            // 逻辑...
        }
        ...
        }) */
    
        // 4. 添加实例方法
        Vue.prototype.$myMethod = function (content) {
        console.log("局部方法")
        }
    }

    //对外暴露
    window.MyPlugin = MyPlugin;
})