import * as actionTypes from '../stores/actions/actionTypes'


const initialState = {
    all_products : [],
    vegetable:[],
    fruit:[],
    flower:[],

     
}

const reducer = (state = initialState, action) => {

    switch(action.type) {

        case actionTypes.Products_Loaded:{
            return {
                ...state,
                all_products: action.payload
            }
        }

        case actionTypes.Products_Loaded_VEGETABLE:{
            return {
                ...state,
                vegetable: action.payload
            }
        }

        case actionTypes.Products_Loaded_FRUIT:{
            return {
                ...state,
                fruit: action.payload
            }
        }

        case actionTypes.Products_Loaded_FLOWER:{
            return {
                ...state,
                flower: action.payload
            }
        }
        
        default: 
            return state 

    }

    
}

export default reducer