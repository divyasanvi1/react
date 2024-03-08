import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider,createBrowserRouter} from 'react-router-dom'
import Layout from './Layout'
import Home from './components/Home/Home'
import About from './components/About/About'
import './index.css'
import Contact from './components/Contact/Contact'
import User from './components/User/User'
import GitHub from './components/GitHub/GitHub'
const router=createBrowserRouter(
  [
    {
      path: '/',
      element: <Layout/>,
      children:[
        {
          path: "",
          element: <Home/>
        },
        {
          path: "about",
          element: <About/> 
        },
        {
          path: "contact",
          element :<Contact/>
        },
        {
          path:"user/:userid",
          element :<User/>
        },
        {  
          
          path:"github",
          element :<GitHub/>
        },
      ]
    }
  ]
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
