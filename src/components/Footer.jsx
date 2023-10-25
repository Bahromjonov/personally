import React from 'react'
import { useTranslation } from 'react-i18next'

const Footer = () => {
    const {t} = useTranslation()
    return (
        <div className='bg-paleBlack py-20'>
            <div className='main-container flex items-center justify-between'>
                <div>
                    <h1 className='w-full max-w-166 text-white text-3xl font-bold font-releway uppercase leading-10 mb-2.5'>Alisher Rustamov</h1>
                    <p className='w-full max-w-287 text-white text-17 font-normal font-releway leading-relaxed'>{t("malevich")}</p>
                </div>
                <div className='space-y-5'>
                    <span className='inline-block text-white text-2xl font-extrabold font-releway capitalize leading-9'>{t("xabar")}</span>
                    <p className='w-full max-w-358 text-white text-17 font-normal font-releway leading-relaxed'>{t("fikirlar")}</p>
                    <form action="https://echo.htmlacademy.ru">
                        <input className='py-4 pl-5 text-black text-opacity-50 text-sm font-normal font-releway leading-tight rounded-l-10' type="text" placeholder={t("xabar")} />
                        <button className='py-4 rounded-r-10 px-8 bg-HappyYipee text-black text-sm font-extrabold font-releway leading-tight'>{t("yuborish")}</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Footer