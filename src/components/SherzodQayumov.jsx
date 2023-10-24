import React, { useState, useRef } from 'react';
import poster from '../assets/social-img.png';
import vidyo from '../vidyo/vidyo.mp4';
import { Link } from 'react-router-dom';

// Imgs
import youtubeIcon from '../assets/icons/youtube-icon.svg';
import youtubePause from '../assets/icons/pause.png';
import sevsa from '../assets/sevsa.png'
import gadoy from '../assets/post-thubnail.png'
import twoBoy from '../assets/two-boy.png'
import xodim from '../assets/xodim.png'

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

    const handleMouseEnter = () => {
        clearTimeout(timeoutId);
        setHideButtons(false);
    };

    const handleVideoEnded = () => {
        setHideButtons(true);
    };

    return (
        <div className='main-container '>
            <div className='w-full max-w-1051'>
                <div className='relative ' onMouseEnter={handleMouseEnter}>
                    <video ref={videoRef} className='w-full h-full max-w-5xl max-h-[500px] rounded-40' src={vidyo} controls poster={poster} onEnded={handleVideoEnded}></video>
                    {!isVideoPlaying ? (
                        <button className={`pause ${hideButtons ? 'hidden' : ''} `} onClick={toggleVideo}>
                            <img className='w-12 absolute top-1/2 left-1/2 -translate-x-1/2  ' src={youtubePause} alt="pause img" />
                        </button>
                    ) : (
                        <button className={`start ${hideButtons ? 'hidden' : ''}`} onClick={toggleVideo}>
                            <img className=' absolute top-1/2 left-1/2 -translate-x-1/2' src={youtubeIcon} alt="youtube icon" />
                        </button>
                    )}
                </div>
                {/* Tafsiyalar */}
                <div className=''>
                    <ul className='space-y-8'>
                        {/* Sevsa tel qiladi */}
                        <li className='flex justify-between items-center'>
                            <div className='w-full max-w-523 space-y-2.5'>
                                <Link to='/'>
                                <h3 className='separated hover:text-HappyYipee duration-200'>Xayotda shunday vaziyatlar bo‘ladiki, kimdan yordam so‘ramang…</h3>
                                </Link>
                                <p className='main-still max-w-491'>Yaqinda bir psixologning suhbatini eshitib qoldim. U aytishicha  o‘sha davrda hech qanday moliyaviy muhim qarorlar qabul <br /> ilish kerak emas ekan…</p>
                                <span className='number-still inline-block py-3 px-2.5 bg-LynxWhite'>13.08.2022</span>
                            </div>
                            <img src={sevsa} alt="sevsa o'zi telefon qiladi" />
                        </li>
                        {/* Sevsa tel qiladi */}
                        <li className='flex justify-between items-center'>
                            <div className='w-full max-w-523 space-y-2.5'>
                                <Link to='/'>
                                <h3 className='separated hover:text-HappyYipee duration-200'>Xayotda shunday vaziyatlar bo‘ladiki, kimdan yordam so‘ramang…</h3>
                                </Link>
                                <p className='main-still max-w-491'>Yaqinda bir psixologning suhbatini eshitib qoldim. U aytishicha  o‘sha davrda hech qanday moliyaviy muhim qarorlar qabul <br /> ilish kerak emas ekan…</p>
                                <span className='number-still inline-block py-3 px-2.5 bg-LynxWhite'>13.08.2022</span>
                            </div>
                            <img src={gadoy} alt="gadoymisiz yoki tilanchi" />
                        </li>
                        {/* Sevsa tel qiladi */}
                        <li className='flex justify-between items-center'>
                            <div className='w-full max-w-523 space-y-2.5'>
                                <Link to='/'>
                                <h3 className='separated hover:text-HappyYipee duration-200'>Xayotda shunday vaziyatlar bo‘ladiki, kimdan yordam so‘ramang…</h3> 
                                </Link>
                                <p className='main-still max-w-491'>Yaqinda bir psixologning suhbatini eshitib qoldim. U aytishicha  o‘sha davrda hech qanday moliyaviy muhim qarorlar qabul <br /> ilish kerak emas ekan…</p>
                                <span className='number-still inline-block py-3 px-2.5 bg-LynxWhite'>13.08.2022</span>
                            </div>
                            <img src={twoBoy} alt="sevsa o'zi telefon qiladi" />
                        </li>
                        <li className='flex justify-between items-center'>
                            <div className='w-full max-w-523 space-y-2.5'>
                                <Link to='/'>
                                <h3 className='separated hover:text-HappyYipee duration-200'>Xayotda shunday vaziyatlar bo‘ladiki, kimdan yordam so‘ramang…</h3>
                                </Link>
                                <p className='main-still max-w-491'>Yaqinda bir psixologning suhbatini eshitib qoldim. U aytishicha  o‘sha davrda hech qanday moliyaviy muhim qarorlar qabul <br /> ilish kerak emas ekan…</p>
                                <span className='number-still inline-block py-3 px-2.5 bg-LynxWhite'>13.08.2022</span>
                            </div>
                            <img src={xodim} alt="sevsa o'zi telefon qiladi" />
                        </li>

                    </ul>
                </div>
            </div>
        </div>
    );
};

export default SherzodQayumov;
