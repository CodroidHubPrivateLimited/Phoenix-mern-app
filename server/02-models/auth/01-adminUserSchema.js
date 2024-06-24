const mongoose = require('mongoose');

const adminUserSchema = new mongoose.Schema(
    
    {
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        phoneNumber : {
            type: String,
            required: true,
        },
        userRole: {
            type: Boolean,
            required: true,
            default: false,
        },
        createdAt:{
            type: Date,
            default: Date.now
        },
        updateAt:{
            type: Date,
            default: Date.now
        },
    
}
);

const AdminUser = mongoose.model('AdminUser', adminUserSchema);
module.exports =  {AdminUser}  ;