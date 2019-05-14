<template>
      <div class="todo-footer">
          <input type="checkbox" v-model="selectAllFlag" /> 
          <span>已完成{{completedSize}} / 全部{{totalSize}}</span>
          <button class="btn btn-danger" v-show="completedSize>0" @click='deleteCheckedItems'>清除已完成任务</button>
      </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

export default {
  computed: {
    ...mapGetters(['completedSize','totalSize']),
    selectAllFlag: {// 注意不能与getter中对应的属性同名
      get(){
        return this.$store.getters.selectAll;
      },
      set(flag){
        this.$store.dispatch('selectAll',flag);
      }
    }
  },
  methods: {
      ...mapActions(['deleteCheckedItems'])
  },
}
</script>

<style>
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}

</style>
