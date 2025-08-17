import {createContext, useContext} from 'react' 

export const TodoContext = createContext({
    todos: [{
        id:1,
        todo: 'todoMsg',
        title: 'Learn React',
        completed: false,
    }],
    
    addTodo: (todo) => {},
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleTodo: (id) => {},
    editTodo: (id, todo) => {}, 

})

export const useTodo = () => {
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider 
