require('dotenv').config()
const express = require('express')
const session = require('express-session')
const massive = require('massive')
const {SERVER_PORT} = process.env

const app = express()

//middleware
app.use(express.json())


app.listen(SERVER_PORT, ()=> console.log(`listening on port ${SERVER_PORT}`))