const mongoose = require("mongoose")

const adminUserSchema = ({
    email: {
    type: String
    },
    password: {
    type: String
    },
    phoneNumber: {
    type: String
    },
    userRole: {
    type: String
    },
    createAt:{
        type: Date
    }
})
const AdminUser = mongoose.model("AdminUser", adminUserSchema)
module.exports = AdminUser