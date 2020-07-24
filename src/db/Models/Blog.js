const mongoose = require('../index')

const Schema = mongoose.Schema;

const blogSchema = new Schema({
  title:  String,
  author: String,
  body: String,
  comments: [{ body: String, date: Date }],
  date: { type: Date, default: Date.now },
});


module.exports = mongoose.model('Blog', blogSchema)

