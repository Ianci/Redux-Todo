
import { types } from "../types"




export const login = (name) => {
    return {
        type: types.login,
        payload: {
            name
        }
    }
}

export const logout = () => {
    return {
        type: types.logout
    }
}