<template>
    <mt-button @click="handleClick" type="primary" style="width: 100%">Test</mt-button> 
</template>

<script>
    import { Toast } from 'mint-ui';
    export default{
        methods: {
            handleClick(){
               Toast('操作成功');
            }
        },
    }
</script>

<style>
</style>
