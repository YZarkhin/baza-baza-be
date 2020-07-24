const mongoose = require('../index')

const Schema = mongoose.Schema;

const projectSchema = new Schema({
  name: String,
  client: String,
  bio: String,
  picture: String,
  country: String,
});

module.exports = mongoose.model('Project', projectSchema);