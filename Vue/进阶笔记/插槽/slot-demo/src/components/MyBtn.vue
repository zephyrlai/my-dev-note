<template>
  <button class='my-btn'>
      <slot>default</slot>
  </button>
</template>

<script>
export default {

}
</script>

<style>
  .my-btn {
    background-color: #ccc;
    width:200px;
    height: 100px;
    font-size: 20px;
  }
</style>