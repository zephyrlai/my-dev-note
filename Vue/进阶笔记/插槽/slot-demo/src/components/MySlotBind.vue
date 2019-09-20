<template>
  <button class='my-btn'>
        <slot v-bind:subUser='subUser'>
          {{subUser.name}}
        </slot>
  </button> 
</template>

<script>
export default {
    data() {
        return {
            subUser:{
                name:"哈哈 sub user",
                age:22
            }
        }
    },
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