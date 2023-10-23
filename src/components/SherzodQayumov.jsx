import React, { useState, useRef } from 'react';
import poster from '../assets/social-img.png';
import vidyo from '../vidyo/vidyo.mp4';
import youtubeIcon from '../assets/icons/youtube-icon.svg';
import youtubePause from '../assets/icons/pause.png';

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
        <div className='main-container'>
            <div className='relative' onMouseEnter={handleMouseEnter}>
                <video ref={videoRef} className='w-full max-w-5xl rounded-40' src={vidyo} controls poster={poster}onEnded={handleVideoEnded}></video>
                {!isVideoPlaying ? (
                    <button className={`pause ${hideButtons ? 'hidden' : ''}`} onClick={toggleVideo}>
                        <img className='w-20 absolute top-1/2 left-1/2 -translate-x-1/2' src={youtubePause} alt="pause img" />
                    </button>
                ) : (
                    <button className={`start ${hideButtons ? 'hidden' : ''}`} onClick={toggleVideo}>
                        <img className='absolute top-1/2 left-1/2 -translate-x-1/2' src={youtubeIcon} alt="youtube icon" />
                    </button>
                )}
            </div>
        </div>
    );
};

export default SherzodQayumov;
