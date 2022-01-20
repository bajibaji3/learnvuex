export default {
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

}