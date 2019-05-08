<template>
    <div>
        <a-button type="primary" @click='handleClick'>ant-design-vue</a-button>
    </div>
</template>

<script>
    export default{
        methods: {
            handleClick() {
               this.$notification.open({
                message: '通知通知',
                description: '心心念念的Ant Design Vue.',
                duration: 2,
                onClose: 'close',
                icon: <a-icon type="smile" style="color: #108ee9" />
                })
            }
        }
    }
</script>

<style>
</style>
