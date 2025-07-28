'use client';
import React, { useState, useEffect, useRef } from 'react';
import Tilt from 'react-parallax-tilt';
import Background from '../Background';
import { initClickSound, playClickSound } from "../SoundPlayer";
import { WelcomeFlicker } from '../WelcomeFlicker';
import { motion } from 'framer-motion';


export default function HomePage({ isFullscreen, onToggleFullscreen }) {
    const [dots, setDots] = useState('');

    // const requestFullscreen = () => {
    //     const el = document.documentElement;
    //     if (el.requestFullscreen) {
    //         el.requestFullscreen();
    //     } else if (el.webkitRequestFullscreen) {
    //         el.webkitRequestFullscreen();
    //     } else if (el.msRequestFullscreen) {
    //         el.msRequestFullscreen();
    //     }
    // };

    useEffect(() => {
        initClickSound("/Audio/clicking.mp3", 0.6);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setDots(prev => (prev.length >= 3 ? '' : prev + '.'));
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth <= 768);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    return (
        // <Background>
        <div className="relative w-full h-screen overflow-hidden">
            <WelcomeFlicker />
            {/* Tilt container */}
            <Tilt
                className="w-full h-full"
                tiltMaxAngleX={4}
                tiltMaxAngleY={4}
                perspective={1000}
                transitionSpeed={800}
                scale={1.02}
                gyroscope={true}
                style={{
                    width: isMobile ? '126vw' : '106vw',
                    height: '106vh',
                    marginLeft: isMobile ? '0vw' : '-2.5vw',
                    marginTop: '-2.5vh',
                }}
            >
                <div
                    className="absolute top-0 left-0 w-full h-full"
                    style={{ transform: 'translateZ(10px)' }}
                    onClick={() => playClickSound()}
                >
                    <video
                        className="w-full h-full object-cover pointer-events-none"
                        autoPlay
                        loop
                        muted
                        playsInline
                    >
                        <source src="Models/vid_idle.webm" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>

                </div>

                {!isFullscreen && (
                    <button
                        onClick={() => {
                            onToggleFullscreen();
                            playClickSound();
                        }}
                        className={`relative z-10 flex lg:left-0 -left-2 justify-center translate-y-1/2 -bottom-1/4 h-full w-full`}
                        style={{ transform: 'translateZ(60px)' }}
                    >
                        <h1
                            className="font-black text-gray-300 lg:text-xl text-sm text-center italic drop-shadow-xl"
                            style={{ fontFamily: 'HongMengTi' }}
                        >
                            Tap To Fullscreen{dots}
                        </h1>
                    </button>
                )}
            </Tilt>
        </div>
        // </Background>
    );
}
