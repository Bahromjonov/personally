import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import MainRootLayout from './layouts/MainRootLayout'
import Home from './pages/Home'

const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainRootLayout />}>
        <Route index element={<Home />} />
      </Route>
    )
  )
  return (
    <RouterProvider router={router} />
  )
}

export default App