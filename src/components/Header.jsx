import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import IjtimoiyTarmoqlar from '../pages/IjtimoiyTarmoqlar'
import Maqolalar from '../pages/Maqolalar'

// Imgs
import logo from '../assets/Logo.svg'
import heroImg from '../assets/white-img.png'
import AlisherRustamov from '../assets/AlisherR.png'
const Header = () => {

    return (
        <div className='bg-HappyYipee bg-bg-img bg-cover '>
            <div className='main-container  flex justify-between items-center py-7 '>
                <div className='flex items-center'>
                    <h1 className='flex'>
                        <Link className=' mr-60'>
                            <img className='w-36 h-6 ' src={logo} alt="logo img" />
                        </Link>
                    </h1>
                    <nav>
                        <ul className='flex items-center space-x-5'>
                            <li>
                                <Link to='maqolalar' className='main-still'>
                                    Maqolalar
                                </Link>
                            </li>
                            <li>
                                <Link to='IjtimoiyTarmoqlar' className='main-still'>
                                    IjtimoiyTarmoqlar
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                {/* Til va habar qoldirish */}
                <div className='flex items-center '>
                    <div className='mr-8'>
                        <select className='bg-transparent'>
                            <option value="O'zbek">O'zbek</option>
                            <option value="O'Русский">Русский</option>
                            <option value="English">English</option>
                        </select>
                    </div>
                    <button className='main-button py-2.5 px-5 rounded-10'>Xabar qoldirish</button>
                </div>
            </div>
            {/* Hero */}
            <section className='main-container flex items-center pt-4 relative'>
                <div className='max-w-464 space-y-8'>
                    <h1 className='text-black font-Cabin text-7xl leading-100 uppercase'>Alisher Rustamov</h1>
                    <p className='max-w-287 main-still'>Malevich Consulting asoschilardan <br /> biri  va 16 yillik SERVIS bo‘yicha mutaxassis</p>
                    <Link className='main-button p-5 inline-block rounded-10'>Men haqimda</Link>
                </div>
                <div className='flex'>
                    <img className='w-[550px] h-[638.85px]  ' src={heroImg} alt="" />
                    <img className='absolute bottom-0' src={AlisherRustamov} alt="" />
                </div>
            </section>
        </div>
    )
}

export default Header