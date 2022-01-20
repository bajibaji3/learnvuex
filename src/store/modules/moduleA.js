export default {
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