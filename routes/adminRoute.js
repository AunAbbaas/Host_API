const express = require('express')
const { AdminSignup,AdminSignin } = require('../controllers/adminController.js')
const adminRoute = express.Router()



adminRoute.post('/Adminsignup',AdminSignup)
adminRoute.post('/Adminsignin',AdminSignin)


module.exports = adminRoute