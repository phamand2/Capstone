import { Component } from "react"
import { useState } from 'react'
import { useEffect , setState } from 'react'
import { connect } from 'react-redux'


function ProductUpdate(props) {
    const [ProductManage, setProductManage] = useState({})

    const handleChange = (e) => {
        setProductManage({
            ...ProductManage,
            [e.target.name]: e.target.value,
            
        })
    }
    // var  all_products = props.all_products 
    // console.log(all_products)
    const handleupdate =() => {
        
        const id = props.match.params
        console.log(id)
        fetch (`http://localhost:5000/update-product/${id._id}`,{
            method: 'PUT',
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
                console.log("Product updated")
                
                alert("Your Product Has Been Added to Database")
                props.history.push('/product-manage')

                
            }
        })
    }




    return<div>
        <h1>update page</h1>
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
                <button onClick = {handleupdate}>update product</button>
            </div>
        </div><br></br>
    </div>
}

const mapStateToProps = (state) => {
    return {
        all_products: state.all_products
    }
}

export default connect(mapStateToProps)(ProductUpdate);

