import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from "react-i18next";
import i18next from "i18next";

// Imgs
import logo from '../assets/Logo.svg'
import heroImg from '../assets/white-img.png'
import AlisherRustamov from '../assets/AlisherR.png'
import bg from '../assets/bg-img.png'

const Header = () => {
    const [navbar, setNavbar] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState(
        localStorage.getItem("selectedLanguage") || "uz"
    );

    const languages = [
        { code: "uz", name: "O‘zbek" },
        { code: "en", name: "English" },
        { code: "ru", name: "Русский" },
    ];

    const changeLanguage = (languageCode) => {
        setSelectedLanguage(languageCode);
        i18next.changeLanguage(languageCode);
        localStorage.setItem("selectedLanguage", languageCode);
        window.scrollTo(0, 0);
    };

    const { t } = useTranslation();

    useEffect(() => {
        const savedLanguage = localStorage.getItem("selectedLanguage");
        if (savedLanguage) {
            setSelectedLanguage(savedLanguage);
            i18next.changeLanguage(savedLanguage);
        }
    }, []);

    return (
        <div className='bg-HappyYipee  bg-cover '>
            <div className='main-container  flex justify-between items-center py-7 relative'>
                <img className='bg-cover absolute top-0 -right-40' src={bg} alt="" />
                <div className='flex items-center z-10'>
                    <h1 className='flex'>
                        <Link className=' mr-60'>
                            <img className='w-36 h-6  mobile:w-[135px] ' src={logo} alt="logo img" />
                        </Link>
                    </h1>
                    <nav>
                        <ul className='flex items-center mobile:hidden  space-x-5 568:hidden sm:flex '>
                            <li>
                                <a href='#maqolalar' className='main-still'>
                                    {t('maqolalar')}
                                </a>
                            </li>
                            <li>
                                <a href='#IjtimoiyTarmoqlar' className='main-still'>
                                    {t("IjtimoiyTarmoqlar")}
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
                {/* Til va habar qoldirish */}
                <div className='flex items-center z-10'>
                    <div className='mr-8'>
                        <select
                            id="languageSelect"
                            className="py-1 px-2 bg-transparent text-gray-800 rounded outline-none md:flex mobile:hidden 568:flex "
                            value={selectedLanguage}
                            onChange={(e) => changeLanguage(e.target.value)}
                        >
                            {languages.map((lang) => (
                                <option key={lang.code} value={lang.code} className="bg-paleBlack text-white">
                                    {lang.name}
                                </option>
                            ))}
                        </select>
                        <div className='bg-white p-3 rounded-lg space-y-1 hidden mobile:flex mobile:flex-col md:hidden lg:hidden sm:hidden 568:hidden'>
                            <div className='w-5 h-0.5 bg-black'></div>
                            <div className='w-5 h-0.5 bg-black'></div>
                            <div className='w-5 h-0.5 bg-black'></div>
                        </div>
                    </div>
                    <button className='main-button py-2.5 px-5 rounded-10 mobile:hidden md:hidden sm:hidden 853:flex'>{t("xabar")}</button>
                </div>
            </div>
            {/* Hero */}
            <section className='main-container flex items-center justify-between pt-4 relative'>
                <div className='max-w-464 space-y-8 '>
                    <h1 className='text-black font-Cabin text-7xl leading-100 uppercase'>Alisher Rustamov</h1>
                    <p className='max-w-287 main-still'>{t("malevich")}</p>
                    <Link className='main-button p-5 inline-block rounded-10'>{t("MenHaqimda")}</Link>
                </div>
                <div className='flex '>
                    <img className='w-[550px] h-[638.85px]  ' src={heroImg} alt="" aria-hidden='true' />
                    <img className='absolute bottom-0' src={AlisherRustamov} alt="Alisher Rustamov" />
                </div>
            </section>
        </div>
    )
}

export default Header