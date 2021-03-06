'use strict';

import Base from './base.js';

export default class extends Base {
  
  async indexAction(){
    this.assign("title","个人中心");
    let is_login = await this.islogin();
    if(is_login){
      this.assign("uname",is_login.name);
      return this.display();
    }else{
      return this.redirect('/login');
    }
  }
}
