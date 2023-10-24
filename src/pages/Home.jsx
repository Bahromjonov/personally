import React from 'react'
import IjtimoiyTarmoqlar from '../components/IjtimoiyTarmoqlar'
import MashxurMaqolalar from '../components/MashxurMaqolalar'
import SherzodQayumov from '../components/SherzodQayumov'
import Tafsiyalar from '../components/Tafsiyalar'

const Home = () => {
    return (
        <div className='main-container  '>
            <div className='  flex gap-36 py-16 '>
                <Tafsiyalar />
                <MashxurMaqolalar />
            </div>
            <div className='flex gap-36 '>
                <SherzodQayumov />
                <IjtimoiyTarmoqlar/>
            </div>
        </div>
    )
}

export default Home