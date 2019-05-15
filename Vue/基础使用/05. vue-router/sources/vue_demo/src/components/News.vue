<template>
    <ul>
         <li v-for="(news,index) in newsArray" :key="index"> {{news}}</li>
    </ul>
</template>

<script>
    export default{
        data() {
            return {
                newsArray:['新闻01','新闻02','新闻03']
            }
        }
    }
</script>

<style>
</style>
