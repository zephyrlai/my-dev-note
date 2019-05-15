<template>
    <section class="jumbotron">
      <h3 class="jumbotron-heading">Search Github Users</h3>
      <div>
        <input type="text" placeholder="enter the name you search" v-model='username'/>
        <button @click='searchByName'>Search</button>
      </div>
    </section>
</template>
<script>
import PubSub from 'pubsub-js'
export default {
    data() {
        return {
            username: ''
        }
    },
    methods: {
        // 发布广播
        searchByName() {
            PubSub.publish('searchByName',this.username);
            this.username ='';
        }
    },
}
</script>
<style>

</style>


