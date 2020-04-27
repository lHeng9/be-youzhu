const Service = require('egg').Service

class TypeService extends Service {
  async insertType(data) {
    const res = await this.ctx.model.Types.insertMany(data)
    return res
  }

  async findTypes() {
    const res = await this.ctx.model.Types.find({}, {_id:0,'child._id':0,'child.child._id':0})
    return res
  }
}

module.exports = TypeService