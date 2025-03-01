import React from 'react'
import "./App.css"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from "./layout/layout.jsx"
import About from './pages/about/about.jsx'
import Contact from './pages/contact/contact.jsx'
import Home from './pages/home/home.jsx'
import Pricing from './pages/pricing/pricing.jsx'
import Blog from './pages/blog/blog.jsx'
import Details from './pages/detailsBlog/details.jsx'


function App() {
const router = createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[
      {
      index:true,
      element:<Home/>
    },
      {
      path:"/about",
      element:<About/>
    },
    {
      path:"/contact",
      element:<Contact/>
    },
    {
      path:"/pricing",
      element:<Pricing/>
    },
    {
      path:"/blog",
      element:<Blog/>
    },
    {
      path:"/details",
      element:<Details/>
    }
  ]

  }
])


  return (
    <div>
     <RouterProvider router={router}/>
    </div>
  )
}

export default App
