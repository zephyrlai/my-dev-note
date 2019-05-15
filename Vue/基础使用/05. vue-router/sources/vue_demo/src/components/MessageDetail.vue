<template>
    <div>
        <ul>
            <li >id:{{msgItem.id}}</li>
            <li >msg:{{msgItem.msg}}</li>
            <li >remarks:{{msgItem.remarks}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            msgItem:{},
            msgList:[
                {id:1,msg:'msg01',remarks:'remark for msg01'},
                {id:2,msg:'msg02',remarks:'remark for msg02'},
                {id:3,msg:'msg03',remarks:'remark for msg03'}
            ]
        }
    },
    mounted() {
        setTimeout(() => {
            var myId = this.$route.params.id*1;
            this.msgItem = this.msgList.find(item => item.id===myId);
        },1000);
    },
    watch: {
        $route :function(value){
            var myId = value.params.id*1;
            this.msgItem = this.msgList.find(item => item.id===myId);
        }
    }
}
</script>

<style>

</style>

