import { homeDAta } from '../data'
import React from 'react'
import { Link } from 'react-router-dom'

const Tafsiyalar = () => {
    return (
        <div className=' pb-16'>
            <div className='w-full max-w-1051 '>
                <ul className='grid grid-cols-3 gap-76 '>
                    {homeDAta.map((item) => (
                        <li key={item.id} className='flex flex-col items-start space-y-2.5 hover:shadow-lg  cursor-pointer '>
                            <img className='w-full max-w-300 mb-6' src={item.img} alt={item.title} />
                            <div className='space-y-2.5 grow'>
                                <h2 className='separated'>{item.title}</h2>
                                <p className='main-still'>{item.description}</p>
                            </div>
                            <div>
                            <span className='text-sm  items-end font-medium bg-LynxWhite py-3 px-2.5 uppercase leading-none inline-block'>{item.date}</span>

                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Tafsiyalar