import { useEffect, useRef, useState, Suspense, lazy } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { animate } from 'animejs';
import { FreeMode } from 'swiper/modules';
import slides from './swiperData';
import { initClickSound, playClickSound } from "./SoundPlayer";

const DetailBox = lazy(() => import('./DetailBox'));

const SCROLL_AUDIO_VOLUME = 0.1;

const TABS = ['Info', 'Skill'];

export default function DiagonalSwiper() {
    const [activeSlide, setActiveSlide] = useState(0);
    const [selectedBox, setSelectedBox] = useState(slides[0][1]);
    const [activeTab, setActiveTab] = useState('Info');
    const slideRefs = useRef([]);
    const audioRef = useRef(null);

    useEffect(() => {
        initClickSound("/Audio/clicking.mp3", 0.6);
    }, []);

    useEffect(() => {
        const el = slideRefs.current[activeSlide];
        if (el) {
            animate(el, {
                opacity: [{ to: 1, duration: 600, easing: 'easeInOutQuad' }],
                scale: [{ to: 1, duration: 600, easing: 'easeInOutQuad' }],
            });
        }

        slideRefs.current.forEach((el, idx) => {
            if (idx !== activeSlide && el) {
                el.style.opacity = '0.5';
                el.style.transform = 'scale(0.9)';
            }
        });
    }, [activeSlide]);

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = SCROLL_AUDIO_VOLUME;
        }
    }, []);

    const playScrollSound = () => {
        if (audioRef.current) {
            audioRef.current.currentTime = 0;
            audioRef.current.play();
        }
    };

    const handleSelectBox = (box) => setSelectedBox(box);

    return (
        <div className='relative w-full h-screen'>
            <audio ref={audioRef} src="/Audio/spinning_effect.mp3" preload="auto" />
            <div className="absolute top-0 left-0 w-full h-32 z-40 bg-gradient-to-b from-black to-transparent pointer-events-none"></div>
            <div className="flex flex-col md:flex-row items-start justify-between min-h-screen w-screen ">
                {/* SWIPER DIAGONAL */}
                <div className='relative flex flex-row items-end h-full'>
                    <div
                        className="relative w-[250px] lg:w-[350px] z-20 bg-gradient-to-t from-[#000000] to-[#282828] p-1 border-4 shadow-xl border-black -skew-x-12 h-[500px] md:h-screen origin-bottom-left"
                    >
                        <Swiper
                        direction="vertical"
                        slidesPerView={4}
                        spaceBetween={20}
                        freeMode={true}
                        onSlideChange={(swiper) => {
                            setActiveSlide(swiper.activeIndex);
                            setSelectedBox(slides[swiper.activeIndex][1]);
                            playScrollSound();
                        }}
                        modules={[FreeMode]}
                        breakpoints={{
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 10,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 20,
                            },
                            1440: {
                                slidesPerView: 4,
                                spaceBetween: 20,
                            },
                        }}
                        className="h-full"
                    >
                        {slides.map((slide, idx) => (
                            <SwiperSlide key={idx}>
                                <div
                                    ref={el => (slideRefs.current[idx] = el)}
                                    className="flex flex-row -skew-x-12 items-center justify-between transition-all duration-500 lg:gap-0 gap-2"
                                >
                                    {/* KIRI */}
                                    <div
                                        className={`transition-all bg-[#3e4144] rounded-tl-xl rounded-br-xl duration-300 
                                            ${(slide[0].id === 11 || slide[0].id === 12) ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
                                            ${selectedBox.id === slide[0].id ? 'ring-8 ring-[#5AE93A] pulse-ring scale-105 animate-pulse' : ''}`}
                                        style={{ marginTop: '0px' }}
                                        onClick={() => {
                                            if (slide[0].id === 11 || slide[0].id === 12) return;
                                            handleSelectBox(slide[0]);
                                            playClickSound();
                                        }}
                                    >
                                        <img
                                            src={slide[0].divisionimg}
                                            alt=""
                                            className="lg:w-26 lg:h-48 w-18 h-42 rounded-tl-xl rounded-br-xl object-cover shadow-lg"
                                            loading="lazy"
                                        />
                                    </div>

                                    {/* TENGAH */}
                                    <div
                                        className={`transition-all bg-[#3e4144] rounded-tl-xl rounded-br-xl duration-300 
                                            ${(slide[1].id === 11 || slide[1].id === 12) ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
                                            ${selectedBox.id === slide[1].id ? 'ring-8 ring-[#5AE93A] pulse-ring scale-105 animate-pulse' : ''}`}
                                        style={{ marginTop: '60px' }}
                                        onClick={() => {
                                            if (slide[1].id === 11 || slide[1].id === 12) return;
                                            handleSelectBox(slide[1]);
                                            playClickSound();
                                        }}
                                    >
                                        <img
                                            src={slide[1].divisionimg}
                                            alt=""
                                            className="lg:w-28 lg:h-48 w-20 h-42 rounded-tl-xl rounded-br-xl object-cover shadow-lg"
                                            loading="lazy"
                                        />
                                    </div>

                                    {/* KANAN */}
                                    <div
                                        className={`transition-all bg-[#3e4144] rounded-tl-xl rounded-br-xl duration-300 
                                            ${(slide[2].id === 11 || slide[2].id === 12) ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
                                            ${selectedBox.id === slide[2].id ? 'ring-8 ring-[#5AE93A] pulse-ring scale-105 animate-pulse' : ''}`}
                                        style={{ marginTop: '0px' }}
                                        onClick={() => {
                                            if (slide[2].id === 11 || slide[2].id === 12) return;
                                            handleSelectBox(slide[2]);
                                            playClickSound();
                                        }}
                                    >
                                        <img
                                            src={slide[2].divisionimg}
                                            alt=""
                                            className="lg:w-26 lg:h-48 w-18 h-42 rounded-tl-xl rounded-br-xl object-cover shadow-lg"
                                            loading="lazy"
                                        />
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    </div>
                    <div className='relative lg:bottom-12 bottom-6 flex lg:gap-5 gap-2 flex-col'>
                        {TABS.map((tab, i) => (
                            <button
                                key={tab}
                                className={`cursor-pointer relative
                                    ${i === 0 ? "lg:left-7 left-4" : i === 1 ? "lg:left-3.5 left-2" : "lg:left-3 left-1.5"} 
                                    bg-gradient-to-t from-[#25272B] to-[#4F4F4F] p-2 -skew-x-12 rounded-r-2xl
                                    ${activeTab === tab ? "ring-4 ring-[#5AE93A] pulse-ring" : ""}
                                `}
                                onClick={() => {
                                    setActiveTab(tab);
                                    playClickSound();
                                }}
                            >
                                <h1 className='lg:text-[20px] text-[12px] text-white' style={{ fontFamily: 'HongMengTi' }}>{tab}</h1>
                            </button>
                        ))}
                    </div>
                </div>
                {/* DETAIL KONTEN DI KANAN */}
                <Suspense fallback={<div>Loading...</div>}>
                    <DetailBox selectedBox={selectedBox} activeTab={activeTab} />
                </Suspense>
            </div>
        </div>
    );
}