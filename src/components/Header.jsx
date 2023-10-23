import React from 'react'
import { Link } from 'react-router-dom'

// Imgs
import logo from '../assets/Logo.svg'
const Header = () => {
    return (
        <div className='bg-HappyYipee py-7'>
            <div className='main-container '>
                <Link className=''>
                    <img className='w-36 h-6 ' src={logo} alt="logo img" />
                </Link>


            </div>

        </div>
    )
}

export default Header