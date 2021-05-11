import { useState } from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../../stores/creators/actionCreators' 
import { useEffect , setState } from 'react'
import { NavLink } from "react-router-dom";
import '../css/App.css';


function ProductManage(props) {
  const [ProductManage, setProductManage] = useState({})
  
    useEffect(() => {
        console.log("use effect is fired")
        props.onLoadProducts()
    },[])

    const handledelete = (_id) => {
        props.onDelete(_id)
        props.onLoadProducts()
        
    }


    

    var  all_products = props.all_products 
    
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

            </div>
    })

  
  const handleSave =() => {
    console.log("hello")
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
        <div>
            <div>
                <label>Image</label>
                <input onChange = {handleChange}  type="text" name="imageurl" />
            </div>
            <div>
                <label>title</label>
                <input onChange = {handleChange}  type="text" name="title" />
            </div>
            <div>
                <label>description</label>
                <input onChange = {handleChange}  type="text" name="description" />
            </div>
            <div>
                <label>rate</label>
                <input onChange = {handleChange}  type="text" name="rate" />
            </div>
            <div>
                <label>category</label>
                <input onChange = {handleChange}  type="text" name="category" />
            </div>
            <div>
                <label>subcategory</label>
                <input onChange = {handleChange}  type="text" name="subcategory" />
            </div>
            <div>
                <button onClick = {handleSave}>Add product</button>
            </div>
        </div><br></br>
        <div>
            <div>
                <h1>all- products</h1>
            </div>
            <div className="card_flex best-book-h1">
                {all_productsItems}
            </div>
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
        all_products: state.all_products
    }
}




export default connect(mapStateToProps, mapDispatchToProps)(ProductManage);