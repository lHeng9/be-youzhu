const Controller = require('egg').Controller

class TypesController extends Controller{
  async create() {
    const { ctx, app } = this
    const data = ctx.request.body
    const res = await ctx.service.types.insertType(data)

    console.log(res)
    if (!res.length) {
      ctx.body = {
        success: 0,
        msg: 'error'
      }
    }else {
      ctx.body = {
        success: 1,
        msg:'succ'
      }
    }
  }

  async index() {
    const { ctx, app } = this
    const res = await ctx.service.types.findTypes()
    console.log(res.length)
    if (!res.length) {
      ctx.body = {
        
        success: 0,
        msg: 'error'
      }
    }else {
      ctx.body = {
        data:res,
        success: 1,
        msg:'succ'
      }
    }
  }
}

module.exports = TypesController