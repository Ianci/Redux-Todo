import { types } from "../types"

export const addTodo = (todo, id) => {
    return {
        type: types.addTodo,
        payload: {
            todo,
            id
        }
    }
}


export const deleteTodo = (todoId) => {
    return {
        type: types.deleteTodo,
        payload: todoId
    }
}

export const updateTodo = (todo) => {
    return {
        type: types.updateTodo,
        payload: todo
    }
}