const mongoose = require('mongoose')

mongoose.connect('mongodb://user:password2020@ds147487.mlab.com:47487/baza-baza-db', {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });

module.exports = mongoose;