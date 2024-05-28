import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Components/Home/Home.jsx'
import StudentPortal from './Components/StudentPortal.jsx'
import Contact from './Components/Contact.jsx'
import Login from './Components/Login.jsx'

const router= createBrowserRouter([
  {
    path:"/",
    element: <Layout/>,
    children:[
      {
        path:"",
        element:<Home/>
      
      },
      {
        path:"/login",
        element:<Login/>
      
      },
      {
        path:"/sportal",
        element:<StudentPortal/>
      
      },
      {
        path:"/contact",
        element:<Contact/>
      
      },
      
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
