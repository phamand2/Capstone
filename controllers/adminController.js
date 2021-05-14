const Product = require('../models/product')

exports.getAdminData = (req, res, next) => {
  res.status(200).json({
      success: true, 
      data: "You have access to the data on admin-protected routes"
  })
}

exports.addProduct = (req, res, next) => {
  const { imageurl, title, description, rate,  per, category, subcategory } = req.body
  console.log('Adding product')
  let product  = new Product({
      imageurl, title, description, rate, per, category, subcategory,
    })

  product.save((error) => {
    if(error) {
      res.json({error: 'Unable to save the product'})
    } else {
      res.json({success: true, message: 'New product saved!', product})
    }
  })
}


exports.updateProduct = (req, res, next) => {
    console.log("update product is fired")
    const { imageurl, title, description, rate, per, category, subcategory } = req.body
    const productId = req.params.productId
  
    const updatedProduct = {
      imageurl, title, description, rate,  per, category, subcategory
    }
  
    Product.findByIdAndUpdate(productId, updatedProduct, (error, result) => {
        if(error) {
            res.json({error: 'Unable to update product'})
        } else {
            res.json({success: true, message: 'Product updated successfully!'})
        }
    })
}

exports.deleteProduct = (req, res, next) => {
    const productId = req.params.productId 
  
    Product.deleteOne({
      _id: productId,
    }, (error, result) => {
      if(error) {
        res.json({error: 'Unable to delete product'})
      } else {
        res.json({success: true, message: 'Product deleted successfully!'})
      }
    })
}

exports.addStaff = async (req, res, next) => {
  const {username, email, password} = req.body;

  try {
      const staffMember = await StaffMember.create({
          username, email, password
      })
      sendStaffMemberToken(staffMember, 201, res)
  } catch (error) {
      res.status(500).json({
          success: false,
          error: error.message
      })
  }
}