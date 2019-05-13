<template>
    <div>
         <p>当前数字：{{num}}，是{{evenOrOdd}}</p>
         <p></p>
         <button @click='myClick'>+1</button>
    </div>
</template>

<script>
  import {mapState,mapActions,mapGetters} from 'vuex'
    export default{
      computed: {
        ...mapGetters(['evenOrOdd']),
        ...mapState(['num']),
      },
      methods: {
        ...mapActions({myClick:'increase'})
      }
        /* methods: {
            myClick() {
                this.$store.dispatch('increase')
            }
        },
        computed: {
          evenOrOdd() {
            return this.$store.getters.evenOrOdd
          }
        }, */
    }
</script>

<style>
</style>
