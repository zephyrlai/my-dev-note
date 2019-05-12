import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

// 状态对象(包含初始化状态)
const state={
    num: 0
};

// 包含多个更新state函数的对象
const mutations={
    increaseMutations(state) {
        state.num++;
    }
};

// 包含多个对应时间的回调函数对象
const actions={
    increase({commit}) {
        commit('increaseMutations');
    }
};

// 包含多个getter计算属性函数的对象
const getters={
    evenOrOdd(state){
        return state.num%2===1?'奇数':'偶数'
    }
};

export default new Vuex.Store(
    state,  // 状态对象
    mutations,  // 包含多个更新state函数的对象
    actions,    //  包含多个事件对应的毁掉函数
    getters //  包含多个getter计算属性函数的对象
);