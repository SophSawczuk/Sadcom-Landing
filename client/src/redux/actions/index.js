import axios from "axios"

const URL = "http://localhost:3001"

export function getReviews() {
    try {
        return async function(dispatch) {
                const review = await axios.get(`${URL}/reviews`)
            return dispatch({
                type: "GET_REVIEWS",
                payload: review.data
            })
        }
    } catch(error) {
        console.log(error)
    }
}
export function postReview(payload) {
    try {
        return async function(dispatch) {{
            axios.post(`${URL}/reviews`, payload)
            return dispatch({
                type: "POST_REVIEW"
            })
        }}
    } catch (error) {
        console.log(error)
    }
}