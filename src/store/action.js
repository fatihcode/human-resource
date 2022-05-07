
import axios from 'axios'

export const API = axios.create({
	// baseURL: 'https://resource-human.herokuapp.com'
	baseURL: 'http://127.0.0.1:9000'
})


export function getData() {
	return dispatch => {

		dispatch({
			type: "GET_DATA",
			payload: API.get('/').then(res => res.data)
		})
	}
}


// export function postData() {
// 	return dispatch => {

// 		dispatch({
// 			type: "POST_DATA",
// 			payload: API.post(API_URL,{

// 			}).then(res => res.data)
// 		})
// 	}
// }


export function postReview(payload) {
	return dispatch => {

		dispatch({
			type: "POST_REVIEW",
			payload
		})
	}
}