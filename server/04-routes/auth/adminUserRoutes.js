const express = require('express')
const router = express.Router()


const {CreateAdminUser} = require('../../05-controllers/auth/adminUserController')
router.post("/admin-signup",CreateAdminUser)

module.exports = router
