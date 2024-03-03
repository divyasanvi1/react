import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

   //let counter = 5;
   let[counter,setCounter]=useState(15)
    function addValue()
    {
      console.log("clicked",counter)
      if(counter<20)
      {
        counter=counter+1;
        setCounter(counter);
      }
    }
    function subValue()
    {
      console.log("clicked",counter)
      if(counter>0)
      {
        counter=counter-1;
        setCounter(counter);
      }
    }
       
  return (
   <>
   <h1>Chai aur react</h1>
   <h2>counter value: {counter}</h2>
   <br/>
   <button onClick={addValue} id="one">Add{counter}</button>
   <br/>
   <br/>
   <button onClick={subValue} id="two">Remove{counter}</button>
   </>
  )
}

export default App
