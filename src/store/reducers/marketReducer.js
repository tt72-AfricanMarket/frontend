//import actions
import { ADD_TO_CART } from '../actions'

//initial state
const initialState = {
    products: [
        { id: "1", name: "first" },
        { id: "2", name: "second" }
    ]
}

//reducer
export const marketReducer = (state = initialState, action) => {
    switch (action.type) {

        case ADD_TO_CART:
            console.log("added to cart")
            // const newProduct = {
            //     id: state.products.length + 1,
            //     name: action.payload.name
            // }
            return state
            // {
            //     // ...state,
            //     // products: [
            //     //     ...state.products,
            //     //     newProduct
            //     // ]
            // }

        case "REMOVE_PRODUCT":
            return { //copy products all products except the one matching our payload id
                ...state,
                products: [...state.products, action.payload],

            }

        default:
            return state;

    }
}

 //add product
 //remove product
 //edit product
 //default