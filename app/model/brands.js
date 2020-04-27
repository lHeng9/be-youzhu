module.exports = app => {
  const Schema = app.mongoose.Schema

  const brandSchema = new Schema({
    name: String,
    typesId:[Number]
  })

  return app.mongoose.model('Brands', brandSchema, 'brands')
}