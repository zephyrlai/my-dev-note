<template>
    <div>
        <h2 v-if="firstView">输入用户名搜索</h2>
        <h2 v-if="loading">加载中...</h2>
        <h2 v-if="errorMsg">{{errorMsg}}</h2>
        <div class="row">
            <div class="card" v-for="(user,index) in users" :key="index">
                <a :href="user.url" target="_blank">
                    <img :src="user.img" style='width: 100px'/>
                </a>
                <p class="card-text">{{user.name}}</p>
            </div>
        </div>
    </div>
</template>
<script>
import PubSub from 'pubsub-js'
import axios from 'axios'
export default {
    data() {
        return {
            firstView: true,
            loading: false,
            errorMsg: '',
            users: [] //[{url:'',img:'',name:''}]
        }
    },
    mounted() {
        PubSub.subscribe('searchByName',(msg,keyword)=>{
            this.firstView = false;
            this.loading = true;
            this.errorMsg = '';
            this.users =[];
            console.log("响应搜索",keyword);
            let reqUrl = 'https://api.github.com/search/users?q='+keyword;
            console.log(reqUrl);
            axios.get(reqUrl)
            // 请求成功
            .then(response=>{
                this.loading = false;
                const userList = response.data.items;
                this.users = userList.map(item => ({
                    url: item.html_url,
                    img: item.avatar_url,
                    name: item.login
                }));
            })
            // 请求失败
            .catch(error =>{
                this.firstView = false;
                this.loading = false;
                this.errorMsg='请求失败！请重试...'
            })
        })
    },
}
</script>
<style>
.card {
  float: left;
  width: 33.333%;
  padding: .75rem;
  margin-bottom: 2rem;
  border: 1px solid #efefef;
  text-align: center;
}

.card > img {
  margin-bottom: .75rem;
  border-radius: 100px;
}

.card-text {
  font-size: 85%;
}
</style>


