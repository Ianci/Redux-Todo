import { types } from "../types"

const initialState = {
    todos: [],
    activeTodo: null
}

export const authReducer = (state = initialState, action) => {
    const {type, payload} = action
    switch (type) {
        case types.addTodo:
            return{

            }
        case types.deleteTodo: 
            return {

            }
        case types.editTodo: {
            
        }
        default:
            return state
    }
}