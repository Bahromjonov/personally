import React from 'react'
import IjtimoiyTarmoqlar from '../components/IjtimoiyTarmoqlar'
import MashxurMaqolalar from '../components/MashxurMaqolalar'
import SherzodQayumov from '../components/SherzodQayumov'
import Tafsiyalar from '../components/Tafsiyalar'

const Home = () => {
    return (
        <div className='main-container  py-16'>
            <div className='  flex gap-36 '>
                <Tafsiyalar />
                <MashxurMaqolalar />
            </div>
            <div className='felx '>
                <SherzodQayumov />
                <IjtimoiyTarmoqlar/>
            </div>
        </div>
    )
}

export default Home