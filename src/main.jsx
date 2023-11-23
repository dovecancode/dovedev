import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
// import TempHome from './TempHome'
import App from './App'
import './index.css'
import { Home, PortfolioPage } from './pages'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<Home />} />
      <Route path="/portfolios" element={<PortfolioPage />} />
    </Route>
  )
)

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />,
//     children: [
//       {
//         path: '/',
//         element: <Home />,
//       },
//       {
//         path: '/portfolios',
//         element: <PortfolioPage />,
//       },
//     ],
//   },
// ])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
    {/* <TempHome /> */}
  </React.StrictMode>
)
