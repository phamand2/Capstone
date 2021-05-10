const Customer = require('../models/Customer')
const Admin = require('../models/Admin')
const StaffMember = require('../models/StaffMember')
const ErrorResponse = require('../utils/errorResponse')

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
        next(error)
    }
}

exports.customerLogin = async (req, res, next) => {
    const { email, password } = req.body

    if(!email || !password) {
        return next(new ErrorResponse('Please provide an email and password', 400))
    }

    try {
        const customer = await Customer.findOne({ email }).select('+password')
        if(!customer) {
            return next(new ErrorResponse('Invalid Credentials', 401))
        }
            const isMatch = await customer.matchPasswords(password)

            if(!isMatch) {
                return next(new ErrorResponse('Invalid Credentials', 401))
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

exports.adminLogin = async (req, res, next) => {
    const { email, password } = req.body

    if(!email || !password) {
        return next(new ErrorResponse('Please provide an email and password', 400))
    }

    try {
        const admin = await Admin.findOne({ email }).select('+password')
        if(!admin) {
            return next(new ErrorResponse('Invalid Credentials', 401))
        }
            const isMatch = await admin.matchPasswords(password)

            if(!isMatch) {
                return next(new ErrorResponse('Invalid Credentials', 401))
            }

            res.status(200).json({
                success: true,
                token: 'gibberish'
            })

    } catch (error) {
        res.status(500).json({ success: false, error: error.message })
    }
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

exports.staffLogin = async (req, res, next) => {
    const { email, password } = req.body

    if(!email || !password) {
        return next(new ErrorResponse('Please provide an email and password', 400))
    }

    try {
        const staffMember = await StaffMember.findOne({ email }).select('+password')
        if(!staffMember) {
            return next(new ErrorResponse('Invalid Credentials', 401))
        }
            const isMatch = await staffMember.matchPasswords(password)

            if(!isMatch) {
                return next(new ErrorResponse('Invalid Credentials', 401))
            }

            res.status(200).json({
                success: true,
                token: 'gibberish'
            })
    } catch (error) {
        res.status(500).json({ success: false, error: error.message })
    }
}

exports.staffForgotPassword = (req, res, next) => {
    res.send('staff forgot password')
}

exports.staffResetPassword = (req, res, next) => {
    res.send('staff reset password')
}