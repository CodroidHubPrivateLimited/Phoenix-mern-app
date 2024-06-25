const express = require('express')
const router = express.Router()
const {JakeCOntroller} = require('../../05-controller/auth/JakeUserContoller')

router.post("/log",JakeCOntroller)

module.exports = router