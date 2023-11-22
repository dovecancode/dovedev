import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import TempHome from './TempHome'
import Navbar from './components/Navbar'
import './index.css'
import { Home, Projects } from './pages'

// import App from './App'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/projects',
    element: <Projects />,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <RouterProvider router={router} />
    {/* <App /> */}
    {/* <TempHome /> */}
  </React.StrictMode>
)
