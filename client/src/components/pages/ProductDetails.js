import { connect } from 'react-redux'


const ProductDetails = (props) => {
    



    var  moredetails = props.moredetails
    // const moredetails_imageurlItems = moredetails_imageurl.map((items, index) => {
    //     return
    //     <div>
            
    //     </div>
    // })



    return(
    
    
    <div className="home01">
        
                                <div className="single-product-details clearfix">
                                    <div className="col-md-5">
                                        <div className="single-slider-item">
                                            <ul className="owl-slider">
                                                <div className="item">
                                                    <img src={moredetails.imageurl} alt={moredetails.title} className="img-responsive"/>
                                                </div>
                                                
                                            </ul>
                                            
                                        </div>
                                    </div>
                                    <div className="col-md-7">
                                        <div className="right-content">
                                            <div className="product-info">
                                                <h2>{moredetails.title}</h2>
                                                <h4 className="product-name">{moredetails.category}</h4>
                                                <div className="price">
                                                    {moredetails.rate}
                                                </div>
                                                <div className="product-description">
                                                    <h5 className="small-title">DESCRIPTION</h5>
                                                    <p>{moredetails.description}</p>
                                                </div>
                                                <div className="product-desc product-description">
                                                    <span className="item-number"><b>Product Number:</b>  {moredetails._id}</span>
                                                    <br></br>
                                                    <span className="item-cat"><b>Category:</b>  {moredetails.category}</span>
                                                    <br></br>
                                                    <span className="item-tag"><b>SubCategory:</b>  {moredetails.subcategory}</span>
                                                </div>
                                                <div className="product-description">
                                                    <ul>
                                                        <div><button><a className="add-cart" href="single-product.html"><span><span className="icon_plus"></span></span> add to cart</a></button>
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
 
    )
}

const mapStateToProps = (state) => {
    return {
        moredetails: state.moredetails,
        
    }
  }

  export default connect(mapStateToProps)(ProductDetails);