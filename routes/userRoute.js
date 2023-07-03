const express = require('express')
const { signin, signup } = require('../controllers/userController')
const userRoute = express.Router()



userRoute.post('/signup',signup)
userRoute.post('/signin',signin)


module.exports = userRoute