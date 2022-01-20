<template>
  <div id="app">
    <h2>{{ counter }}</h2>
    <h2>{{ info }}</h2>
    <h2>{{ $store.state.a.name }}</h2>
    <h2>{{ fullName }}</h2>
    <h2>{{ $store.getters.fullName2 }}</h2>
    <h2>{{ $store.getters.fullName3 }}</h2>
    <button @click="undateName">更新模块里state中的name</button>
    <button @click="aUpdateName">异步更新模块里state中的name</button>
    <h2>{{ $store.getters.powerCounter(6) }}</h2>
    <button @click="add">+</button>
    <button @click="sub">-</button>
    <button @click="addCount(5)">+5</button>
    <button @click="addCount(10)">+10</button>
    <button @click="undateInfo">更新info</button>
    <HellloVuex></HellloVuex>
  </div>
</template>

<script>
import HellloVuex from "@/components/HellloVuex";
import {mapState, mapGetters} from 'vuex'

export default {
  name: 'App',
  components: {
    HellloVuex
  },
  computed: {
    //优化写法，可以避免重复写大量的$store.state.xxx和$store.getters
    //第一种写法
    ...mapState({counter: 'counter', info: 'info'}),
    //第二种写法
    ...mapState(['counter', 'info']),
    ...mapGetters(['fullName']),
  },
  methods: {
    add() {
      this.$store.commit('increment');
    },
    sub() {
      this.$store.commit('decrement');
    },
    addCount(count) {
      this.$store.commit('incrementCount', count)
    },
    //mutations的不同提交风格
    // addCount(count) {
    //   this.$store.commit({
    //     type: 'incrementCount',
    //     count
    //   })
    // },
    undateInfo() {
      // this.$store.commit('updateInfo');
      // this.$store.dispatch('aUpdateInfo', {
      //   message: '我是携带的参数',
      //   success: () => {
      //     //成功后的回调
      //     console.log('修改已经完成了');
      //   },
      // });
      //上面这种写法不够优雅，传递的参数和成功的回调放在了一起
      this.$store
          .dispatch('aUpdateInfo', '我是携带的参数')
          .then(res => {
            console.log(res);
          }).catch(err => {
            console.log(err);
          });
    },
    undateName() {
      this.$store.commit('updateName', '李4');
    },
    aUpdateName() {
      this.$store.dispatch('aUpdateName');
    },
  }
}
</script>

<style>

</style>
