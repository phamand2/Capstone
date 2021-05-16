import { connect } from 'react-redux'
import * as actionCreators from '../../stores/creators/actionCreators' 
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { NavLink } from "react-router-dom";
import React from 'react';
import { MDBCollapse, MDBBtn, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import '../css/App.css';


const ProductCategoryFlower = (props) =>{

    useEffect(() => {
        console.log("use effect is fired")
        props.onLoadProducts()
    },[])

    

    var  flower = props.flower 
    console.log(flower)
    let counter2 = 0;
    for (let i = 0; i < flower.length; i++) {
        if (flower[i]) counter2++;
    }

    const handleMoreDetails = (items) => {
        props.onMoreDetails(items)
    }


    const flowerItems = flower.map((items, index) => {
    console.log(items)
    return <div key ={index} className="card" style={{width: "18rem"}}>
        <div>
            <img className = 'productimg' src={items.imageurl} />
        </div>
        <div>
            <h1>{items.title}</h1>
        </div>
        <div>
            <h4>{items.description.substring(0, 100)}...</h4>
        </div>
        <div>
            <h6>rate : {items.rate} / {items.per}</h6>
        </div>
        <div>
            <p>category : {items.category}</p>
        </div>
        <div>
        <p>sub-category : {items.subcategory}</p>
        </div>
        <div>
        <button onClick = {() => handleMoreDetails(items)}><Link to= {`/product-detail/${items._id}`}>Product Details</Link></button>
        </div>
        

        </div>
    })


    return (
        <div>
            <div>
                <h1>
                    Brighten up your home with some of our beautiful flowers!
                </h1>
            </div>
            <div className="card_flex best-book-h1">
                {flowerItems}
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

  export default connect(mapStateToProps, mapDispatchToProps)(ProductCategoryFlower);