import { useState } from 'react'
import LoggedIn from './components/LoggedIn'
import Profile from './components/Profile'
import UserContextProvider from './context/UserContextProvider'
import './App.css'

function App() {
  

  return (
    <UserContextProvider>
      <h1>Context API</h1>
      <LoggedIn/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
