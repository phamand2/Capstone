const mongoose = require('mongoose')

const cartSchema = new mongoose.Schema({
    fullname:String,
    address:{ Street1:String,
        Street2:String,
        city:String,
        state:String,
        zip:String
    },
    phone : String,
    // OrderConformation: String,
   cart:[{ imageurl: String,
    title: String,
    description: String,
    rate: Number,
    per : String,
    category: String,
    subcategory: String,
    qty: Number,
    subtotal: Number,
    
    }],
    is_delivered: Boolean,
})

const Cart = mongoose.model('Cart', cartSchema)

module.exports = Cart 

