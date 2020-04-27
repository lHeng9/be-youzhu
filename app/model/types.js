module.exports = app => {
  const Schema = app.mongoose.Schema

  const typeSchema = new Schema({
    id: Number,
    name: String,
    child: [{
      name: String,
      id: Number,
      child: [{
        name: String,
        id: Number,
      }]
    }]
  })
  return app.mongoose.model('Types', typeSchema, 'types')
}