import React, { useState, useRef } from 'react';
import poster from '../assets/social-img.png';
import vidyo from '../vidyo/vidyo.mp4';
import { Link } from 'react-router-dom';

// Imgs
import youtubeIcon from '../assets/icons/youtube-icon.svg';
import youtubePause from '../assets/pause.png';
import sevsa from '../assets/sevsa.png'
import gadoy from '../assets/post-thubnail.png'
import twoBoy from '../assets/two-boy.png'
import xodim from '../assets/xodim.png'
import { useTranslation } from 'react-i18next';

const SherzodQayumov = () => {
    const [isVideoPlaying, setVideoPlaying] = useState(true);
    const videoRef = useRef(null);
    const [hideButtons, setHideButtons] = useState(false);
    let timeoutId;

    const toggleVideo = () => {
        const video = videoRef.current;

        if (video.paused) {
            video.play();
        } else {
            video.pause();
        }

        setVideoPlaying(!isVideoPlaying);

        if (!hideButtons) {
            timeoutId = setTimeout(() => {
                setHideButtons(true);
            }, 1000);
        }
    };
    const { t } = useTranslation();

    const handleMouseEnter = () => {
        clearTimeout(timeoutId);
        setHideButtons(false);
    };

    const handleVideoEnded = () => {
        setHideButtons(true);
    };

    return (
        <div>
            <div className='col-auto'>
                <div className='relative ' onMouseEnter={handleMouseEnter}>
                    <iframe className='w-[942px] rounded-40 h-[473px]' src="https://www.youtube.com/embed/mkE8WSS51mA?si=3AiBkTWd4Q738tEO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    {/* {!isVideoPlaying ? (
                        <button className={`pause ${hideButtons ? 'hidden' : ''}`} onClick={toggleVideo}>
                            <img className='w-20 absolute rounded-full  top-1/2 left-1/2 -translate-x-1/2  ' src={youtubePause} alt="pause img" />
                        </button>
                    ) : (
                        <button className={`start ${hideButtons ? 'hidden' : ''}`} onClick={toggleVideo}>
                            <img className=' absolute top-1/2 left-1/2 -translate-x-1/2' src={youtubeIcon} alt="youtube icon" />
                        </button>
                    )} */}
                </div>
                {/* Tafsiyalar */}
                <div className='pt-8'>
                    <ul className='space-y-8 '>
                        {/* Sevsa tel qiladi */}
                        <li className='flex justify-between items-center '>
                            <div className='w-full max-w-523 space-y-2.5 '>
                                <Link to='/'>
                                    <h3 className='separated hover:text-HappyYipee duration-200'>{t("vaziyatlar")}</h3>
                                </Link>
                                <p className='main-still max-w-491'>{t("PsixologningSuhbati")}</p>
                                <span className='number-still inline-block '>13.08.2022</span>
                            </div>
                            <img className='' src={sevsa} alt="sevsa o'zi telefon qiladi" />
                        </li>
                        {/* Sevsa tel qiladi */}
                        <li className='flex justify-between items-center'>
                            <div className='w-full max-w-523 space-y-2.5'>
                                <Link to='/'>
                                    <h3 className='separated hover:text-HappyYipee duration-200'>{t("vaziyatlar")}</h3>
                                </Link>
                                <p className='main-still max-w-491'>{t("PsixologningSuhbati")}</p>
                                <span className='number-still inline-block '>13.08.2022</span>
                            </div>
                            <img src={gadoy} alt="gadoymisiz yoki tilanchi" />
                        </li>
                        {/* Sevsa tel qiladi */}
                        <li className='flex justify-between items-center'>
                            <div className='w-full max-w-523 space-y-2.5'>
                                <Link to='/'>
                                    <h3 className='separated hover:text-HappyYipee duration-200'>{t("vaziyatlar")}</h3>
                                </Link>
                                <p className='main-still max-w-491'>{t("PsixologningSuhbati")}</p>
                                <span className='number-still inline-block'>13.08.2022</span>
                            </div>
                            <img src={twoBoy} alt="sevsa o'zi telefon qiladi" />
                        </li>
                        <li className='flex justify-between items-center'>
                            <div className='w-full max-w-523 space-y-2.5'>
                                <Link to='/'>
                                    <h3 className='separated hover:text-HappyYipee duration-200'>{t("vaziyatlar")}</h3>
                                </Link>
                                <p className='main-still max-w-491'>{t("PsixologningSuhbati")}</p>
                                <span className='number-still inline-block'>13.08.2022</span>
                            </div>
                            <img  src={xodim} alt="sevsa o'zi telefon qiladi" />
                        </li>

                    </ul>
                </div>
            </div>
        </div>
    );
};

export default SherzodQayumov;
