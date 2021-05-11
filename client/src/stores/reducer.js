import * as actionTypes from '../stores/actions/actionTypes'


const initialState = {
    all_products : []

     
}

const reducer = (state = initialState, action) => {

    switch(action.type) {
        case actionTypes.Products_Loaded:{
            return {
                ...state,
                all_products: action.payload
            }
        }
        
        default: 
            return state 

    }

    
}

export default reducer