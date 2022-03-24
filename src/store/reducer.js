import { brand, review, slideItem, team, aboutItem } from "./data"

const INITIAL_STATE = {
    candidates: [],
    error: "",
    fetching: true,
    review,
    team,
    brand,
    slideItem,
    aboutItem
}

export default (state = INITIAL_STATE, { type, payload }) => {
    switch (type) {

        case "GET_DATA_PENDING":
            return { ...state, fetching: true }

        case "GET_DATA_FULFILLED":
            return { ...state, candidates: payload.sort((a, b) => a.name.localeCompare(b.name)), error: "", fetching: false }

        case "GET_DATA_REJECTED":
            return { ...state, error: payload.message, fetching: false }

        case "POST_REVIEW":
            return { ...state, review: [payload, ...state.review] }

        default:
            return state
    }
}