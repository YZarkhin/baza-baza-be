const mongoose = require('../index')

const Schema = mongoose.Schema;

const teamSchema = new Schema({
  name: String,
  position: String,
  bio: String,
  picture: String,
});

module.exports = mongoose.model('Team', teamSchema);