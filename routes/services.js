const express = require("express")
const servicerequest = require('./../controllers/service.request')

const router = express.Router()

router.post('/',servicerequest.save)
 router.get('/:id',servicerequest.show)
 router.get('/',servicerequest.index)
 router.patch('/:id',servicerequest.update)
 router.delete('/:id',servicerequest.destroy)

module.exports = router