const express = require('express')
const router = express.Router()
const {
    customerRegister, customerLogin, customerForgotPassword, customerResetPassword, adminRegister, adminLogin, adminForgotPassword, adminResetPassword, staffRegister, staffLogin, staffForgotPassword, staffResetPassword
} = require('../controllers/authController')



router.route('/customerRegister').post(customerRegister)

router.route('/customerLogin').post(customerLogin)

router.route('/customer-forgot-password').post(customerForgotPassword)

router.route('/customer-reset-password/:resetToken').put(customerResetPassword)

router.route('/adminRegister').post(adminRegister)

router.route('/adminLogin').post(adminLogin)

router.route('/adminForgotPassword').post(adminForgotPassword)

router.route('/adminResetPassword/:resetToken').put(adminResetPassword)

router.route('/staffRegister').post(staffRegister)

router.route('/staffLogin').post(staffLogin)

router.route('/staffForgotPassword').post(staffForgotPassword)

router.route('/staffResetPassword/:resetToken').put(staffResetPassword)



module.exports = router