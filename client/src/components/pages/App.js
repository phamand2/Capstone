import { connect } from 'react-redux'
import * as actionCreators from '../../stores/creators/actionCreators' 
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
// import { NavLink } from "react-router-dom";
// import { MDBCollapse, MDBBtn, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import '../css/App.css';
import fruits from '../img/fruits.jpeg'
import vegetables from '../img/vegetables.jpeg'
import flowers from '../img/flowers.jpeg'


import React from 'react';
import Card from 'react-bootstrap/Card'
// import CardDeck from 'react-bootstrap/CardDeck'
// import Button from 'react-bootstrap/Button';

// import {
//   MDBNavbar, MDBNavbarNav, MDBNavbarItem, MDBNavbarLink,
//   MDBContainer, MDBNavbarToggler, MDBIcon } from 'mdb-react-ui-kit';

const App = (props) => {


  // const [Uniqueid] = useState(Math.random().toString(36).substr(2, 8));
  // const [error, setError] = useState('');



  // const UniqueidlocalStorage = (id) => {
  //   console.log("hello")
  //   console.log(id)
      
  //     try {
      
  //       console.log("hello2")
  //       localStorage.setItem('Uniqueid', id)
    
  //     } catch (error) {
  //             setError(error.response.data.error)
  //             setTimeout(() => {
  //                 setError('')
  //             }, 5000)
  //         }
  // }
  

    useEffect(() => {
      // console.log("use effect is fired")
      props.onLoadProducts()
      // UniqueidlocalStorage(Uniqueid)
    },[])

    const handleMoreDetails = (items) => {
      props.onMoreDetails(items)
    }

    var  all_products = props.all_products 

  let counter1 = 0;
  for (let i = 0; i < all_products.length; i++) {
    if (all_products[i]) counter1++;
  }
console.log(counter1)

// const Uniqueidzitem = localStorage.getItem('Uniqueid')
const all_productsItems = all_products.map((items, index) => {
  // console.log(Uniqueid)
    return <div key ={index} className="card" style={{width: "18rem"}}>
        <div>
        <Link to= {`/product-detail/${items.title}`}><div className='square'><img className="img" onClick = {() => handleMoreDetails(items)} src={items.imageurl} alt={items.title}/></div></Link>
        </div>
        <div>
        <Link to= {`/product-detail/${items.title}`}><h1 onClick = {() => handleMoreDetails(items)}>{items.title}</h1></Link>
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
        <Link to= {`/product-detail/${items.title}`}><div className="square"><img className="img" onClick = {() => handleMoreDetails(items)} src={items.imageurl} alt={items.title} /></div></Link>
        </div>
        <div>
        <Link to= {`/product-detail/${items.title}`}><h1 onClick = {() => handleMoreDetails(items)}>{items.title}</h1></Link>
        </div>
       
        

        </div>
})



var  fruit = props.fruit 
// console.log(fruit)
let counter3 = 0;
for (let i = 0; i < all_products.length; i++) {
    if (fruit[i]) counter3++;
}
console.log(counter3)

const fruitItems = fruit.map((items, index) => {
    return <div key ={index} className="card" style={{width: "18rem"}}>
        <div>
        <Link to= {`/product-detail/${items.title}`}><div className='square'><img className="img" onClick = {() => handleMoreDetails(items)} src={items.imageurl} alt={items.title}/></div></Link>
        </div>
        <div>
        <Link to= {`/product-detail/${items.title}`}><h1 onClick = {() => handleMoreDetails(items)}>{items.title}</h1></Link>
        </div>
        
        
        

        </div>
})



var  flower = props.flower 
let counter4 = 0;
for (let i = 0; i < all_products.length; i++) {
    if (flower[i]) counter4++;
}
// console.log(counter4)

const flowerItems = flower.map((items, index) => {
    return <div key ={index} className="card" style={{width: "18rem"}}>
        <div>
        <Link to= {`/product-detail/${items.title}`}><div className='square'><img className="img" onClick = {() => handleMoreDetails(items)} src={items.imageurl} alt={items.title}/></div></Link>
        </div>
        <div>
        <Link to= {`/product-detail/${items.title}}`}><h1 onClick = {() => handleMoreDetails(items)}>{items.title}</h1></Link>
        </div>
       
        

        </div>
})



  return (
    <header>
      <div
        className='p-5 text-center bg-image'

        
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1610492219815-f76905e3f084?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80')" }}
      >
        <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)', height: 300 }}>
          <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='text-white'>
              <h1 className='mb-3'>FruVe Flow</h1>
              <h4 className='mb-4'>Get your Fruit, Vegetables, and Flowers delivered fresh.</h4>
              <a className='btn btn-outline-light btn-lg' href='/auth/customer-register' role='button'>
                Register Today!
              </a>
            </div>
          </div>
        </div>
        <br />
        <div className='cards'>
        <>
  <Card>
    
    <Card.Body>
    {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
    <Card.Title>Fruit</Card.Title>
      <div className="product_display">
        {fruitItems[0]}
        {fruitItems[5]}
        {fruitItems[10]}
        
        
      </div>
      <a className='btn btn-outline-light btn-lg' href='/fruits' role='button'>
                See All Fruit
              </a>
    </Card.Body>
  </Card>
  <br />
  <Card>
    <Card.Body>
    {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
    <Card.Title>Vegetables</Card.Title>
    <div className="product_display">
        {vegetableItems[0]}
        {vegetableItems[5]}
        {vegetableItems[10]}
        
      </div>
      <a className='btn btn-outline-light btn-lg' href='/vegetables' role='button'>
                See All Vegetables
              </a>
    </Card.Body>
    
  </Card>
  <br />
  <Card>
    <Card.Body>
    {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
    <Card.Title>Flowers</Card.Title>
    <div className="product_display">
        {flowerItems[0]}
        {flowerItems[5]}
        {flowerItems[10]}
       
      </div>
      <a className='btn btn-outline-light btn-lg' href='/flowers' role='button'>
                See All Flowers
              </a>
    </Card.Body>
    
  </Card>
</>
      </div>
      </div>
      
    </header>                 
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
      isLoggedIn: state.isAuthenticated,
      
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

