<template>
    <div>
        <img src='./assets/logo.png'/>
        <!-- 3. 使用标签 -->
        <HelloWorld/>
    </div>
</template>

<script>
// 1. 引入组件
import HelloWorld from './components/HelloWorld'
export default {
  // 2. 将组件映射为标签
  components: {
    HelloWorld
  }
}
</script>

<style lang="">
</style>
