import { useState } from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../../stores/creators/actionCreators' 
import { useEffect , setState } from 'react'


function ProductManage() {
  const [ProductManage, setProductManage] = useState({})
  
  
    console.log(ProductManage)
  const handleSave =() => {
    console.log("hello")
    fetch ('http://localhost:5000/add-products',{
        method: 'POST',
        
        headers: {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify({
            images: ProductManage.images,
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
    </div>
    
  );
  }
const mapDispatchToProps = (dispatch) => {
  return {
    onAdd: (ProductManage) => dispatch(actionCreators.add(ProductManage)),
      
      
  }
}


export default ProductManage;