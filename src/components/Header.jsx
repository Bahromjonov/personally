import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import IjtimoiyTarmoqlar from '../pages/IjtimoiyTarmoqlar'
import Maqolalar from '../pages/Maqolalar'

// Imgs
import logo from '../assets/Logo.svg'

const Header = () => {
    
    return (
        <div className='bg-HappyYipee py-7'>
            <div className='main-container flex justify-between items-center'>
                <div className='flex items-center'>
                    <Link className=' mr-60'>
                        <img className='w-36 h-6 ' src={logo} alt="logo img" />
                    </Link>
                    <nav>
                        <ul className='flex items-center space-x-5'>
                            <li>
                                <Link className='main-still'>
                                    <Maqolalar />
                                </Link>
                            </li>
                            <li>
                                <Link className='main-still'>
                                    <IjtimoiyTarmoqlar />
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                {/* Til va havar qoldirish */}
                <div className='flex items-center space-x-16'>
                    <div>
                        <select className='bg-transparent'>
                            <option value="O'zbek">O'zbek</option>
                            <option value="O'Русский">Русский</option>
                            <option value="English">English</option>
                        </select>
                    </div>
                    <button className='main-button-still py-2.5 px-5 rounded-10'>Xabar qoldirish</button>
                </div>
            </div>

        </div>
    )
}

export default Header