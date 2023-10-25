import React from 'react'
// Imgs
import telegram from '../assets/icons/telegram.svg'
import youtube from '../assets/icons/youtube.svg'
import instagram from '../assets/icons/instagram.svg'
import fecebook from '../assets/icons/fecebook.svg'
import { useTranslation } from 'react-i18next'

const IjtimoiyTarmoqlar = () => {
  const { t } = useTranslation();

  return (
    <div id='IjtimoiyTarmoqlar' className='w-full max-w-203'>
      <h2 className='separated mb-5'>{t("IjtimoiyTarmoqlar")}</h2>
      <ul className='space-y-2.5'>
        <li>
          <a className='link flex' href="#" target='_blank'>
            <img className=' mr-2.5' src={fecebook} alt="fecebook icon" />
            Facebook
          </a>
        </li>
        <li>
          <a className='link flex' href="#" target='_blank'>
            <img className=' mr-2.5' src={telegram} alt="telegram icon" />
            Telegram
          </a>
        </li>
        <li>
          <a className='link flex' href="#" target='_blank'>
          <img className=' mr-2.5' src={instagram} alt="instagram icon" />
            Instagram
          </a>
        </li>
        <li>
          <a className='link flex' href="#" target='_blank'>
          <img className=' mr-2.5' src={youtube} alt="youtube icon" />
            Youtube
          </a>
        </li>
      </ul>
    </div>
  )
}

export default IjtimoiyTarmoqlar