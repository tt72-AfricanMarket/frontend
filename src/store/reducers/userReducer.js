//import actions

//dummy data
const dummyUserData = {
    id: 1,
    owner: true,
    username: "admin",
    firstName: "admin",
    lastName: "istrator",
    password: "password",
    email: "email",
    primaryMarket: "uganda",
    location: "location",
    avatar: "avatar_url"
}

//initial state
const initialState = {
    users: [dummyUserData, { ...dummyUserData, id: 2, owner: false, username: "user", firstName: "regular", lastName: "user" }]
}


//reducer
export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_USER":
            const newUser = {
                id: state.users.length + 1,
                owner: action.payload.owner,
                username: action.payload.username,
                firstName: action.payload.firstName,
                lastName: action.payload.lastName,
                password: action.payload.password,
                email: action.payload.email,
                primaryMarket: action.payload.primaryMarket,
                location: action.payload.location,
                avatar: action.payload.avatar
            }
            return {
                ...state,
                users: [
                    ...state.users,
                    newUser
                ]
            }
        default: return state;
    }
}