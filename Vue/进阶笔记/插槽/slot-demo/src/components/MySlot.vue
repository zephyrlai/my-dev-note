<template>
    <div>
        <h3>插槽使用</h3>
        <my-btn>
            <img class='my-ico' src="../assets/logo.png" />
            save
        </my-btn>

        <h3>编译作用域</h3>
        <my-btn name='123'>
            <img class='my-ico' src="../assets/logo.png" />
            save-{{user.name}}-{{name}}
        </my-btn>

        <h3>后备内容</h3>
        <p>可以在插槽中定义一些默认内容，当父级元素中没有元素传入的时候，将使用默认内容</p>
        <my-btn>
        </my-btn>

        <h3>具名插槽</h3>
        <my-article>
            <template v-slot:header>
                <div>
                    <h5>标题</h5>
                </div>
            </template>
            <template>
                <div>
                    <p>段落01段落01段落01段落01段落01段落01段落01段落01</p>
                </div>
            </template>
            <template v-slot:footer>
                <div>
                    <h5>页脚</h5>
                </div>
            </template>
            <template>
                <div>
                    <p>段落02段落02段落02段落02段落02段落02段落02段落02段落02</p>
                </div>
            </template>
        </my-article>

        <h3>具名插槽的缩写</h3>
        <p>将'v-slot:"header"'写作'#header'</p>
        <my-article>
            <template #header>
                <div>
                    <h5>标题</h5>
                </div>
            </template>
            <template #default>
                <div>
                    <p>段落01段落01段落01段落01段落01段落01段落01段落01</p>
                </div>
            </template>
            <template #footer>
                <div>
                    <h5>页脚</h5>
                </div>
            </template>
            <template>
                <div>
                    <p>段落02段落02段落02段落02段落02段落02段落02段落02段落02</p>
                </div>
            </template>
        </my-article>

        <h3>作用域插槽</h3>
        <p>让插槽的数据在父级元素中可用</p>
        <my-slot-bind>
            <template v-slot:default='slotProps'>
                {{slotProps.subUser.name}}     
            </template>
        </my-slot-bind>

    </div>
  
</template>

<script>
import MyBtn from './MyBtn'
import MyArticle from './MyArticle'
import MySlotBind from './MySlotBind'
export default {
    data() {
        return {
            user: {name:'哈哈',age:18}
        }
    },
    components: {
        MyBtn,
        MyArticle,
        MySlotBind
    }
}
</script>

<style>
    .my-ico {
        width: 20px;
        height: 20px;
    }
</style>