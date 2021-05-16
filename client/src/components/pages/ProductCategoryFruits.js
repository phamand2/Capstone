import { connect } from 'react-redux'
import * as actionCreators from '../../stores/creators/actionCreators' 
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import React from 'react';
import '../css/App.css';


const ProductCategoryFruit = (props,{history}) =>{

    useEffect(() => {
        // console.log("use effect is fired")
        props.onLoadProducts()
    },[])

    const handleMoreDetails = (items) => {
        props.onMoreDetails(items)
    }

    const handleAddToCart = (product) => {
        props.onAddToCart(product)
        alert("item has been added to the cart ")
    }

    var  product = props.moredetails

     const customerToken = localStorage.getItem('customerToken')




      

    var  fruit = props.fruit 

    let counter2 = 0;
    for (let i = 0; i < fruit.length; i++) {
        if (fruit[i]) counter2++;
}
// console.log(counter2)


const fruitItems = fruit.map((items, index) => {
    return <div key ={index} className="card" style={{width: "18rem"}}>
        <img src={items.imageurl} class="card-img-top"/>
        <div class="card-body">
            <h1 class="card-title">{items.title}</h1>
            <p class="card-text">{items.description.substring(0, 100)}...</p>
//         <div>
//             <img className = 'productimg' src={items.imageurl} />
//         </div>
//         <br/>
//         <div>
//             <h1>{items.title}</h1>
//         </div>
//         <br/>
//         <div>
//             <h4>{items.description.substring(0, 100)}...</h4>
//         </div><br/>
//         <div>
//             <h6>Price:  ${items.rate} / {items.per}</h6>
//         </div>
//         <br/>
//         {/* <div>
//             <p>Category: {items.category}</p>
//         </div>
//         <div>
//         <p>Subcategory: {items.subcategory}</p>
//         </div> */}
//         <div>
//             <button className = 'detailsbtn' onClick = {() => handleMoreDetails(items)}><Link to= {`/product-detail/${items._id}`}>Product Details</Link></button>
//         </div>

        

        
            <ul class="list-group list-group-flush">
                <li class="list-group-item">
                    price : {items.rate}
                </li>
                <li class="list-group-item">
                    Category : {items.category}
                </li>
                <li class="list-group-item">
                    Subcategory : {items.subcategory}
                </li>
            </ul>
            
        
        <div class="card-body">
          
             <button style = {{backgroundColor: 'limegreen', padding: '8px', marginRight: '10px'}} onClick = {() => handleAddToCart(items)}>
                    <a style = {{fontSize: '15px'}}className="add-cart" ><span><span className="icon_plus"></span></span> Add To Cart</a>
            </button>
          
            
            <button style = {{backgroundColor: '#f89494', padding: '8px', marginLeft: '10px', fontSize: '15px'}} onClick = {() => handleMoreDetails(items)}>
                <Link to= {`/product-detail/${items.title}`}> More details </Link>
            </button>
            
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
      onMoreDetails :(items) => dispatch(actionCreators.onMoreDetails(items)),
      onAddToCart :(items ) => dispatch(actionCreators.onAddToCart(items ))   
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