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
      port: '3066',
      database: 'zgh',
      user: 'root',
      password: 'Leador123!@#',
      prefix: 'think_',
      encoding: 'utf8'
    },
    mongo: {

    }
  }
};