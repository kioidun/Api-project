const express = require("express")
const tribunalservices = require('./../controllers/tribunal.services')

const router = express.Router()

router.post('/',tribunalservices.save)
  router.get('/:id',tribunalservices.show)
  router.get('/',tribunalservices.index)

module.exports = router