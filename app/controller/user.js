const Controller = require('egg').Controller

class UserController extends Controller {
  async index(ctx) {
    const result = await ctx.service.user.findUser()
    ctx.body = result
  }
  async login() {
    const { ctx, app } = this
    const data = ctx.request.body

    //验证是否登陆成功
    const res = await ctx.service.user.findUser(data)
    if (!res.length) {
      ctx.body = {
        success: 0, msg: 'error'
      }
    } else {
      const token = app.jwt.sign({
        username: data.username
      }, app.config.jwt.secret)

      ctx.body = {
        token, success: 1, msg: ''
      }
    }
  }
  async registe() {
    const { ctx, app } = this
    const data = ctx.request.body
    console.log(data)
    const res = await ctx.service.user.insertUser(data)
    console.log('RRRRR', res)
    if (!res.length) {
      ctx.body = {
        success: 0, msg: 'error'
      }
    } else {
      ctx.body = {
        success: 1,
        msg: 'succ'
      }
    }

  }
}

module.exports = UserController