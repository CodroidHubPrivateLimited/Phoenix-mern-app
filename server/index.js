const express = require('express')
const app = express()
const ConnectDb = require("./01-database/connectDb")
const cors = require('cors')
const port = 8000


const adminUserRoutes = require("./04-routes/auth/adminUserRoutes")

ConnectDb()
app.use(express.json())
app.use(cors())

app.use('/', adminUserRoutes)


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})