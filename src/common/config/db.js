'use strict';
/**
 * db config
 * @type {Object}
 */
export default {
  type: 'mysql',
  adapter: {
    mysql: {
      host: '220.249.123.36',
      port: '3306',
      database: 'zgh',
      user: 'root',
      password: 'Leador123!@#',
      prefix: 'tb_',
      encoding: 'utf8'
    },
    mongo: {

    }
  }
};