import Vue from 'vue'
import Vuex from 'vuex'

//1、安装插件
Vue.use(Vuex)

const moduleA = {
  state: {
    name: '张3'
  },
  mutations: {
    updateName(state, payload) {
      state.name = payload;
    }
  },
  actions: {
    aUpdateName(context) {
      setTimeout(() => {
        context.commit('updateName', '王5');
      }, 1000);
    }
  },
  getters: {
    fullName(state) {
      return state.name + '111111';
    },
    fullName2(state, getters) {
      return getters.fullName + '222222';
    },
    fullName3(state, getters, rootState) {
      return getters.fullName + '222222' + rootState.counter;
    },
  },
}

//2、创建对象
const store = new Vuex.Store({
  state: {
    counter: 100,
    info: {
      name: '张三',
      age: 18,
    }
  },
  mutations: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    incrementCount(state, count) {
      state.counter += count;
    },
    // incrementCount(state, payload) {
    //   console.log(payload);
    //   state.counter += payload.count;
    // },
    updateInfo(state) {
      //state里面的数据要提前初始化好之后对它改变才能做到响应式，比如说下面对info里面已经初始化好的name进行修改
      state.info.name = '李四';
      //而如果要新添加一个属性就不能实现响应式，比如下面在info里面添加一个address属性，因为address没有初始化
      // state.info['address'] = '888888888';
      //使用Vue.set就可以实现响应式
      Vue.set(state.info, 'address', '66666666');
      //删除某个属性使用js原生方法也不能做到响应式
      delete state.info.age;
      //使用Vue.delete可以做到响应式
      Vue.delete(state.info, 'age');
    }
  },
  actions: {
    //异步操作要放在actions里面，而不能放在mutations里面
    // aUpdateInfo(context, payload) {
    //   //context:上下文，相当于state对像
    //   setTimeout(() => {
    //     console.log(payload.message);
    //     context.commit('updateInfo');
    //     payload.success();
    //   }, 1000)
    // }

    aUpdateInfo(context, payload) {
      //context:上下文，相当于store对像
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          console.log(payload);
          context.commit('updateInfo');
          resolve('修改成功');
          reject('修改失败');
        }, 1000)
      })
    }

  },
  //类似于组件内的计算属性
  getters: {
    powerCounter(state, getters) {
      return (count) => {
        console.log(count);
        //getters能拿到getters对象
        console.log(getters);
        return state.counter * state.counter;
      }
    }
  },
  modules: {
    a: moduleA
  }
})

//3、导出store
export default store