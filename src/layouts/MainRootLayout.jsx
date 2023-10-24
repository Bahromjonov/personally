import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'

const MainRootLayout = () => {
    return (
        <>
            <Header />
            <main>
                <Outlet/>
            </main>
        </>
    )
}

export default MainRootLayout