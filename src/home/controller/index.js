'use strict';

import Base from './base.js';

export default class extends Base {
  /**
   * index action
   * @return {Promise} []
   */
  async indexAction(){

    this.assign("title","知果汇");
    //判断用户是否登录
    let is_login = await this.islogin();
    // console.log(is_login);
    if(is_login){
      this.assign("uname",is_login.name);
    }
    return this.display();
  }
}