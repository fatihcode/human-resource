const INITIAL_STATE = {
    candidates: []
}

export default (state = INITIAL_STATE, { type, payload }) => {
    switch (type) {

        case "GET_DATA":
            return { ...state, candidates: payload }

        default:
            return state
    }
}
