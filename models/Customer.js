const bcrypt = require('bcryptjs')
const crypto = require('crypto')
const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')

const CustomerSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Please provide a username']
    },
    email: {
        type: String,
        required: [true, 'Please provide an email'],
        unique: true,
        match: [
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/, 'Please provide a valid email']
    },
    password: {
        type: String,
        required: [true, 'Please add a password'],
        minlength: 6,
        select: false
    },
    street: {
        type: String,
    },
    address: {
        type: String,
    },
    state: {
        type: String,
    },
    zip: {
        type: String
    },
    resetPasswordToken: String,
    resetPasswordExpire: Date,
})

CustomerSchema.pre('save', async function(next) {
    if(!this.isModified('password')) {
        next()
    }
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
    next();
})

CustomerSchema.methods.matchPasswords = async function(password) {
    return await bcrypt.compare(password, this.password)
}

CustomerSchema.methods.getSignedToken = function() {
    return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {expiresIn: process.env.JWT_EXPIRE})
}

CustomerSchema.methods.getResetPasswordToken = function() {
    const resetToken = crypto.randomBytes(20).toString('hex')

    this.resetPasswordToken = crypto.createHash('sha256').update(resetToken).digest('hex')

    this.resetPasswordExpire = Date.now() + 10 * (60 * 1000)
    return resetToken
}


const Customer = mongoose.model('Customer', CustomerSchema)

module.exports = Customer