import { useState } from 'react'
import AddTodo from './components/AddTodo'
import Todo from './components/Todo'
import './App.css'

function App() {
  
  return (
    <>
      <h1>Learn About redux toolkit</h1>
      <AddTodo/>
      <Todo/>
    </>
  )
}

export default App
