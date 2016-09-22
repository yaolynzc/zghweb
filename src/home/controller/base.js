'use strict';

export default class extends think.controller.base {

  /**
   * 判断是否登录
   * @returns {boolean}
  */
  async __before(){
    // csrf 防止模拟提交
    let csrf=await this.session("__CSRF__");
    this.assign("csrf",csrf);

    //获取登录状态
    this.is_login = await this.islogin();
  }
  
  async islogin() {
      //判断是否登录
      let user = await this.session('userInfo');
      let res = think.isEmpty(user) ? false : user;
      return res;
  }
  
}