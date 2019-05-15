<template>
    <li class="list-group-item">
        <div class="handle">
            <a href="javascript:;" @click='deleteItem'>删除</a>
        </div>
        <p class="user"><span >{{comment.name}}</span><span>说:</span></p>
        <p class="centence">{{comment.content}}</p>
    </li>
</template>

<script>
export default {
    // 声明接收属性（目前来自List.vue）的comment对象
    props:{
        'comment':Object,
        'deleteComment':Function,
        'index': Number
        },
    methods: {
        deleteItem(){
            if(window.confirm("是否确认删除？")){
                this.deleteComment(this.index);
            }
        }
    },
}
</script>