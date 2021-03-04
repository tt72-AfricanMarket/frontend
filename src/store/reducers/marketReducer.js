//import actions
import { ADD_TO_CART } from '../actions'

//initial state
const initialState = {
    products: [
        { productid: 0, name: '', quantity:0, price:0},
    ]
}

//reducer
export const marketReducer = (state = initialState, action) => {
    switch (action.type) {

        case ADD_TO_CART:
            console.log(state)
            const newProduct = {
                productid: action.payload.productid,
                name: action.payload.name,
                quantity: action.payload.quantity,
                price: action.payload.price
            }
            return {
                ...state,
                products: [...state.products, newProduct]
      
        }
        default:
            return state;

    }
}

 //add product
 //remove product
 //edit product
 //default
     
        // case REMOVE_PRODUCT:
        //     return { //copy products all products except the one matching our payload id
        //         ...state,
        //         products: [...state.products, action.payload],

        //     }