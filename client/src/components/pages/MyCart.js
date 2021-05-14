import '../css/cart.css'; 
import { connect } from 'react-redux'
import { useEffect , useState} from 'react'



const Mycart =(props) => {

    const [Qty, setQty] = useState({})

    const handleChange = (e) => {   
        setQty({
            ...Qty,
            [e.target.name]: e.target.value,
            
        })
    }

    

    const carts = props.cart 

    const getCartSubTotal = () => {
        
    }
    const cartItems = carts.map((cart, index) => {
        return <tbody  key = {cart._id} >
                                    <tr className="cart_item tbody">
                                        <td className="product-remove">
                                            <a href="#" className="remove" title="Remove this item"><img src="assets/images/remove.png" alt="" />
                                            </a>
                                        </td>
                                        <td className="product-thumbnail">
                                           <img src={cart.imageurl}/>
                                            
                                        </td>
                                        <td className="product-info">
                                            <h2>{cart.title}</h2>
                                            <h4>{cart.category} / {cart.subcategory}</h4>
                                        </td>
                                        <td className="product-quantity">
                                            <div className="quantity">
                                                <input onChange = {handleChange} type="number" value="1" name="qty" className="input-field"/>
                                            </div>
                                        </td>
                                        <td className="product-number">
                                            <span>{cart._id}</span>
                                        </td>
                                        <td className="product-price">
                                            <span className="amount">$  {cart.rate}</span>
                                        </td>
                                        <td className="product-subtotal">
                                            <span className="amount-subtotal"></span>
                                        </td>
                                    </tr>
                </tbody>
    })

    return(
        <div>
            <div className="shopping-cart">
                <div className="container">
                    <div className="row">
                        <div className="table-responsive">
                            <table className="shop_table">
                                <thead>
                                    <tr>
                                        <th colSpan="3" className="product-name">Product</th>
                                        <th className="product-quantity">Quantity</th>
                                        <th className="product-number">Product Id</th>
                                        <th className="product-price">Price</th>
                                        <th className="product-subtotal">Sub Total</th>
                                    </tr>
                                </thead>
                                
                                    {cartItems}
                                
                            </table>
                        </div>
                        <div className="refresh-shoping">
                            <a className="btn btn-update" href="shop-grid-sidebar.html"><img src="assets/images/refresh.png" alt="icon"/>update cart</a>
                            <a className="btn btn-update" href="shop-grid-sidebar.html">continue shoping</a>
                        </div>
                    </div>
                    <div className="row">
                        

                        

                        <div className="col-md-4">
                            <div className="cart-total">
                                <h5 className="small-title">CART TOTALS</h5>
                                <table>
                                    <tbody>
                                        <tr className="cart-subtotal">
                                            <th>SUBTOTAL</th>
                                            <td><span className="subtotal">$281.82</span>
                                            </td>
                                        </tr>
                                        <tr className="order-shipping">
                                            <th>shipping</th>
                                            <td><span className="shipping">free Shipping</span>
                                            </td>
                                        </tr>
                                        <tr className="order-total">
                                            <th>order total</th>
                                            <td><span className="amount"><strong>$400</strong></span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <button type="submit" className="details-btn btn">proceed checkout</button>
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
        cart: state.cart
    }
}

export default connect(mapStateToProps)(Mycart)