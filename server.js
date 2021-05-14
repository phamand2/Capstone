require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT || 5000
const connectDB = require('./config/db')
const errorHandler = require('./middleware/error')
const Product =require('./models/product')
const cors = require('cors')
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)


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


//route to get product by all vegetable
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


//route to get product by all fruit
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


//route to get product by all flowers
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


// stripe payment route
app.post('/payment', (req, res) => {
  const { product, token } = req.body

  // const getCartSubTotal = () => {
  //     return cartItems.reduce((price, item) => item.price * item.qty + price, 0)
  // }

  // const getCartCount = () => {
  //     return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0)
  // }

  console.log('PRODUCT: ', product.name)
  console.log('PRICE: $', product.rate)
  const idempotencyKey = Math.random()

  return stripe.customers.create({
      email: token.email,
      source: token.id
  }).then(customer => {
      stripe.charges.create({
        // Stripe charges in cents
          // amount: getCartSubTotal() * 100,
          amount: Math.round(product.rate * 100),
          currency: 'usd',
          customer: customer.id,
          receipt_email: token.email,
          description: `Purchase from FruveFlow`,
          shipping: {
              name: token.card.name,
              address: {
                  country: token.card.address_country
              }
          }
      }, {idempotencyKey})
  }).then(result => {
    console.log(result)
    res.status(200).json(result)
    })
  .catch(err => console.log(err))
})



const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})


// makes giant server errors concise and simple to read
process.on('unhandledRejection', (err, promise) => {
  console.log(`Logged Error: ${err}`)
  server.close(() => process.exit(1))
})