import React from 'react'
import Image from "next/image";
import Marquee from "react-fast-marquee";

export default function Background({ children }) {
    const images = Array(5).fill("/Images/Background/ImgBG12.jpg");
    const ribbon = Array(5).fill("Images/PPIF/13.png")

    return (
        <div className="relative w-full -z-10 h-screen overflow-hidden">
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <Marquee gradient={false} speed={40} pauseOnHover={false} direction="right">
                    {images.map((src, idx) => (
                        <div key={idx} className="relative h-screen w- -ml-14">
                            <img
                                src={src}
                                alt="Background image"
                                className="h-full w-auto"
                            />
                        </div>
                    ))}
                </Marquee>
            </div>

            <div className='w-full h-full z-10 relative rotate-12 scale-125'>
                <div className="absolute top-0 left-0 w-full z-10">
                    <Marquee gradient={false} speed={60} direction="left" pauseOnHover={false}>
                        {ribbon.map((src, idx) => (
                            <div key={idx} className="relative h-auto w-auto">
                                <img
                                    src={src}
                                    alt="Background image"
                                    className="md:h-auto w-auto h-[120px] opacity-40"
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
                                    className="md:h-auto h-[120px] w-auto opacity-40"
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
                                INFORMATICS
                            </h1>
                        ))}
                    </Marquee>
                </div>
            </div>
            {/* Konten utama, center screen */}
            <div className="absolute top-0 bottom-0 z-40 flex justify-center items-center w-full h-full">
                {children}
            </div>
        </div>
    )
}