<template>
  <div>
    <header class="site-header jumbotron">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <h1>请发表对React的评论</h1>
          </div>
        </div>
      </div>
    </header>
    <div class="container">
      <Add/>
      <List :comments='comments'/>
    </div>
  </div>
</div>
</template>

<script>
    import Add from './components/Add.vue'
    import List from './components/List.vue'
export default {
    components:{
        Add,
        List
    },
    data(){
        return {
            comments: [
                {
                    name:"zhangsan",
                    content:'vue is good'
                },
                {
                    name:"lisi",
                    content:'vue is useful'
                },
                {
                    name:"wangwu",
                    content:'vue 哈哈'
                }
            ]
        }
    }
}
</script>

<style>
</style>