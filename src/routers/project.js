var express = require('express')
var router = express.Router()
var Project = require('../db/Models/Project')

router.get('/', function (req, res) {
  Project.find((err, response) => res.send(response))
})
// define the about route
router.post('/', function (req, res) {
  const {
    name,
    client,
    bio,
    picture,
    country
  } = req.body
  Project.create({
    name,
    client,
    bio,
    picture,
    country
  }, function (err, project) {
    res.send(project);
  })
})

router.put('/:id', function (req, res) {
  const {
    name,
    client,
    bio,
    picture,
    country
  } = req.body
  Project.findByIdAndUpdate(req.params.id, {
    name,
    client,
    bio,
    picture,
    country
  }, {new: true} ,function (err, project) {
    res.send(project);
  })
})


router.delete('/:id', function (req, res) {
  Project.findByIdAndDelete(id, function (err) {
    res.send('Deleted')
  })
})

module.exports = router
