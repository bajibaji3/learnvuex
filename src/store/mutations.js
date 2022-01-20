import Vue from "vue";

export default {
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
}