import {  homeDAta } from '../data'
import React from 'react'
import { Link } from 'react-router-dom'

const Tafsiyalar = () => {
    return (
        <div className='main-container py-16'>
            <ul className='grid grid-cols-3 gap-76'>
            {homeDAta.map((item) => (
                <li key={item.id}>
                    <img src={item.img} alt={item.title} />
                    <h2>{item.title}</h2>
                    <p>{item.description}</p>
                    <p>{item.date}</p>
                </li>
            ))}

            </ul>
        </div>
    )
}

export default Tafsiyalar