import { homeDAta } from '../data'
import React from 'react'
import { Link } from 'react-router-dom'

const Tafsiyalar = () => {
    return (
        <div className='main-container py-16'>
            <ul className='grid grid-cols-3 gap-76'>
                {homeDAta.map((item) => (
                    <li key={item.id} className='space-y-2.5 hover:shadow-lg  cursor-pointer '>
                        <img className='w-full max-w-300 h-300 mb-6' src={item.img} alt={item.title} />
                        <h2 className='separated'>{item.title}</h2>
                        <p className='main-still'>{item.description}</p>
                        <span className='text-sm font-medium font-releway uppercase leading-none inline-block'>{item.date}</span>
                    </li>
                ))}

            </ul>
        </div>
    )
}

export default Tafsiyalar