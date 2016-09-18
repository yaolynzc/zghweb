'use strict'

import Base from './base.js'

export default class extends Base {
  indexAction(){
    this.assign("title","用户注册");
    return this.display();
  }
}