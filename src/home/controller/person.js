'use strict';

import Base from './base.js';

export default class extends Base {
  
  async indexAction(){
    let is_login = await this.islogin();
    if(is_login){
      this.assign("uname",this.is_login);
      return this.display();
    }else{
      return this.redirect('/login');
    }
  }
}
