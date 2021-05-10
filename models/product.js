const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    images: String,
    title: String,
    description: String,
    rate: String,
    category: String,
    subcategory: String,
})

const Product = mongoose.model('Product', productSchema)

module.exports = Product 

