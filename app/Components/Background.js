'use client';
import React, { useState, useEffect } from 'react';
import Marquee from 'react-fast-marquee';

export default function Background({ children, textChild, height = "screen" }) {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const check = () => setIsMobile(window.innerWidth <= 768);
        check();
        window.addEventListener("resize", check);
        return () => window.removeEventListener("resize", check);
    }, []);

    const images = Array(5).fill("/Images/Background/ImgBG12_revised.png");
    const ribbon = Array(5).fill("Images/PPIF/13.png");

    const BackgroundContent = (
        <div className={`relative w-full ${height === "screen" ? "h-screen" : "h-full"} overflow-hidden`}>
            {/* BG Images */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <Marquee gradient={false} speed={40} direction="right">
                    {images.map((src, idx) => (
                        <div key={idx} className={`${height === "screen" ? "h-screen" : "h-full"} -ml-10`}>
                            <img src={src} alt="Background" className="h-full w-auto" />
                        </div>
                    ))}
                </Marquee>
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
                                    className="lg:h-[420px] h-[200px] opacity-40"
                                />
                            </div>
                        ))}
                    </Marquee>
                </div>
                {/* Marquee teks atas - z-10 */}
                <div className="absolute top-0 left-0 w-full -z-10">
                    <Marquee gradient={false} speed={30} pauseOnHover={false}>
                        {Array(5).fill(0).map((_, idx) => (
                            <h1
                                key={idx}
                                className="font-black text-[#6c6c6c] lg:text-8xl text-xl text-center mx-4"
                                style={{ fontFamily: 'HongMengTi' }}
                            >
                                {textChild}
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
                                    className="lg:h-[420px] h-[200px] w-auto opacity-40"
                                />
                            </div>
                        ))}
                    </Marquee>
                </div>

                {/* Marquee teks bawah, arah kanan - z-10 */}
                <div className="absolute bottom-0 left-0 w-full -z-10">
                    <Marquee gradient={false} speed={30} direction="right" pauseOnHover={false}>
                        {Array(5).fill(0).map((_, idx) => (
                            <h1
                                key={idx}
                                className="font-black text-[#6c6c6c] lg:text-8xl text-xl text-center mx-4"
                                style={{ fontFamily: 'HongMengTi' }}
                            >
                                {textChild}
                            </h1>
                        ))}
                    </Marquee>
                </div>
            </div>
            {/* CHILDREN: render di dalam hanya jika mobile */}
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
