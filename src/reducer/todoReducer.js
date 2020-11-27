import { types } from "../types"
import { todosArray } from '../todosArray'

const todosArray = [
    {
        id: 1,
        todo: "Aprender React"
    },
   
]

export const todosReducer = (state = todosArray, action) => {
    const {type, payload} = action
    switch (type) {
        case types.addTodo:
            return{
                
            }
        case types.deleteTodo: 
            return {...state,
                todosArray: state.todosArray.filter(todo => todo.id !== payload)
            
            }
        case types.updateTodo: 
        return{
            
        }
        default:
            return state
    }
}