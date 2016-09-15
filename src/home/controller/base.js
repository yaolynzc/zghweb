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
  }
  
  async islogin() {
      //判断是否登录
      let user = await this.session('userInfo');
      let res = think.isEmpty(user) ? false : user;
      return res;
  }
  
}