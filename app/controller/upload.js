const Controller = require('egg').Controller;
const fs = require('mz/fs');
const path = require('path')

class Upload extends Controller {
  async upload() {
    const { ctx } = this;
    const file = ctx.request.files[0];
    // 将app删除后为  /public/img/xxx
    const name = file.filepath.slice(3);
    ctx.body = {
      data: {
        url:name,
      },
      success: 1,
      msg:'succ'
    };
  }
};

module.exports = Upload