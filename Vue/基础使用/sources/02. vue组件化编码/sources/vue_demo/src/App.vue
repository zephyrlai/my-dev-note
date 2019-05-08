<template>
    <div>
        <div class="row">
            <div class="col-xs-offset-2 col-xs-8">
                <div class="page-header"><h2>Router Test</h2></div>
            </div>
        </div>
        <div class="row">
            <div class="col-xs-2 col-xs-offset-2">
                <div class="list-group">
                <!--生成路由链接-->
                    <router-link to="/about" class="list-group-item">About</router-link>
                    <router-link to="/home" class="list-group-item">Home</router-link>
                </div>
            </div>
            <div class="col-xs-6">
                <router-view ></router-view>
            </div>
        </div>
    </div>
</template>

<script>
    export default{

    }
</script>

<style>
    .router-link-active{
        background-color: #ddd !important
    }
</style>
