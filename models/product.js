const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    imageurl: String,
    title: String,
    description: String,
    rate: String,
    category: String,
    subcategory: String,
})

const Product = mongoose.model('Product', productSchema)

module.exports = Product 

