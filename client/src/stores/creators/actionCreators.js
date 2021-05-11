import * as actionTypes from '../actions/actionTypes'

export const loadProducts = () => {
    return(dispatch) => {
        
        fetch('http://localhost:5000/all-products')
            .then(response => response.json())
            .then (products => {
                console.log(products)
                dispatch ({type:actionTypes.Products_Loaded, payload: products})
            })
    }
}

export const deleteProduct = (_id) => {
    return(dispatch) => {
        
        fetch(`http://localhost:5000/delete-product/${_id}`, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json'
            }})
            .then(response => response.json())
            .then (products => {
                if(products.success) {
                    alert("Product Is deleted")
                }
            })
    }
}