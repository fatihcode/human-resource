import { Action } from "history"
import { brand, review, slideItem, team, aboutItem } from "./data"

const INITIAL_STATE = {
	candidates: [],
	error: "",
	loading: false,
	sending: false,
	review,
	team,
	brand,
	slideItem,
	aboutItem
}

export default (state = INITIAL_STATE, { type, payload }) => {
	switch (type) {

		case "GET_USERS_PENDING":
			return { ...state, loading: true }

		case "GET_USERS_FULFILLED":
			return { ...state, candidates: payload.sort((a, b) => a.name.localeCompare(b.name)), error: "", loading: false }

		case "GET_USERS_REJECTED":
			return { ...state, error: payload.message, loading: false }


		//--------------------------------------------------------------


		case "POST_USER_PENDING":
			return { ...state, sending: true }

		case "POST_USER_FULFILLED":
			return { ...state, candidates: [...state.candidates, payload.data], sending: false }

		case "POST_USER_REJECTED":
			return { ...state, error: payload.data.errors.message, sending: false }


		//--------------------------------------------------------------




		//--------------------------------------------------------------

		case "DEL_USER_FULFILLED":
			return { ...state, candidates: state.candidates.filter(item => item._id !== payload.data._id), error: "" }


		//--------------------------------------------------------------


		case "POST_REVIEW":
			return { ...state, review: [payload, ...state.review] }

		default:
			return state
	}
}