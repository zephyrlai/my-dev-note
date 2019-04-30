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
      <Add :addComment="addComment"/>
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
            // 数据在哪里，就在哪里提供维护（CRUD）的方法
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
    },
    methods: {
        addComment(comment){
            this.comments.unshift(comment);
        }
    }
}
</script>

<style>
</style>