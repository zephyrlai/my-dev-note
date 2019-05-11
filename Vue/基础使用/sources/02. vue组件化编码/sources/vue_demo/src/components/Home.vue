<template>
    <div>Home Page
        <div class="list-group list-line" >
        <!--生成路由链接-->
            <router-link to="/home/news" class="list-group-item">新闻</router-link>
            <router-link to="/home/message" class="list-group-item">消息</router-link>
        </div>
        <router-view ></router-view>
    </div>
    
</template>

<script>
    export default{
    }
</script>

<style>
    .list-line a {
        display: inline-block;
    }
</style>
