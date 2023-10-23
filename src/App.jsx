import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import MainRootLayout from './layouts/MainRootLayout'

const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainRootLayout/>}>

      </Route>
    )
  )
  return (
    <RouterProvider router={router} />
  )
}

export default App