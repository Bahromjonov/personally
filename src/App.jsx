import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import MainRootLayout from './layouts/MainRootLayout'
import Home from './pages/Home'
import IjtimoiyTarmoqlar from './pages/IjtimoiyTarmoqlar'
import Maqolalar from './pages/Maqolalar'

const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainRootLayout />}>
        <Route index element={<Home />} />
        <Route path='maqolalar' element={<Maqolalar/>} />
        <Route path='IjtimoiyTarmoqlar' element={<IjtimoiyTarmoqlar/>}/>
      </Route>
    )
  )
  return (
    <RouterProvider router={router} />
  )
}

export default App