import { API_URL } from "../config/env"
import axios from 'axios'


export function getData() {
    return dispatch => {

        dispatch({
            type: "GET_DATA",
            payload: axios.get(API_URL).then(res => res.data)
        })
    }
}


export function getDetail(payload) {
    return dispatch => {

        dispatch({
            type: "GET_DETAIL",
            payload
        })
    }
}
