const app = require('express')()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

mongoose.connect('mongodb://user:password2020@ds147487.mlab.com:47487/baza-baza-db', {useNewUrlParser: true, useUnifiedTopology: true});

const Schema = mongoose.Schema;


const blogSchema = new Schema({
  title:  String,
  author: String,
  body: String,
  comments: [{ body: String, date: Date }],
  date: { type: Date, default: Date.now },
});

var Blog = mongoose.model('Blog', blogSchema);


const port = 3000

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/posts', function (req, res) {
  Blog.find((err, response) => res.send(response))
})

app.post('/posts', function (req, res) {
  const {title, body, author} = req.body
  Blog.create({title, body, author}, function (err, post) {
    res.send(post);
  })
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))