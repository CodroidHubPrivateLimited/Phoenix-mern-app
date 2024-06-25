
const mongoose = require('mongoose')
async function ConnectDb  () {
    try{
        await mongoose.connect("mongodb://127.0.0.1:27017/Meow");
        console.log('connected to',mongoose.connection.host)
    } catch(err){
console.log("Db connection error",err)}
}

module.exports=ConnectDb