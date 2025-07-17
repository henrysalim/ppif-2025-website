'use client';
import React, { useState, useEffect } from 'react';
import Tilt from 'react-parallax-tilt';
import Background from '../Background';

export default function HomePage() {
    const [dots, setDots] = useState('');

    useEffect(() => {
        const interval = setInterval(() => {
            setDots(prev => (prev.length >= 3 ? '' : prev + '.'));
        }, 1000);
        return () => clearInterval(interval);
    }, []);
    return (
        <Background>
            <div className="relative w-full h-screen overflow-hidden">
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
                        width: '106vw',
                        height: '106vh',
                        marginLeft: '-2.5vw',
                        marginTop: '-2.5vh',
                    }}
                >
                    <div
                        className="absolute top-0 left-0 w-full h-full"
                        style={{ transform: 'translateZ(10px)' }}
                    >
                        <video
                            className="w-full h-full object-cover pointer-events-none"
                            autoPlay
                            loop
                            muted
                            playsInline
                        >
                            <source src="Models/vid_idle.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <div
                        className="relative z-10 flex justify-center translate-y-1/2 -bottom-1/4 h-full"
                        style={{ transform: 'translateZ(60px)' }}
                    >
                        <h1
                            className="font-black text-gray-300 lg:text-xl text-md text-center italic drop-shadow-xl"
                            style={{ fontFamily: 'HongMengTi' }}
                        >
                            Tap To Continue{dots}
                        </h1>
                    </div>
                </Tilt>
            </div>
        </Background>
    );
}
