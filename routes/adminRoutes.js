const express = require('express')
const router = express.Router()
const { getAdminData, updateProduct, deleteProduct } = require('../controllers/adminController')
const { authenticate } = require('../middleware/adminAuth')
const Product = require('../models/product')

router.get('/add-staff', authenticate, getAdminData)
router.put('/update-product/:productId', authenticate, updateProduct)
router.delete('/product/:productId', authenticate, deleteProduct)


router.post ('/add-products', authenticate, (req,res) => {

    const { imageurl, title, description, rate, category, subcategory } = req.body
  
    let product  = new Product({
        imageurl, title, description, rate, category, subcategory,
      })

    product.save((error) => {
      if(error) {
        res.json({error: 'Unable to save the product'})
      } else {
        res.json({success: true, message: 'New product saved!', product})
      }
    })
})




module.exports = router