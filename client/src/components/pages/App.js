import { connect } from 'react-redux'
import * as actionCreators from '../../stores/creators/actionCreators' 
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { NavLink } from "react-router-dom";

import { MDBCollapse, MDBBtn, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import '../css/App.css';

import React from 'react';
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import Button from 'react-bootstrap/Button';

import {
  MDBNavbar, MDBNavbarNav, MDBNavbarItem, MDBNavbarLink,
  MDBContainer, MDBNavbarToggler, MDBIcon } from 'mdb-react-ui-kit';

const App = (props) => {


  const [Uniqueid] = useState(Math.random().toString(36).substr(2, 8));
  const [error, setError] = useState('');



  const UniqueidlocalStorage = (id) => {
    console.log("hello")
    console.log(id)
      
      try {
      
        console.log("hello2")
        localStorage.setItem('Uniqueid', id)
    
      } catch (error) {
              setError(error.response.data.error)
              setTimeout(() => {
                  setError('')
              }, 5000)
          }
  }
  

    useEffect(() => {
      console.log("use effect is fired")
      props.onLoadProducts()
      UniqueidlocalStorage(Uniqueid)
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

const Uniqueidzitem = localStorage.getItem('Uniqueid')
const all_productsItems = all_products.map((items, index) => {
  console.log(Uniqueid)
    return <div key ={index} className="card" style={{width: "18rem"}}>
        <div>
        <Link to= {`/product-detail/${items.title}/${Uniqueidzitem}`}><img className="img" onClick = {() => handleMoreDetails(items)} src={items.imageurl} alt={items.title}/></Link>
        </div>
        <div>
        <Link to= {`/product-detail/${items.title}/${Uniqueidzitem}`}><h1 onClick = {() => handleMoreDetails(items)}>{items.title}</h1></Link>
        </div>
        {/* <div>
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
        <button onClick = {() => handleMoreDetails(items)}><Link to= {`/product-detail/${items.title}/${Uniqueidzitem}`}>More details</Link></button>
        </div> */}
        
        
        

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
        <Link to= {`/product-detail/${items.title}/${Uniqueidzitem}`}><img className="img" onClick = {() => handleMoreDetails(items)} src={items.imageurl} alt={items.title}/></Link>
        </div>
        <div>
        <Link to= {`/product-detail/${items.title}/${Uniqueidzitem}`}><h1 onClick = {() => handleMoreDetails(items)}>{items.title}</h1></Link>
        </div>
        {/* <div>
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
        <button onClick = {() => handleMoreDetails(items)}><Link to= {`/product-detail/${items.title}/${Uniqueidzitem}`}>More details</Link></button>
        </div> */}
        

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
        <Link to= {`/product-detail/${items.title}/${Uniqueidzitem}`}><img className="img" onClick = {() => handleMoreDetails(items)} src={items.imageurl} alt={items.title}/></Link>
        </div>
        <div>
        <Link to= {`/product-detail/${items.title}/${Uniqueidzitem}`}><h1 onClick = {() => handleMoreDetails(items)}>{items.title}</h1></Link>
        </div>
        {/* <div>
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
        <button onClick = {() => handleMoreDetails(items)}><Link to= {`/product-detail/${items.title}/${Uniqueidzitem}`}>More details</Link></button>
        </div> */}
        
        

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
        <Link to= {`/product-detail/${items.title}/${Uniqueidzitem}`}><img className="img" onClick = {() => handleMoreDetails(items)} src={items.imageurl} alt={items.title}/></Link>
        </div>
        <div>
        <Link to= {`/product-detail/${items.title}/${Uniqueidzitem}`}><h1 onClick = {() => handleMoreDetails(items)}>{items.title}</h1></Link>
        </div>
        {/* <div>
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
        <button onClick = {() => handleMoreDetails(items)}><Link to= {`/product-detail/${items.title}/${Uniqueidzitem}`}>More details</Link></button>
        </div> */}
        

        </div>
})



  return (
    <header>
      <MDBNavbar expand='lg' light bgColor='white'>
        <MDBContainer fluid>
          <MDBNavbarToggler
            aria-controls='navbarExample01'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <MDBIcon fas icon='bars' />
          </MDBNavbarToggler>
          <div className='collapse navbar-collapse' id='navbarExample01'>
            <MDBNavbarNav right className='mb-2 mb-lg-0'>
              <MDBNavbarItem >
                <MDBNavbarLink aria-current='page' href='#'>
                  Home
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='#'>Fruit</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='#'>Vegetables</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='#'>Flowers</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <Link to='/mycart'><MDBNavbarLink>Cart</MDBNavbarLink></Link>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='/auth/customer-login'>Login</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='/auth/customer-register'>Register</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='/auth/admin-login'>Admin</MDBNavbarLink>
              </MDBNavbarItem>

            </MDBNavbarNav>
          </div>
        </MDBContainer>
      </MDBNavbar>

      <div
        className='p-5 text-center bg-image'
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1544829728-e5cb9eedc20e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')" }}
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
    <Card.Img variant="top" src="holder.js/100px180" />
    <Card.Title>Fruit</Card.Title>
      <div className="product_display">
        {fruitItems[0]}
        {fruitItems[5]}
        {fruitItems[10]}
        {fruitItems[11]}
        {fruitItems[15]}
        {fruitItems[18]}
      </div>
      <a className='btn btn-outline-light btn-lg' href='/fruits' role='button'>
                See All Fruit
              </a>
    </Card.Body>
  </Card>
  <br />
  <Card>
    <Card.Body>
    <Card.Img variant="top" src="holder.js/100px180" />
    <Card.Title>Vegetables</Card.Title>
    <div className="product_display">
        {vegetableItems[0]}
        {vegetableItems[5]}
        {vegetableItems[10]}
        {vegetableItems[11]}
        {vegetableItems[15]}
        {vegetableItems[18]}
      </div>
      <a className='btn btn-outline-light btn-lg' href='/vegetables' role='button'>
                See All Vegetables
              </a>
    </Card.Body>
    
  </Card>
  <br />
  <Card>
    <Card.Body>
    <Card.Img variant="top" src="holder.js/100px180" />
    <Card.Title>Flowers</Card.Title>
    <div className="product_display">
        {flowerItems[0]}
        {flowerItems[5]}
        {flowerItems[10]}
        {flowerItems[11]}
        {flowerItems[15]}
        {flowerItems[18]}
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
      
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);


// const App = (props) => {

//   useEffect(() => {
//     console.log("use effect is fired")
//     props.onLoadProducts()
//   },[])

//   const [showFirstElement, setShowFirstElement] = useState(false);
//   const [showSecondElement, setShowSecondElement] = useState(false);
//   const [showThirdElement, setShowThirdElement] = useState(false);
//   const [showFourthElement, setShowFourthElement] = useState(false);

//   const toggleFirstElement = () => setShowFirstElement(!showFirstElement);
//   const toggleSecondElement = () => setShowSecondElement(!showSecondElement);
//   const toggleThirdElement = () => setShowThirdElement(!showThirdElement);
//   const toggleFourthElement = () => setShowFourthElement(!showFourthElement);

//   const toggleAllElements = () => {
//     setShowFirstElement(!showFirstElement);
//     setShowSecondElement(!showSecondElement);
//     setShowThirdElement(!showThirdElement);
//     setShowFourthElement(!showFourthElement);
//   }


//   var  all_products = props.all_products 

//   let counter1 = 0;
//   for (let i = 0; i < all_products.length; i++) {
//     if (all_products[i]) counter1++;
//   }
// console.log(counter1)

// const all_productsItems = all_products.map((items, index) => {
//     return <div key ={index} className="card" style={{width: "18rem"}}>
//         <div>
//             <img src={items.imageurl} />
//         </div>
//         <div>
//             <h1>{items.title}</h1>
//         </div>
//         <div>
//             <h4>{items.description}</h4>
//         </div>
//         <div>
//             <h6>rate : {items.rate}</h6>
//         </div>
//         <div>
//             <p>category : {items.category}</p>
//         </div>
//         <div>
//         <p>sub-category : {items.subcategory}</p>
//         </div>
//         <div>
//         <button >More details</button>
//         </div>
//         </div>
// })




// var  vegetable = props.vegetable 

// let counter2 = 0;
// for (let i = 0; i < all_products.length; i++) {
//     if (vegetable[i]) counter2++;
// }
// console.log(counter2)


// const vegetableItems = vegetable.map((items, index) => {
//     return <div key ={index} className="card" style={{width: "18rem"}}>
//         <div>
//             <img src={items.imageurl} />
//         </div>
//         <div>
//             <h1>{items.title}</h1>
//         </div>
//         <div>
//             <h4>{items.description}</h4>
//         </div>
//         <div>
//             <h6>rate : {items.rate}</h6>
//         </div>
//         <div>
//             <p>category : {items.category}</p>
//         </div>
//         <div>
//         <p>sub-category : {items.subcategory}</p>
//         </div>
//         <div>
//         <button >More details</button>
//         </div>
        

//         </div>
// })



// var  fruit = props.fruit 
// console.log(fruit)
// let counter3 = 0;
// for (let i = 0; i < all_products.length; i++) {
//     if (fruit[i]) counter3++;
// }
// console.log(counter3)

// const fruitItems = fruit.map((items, index) => {
//     return <div key ={index} className="card" style={{width: "18rem"}}>
//         <div>
//             <img src={items.imageurl} />
//         </div>
//         <div>
//             <h1>{items.title}</h1>
//         </div>
//         <div>
//             <h4>{items.description}</h4>
//         </div>
//         <div>
//             <h6>rate : {items.rate}</h6>
//         </div>
//         <div>
//             <p>category : {items.category}</p>
//         </div>
//         <div>
//         <p>sub-category : {items.subcategory}</p>
//         </div>
//         <div>
//         <button>More details</button>
//         </div>
        

//         </div>
// })



// var  flower = props.flower 
// let counter4 = 0;
// for (let i = 0; i < all_products.length; i++) {
//     if (flower[i]) counter4++;
// }
// console.log(counter4)

// const flowerItems = flower.map((items, index) => {
//     return <div key ={index} className="card" style={{width: "18rem"}}>
//         <div>
//             <img src={items.imageurl} />
//         </div>
//         <div>
//             <h1>{items.title}</h1>
//         </div>
//         <div>
//             <h4>{items.description}</h4>
//         </div>
//         <div>
//             <h6>rate : {items.rate}</h6>
//         </div>
//         <div>
//             <p>category : {items.category}</p>
//         </div>
//         <div>
//         <p>sub-category : {items.subcategory}</p>
//         </div>
//         <div>
//         <button >More details</button>
//         </div>
        

//         </div>
// })


//   return (
//     <div>
//       <div className="App">
//         React App Home Page Until Router Switch Points Elsewhere
//         <br/><br/>
//         Routes for add/update/delete product POST requests are now:<br/>
//         localhost:3000/admin/add-products<br/>
//         localhost:3000/admin/update-product/:productId<br/>
//         (delete) localhost:3000/admin/delete-product/:productId<br/>
//         <br/><br/>
//         localhost:3000/auth/admin-login<br/><br/>
//         It will redirect you to the admin landing page if it worked and otherwise display an error. Your credentials are:<br/>
//         yourfirstname@test.com<br/>
//         test123
//         <br/><br/>
//       <Link to='/auth/customer-register'>Customer Register</Link><br/>
//       <Link to='/auth/customer-login'>Customer Login</Link><br/>
//       <Link to='/auth/admin-login'>Admin Login</Link><br/>
//       <Link to='/auth/staff-login'>Staff Login</Link><br/>
//       </div>
//       <div>
//       <div id="box">
//         <>
//             <div id="header">
//                 <h1>All Fruits , Flowers  and Vegetables</h1>
//             </div>
//             <MDBBtn onClick={toggleFirstElement} className="collapse_btn_title mt-3"> All Products (total products:{counter1}) </MDBBtn>
//             <MDBBtn onClick={toggleSecondElement} className="collapse_btn_title mt-3">Vegetable (total products:{counter2})</MDBBtn>
//             <MDBBtn onClick={toggleThirdElement} className="collapse_btn_title mt-3">Fruit (total products:{counter3})</MDBBtn>
//             <MDBBtn onClick={toggleFourthElement} className="collapse_btn_title mt-3">Flowers (total products:{counter4})</MDBBtn>
//             <MDBBtn onClick={toggleAllElements} className="collapse_btn_title mt-3"> Show All</MDBBtn>

//             <MDBRow>
//                 <MDBCol>
//                     <MDBCollapse show={showFirstElement} className='mt-3 card_flex best-book-h1'>
//                         <div><h1>All Products</h1></div>
//                         {all_productsItems}
//                     </MDBCollapse>
//                 </MDBCol>
//                 <MDBCol>
//                     <MDBCollapse show={showSecondElement} className='mt-3 card_flex best-book-h1'>
//                         <div><h1>Vegetable</h1></div>
//                         {vegetableItems}
//                     </MDBCollapse>
//                 </MDBCol>
//                 <MDBCol>
//                     <MDBCollapse show={showThirdElement} className='mt-3 card_flex best-book-h1'>
//                         <div><h1>Fruit</h1></div>
//                         {fruitItems}
//                     </MDBCollapse>
//                 </MDBCol>
//                 <MDBCol>
//                     <MDBCollapse show={showFourthElement} className='mt-3 card_flex best-book-h1'>
//                         <div><h1>Flowers</h1></div>
//                         {flowerItems}
//                     </MDBCollapse>
//                 </MDBCol>
//             </MDBRow>
//         </>
//         </div>
//         <div id="box">
//             <h1>hello</h1>
//         </div>
//     </div>
//     </div>
//   );
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//     onLoadProducts: () => dispatch(actionCreators.loadProducts()),
    
          
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//       all_products: state.all_products,
//       vegetable: state.vegetable,
//       fruit: state.fruit,
//       flower: state.flower,
      
//   }
// }




// export default connect(mapStateToProps, mapDispatchToProps)(App);