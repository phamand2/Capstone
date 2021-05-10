const express = require('express')
const router = express.Router()
const {getAdminData} = require('../controllers/adminController')
const { authenticate } = require('../middleware/adminAuth')

router.route('/add-staff').get(authenticate, getAdminData)

module.exports = router