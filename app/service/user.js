const Service = require('egg').Service

class UserService extends Service {
  async findUser(data) {
    const result = await this.ctx.model.User.find(data)
    return result
  }

  async insertUser(data) {
    const res = await this.ctx.model.User.insertMany(data)
    return res
  }
}

module.exports = UserService