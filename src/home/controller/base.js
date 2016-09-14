'use strict';

export default class extends think.controller.base {

  /**
   * 判断是否登录
   * @returns {boolean}
  */
  async islogin() {
      //判断是否登录
      let user = await this.session('userInfo');
      let res = think.isEmpty(user) ? false : user.name;
      return res;
  }
  
}