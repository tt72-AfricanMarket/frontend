const initialState = [
    { id: 1, name: "herbs", price: 70, image: "url", description: "", quantity: 1 },
    { id: 2, name: "jerky", price: 80, image: "url", description: "", quantity: 1 }
]


export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case "WIP":
            return state;
        default:
            return state;
    }
}