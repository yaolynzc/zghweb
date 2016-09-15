export default {
  session_name:"__CSRF__",  //Token值存在session的名字
  form_name:"__CSRF__",     //CSRF字段值，从该字段获取值校验
  errno:400,                //错误号
  errmsg:"token error"      //错误信息
}