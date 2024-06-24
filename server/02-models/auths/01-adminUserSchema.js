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