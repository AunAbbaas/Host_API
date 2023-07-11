const express = require('express')
const { monitoring } = require('../controllers/monitoring.js')
const monitorRoute = express.Router()


monitorRoute.get('/',monitoring)

module.exports = monitorRoute