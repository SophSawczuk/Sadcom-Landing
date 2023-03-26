const initialState = {
    reviews: [],
}

export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case "GET_REVIEWS":
            return {
                ...state,
                reviews: action.payload
            };
        case "POST_REVIEW": 
            return {
                ...state,
            }
        default:
            return state;
    }
}