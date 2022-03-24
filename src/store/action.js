import { API_URL } from "./data"
import axios from 'axios'


export function getData() {
    return dispatch => {

        dispatch({
            type: "GET_DATA",
            payload: axios.get(API_URL).then(res => res.data)
        })
    }
}


export function postReview(payload) {
    return dispatch => {

        dispatch({
            type: "POST_REVIEW",
            payload
        })
    }
}