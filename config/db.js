const mongoose = require('mongoose')

const connectDB = async () => {
    await mongoose.connect('mongodb+srv://devcapstone:devcapstone@cluster0.ne7qw.mongodb.net/storedb?retryWrites=true&w=majority', {
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