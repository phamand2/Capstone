const express = require('express')
const router = express.Router()
const { getCustomerData } = require('../controllers/customerController')
const { authenticate } = require('../middleware/customerAuth')

router.route('/profile').get(authenticate, getCustomerData)

module.exports = router