'use client';
import React, { useState, useEffect } from 'react';
import Marquee from 'react-fast-marquee';

export default function BackgroundContact({ children }) {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const check = () => setIsMobile(window.innerWidth <= 768);
        check();
        window.addEventListener("resize", check);
        return () => window.removeEventListener("resize", check);
    }, []);

    const images = Array(5).fill("/Images/Background/ImgBG3.png");
    const ribbon = Array(5).fill("Images/PPIF/13.png");

    const BackgroundContent = (
        <div className="relative w-full h-full overflow-hidden">
            {/* BG Images */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute animate-marquee-up scale-105">
                    {images.map((src, idx) => {
                        const isRotated = idx % 2 === 1;
                        return (
                            <div key={idx} className="relative h-full w-screen overflow-hidden">
                                <img
                                    src={src}
                                    alt="Background"
                                    className={`h-full w-full object-cover ${isRotated ? 'rotate-180 ml-3' : ''}`}
                                />
                                {isRotated ? (
                                    <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/40 to-transparent pointer-events-none blur-sm" />
                                ) : (
                                    <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black/40 to-transparent pointer-events-none blur-sm" />
                                )}
                            </div>
                        );
                    })}

                </div>
            </div>


            {/* Decorative Ribbon/Text */}
            <div className="w-full h-full z-10 relative rotate-12 scale-125">
                <div className="absolute top-0 left-0 w-full z-10">
                    <Marquee gradient={false} speed={60} direction="left" pauseOnHover={false}>
                        {ribbon.map((src, idx) => (
                            <div key={idx} className="relative h-auto w-auto">
                                <img
                                    src={src}
                                    alt="Background image"
                                    className="md:h-[420px] h-[220px] opacity-40"
                                />
                            </div>
                        ))}
                    </Marquee>
                </div>

                <div className="absolute top-0 left-0 w-full -z-10">
                    <Marquee gradient={false} speed={30} pauseOnHover={false}>
                        {Array(5).fill(0).map((_, idx) => (
                            <h1
                                key={idx}
                                className="font-black text-[#6c6c6c] lg:text-8xl text-xl text-center mx-4"
                                style={{ fontFamily: 'HongMengTi' }}
                            >
                                INFORMATICS
                            </h1>
                        ))}
                    </Marquee>
                </div>

                <div className="absolute -bottom-10 left-0 w-full z-10">
                    <Marquee gradient={false} speed={60} direction="right" pauseOnHover={false}>
                        {ribbon.map((src, idx) => (
                            <div key={idx} className="relative h-auto w-auto">
                                <img
                                    src={src}
                                    alt="Background image"
                                    className="md:h-[420px] h-[220px] w-auto opacity-40"
                                />
                            </div>
                        ))}
                    </Marquee>
                </div>

                <div className="absolute bottom-0 left-0 w-full -z-10">
                    <Marquee gradient={false} speed={30} direction="right" pauseOnHover={false}>
                        {Array(5).fill(0).map((_, idx) => (
                            <h1
                                key={idx}
                                className="font-black text-[#6c6c6c] lg:text-8xl text-xl text-center mx-4"
                                style={{ fontFamily: 'HongMengTi' }}
                            >
                                INFORMATICS
                            </h1>
                        ))}
                    </Marquee>
                </div>
            </div>
            {isMobile && (
                <div className="absolute inset-0 z-30 flex justify-center items-center w-full h-full">
                    {children}
                </div>
            )}
        </div>
    );

    return (
        <>
            {/* Render children di luar BG saat desktop */}
            {!isMobile && (
                <div className="absolute inset-0 z-30 flex justify-center items-center w-full h-full">
                    {children}
                </div>
            )}

            {/* BG structure */}
            {BackgroundContent}
        </>
    );
}
