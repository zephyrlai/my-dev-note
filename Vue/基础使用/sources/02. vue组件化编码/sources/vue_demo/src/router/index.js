import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

import About from '../components/About.vue'
import Home from '../components/Home.vue'

export default new VueRouter({
    // n个路由
    routes: [
        {
            path: '/about',
            component: About
        },
        {
            path: '/home',
            component: Home
        },
        {
            path: '/',
            redirect: 'about'
        }
    ]
})