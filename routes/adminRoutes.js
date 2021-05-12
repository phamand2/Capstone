const express = require('express')
const router = express.Router()
const { getAdminData, addProduct, updateProduct, deleteProduct } = require('../controllers/adminController')
const { authenticate } = require('../middleware/adminAuth')
const Product = require('../models/product')

//TODO later
// router.get('/add-staff', authenticate, ???)

router.get('/admin-profile', authenticate, getAdminData)

router.post ('/add-products', authenticate, addProduct)

router.put('/update-product/:productId', authenticate, updateProduct)

router.delete('/product/:productId', authenticate, deleteProduct)



module.exports = router