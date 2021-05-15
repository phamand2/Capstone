import { connect } from 'react-redux'
import { useState} from 'react'
import * as actionCreators from '../../stores/creators/actionCreators' 


const ProductDetails = (props, {history}) => {
    const [Qty, setQty] = useState({})

    var  product = props.moredetails
    // var  product = props.moredetails
    // console.log(product)
    // const moredetails_imageurlItems = moredetails_imageurl.map((items, index) => {
    //     return
    //     <div>
            
    //     </div>
    // })


    // const handleSave =(product) => {
    //     const customerToken = localStorage.getItem('customerToken')
    //     const customerEmail = localStorage.getItem('customerEmail')
        
    //     fetch ('http://localhost:5000/add-to-cart',{
    //         method: 'POST',
            
    //         headers: {
                
    //             'Content-Type': 'application/json'
    //         },
    //         //add username or email token here.
    //         body:JSON.stringify({
    //             imageurl: product.imageurl,
    //             title: product.title,
    //             description: product.description,
    //             rate: product.rate,
    //             category: product.category,
    //             subcategory: product.subcategory,
    //             customerToken:customerToken,
    //             customerEmail:customerEmail
                
    //         })
    //     }).then(response => response.json())
    //     .then(result => {
    //         if(result.success) {
                
    //           alert("Your product has been added to the database")
    //         //   window.location.reload(false);
              
    //         }
           
    //     }).catch(error => {
    //         console.log(error)
    //     })
    // }



    // const handleAddToCartLoggedIn = (product, ) => {
        
    //     props.onAddToCart(product)
    //     handleSave (product)

        
    // }


    const handleAddToCart = (product) => {
        props.onAddToCart(product)
        alert("item has been added to the cart ")
    }
    var  product = props.moredetails
    
    
    const customerToken = localStorage.getItem('customerToken')
   
        var  product = props.moredetails
        console.log(product)
            return (
            <div className="home01">
        
            <div className="single-product-details clearfix">
               
                <div className="col-md-5">
                    <div className="single-slider-item">
                        <ul className="owl-slider">
                            <div className="item">
                                <img src={product.imageurl} alt={product.title} className="img-responsive"/>
                            </div>
                            
                        </ul>
                        
                    </div>
                </div>
                <div className="col-md-7">
                    <div className="right-content">
                        <div className="product-info">
                            <h1>{product.title}</h1>
                            <div className="price">
                            <h4>${product.rate}</h4>
                            </div>
                            
                            <div className="product-description">
                                <h4 className="small-title"><b>DESCRIPTION</b></h4>
                                <p>{product.description}</p>
                            </div>
                            <div className="product-desc product-description">
                                <span className="item-number"><b>Product ID:</b>  {product._id}</span>
                                <br></br>
                                <span className="item-cat"><b>Category:</b>  {product.category}</span>
                                <br></br>
                                <span className="item-tag"><b>SubCategory:</b>  {product.subcategory}</span>
                            </div>
                            <div className="product-description">
                                <ul>
                                    <div><button onClick = {() => handleAddToCart(product)}><a className="add-cart" ><span><span className="icon_plus"></span></span> add to cart</a></button>
                                    </div>
                                    <div><a href="#"><span className="icon_heart_alt"></span></a>
                                    </div>
                                    <div><a className="zoom" href="assets/images/gallery_men/single-shop-details/big/image1xxl.jpg"><span className="arrow_expand"></span></a>
                                    </div>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        )}




    


const mapDispatchToProps = (dispatch) => {
    return {
        onAddToCart :(product ) => dispatch(actionCreators.onAddToCart(product )),
        // onAddToCart :(Qty ) => dispatch(actionCreators.onAddToCart(Qty )),
        
    }

}

const mapStateToProps = (state) => {
    return {
        moredetails: state.moredetails,
        
    }
  }

  export default connect(mapStateToProps,mapDispatchToProps)(ProductDetails);