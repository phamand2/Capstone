import * as actionTypes from '../actions/actionTypes'

export const loadProducts = () => {
    return(dispatch) => {
        

        // api call to fetch all products 
        fetch('http://localhost:5000/all-products')
            .then(response => response.json())
            .then (products => {
                console.log(products)
                dispatch ({type:actionTypes.Products_Loaded, payload: products})
        }).catch(error => {
            console.log(error)
        })

        // api call to fetch all vegetables 
        fetch('http://localhost:5000/all-products/vegetable')
            .then(response => response.json())
            .then (vegetable => {
                console.log(vegetable)
                dispatch ({type:actionTypes.Products_Loaded_VEGETABLE, payload: vegetable})
        }).catch(error => {
            console.log(error)
        })

        // api call to fetch all FRUIT 
        fetch('http://localhost:5000/all-products/fruit')
            .then(response => response.json())
            .then (fruit => {
                console.log(fruit)
                dispatch ({type:actionTypes.Products_Loaded_FRUIT, payload: fruit})
        }).catch(error => {
            console.log(error)
        })

        // api call to fetch all flower 
        fetch('http://localhost:5000/all-products/flower')
            .then(response => response.json())
            .then (flower => {
                console.log(flower)
                dispatch ({type:actionTypes.Products_Loaded_FLOWER, payload: flower})
        }).catch(error => {
            console.log(error)
        })

    }
}

export const deleteProduct = (_id) => {
    return(dispatch) => {
        
        fetch(`http://localhost:5000/admin/delete-product/${_id}`, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json'
            }})
            .then(response => response.json())
            .then (products => {
                if(products.success) {
                    alert("Product Is deleted")
                }
        }).catch(error => {
            console.log(error)
        })
    }
}