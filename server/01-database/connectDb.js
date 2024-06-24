const mongoose = require('mongoose')

async function ConnectDB() {
    try {
        data = await mongoose.connect("mongodb://localhost:27017/Jake");
        if (data){
            console.log(`connected to ${mongoose.connection.host}`);
        }
        
    } catch (err) {
        console.log("Db Connection error", err);
    }
}

module.exports = ConnectDB