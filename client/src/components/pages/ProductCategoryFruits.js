import { connect, useDispatch } from 'react-redux'
import { onAddToCart } from '../../stores/creators/actionCreators' 
import * as actionCreators from '../../stores/creators/actionCreators'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import React from 'react';
import '../css/App.css';


const ProductCategoryFruit = (props) => {

    const [qty, setQty] = useState(1)
    const dispatch = useDispatch()

    useEffect(() => {
        // console.log("use effect is fired")
        props.onLoadProducts()
    },[])

    const handleMoreDetails = (items) => {
        props.onMoreDetails(items)
    }

// not working rn
    // const handleAddToCart = (product) => {
    //     props.onAddToCart(product)
    //     alert("Item has been added to the cart!")
    // }



    var  product = props.moredetails
    var  fruit = props.fruit

    let counter2 = 0;
    for (let i = 0; i < fruit.length; i++) {
        if (fruit[i]) counter2++;
}
// console.log(counter2)


const fruitItems = fruit.map((items, index) => {
    return <div key ={index} className="card" style={{width: "18rem"}}>
        <div>
            <img className = 'productimg' src={items.imageurl} />
        </div>
        <br/>
        <div>
            <h1 className='itemsTitle'>{items.title}</h1>
        </div>
        <br/>
        <div>
            <h4>{items.description.substring(0, 100)}...</h4>
        </div><br/>
        <div>
            <h6>Price:  ${items.rate} / {items.per}</h6>
        </div>
        <br/>
        <div>
            <button className = 'detailsbtn' onClick = {() => handleMoreDetails(items)}><Link to= {`/product-detail/${items._id}`}>Product Details</Link></button>
            {/* not working rn */}
            {/* <button style = {{backgroundColor: '#860286', padding: '8px', marginRight: '10px'}} onClick = {() => handleAddToCart(items)}>
                    <a style = {{fontSize: '15px'}}className="add-cart" ><span><span className="icon_plus"></span></span> Add To Cart</a>
            </button> */}
        </div>


        </div>
})




    return (
        <div>
            <div>
                <h1>
                &nbsp;&nbsp;Try Some Of Our Delicious Fruits!
                </h1>
            </div>
            <div className="card_flex best-book-h1">
                {fruitItems}
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
      onLoadProducts: () => dispatch(actionCreators.loadProducts()),
      onMoreDetails :(items) => dispatch(actionCreators.onMoreDetails(items))
    }
  }


const mapStateToProps = (state) => {
    return {
        all_products: state.all_products,
        vegetable: state.vegetable,
        fruit: state.fruit,
        flower: state.flower,

    }
  }

  export default connect(mapStateToProps, mapDispatchToProps)(ProductCategoryFruit);
