import { connect } from 'react-redux'
import * as actionCreators from '../../stores/creators/actionCreators' 
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { NavLink } from "react-router-dom";
import React from 'react';
import { MDBCollapse, MDBBtn, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import '../css/App.css';


const ProductCategoryFruit = (props) =>{

    useEffect(() => {
        console.log("use effect is fired")
        props.onLoadProducts()
    },[])

    const handleMoreDetails = (items) => {
        props.onMoreDetails(items)
    }


      

    var  fruit = props.fruit 

    let counter2 = 0;
    for (let i = 0; i < fruit.length; i++) {
        if (fruit[i]) counter2++;
}
console.log(counter2)


const fruitItems = fruit.map((items, index) => {
    return <div key ={index} className="card" style={{width: "18rem"}}>
        <div>
            <img src={items.imageurl} />
        </div>
        <div>
            <h1 className='itemsTitle'>{items.title}</h1>
        </div>
        <div>
            <h4>{items.description}</h4>
        </div>
        <div>
            <h6>rate : {items.rate}</h6>
        </div>
        <div>
            <p>category : {items.category}</p>
        </div>
        <div>
        <p>sub-category : {items.subcategory}</p>
        </div>
        <div>
            <button onClick = {() => handleMoreDetails(items)}><Link to= {`/product-detail/${items.title}`}>More details</Link></button>
        </div>
        

        </div>
})








    return (
        <div>
            <div>
                <h1>
                    Fruits display page
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