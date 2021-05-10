require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT || 5001
const Product =require('./models/product')
const connectDB = require('./config/db')




router.post ('/add-products',(req,res) =>{
    const images = req.body.images 
    const title = req.body.title
    const description = req.body.description 
    const rate = req.body.rate 
    const category = req.body.category 
    const subcategory = req.body.subcategory 

    let product  = new Product({
        images: images,
        title: title,
        description: description,
        rate: rate,
        category: category,
        subcategory: subcategory,
    })
    product.save((error) => {
        if(error) {
            res.json({error: 'Unable to save the product!'})
        } else {
            res.json({success: true, message: 'New product Saved'})
        }
    })

})
