const Customer = require('../models/Customer')
const Admin = require('../models/Admin')
const StaffMember = require('../models/StaffMember')

exports.customerRegister = async(req, res, next) => {
    const {username, email, password} = req.body;

    try {
        const customer = await Customer.create({
            username, email, password
        })
        res.status(201).json({
            success: true,
            customer
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        })
    }
}

exports.customerLogin = (req, res, next) => {
    res.send('customer login')
}

exports.customerForgotPassword = (req, res, next) => {
    res.send('customer forgot password')
}

exports.customerResetPassword = (req, res, next) => {
    res.send('customer reset password')
}

exports.adminRegister = (req, res, next) => {
    res.send('admin register')
}

exports.adminLogin = (req, res, next) => {
    res.send('admin login')
}

exports.adminForgotPassword = (req, res, next) => {
    res.send('admin forgot password')
}

exports.adminResetPassword = (req, res, next) => {
    res.send('admin Reset Password')
}

exports.staffRegister = (req, res, next) => {
    res.send('staff register')
}

exports.staffLogin = (req, res, next) => {
    res.send('staff login')
}

exports.staffForgotPassword = (req, res, next) => {
    res.send('staff forgot password')
}

exports.staffResetPassword = (req, res, next) => {
    res.send('staff reset password')
}