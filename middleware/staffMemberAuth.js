const jwt = require('jsonwebtoken')
const staffMember = require('../models/StaffMember')
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

        const staffMember = await StaffMember.findById(decoded.id)

        if(!staffMember) {
            return next(new ErrorResponse('No staff member found with this id', 404))
        }

        req.admin = admin
        next()
    } catch (error) {
        return next(new ErrorResponse('Not authorized to access this route', 401))
    }
}