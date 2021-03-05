//import actions
import { ADD_LISTING } from '../actions'

const initialState = {
    product: {
        category: {
            categoryid: 0,
            categoryname: ""
        },
        description: "",
        imageUrl: "",
        location: {
            locationid: 0,
            country: ""
        },
        name: "",
        price: 0,
        productid: 0,
        quantity: 1
    }
}

//actions get data from our component and push it allll over here, where we set it into state
//this will let us send state over to the component to update the product listing for the user

//reducer
export const userReducer = (state = initialState, action) => {
    const product = action.payload
    switch (action.type) {
        case ADD_LISTING:
            const newListing = { //update all submitted values from the payload
                category: {
                    categoryid: product.category.categoryid,
                    categoryname: product.category.categoryname
                },
                description: product.description,
                imageUrl: product.imageUrl,
                location: {
                    locationid: product.location.locationid,
                    country: product.location.country
                },
                name: product.name,
                price: product.price,
                quantity: product.quantity,
            }
            return {
                ...state,
                product: newListing
            }
        default: return state;
    }
}

