<template>
    <div>
        <div v-if="repoUrl === '' ">loading</div>
        <div v-else>The most stars repo is <a :href="repoUrl">{{repoName}}</a></div>
    </div>
</template>

<script>

    export default{
        data() {
            return {
                repoUrl: '',
                repoName: ''
            }
        },
        mounted() {
            let reqUrl = 'https://api.github.com/search/repositories?q=vue&sort=start';
            this.$http.get(reqUrl).then(
                response =>{
                    const result = response.data;
                    const targetRepo = result.items[0];
                    this.repoUrl = targetRepo.html_url;
                    this.repoName = targetRepo.name;
                },
                response => {
                    alert("请求失败！")
                }
            )
        },
    }
</script>

<style>
</style>
