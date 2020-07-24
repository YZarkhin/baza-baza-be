const mongoose = require('../index')

const Schema = mongoose.Schema;

const usersSchema = new Schema({
  username: String,
  password: String,
  picture: String,
});

module.exports = mongoose.model('Users', usersSchema);