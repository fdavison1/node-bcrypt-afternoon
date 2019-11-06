require('dotenv').config()
const express = require('express')
const session = require('express-session')
const massive = require('massive')
const {SERVER_PORT, SESSION_SECRET, CONNECTION_STRING} = process.env
const authCTRL = require('./controllers/authController')

const app = express()

//middleware
app.use(express.json())
app.use(session({
    secret: SESSION_SECRET,
    resave: true, 
    saveUninitialized: false
}))

//endpoints
app.post('/auth/register', authCTRL.register)
app.post('/auth/login', authCTRL.login)
app.get('/auth/logout', authCTRL.logout)


//massive
massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    app.listen(SERVER_PORT, ()=> console.log(`listening on port ${SERVER_PORT}`))
})


