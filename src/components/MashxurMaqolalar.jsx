import React from 'react'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom'

const MashxurMaqolalar = () => {
  const { t } = useTranslation();
  return (
    <div id='maqolalar' className='w-full max-w-203'>
      <h2 className=' separated mb-5'>{t("MashhurMaqolalar")}</h2>
      <ul>
        <li className='border-b pb-2.5'>
          <Link to='/' className='main-sllti  inline-block hover:text-HappyYipee duration-200'>
            {t("BoyotaningXayotidan")}
          <span className='number-still inline-block mt-2.5'>13.08.2022</span>
          </Link>
        </li>
        <li className='border-b py-2.5 '>
          <Link to='/' className='main-sllti  inline-block hover:text-HappyYipee duration-200'>
            {t("velosipedMinibTugilmagan")}
          <span className='number-still block max-w-95 mt-2.5'>13.08.2022</span>
          </Link>
        </li>
        <li className='border-b py-2.5 '>
          <Link to='/' className='main-sllti   hover:text-HappyYipee duration-200'>
            {t("TalabalikDavridaIshlashYomonmi")}
          <span className='number-still block max-w-95 mt-2.5'>13.08.2022</span>
          </Link>
        </li>
        <li className=' pt-2.5 '>
          <Link to='/' className='main-sllti  inline-block hover:text-HappyYipee duration-200'>
             {t("KuchliResursingiz")}
          <span className='number-still block max-w-95 mt-2.5'>13.08.2022</span>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default MashxurMaqolalar