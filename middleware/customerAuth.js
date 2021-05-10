const jwt = require('jsonwebtoken')
const Customer = require('../models/Customer')
const ErrorResponse = require('../utils/errorResponse')

exports.protect = async(req, res, next) => {
    let token;

    if(req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
        token = req.headers.authorization.split(' ')[1]
    }

    if(!token) {
        return next(new ErrorResponse('Not authorized to access this route', 401))
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)

        const customer = await Customer.findById(decoded.id)

        if(!customer) {
            return next(new ErrorResponse('No customer found with this id', 404))
        }

        req.customer = customer
        next()
    } catch (error) {
        return next(new ErrorResponse('Not authorized to access this route', 401))
    }
}