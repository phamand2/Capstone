require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT || 5001
const connectDB = require('./config/db')
const errorHandler = require('./middleware/error')

// Connect DB
connectDB()


// Middleware
app.use(express.json())
app.use('/api/auth', require('./routes/authRoutes'))
// error handler - should be *last* piece of middleware
app.use(errorHandler)






const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

// makes giant server errors concise and simple to read
process.on('unhandledRejection', (err, promise) => {
  console.log(`Logged Error: ${err}`)
  server.close(() => process.exit(1))
})