'use strict';

import Base from './base.js';

export default class extends Base {
  /**
   * index action
   * @return {Promise} []
   */
  async indexAction(){
    //auto render template file index_index.html
    let uinfo=await this.session("userInfo");
    this.assign("loginname",uinfo.name);
    return this.display();
  }
}