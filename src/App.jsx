import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout/Layout'
import About from './pages/About/About'
import Urolog from './pages/Urolog/Urolog'
import Graphic from './pages/Work Graphics/Graphic'
import Menu from './pages/Menu/Menu'
import Flebologiya from './pages/Flebologiya/Flebologiya'
import Clinick from './pages/Clinick/Clinick'

function App() {
  const router = createBrowserRouter([
    {
      path : '/',
      element : <Layout />,
      children : [ 
        {
          index : true , 
          element : <Menu />
        },
        {
          path : "about",
          element : <About />
        },
        {
          path : "urolog",
          element : <Urolog />
        },
        {
          path : "graphic",
          element : <Graphic />
        },
        {
          path : "plebologiya",
          element : <Flebologiya />
        },
        {
          path : "clinic",
          element : <Clinick />
        }
      ]
    }
  ])
  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App