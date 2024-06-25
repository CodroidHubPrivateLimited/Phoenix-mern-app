const Express = require('express')
const router = Express.Router()

const { CreateAdminUser, AdminUserLogin } = require("../../05-controllers/auth/adminUserController")

router.post("/admin-signup", CreateAdminUser)
router.post("/admin-login", AdminUserLogin)

module.exports = router