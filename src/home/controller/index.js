'use strict';

import Base from './base.js';

export default class extends Base {
  /**
   * index action
   * @return {Promise} []
   */
  async indexAction(){

    this.assign("title","知果汇首页");

    //判断是否登陆
    if(this.is_login){
      this.assign("uname",this.is_login.name);
    }
    return this.display();
  }
}