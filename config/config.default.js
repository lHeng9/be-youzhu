/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1587013031196_7721';
  config.mongoose = {
    client: {
      url: 'mongodb://127.0.0.1/youzhu',
      options: {
        server: {
          poolSize: 40
        }
      }
    }
  }
  config.errorHandler = {
    match: '/api'
  }
  config.cors = {
    origin: '*',//匹配规则  域名+端口  *则为全匹配
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH'
  };
  config.security = {
    csrf: {
      enable: false,
      ignoreJSON: true
    },
    domainWhiteList: ['http://localhost:3000']
  }
  config.multipart = {
    mode: 'file',
    whitelist: [// images
      '.jpg', '.jpeg', // image/jpeg
      '.png', // image/png, image/x-png
      '.gif', // image/gif
      '.bmp', // image/bmp
      '.wbmp', // image/vnd.wap.wbmp
      '.webp',
      '.tif',
      '.psd',],
    tmpdir: 'app/public/img'
  }




  // add your middleware config here
  config.middleware = [];

  const userConfig = {
    // myAppName: 'egg',

  };

  return {
    ...config,
    ...userConfig,
  };
};
