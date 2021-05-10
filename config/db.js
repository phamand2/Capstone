const mongoose = require('mongoose')

const connectDB = async () => {
    await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true, 
        useFindAndModify: true,
        useCreateIndex: true,
        useUnifiedTopology: true
    }, (error) => {
        if (error) {
            console.log('Unable to connect to storeDB')
        } else {
            console.log('Connected to storeDB on Atlas!')
        }
    })
}


module.exports = connectDB