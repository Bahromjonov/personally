import React from 'react'
import MashxurMaqolalar from '../components/MashxurMaqolalar'
import SherzodQayumov from '../components/SherzodQayumov'
import Tafsiyalar from '../components/Tafsiyalar'

const Home = () => {
    return (
        <div className='main-container flex gap-36 py-16'>
            <div className='w-full max-w-4xl '>
                <Tafsiyalar />
                <SherzodQayumov />
            </div>
            <div className='w-full max-w-203'>
                <MashxurMaqolalar />
            </div>
        </div>
    )
}

export default Home