import React from 'react'
import { Link } from 'react-router-dom'

const MashxurMaqolalar = () => {
  return (
    <div id='maqolalar' className='w-full max-w-203'>
      <h2 className=' separated mb-5'>Mashhur maqolalar</h2>
      <ul>
        <li className='border-b pb-2.5'>
          <Link to='/' className='main-sllti mb-2.5 inline-block hover:text-HappyYipee duration-200'>
            Boy-otaning xayotidan...
          </Link>
          <span className='number-still inline-block'>13.08.2022</span>
        </li>
        <li className='border-b py-2.5 '>
          <Link to='/' className='main-sllti mb-2.5 inline-block hover:text-HappyYipee duration-200'>
            Hech kim velosiped minib tug‘ilmagan.
          </Link>
          <span className='number-still inline-block'>13.08.2022</span>
        </li>
        <li className='border-b py-2.5 '>
          <Link to='/' className='main-sllti mb-2.5 inline-block hover:text-HappyYipee duration-200'>
            Talabalik davrida ishlash yomonmi?
          </Link>
          <span className='number-still inline-block'>13.08.2022</span>
        </li>
        <li className=' pt-2.5 '>
          <Link to='/' className='main-sllti mb-2.5 inline-block hover:text-HappyYipee duration-200'>
            Sizda qaysi kuchli resursingiz bor?
          </Link>
          <span className='number-still inline-block'>13.08.2022</span>
        </li>
      </ul>
    </div>
  )
}

export default MashxurMaqolalar