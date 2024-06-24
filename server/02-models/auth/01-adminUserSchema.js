const mongoose = require("mongoose")

const adminUserSchema = ({

    email: {
        type: String
    },

    password: {
        type: String
    },

    phoneNUmber: {
        type: String
    },

    userRole: {
        type: String
    },

    createdAt: { type: Date, default: Date.now },

    updatedAt: { type: Date, default: Date.now }

})

const AdminUser = mongoose.model("AdminUser", adminUserSchema)

module.exports = AdminUser