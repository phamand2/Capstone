const express = require('express')
const router = express.Router()
const { getAdminData } = require('../controllers/adminController')
const { authenticate } = require('../middleware/adminAuth')
const Product = require('../models/product')

router.get('/add-staff', authenticate, getAdminData)

router.post ('/add-products', authenticate, (req,res) => {

    const { images, title, description, rate, category, subcategory } = req.body
  
    let product  = new Product({
        images, title, description, rate, category, subcategory,
      })

    product.save((error) => {
      if(error) {
        res.json({error: 'Unable to save the product'})
      } else {
        res.json({success: true, message: 'New product saved!', product})
      }
    })
})

router.delete('/product/:productId', authenticate, (req, res) => {

    const productId = req.params.productId 
  
    Product.remove({
      _id: productId
    }, (error, result) => {
      if(error) {
        res.json({error: 'Unable to delete product'})
      } else {
        res.json({success: true, message: 'Product deleted successfully!'})
      }
    })
})

router.put('/update-product/:productId', authenticate, (req, res) => {

    const productId = req.params.productId 
    const images = req.body.images 
    const title = req.body.title
    const description = req.body.description 
    const rate = req.body.rate 
    const category = req.body.category 
    const subcategory = req.body.subcategory 
  
    const updatedProduct = {
      images: images,
      title: title,
      description: description,
      rate: rate,
      category: category,
      subcategory: subcategory,
    }
  
    Product.findByIdAndUpdate(productId, updatedProduct, (error, result) => {
        if(error) {
            res.json({error: 'Unable to update product'})
        } else {
            res.json({success: true, message: 'Product updated successfully!'})
        }
    })
  
  })

module.exports = router