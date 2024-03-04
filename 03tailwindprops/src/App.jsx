import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  let myObj={
    username:"hitesh",
    age:21
  }
  /*myArr={name:chai} this object cannot be passed*/
      // array can not be passed
     // <Card username="chaiaurcode" someObj={newArr}/>
      let newArr=[1,2,3]
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 mb-4'>Tailwind Test</h1>
      <Card username="chaiaurcode" btnText="click me" />
      <Card username="divya"/>
    </>
  )
}

export default App
