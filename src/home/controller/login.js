'use strict';

import Base from './base.js';

export default class extends Base {
  indexAction(){
    //auto render template file login_index.html
    this.assign("title","用户登陆");
    return this.display();
  }
  async dologinAction(){
    let data = this.post();
    let md5Pas = await think.md5(data.password);
    let lname = await data.email;
    let result = await this.model("user").findOne("user",{name:lname});
    let info = {
      name:lname,
      password:md5Pas
    }
    if(lname===result.name && md5Pas===result.pwd){
      await this.session("userInfo",info);
      return this.json({
        status:1,
        msg:"登录成功！"
      });
    }else{
      return this.json({
        status:0,
        msg:"用户名或密码错误！"
      });
    }
  }
}