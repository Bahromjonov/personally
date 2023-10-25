import { homeDAta } from '../data'
import { React, useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next';


const Tafsiyalar = () => {
    const { t, i18n } = useTranslation();
    const [selectedLanguage, setSelectedLanguage] = useState(
        localStorage.getItem('selectedLanguage') || 'uz'
    );

    useEffect(() => {
        window.scrollTo(0, 0);
    });

    useEffect(() => {
        i18n.changeLanguage(selectedLanguage);
        localStorage.setItem('selectedLanguage', selectedLanguage);
    }, [selectedLanguage]);

    const changeLanguage = (languageCode) => {
        setSelectedLanguage(languageCode);
    };

    return (
        <div>
            <div className='w-full max-w-1051 '>
                <ul className='grid grid-cols-3 gap-76 '>
                    {homeDAta.map((item) => (
                        <li key={item.id} className='flex flex-col items-start p-2 space-y-2.5 hover:shadow-lg  cursor-pointer rounded-xl'>
                            <img className='w-full max-w-300 mb-6' src={item.img} alt={item.title} />
                            <div className='space-y-2.5 grow'>
                                <h2 className='separated'>{t(item.title)}</h2>
                                <p className='main-still'>{t(item.description)}</p>
                            </div>
                            <div>
                                <span className='text-sm  items-end font-medium bg-LynxWhite py-3 px-2.5 uppercase leading-none inline-block rounded-lg'>{item.date}</span>

                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Tafsiyalar