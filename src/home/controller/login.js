'use strict';

import Base from './base.js';

export default class extends Base {
  async indexAction(){
    //auto render template file login_index.html
    this.assign("title","用户登陆");
    return this.display();
  }
  async logoutAction(){
    //用户注销
    await this.session("userInfo","");
    return this.redirect("/");
  }
  //用户重定向
  async redirectAction(){
    return this.display();
  }
  async dologinAction(){
    let data = this.post();
    let md5Pas = await think.md5(data.password);
    let lname = await data.username;
    // console.log(md5Pas + "_" + lname);
    let result = await this.model("user").findOne("user",{id:lname});
    let info = {
      name:lname,
      password:md5Pas
    }
    if(lname===result.id && md5Pas===result.pwd){
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