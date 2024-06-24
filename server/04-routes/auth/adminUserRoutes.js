const Express = require('express')
const router = Express.Router()

const {CreateAdminUser} = require("../../05-controllers/auth/adminUserController")

router.post("/admin-signup", CreateAdminUser)

module.exports = router