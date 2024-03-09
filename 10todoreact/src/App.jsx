import { useEffect, useState } from 'react'
import './App.css'
import {ToDoProvider} from './contexts/index'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'

function App() {
  const [toDos, setToDos] = useState([])
  
  const addTodo=(todo)=>{
          setToDos((prev)=>[...prev,{...todo}])
  }
  const updateTodo=(id,todo)=>{
    setToDos((prev)=> prev.map((prevTodo)=>(prevTodo.id===id?todo :prevTodo )))
  }
  const deleteTodo=(id)=>{
    setToDos((prev)=> prev.filter((currToDo)=>currToDo.id!==id))
  }

  const toggleComplete=(id)=>{
    setToDos((prev)=> prev.map((prevTodo)=>(prevTodo.id===id?{...prevTodo,completed :!prevTodo.completed} :prevTodo )))
  }

   useEffect (()=>{
    const toDoList=JSON.parse(localStorage.getItem("toDos"))

    if(toDoList && toDoList.length>0)
    {
      setToDos(toDoList);
    }
   },[])

   useEffect(()=>{
    localStorage.setItem("toDos",JSON.stringify(toDos))
     },[toDos])
   
  return (
    <ToDoProvider value={{toDos,addTodo,updateTodo,deleteTodo,toggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <TodoForm/>
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {toDos.map((todo) => (
              <div key={todo.id} className='w-full'>
                <TodoItem todo={todo}/>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ToDoProvider>
  )
}

export default App
