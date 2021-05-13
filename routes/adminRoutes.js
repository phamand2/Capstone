const express = require('express')
const router = express.Router()
const { getAdminData, addProduct, updateProduct, deleteProduct, addStaff} = require('../controllers/adminController')
const { authenticate } = require('../middleware/adminAuth')
const Product = require('../models/product')


router.put('/update-product/:productId', authenticate, updateProduct)

router.delete('/delete-product/:productId', authenticate, deleteProduct)

router.get('/admin-profile', authenticate, getAdminData)

router.post ('/add-products', authenticate, addProduct)

router.put('/update-product/:productId', authenticate, updateProduct)

router.delete('/product/:productId', authenticate, deleteProduct)




module.exports = router