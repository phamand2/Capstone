const express = require('express')
const router = express.Router()
const {getStaffMemberData} = require('../controllers/staffMemberController')
const { authenticate } = require('../middleware/staffMemberAuth')

router.route('/view-orders').get(authenticate, getStaffMemberData)

module.exports = router