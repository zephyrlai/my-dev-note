<template>
  <div>
    <slot name='header'></slot>
    <!-- 默认插槽：任何没有被包裹在带有 v-slot 的 <template> 中的内容都会被视为默认插槽的内容。 -->
    <slot></slot>
    <slot name='footer'></slot>
  </div>

</template>

<script>
export default {

}
</script>

<style>
  .my-btn {
    background-color: #ccc;
    width:150px;
    height: 80px;
    font-size: 20px;
  }
</style>