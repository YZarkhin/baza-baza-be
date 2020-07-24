var express = require('express')
var router = express.Router()
var Blog = require('../db/Models/Blog')

router.get('/', function (req, res) {
  Blog.find((err, response) => res.send(response))
})
// define the about route
router.post('/', function (req, res) {
  const {title, body, author} = req.body
  Blog.create({title, body, author}, function (err, post) {
    res.send(post);
  })
})

router.put('/:id', function (req, res) {
  const {title, body, author} = req.body
  Blog.findByIdAndUpdate(req.params.id, {title, body, author}, {new: true} ,function (err, post) {
    res.send(post);
  })
})


router.delete('/:id', function (req, res) {
  Blog.findByIdAndDelete(id, function (err) {
    res.send('Deleted')
  })
})

module.exports = router
