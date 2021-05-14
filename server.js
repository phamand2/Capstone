require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT || 5000
const connectDB = require('./config/db')
const errorHandler = require('./middleware/error')
const Product =require('./models/product')
const Cart =require('./models/Cart')
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


app.post ('/add-to-cart',(req,res) =>{
  const images = req.body.images 
  const title = req.body.title
  const description = req.body.description 
  const rate = req.body.rate 
  const category = req.body.category 
  const subcategory = req.body.subcategory 
  const customerToken = req.body.customerToken 
  const customerEmail = req.body.customerEmail 


  let cart = new Cart({
    images: images,
    title: title,
    description: description,
    rate: rate,
    category: category,
    subcategory: subcategory,
    customerToken:customerToken,
    customerEmail:customerEmail,

  })


  cart.save((error) => {
    if(error) {
      res.json({error: 'Unable to save the cart!'})
    } else {
      res.json({success: true, message: 'New cart Saved'})
    }
  })

})


// stripe payment route #1
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
    res.status(200).json(result)})
  .catch(err => console.log(err))
})


// stripe payment route #2 - still not working
// app.post('/create-checkout-session', async (req, res) => {
//   const domainUrl = process.env.FRUVEFLOW_URL
//   const { line_items, customer_email } = req.body
//   if(!line_items || !customer_email) {
//     return res.status(400).json({ error: 'missing required session parameters'})
//   }
//   let session;

//   try {
//     session = await stripe.checkout.sessions.create({
//       payment_method_types: ['card'],
//       mode: 'payment',
//       line_items,
//       customer_email,
//       success_url: `${domainUrl}/success?session_id={CHECKOUT_SESSION_ID}`,
//       cancel_url: `${domainUrl}/canceled`,
//       shipping_address_collection: { allowed_countries: ['US'] }
//     })
//     console.log(session)
//     res.status(200).json({ sessionID: session.id })
//   } catch (error) {
//     console.log(error)
//     res.status(400).json({ error: 'An error occurred; unable to create session'})
//   }
// })






const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})


// makes giant server errors concise and simple to read
process.on('unhandledRejection', (err, promise) => {
  console.log(`Logged Error: ${err}`)
  server.close(() => process.exit(1))
})