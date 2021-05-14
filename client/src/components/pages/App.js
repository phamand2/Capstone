import { connect } from 'react-redux'
import * as actionCreators from '../../stores/creators/actionCreators' 
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import React from 'react';
import { MDBCollapse, MDBBtn, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import '../css/App.css';

const App = (props) => {

  useEffect(() => {
    console.log("use effect is fired")
    props.onLoadProducts()
  },[])


  const handleMoreDetails = (items) => {
    props.onMoreDetails(items)
  }


  const [showFirstElement, setShowFirstElement] = useState(false);
  const [showSecondElement, setShowSecondElement] = useState(false);
  const [showThirdElement, setShowThirdElement] = useState(false);
  const [showFourthElement, setShowFourthElement] = useState(false);




  const toggleFirstElement = () => setShowFirstElement(!showFirstElement);
  const toggleSecondElement = () => setShowSecondElement(!showSecondElement);
  const toggleThirdElement = () => setShowThirdElement(!showThirdElement);
  const toggleFourthElement = () => setShowFourthElement(!showFourthElement);

  const toggleAllElements = () => {
    setShowFirstElement(!showFirstElement);
    setShowSecondElement(!showSecondElement);
    setShowThirdElement(!showThirdElement);
    setShowFourthElement(!showFourthElement);
  }


  var  all_products = props.all_products 

  let counter1 = 0;
  for (let i = 0; i < all_products.length; i++) {
    if (all_products[i]) counter1++;
  }
console.log(counter1)

const all_productsItems = all_products.map((items, index) => {
    return <div key ={index} className="card" style={{width: "18rem"}}>
        <div>
            <img src={items.imageurl} alt="item"/>
        </div>
        <div>
            <h1>{items.title}</h1>
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




var  vegetable = props.vegetable 

let counter2 = 0;
for (let i = 0; i < all_products.length; i++) {
    if (vegetable[i]) counter2++;
}
console.log(counter2)


const vegetableItems = vegetable.map((items, index) => {
    return <div key ={index} className="card" style={{width: "18rem"}}>
        <div>
            <img src={items.imageurl} alt="item"/>
        </div>
        <div>
            <h1>{items.title}</h1>
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



var  fruit = props.fruit 
console.log(fruit)
let counter3 = 0;
for (let i = 0; i < all_products.length; i++) {
    if (fruit[i]) counter3++;
}
console.log(counter3)

const fruitItems = fruit.map((items, index) => {
    return <div key ={index} className="card" style={{width: "18rem"}}>
        <div>
            <img src={items.imageurl} />
        </div>
        <div>
            <h1>{items.title}</h1>
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



var  flower = props.flower 
let counter4 = 0;
for (let i = 0; i < all_products.length; i++) {
    if (flower[i]) counter4++;
}
console.log(counter4)

const flowerItems = flower.map((items, index) => {
    return <div key ={index} className="card" style={{width: "18rem"}}>
        <div>
            <img src={items.imageurl} />
        </div>
        <div>
            <h1>{items.title}</h1>
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
      <div className="App">
        React App Home Page Until Router Switch Points Elsewhere
        <br/><br/>
        <Link to='/auth/customer-register'>Customer Registration</Link> (contains link to guest login) <br/>
        <Link to='/auth/customer-login'>Customer Login</Link><br/>
        <Link to='/auth/admin-login'>Admin Login</Link><br/>
        <Link to='/auth/staff-login'>Staff Login</Link><br/>
        <br/><br/>
        Stripe Checkout button that proceeds smoothly but needs to be hooked up to the cart:<br/>
        <Link to='/checkout'>Checkout</Link>
        <br/><br/>
        The admin login will redirect you to the admin landing page if it worked and otherwise display an error. Your credentials are:<br/>
        yourfirstname@test.com<br/>
        test123
        <br/><br/>
        Admin landing page includes functionality for add/update/delete products, and
        links out to add a new staff member and add a new admin.
        <br/><br/>

      </div>
      <div>
      <div id="box">
        <>
            <div id="header">
                <h1>All Fruits, Flowers and Vegetables</h1>
            </div>
            <MDBBtn onClick={toggleFirstElement} className="collapse_btn_title mt-3"> All Products (total products:{counter1}) </MDBBtn>
            <MDBBtn onClick={toggleSecondElement} className="collapse_btn_title mt-3">Vegetable (total products:{counter2})</MDBBtn>
            <MDBBtn onClick={toggleThirdElement} className="collapse_btn_title mt-3">Fruit (total products:{counter3})</MDBBtn>
            <MDBBtn onClick={toggleFourthElement} className="collapse_btn_title mt-3">Flowers (total products:{counter4})</MDBBtn>
            <MDBBtn onClick={toggleAllElements} className="collapse_btn_title mt-3"> Show All</MDBBtn>

            <MDBRow>
                <MDBCol>
                    <MDBCollapse show={showFirstElement} className='mt-3 card_flex best-book-h1'>
                        <div><h1>All Products</h1></div>
                        {all_productsItems}
                    </MDBCollapse>
                </MDBCol>
                <MDBCol>
                    <MDBCollapse show={showSecondElement} className='mt-3 card_flex best-book-h1'>
                        <div><h1>Vegetable</h1></div>
                        {vegetableItems}
                    </MDBCollapse>
                </MDBCol>
                <MDBCol>
                    <MDBCollapse show={showThirdElement} className='mt-3 card_flex best-book-h1'>
                        <div><h1>Fruit</h1></div>
                        {fruitItems}
                    </MDBCollapse>
                </MDBCol>
                <MDBCol>
                    <MDBCollapse show={showFourthElement} className='mt-3 card_flex best-book-h1'>
                        <div><h1>Flowers</h1></div>
                        {flowerItems}
                    </MDBCollapse>
                </MDBCol>
            </MDBRow>
        </>
        </div>
        <div id="box">
            
        </div>
    </div>
    </div>
  );
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




export default connect(mapStateToProps, mapDispatchToProps)(App);