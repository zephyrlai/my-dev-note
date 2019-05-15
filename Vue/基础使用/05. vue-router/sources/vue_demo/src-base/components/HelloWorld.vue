<!-- 3要素：html、js、css -->
<template>
  <div>
    <p>{{msg}}</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'hello world!'
    }
  }
}
</script>

<style>
  p{
    color:#bbb;
    font-size:30px;
  }
</style>
