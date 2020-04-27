module.exports = app => {
  const mongoose = app.mongoose
  const Schema = mongoose.Schema

  const commoditySchema = new Schema({
    cover: String,
    desc: String,
    price: String,
    type: [String],
    brandId: Number,
    code : String
  })

  return mongoose.model('Commodity', commoditySchema, 'commodity')
}