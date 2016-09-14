'use strict';

export default class extends think.controller.base {
  /**
   * some base method in here
   */
  async __before(){
    
  }

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