<template>
      <div class="todo-footer">
        <label>
          <input type="checkbox" v-model="selectAllFlag"/>
        </label>
        <span>
          <span>已完成{{calComplete}}</span> / 全部{{todoList.length}}
        </span>
        <button class="btn btn-danger">清除已完成任务</button>
      </div>
</template>

<script>
export default {
    props: {
        todoList: Array,
        deleteCheckedItems: Function,
        selectAllItems: Function,
    },
    computed: {
        calComplete(){
            return this.todoList.reduce((preTotal,todo) => preTotal + (todo.flag?1:0),0);
        },
        selectAllFlag() {
            if(this.todoList.length === 0)
                return false;
            return this.todoList.length === this.calComplete;
        }
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
