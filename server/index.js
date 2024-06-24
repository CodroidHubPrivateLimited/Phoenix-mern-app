const express = require('express')
const mongoose= require("mongoose")
const app = express()
const ConnectDb = require("./01-database/connectDb")
const port = 8000
const ConnecdDb = require("./01-database/connectDb")
ConnecdDb()
console,log(Date.now())
ConnectDb()

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})