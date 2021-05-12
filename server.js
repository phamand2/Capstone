require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT || 5000
const connectDB = require('./config/db')
const errorHandler = require('./middleware/error')
const Product =require('./models/product')
const cors = require('cors')


// Connect DB
connectDB()


// Middleware
app.use(cors())
app.use(express.json())
app.use('/auth', require('./routes/authRoutes'))
app.use('/admin', require('./routes/adminRoutes'))
app.use('/customer', require('./routes/customerRoutes'))
app.use('/staff', require('./routes/staffMemberRoutes'))
// error handler - should be *last* piece of middleware
app.use(errorHandler)



// route to get all products 
app.get('/all-products', (req, res) => {
  Product.find({}, (error, product) => {
    if(error) {
      res.json({error: 'Unable to fetch products!'}) 
    } else {
      res.json(product)
    }
  })
})


//route to get product by  all vegetable
app.get('/all-products/vegetable', (req, res) => {
  
  Product.find({
    category: "vegetable",
  }, (error, posts) => {
    if(error) {
      res.json({error: 'Unable to fetch products!'}) 
    } else {
      res.json(posts)
    }
  })
})


//route to get product by  all fruit
app.get('/all-products/fruit', (req, res) => {
  
  Product.find({
    category: "fruit",
  }, (error, posts) => {
    if(error) {
      res.json({error: 'Unable to fetch products!'}) 
    } else {
      res.json(posts)
    }
  })
})


//route to get product by  all flowers
app.get('/all-products/flower', (req, res) => {
  
  Product.find({
    category: "flowers",
  }, (error, posts) => {
    if(error) {
      res.json({error: 'Unable to fetch products!'}) 
    } else {
      res.json(posts)
    }
  })
})


//TODO: add/update/delete product routes were previously moved under admin route, need to update admin route image category from name of images to name of imageurl
app.post ('/add-products',(req,res) =>{
  console.log("add-products has been fired")
  const imageurl = req.body.imageurl 
  const title = req.body.title
  const description = req.body.description 
  const rate = req.body.rate 
  const category = req.body.category 
  const subcategory = req.body.subcategory 

  let product  = new Product({
    imageurl: imageurl,
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





//route to update an existing product
app.put('/update-product/:productId', (req, res) => {

  const productId = req.params.productId 
  const imageurl = req.body.imageurl 
  const title = req.body.title
  const description = req.body.description 
  const rate = req.body.rate 
  const category = req.body.category 
  const subcategory = req.body.subcategory 

  const updatedProduct = {
    imageurl: imageurl,
    title: title,
    description: description,
    rate: rate,
    category: category,
    subcategory: subcategory,
  }

  Product.findByIdAndUpdate(productId, updatedProduct, (error, result) => {
      if(error) {
          res.json({error: 'Unable to updated the Product'})
      } else {
          res.json({success: true, message: 'Product updated successfully!'})
      }
  })

})


const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

// makes giant server errors concise and simple to read
process.on('unhandledRejection', (err, promise) => {
  console.log(`Logged Error: ${err}`)
  server.close(() => process.exit(1))
})