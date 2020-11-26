import { types } from "../types"

const initialState = {
    username: null,
    isLoggedIn : false
}
export const authReducer = (state = initialState, action) => {
    const {type, payload} = action
    switch (type) {
        case types.login:
            return {
                username: payload,
                isLoggedIn: true
            }
        case types.logout: 
            return {
                username: null,
                isLoggedIn: false
            }
        default:
            return state
    }
}