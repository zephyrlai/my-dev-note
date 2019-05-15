<template>
    <div>
        <ul>
            <li v-for="item in msgArray" :key="item.id">
                <!-- <a href="???">{{item.msg}}</a>  -->
                <router-link :to='`/home/message/detail/${item.id}`'>{{item.msg}}</router-link>
            </li>
        </ul>
        <router-view></router-view>
    </div>
</template>

<script>
    export default{
        data() {
            return {
                msgArray:[
                ]
            }
        },
        mounted() {
            var myTimer = setTimeout(() => {
                const msgArray = [
                    {
                        id:1,
                        msg:'信息01'
                    },
                    {
                        id:2,
                        msg:'信息02'
                    },
                    {
                        id:3,
                        msg:'信息03'
                    },
                ];
                this.msgArray = msgArray;
                console.log("my timer is working..."); 
                clearTimeout(myTimer);
            },1000);
            
        },
    }
</script>

<style>
</style>
