const mongoose = require('mongoose')

const JakeUserSchema = new mongoose.Schema(
    {
        msg:{
            type: String,
            required: true
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

const JakeSchema = mongoose.model('JakeSchema',JakeUserSchema)
module.exports = {JakeSchema}