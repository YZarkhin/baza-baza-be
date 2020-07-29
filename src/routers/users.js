var express = require('express')
var router = express.Router()
var Users = require('../db/Models/Users')

router.get('/', function (req, res) {
  Users.find((err, response) => res.send(response))
})
// define the about route
router.post('/', function (req, res) {
  const {
    username,
    password,
    picture
  } = req.body
  Users.create({
    username,
    password,
    picture
  }, function (err, user) {
    res.send(user);
  })
})

router.put('/:id', function (req, res) {
  const {
    username,
    password,
    picture
  } = req.body
  Users.findByIdAndUpdate(req.params.id, {
    username,
    password,
    picture
  }, {new: true} ,function (err, user) {
    res.send(user);
  })
})


router.delete('/:id', function (req, res) {
  Users.findByIdAndDelete(req.params.id, function (err) {
    res.send('Deleted')
  })
})

module.exports = router
