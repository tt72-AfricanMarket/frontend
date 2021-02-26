// imports from action file example --v
import {
	FETCH_CURRENT_USER_START,
	FETCH_CURRENT_USER_SUCCESS,
	FETCH_CURRENT_USER_FAILURE
} from '../actions/Actions'

// set initial state for the app here - Example --v
const initialState = {
	isLoading: false,
	isLoggedIn: true,
	itemData: [],
	userData: {},
	newItemData: {},
	error: ''
}

export const Reducer = (state = initialState, action) => {
    switch (action.type)
    {
        // Example --v
        case FETCH_CURRENT_USER_START:
			return {
				...state,
				isLoading: true,
				error: ''
			}

		case FETCH_CURRENT_USER_SUCCESS:
			return {
				...state,
				isLoading: false,
				recipeData: action.payload,
				error: ''
			}

		case FETCH_CURRENT_USER_FAILURE:
			return {
				...state,
				isLoading: false,
				error: action.payload
			}

        default:
            return state;
    }
}
