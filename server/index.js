const express = require('express')
// const mongoose = require('mongoose')
const connectDB = require("./01-database/connectDB")
// const { default: ConnectDB } = require('./01-database/connectDB')
const app = express()
const port = 8000
ConnectDB()

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})