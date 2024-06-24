const mongoose = require('mongoose')

const ConnectDB =() => {
    try {
        mongoose.set('strictQuery', true);
        const data =  mongoose.connect( "mongodb://localhost:27017/phoenix-mern-app");
        if (data) console.log(`connected to MongoDB`)
      } catch (err) {
        console.log("Db Connection error", err)
      }
}

module.exports = ConnectDB