import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Tafsiyalar from '../components/Tafsiyalar'

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