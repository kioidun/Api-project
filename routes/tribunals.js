const express = require("express")
const tribunals = require('./../controllers/tribunals')

const router = express.Router()

  router.post('/',tribunals.save)
  router.get('/:id',tribunals.show)
  router.get('/',tribunals.index)

module.exports = router