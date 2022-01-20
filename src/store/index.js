import Vue from 'vue'
import Vuex from 'vuex'
import mutations from "@/store/mutations";
import actions from "@/store/actions";
import getters from "@/store/getters";
import moduleA from "@/store/modules/moduleA";

//1、安装插件
Vue.use(Vuex)

const state = {
  counter: 100,
  info: {
    name: '张三',
    age: 18,
  }
}

//2、创建对象
const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters,//类似于组件内的计算属性
  modules: {
    a: moduleA
  }
})

//3、导出store
export default store