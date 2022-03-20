import { API_URL } from "../config/env"

export const getData = (payload) => ({
    type: "GET_DATA",
    payload
})
