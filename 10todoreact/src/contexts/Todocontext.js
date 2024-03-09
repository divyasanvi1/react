import { createContext,useContext } from "react";

export const toDoContext=createContext({

    toDos:[
        {
        id:1,
        toDo:"todomsg",
        completed:false
        }
    ],
    addTodo: (todo)=>{},
    updateTodo :(id,todo)=>{},
    deleteTodo :(id)=>{},
    toggleComplete :(id)=>{}
})

export const ToDoProvider=toDoContext.Provider

export const useToDo=()=>{
    return useContext(toDoContext)
}