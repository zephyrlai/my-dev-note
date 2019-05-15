import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

import About from '../components/About.vue'
import Home from '../components/Home.vue'
import News from '../components/News.vue'
import Message from '../components/Message.vue'
import MessageDetail from '../components/MessageDetail.vue'

export default new VueRouter({
    // n个路由
    routes: [
        {
            path: '/about',
            component: About
        },
        {
            path: '/home',
            component: Home,
            children: [
                {
                    path:'/home/news',
                    component : News
                },
                {
                    path:'message',
                    component : Message,
                    children: [
                        {
                            path:'detail/:id',
                            component: MessageDetail
                        }
                    ]
                },
                {
                    path:'',
                    redirect: '/home/news'
                }
            ]
        },
        // 访问默认路径时，重定向到about
        {
            path: '/',
            redirect: 'about'
        }
    ]
})