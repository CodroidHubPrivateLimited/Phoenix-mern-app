const express = require('express')
const app = express()
const ConnectDb = require("./01-database/connectDb")
const port = 

ConnectDb();

const adminUserRoutes = require("./04-routes/auth/adminUserRoutes")
app.use('/',adminUserRoutes)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
