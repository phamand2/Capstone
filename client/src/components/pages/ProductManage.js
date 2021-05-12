import { useState } from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../../stores/creators/actionCreators' 
import { useEffect , setState , } from 'react'
import { NavLink } from "react-router-dom";
import React from 'react';
import { MDBCollapse, MDBBtn, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import '../css/App.css';


function ProductManage(props) {
  const [ProductManage, setProductManage] = useState({})


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



  
    useEffect(() => {
        console.log("use effect is fired")
        props.onLoadProducts()
    },[])

    const handledelete = (_id) => {
        props.onDelete(_id)
        props.onLoadProducts()
        
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
            <button onClick= {() => handledelete(items._id)}>Delete</button>
            </div>
            <div>
            <button><NavLink to= {`/update-product/${items._id}`}>update</NavLink></button>
            </div>
            <div>
            <p>Id : {items._id}</p>
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
            <button onClick= {() => handledelete(items._id)}>Delete</button>
            </div>
            <div>
            <button><NavLink to= {`/update-product/${items._id}`}>update</NavLink></button>
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
            <button onClick= {() => handledelete(items._id)}>Delete</button>
            </div>
            <div>
            <button><NavLink to= {`/update-product/${items._id}`}>update</NavLink></button>
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
            <button onClick= {() => handledelete(items._id)}>Delete</button>
            </div>
            <div>
            <button><NavLink to= {`/update-product/${items._id}`}>update</NavLink></button>
            </div>

            </div>
    })




  
  const handleSave =() => {
    
    fetch ('http://localhost:5000/add-products',{
        method: 'POST',
        
        headers: {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify({
            imageurl: ProductManage.imageurl,
            title: ProductManage.title,
            description: ProductManage.description,
            rate: ProductManage.rate,
            category: ProductManage.category,
            subcategory: ProductManage.subcategory,
            
        })
    }).then(response => response.json())
    .then(result => {
        if(result.success) {
            
          alert("Your Product Has Been Added to Database")
          
        }
       
    }).catch(error => {
        console.log(error)
    })
  }

  const handleChange = (e) => {
    setProductManage({
        ...ProductManage,
        [e.target.name]: e.target.value,
        
    })
  }

  return (
      <div>
            <div id="header">
              <h1>Admin Page</h1>
            </div>
            <div id="inputsection">
                <div id="storenametextbox">
                    <label>Image</label>
                    <input onChange = {handleChange}  type="text" name="imageurl" />
                </div>
                <div  id="storenametextbox">
                    <label>title</label>
                    <input onChange = {handleChange}  type="text" name="title" />
                </div >
                <div id="storenametextbox">
                    <label>description</label>
                    <input onChange = {handleChange}  type="text" name="description" />
                </div>
                <div id="storenametextbox">
                    <label>rate</label>
                    <input onChange = {handleChange}  type="text" name="rate" />
                </div>
                <div id="storenametextbox">
                    <label>category</label>
                    <input onChange = {handleChange}  type="text" name="category" />
                </div>
                <div id="storenametextbox">
                    <label>subcategory</label>
                    <input onChange = {handleChange}  type="text" name="subcategory" />
                </div>
                <div>
                    <button id="btnsubmit" onClick = {handleSave}>Add product</button>
                </div>
            </div><br></br>
            <div id="box">
            <>
                <div id="header">
                    <h1>Edit Or Delete Products</h1>
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
                <h1>hello</h1>
            </div>
        </div>
    
  );
}



const mapDispatchToProps = (dispatch) => {
  return {
    onLoadProducts: () => dispatch(actionCreators.loadProducts()),
    onDelete: (_id) => dispatch(actionCreators.deleteProduct(_id)),
          
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




export default connect(mapStateToProps, mapDispatchToProps)(ProductManage);