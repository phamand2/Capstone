import { connect } from 'react-redux'
import * as actionCreators from '../../stores/creators/actionCreators' 
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import React from 'react';
import '../css/App.css';


const ProductCategoryVegetable = (props) =>{

    useEffect(() => {
        console.log("use effect is fired")
        props.onLoadProducts()
    },[])

    const handleMoreDetails = (items) => {
        props.onMoreDetails(items)
    }

    var  vegetable = props.vegetable 

    let counter2 = 0;
    for (let i = 0; i < vegetable.length; i++) {
        if (vegetable[i]) counter2++;
    }


const vegetableItems = vegetable.map((items, index) => {
    return <div key ={index} className="card" style={{width: "18rem"}}>
        <div>
            <img className = 'productimg' src={items.imageurl} />
        </div>
        <br/>
        <div>
            <h1>{items.title}</h1>
        </div>
        <br/>
        <div>
            <h4>{items.description.substring(0, 100)}...</h4>
        </div>
        <br/>
        <div>
            <h6>Price:  ${items.rate} / {items.per}</h6>
        </div>
        <br/>
        {/* <div>
            <p>category : {items.category}</p>
        </div>
        <div>
        <p>sub-category : {items.subcategory}</p>
        </div> */}
        <div>
        <button className = 'detailsbtn' onClick = {() => handleMoreDetails(items)}><Link to= {`/product-detail/${items.title}`}>Product Details</Link></button>
        </div>
        

        </div>
})








    return (
        <div>
            <div>
                <h1>
                    &nbsp;&nbsp;Enjoy the sharp crunch of our fresh vegetables!
                </h1>
            </div>
            <div className="card_flex best-book-h1">
                {vegetableItems}
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

  export default connect(mapStateToProps, mapDispatchToProps)(ProductCategoryVegetable);