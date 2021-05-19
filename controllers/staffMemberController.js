const Cart = require('../models/Cart')



exports.getStaffMemberData = (req, res, next) => {
    res.status(200).json({
        success: true, 
        data: "You have access to the data on staff-member-protected routes"
    })
}


//routes to get all order history
exports.allOrders = (req, res, next) => {
  
    Cart.find({}, (error, posts) => {
      if(error) {
        res.json({error: 'Unable to fetch orders!'})
      } else {
        res.json(posts)
      }
    })
  }
  
  
  //routes to get all completed-orders history
  exports.completedOrders = (req, res, next) => {
    
    Cart.find({
      is_delivered: true,
    }, (error, posts) => {
      if(error) {
        res.json({error: 'Unable to fetch products!'})
      } else {
        res.json(posts)
      }
    })
  }
  
  
  //routes to get all pending-orders history
  exports.pendingOrders = (req, res, next) => {
    
    Cart.find({
      is_delivered: false,
    }, (error, posts) => {
      if(error) {
        res.json({error: 'Unable to fetch products!'})
      } else {
        res.json(posts)
      }
    })
  }
  
  //routes to change the delivery status to delivered
  exports.ChangeToDelivered = (req, res, next) => {
  
    const cartId = req.params.cartId 
    
    
  
    const update_delivery_status = {
      is_delivered : true
    }
  
    Cart.findByIdAndUpdate(cartId, update_delivery_status, (error, result) => {
        if(error) {
            res.json({error: 'Unable to updated'})
        } else {
            res.json({success: true})
        }
    })
  
  }
  
  
  //routes to change the delivery status to not delivered
  exports.ChangeToNotDelivered = (req, res, next) => {
  
    const cartId = req.params.cartId 
  
    const update_delivery_status = {
      is_delivered : false
    }
  
    Cart.findByIdAndUpdate(cartId, update_delivery_status, (error, result) => {
        if(error) {
            res.json({error: 'Unable to updated'})
        } else {
            res.json({success: true})
        }
    })
  
  }