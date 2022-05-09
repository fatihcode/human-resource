import axios from 'axios'

export const API = axios.create({
	// baseURL: 'https://resource-human.herokuapp.com'
	baseURL: 'http://127.0.0.1:9000'
})


export function getUsers() {
	return dispatch => {
		dispatch({
			type: "GET_USERS",
			payload: API.get('/').then(res => res.data)
		})
	}
}


export function delUser(id) {
	return dispatch => {
		dispatch({
			type: "DEL_USER",
			payload: API.delete(`/${id}`)
		})
	}
}


export function postUser(user) {
	return dispatch => {
		dispatch({
			type: "POST_USER",
			payload: API.post(`/`,user)
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