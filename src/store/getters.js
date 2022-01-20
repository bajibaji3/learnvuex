export default {
  powerCounter(state, getters) {
    return (count) => {
      console.log(count);
      //getters能拿到getters对象
      console.log(getters);
      return state.counter * state.counter;
    }
  }
}