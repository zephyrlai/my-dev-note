<template>
    <div>
         <p>当前数字：{{$store.state.num}}，是{{evenOrOdd}}</p>
         <p></p>
         <button @click='myClick'>+1</button>
    </div>
</template>

<script>
    export default{
        methods: {
            myClick() {
                this.$store.dispatch('increase')
            }
        },
        computed: {
          evenOrOdd() {
            return this.$store.getters.evenOrOdd
          }
        },
    }
</script>

<style>
</style>
