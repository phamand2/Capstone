const mongoose = require('mongoose')

const cartSchema = new mongoose.Schema({
    imageurl: String,
    title: String,
    description: String,
    rate: Number,
    per : String,
    category: String,
    subcategory: String,
    customerToken:String,
    customerEmail:String,
})

const Cart = mongoose.model('Cart', cartSchema)

module.exports = Cart 

