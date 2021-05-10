const Customer = require('../models/Customer')
const Admin = require('../models/Admin')
const StaffMember = require('../models/StaffMember')

exports.customerRegister = async (req, res, next) => {
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

exports.customerLogin = async (req, res, next) => {
    const { email, password } = req.body

    if(!email || !password) {
        res.status(400).json({ success: false, error: 'Please provide email and password'})
    }

    try {
        const customer = await Customer.findOne({ email }).select('+password')
        if(!customer) {
            res.status(404).json({ success: false, error: 'Invalid credentials' })
        }
            const isMatch = await customer.matchPasswords(password)

            if(!isMatch) {
                res.status(404).json({ success: false, error: 'Invalid credentials' })
            }

            res.status(200).json({
                success: true,
                token: 'gibberish'
            })

    } catch (error) {
        res.status(500).json({ success: false, error: error.message })
    }
}

exports.customerForgotPassword = (req, res, next) => {
    res.send('customer forgot password')
}

exports.customerResetPassword = (req, res, next) => {
    res.send('customer reset password')
}

exports.adminRegister = async (req, res, next) => {
    const {username, email, password} = req.body;

    try {
        const admin = await Admin.create({
            username, email, password
        })
        res.status(201).json({
            success: true,
            admin
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        })
    }
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

exports.staffRegister = async (req, res, next) => {
    const {username, email, password} = req.body;

    try {
        const staffMember = await StaffMember.create({
            username, email, password
        })
        res.status(201).json({
            success: true,
            staffMember
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        })
    }
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