const INITIAL_STATE = {
    candidates: [],
    detail: {},
    error: "",
    fetching: false,
    fetched: false
}

export default (state = INITIAL_STATE, { type, payload }) => {
    switch (type) {

        case "GET_DATA_PENDING":
            return { ...state, fetching: true }

        case "GET_DATA_FULFILLED":
        
            return { ...state, candidates: payload.sort((a, b) => a.name.localeCompare(b.name)), fetching: false, fetched: true }

        case "GET_DATA_REJECTED":
            return { ...state, error: payload.message, fetching: false }

        case "GET_DETAIL":
            return { ...state, detail: payload }



        default:
            return state
    }
}
