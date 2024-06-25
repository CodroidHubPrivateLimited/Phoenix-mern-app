const mongoose = require('mongoose');

const adminUserSchema = ({
    email:{
        type: String,
        required: true
    },
    pasword:{
        type: String,
        required: true
    },
    phoneNumber:{
        type: String
    },
    userRole:{
        type: String
    },
    createdAt:{
        type: Date,
        default: Date.now
    },
    updatedAt:{
        type: Date,
        default: Date.now
    }

    });

    const AdmiUser = mongoose.model('AdminUser',adminUserSchema);
    module.exports = AdmiUser       