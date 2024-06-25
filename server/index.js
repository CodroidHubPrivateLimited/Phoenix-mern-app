const express = require('express'); // importing express library
const mongoose = require('mongoose');
const cors = require('cors');
const app = express()
const ConnectDb = require("./01-database/connectDb.js")
const port = 8000



app.use(express.json());
app.use(cors());

const adminUserRoutes = require('./04-routes/auth/adminUserRoutes.js')
const JakeUserRoutes = require('./04-routes/auth/JakeUserRoutes.js')
ConnectDb()
app.use('/', adminUserRoutes)
app.use('/jake',JakeUserRoutes)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})