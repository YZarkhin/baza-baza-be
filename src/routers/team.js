var express = require('express')
var router = express.Router()
var Team = require('../db/Models/Team')

router.get('/', function (req, res) {
  Team.find((err, response) => res.send(response))
})
// define the about route
router.post('/', function (req, res) {
  const {
    name,
    position,
    bio,
    picture
  } = req.body
  Team.create({
    name,
    position,
    bio,
    picture
  }, function (err, team) {
    res.send(team);
  })
})

router.put('/:id', function (req, res) {
  const {
    name,
    position,
    bio,
    picture
  } = req.body
  Team.findByIdAndUpdate(req.params.id, {
    name,
    position,
    bio,
    picture
  }, {new: true} ,function (err, team) {
    res.send(team);
  })
})


router.delete('/:id', function (req, res) {
  Team.findByIdAndDelete(id, function (err) {
    res.send('Deleted')
  })
})

module.exports = router
