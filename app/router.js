'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller, jwt } = app;
  router.get('/', controller.home.index);
  router.resources('user', '/api/user', jwt, controller.user)
  router.post('/api/login', controller.user.login)
  router.post('/api/registe', controller.user.registe)

  router.post('/api/upload', controller.upload.upload)
  
  router.resources('types','/api/types',controller.types)
};
