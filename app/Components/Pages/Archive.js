import React, {useState, useEffect} from 'react';
import {motion, AnimatePresence } from "framer-motion";
import Background from '../Background';
import {BriefingDay, DDay, DominationDay} from '../ArchiveData';
import { initClickSound, playClickSound } from "../SoundPlayer";


export default function Archive() {
    const [page, setPage] = useState(1);
    const [selectedImage, setSelectedImage] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isClosing, setIsClosing] = useState(false);
    const [showPulse, setShowPulse] = useState(false);

    useEffect(()=>{
        initClickSound('/Audio/clicking.mp3', 0.6);
    }, []);

    const handleModalClose = () => {
        setShowPulse(true);
        setIsClosing(true);
        playClickSound();
        setTimeout(() => {
            setIsModalOpen(false);
            setIsClosing(false);
            setShowPulse(false);
            setSelectedImage(null);
        }, 350);
    }
    
    const listToRender = 
        page === 1 ? BriefingDay :
        page === 2 ? DDay : 
        DominationDay;

    const title =
        page === 1 ? "Briefing Day" :
        page === 2 ? "D-Day PPIF" :
        "DOMINATION Day!";

    
    
    return (
        <Background textChild="ARCHIVE">
            <div className="w-full flex h-full justify-center items-center">
                <div className='w-3/4 flex justify-center items-center'>

                    <img className="absolute z-0 lg:w-279 sm:w-100" src="/Images/AssetArchives/Group49.png"></img>
                    <img className="absolute z-5 lg:w-39 lg:mb-127 lg:mr-237 sm:w-14 sm:mb-46 sm:mr-86" src="/Images/AssetArchives/binder.png"></img>

                    <img className="absolute z-2 lg:w-279 lg:mt-2 sm:w-100 sm:mt-1" src="/Images/AssetArchives/Frame32.png"></img>
                    
                    {/*Content*/}
                    <div className='absolute z-3 lg:ml-40 sm:ml-16'>
                        <div
                            className="lg:w-185 lg:h-30 sm:h-11 bg-gradient-to-b lg:rounded-xl sm:rounded-lg lg:p-6 sm:p-2 p-3 lg:mb-0 mb-2 inset-shadow-sm/50"
                            style={{
                                background: "linear-gradient(to bottom, #3E3E3E, #101010)",
                            }}
                        >
                            <h1 className='lg:text-[30px] sm:text-[12px]'
                                style={{fontFamily: "HongMengTi", color: "#A3A3A3", textShadow: "-1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black, 1px 1px 0 black"}}>
                                {title}
                            </h1>
                        </div>

                        <div
                            className="lg:mt-5 lg:h-120 sm:h-40 sm:w-65 lg:w-185 bg-gradient-to-b lg:rounded-xl sm:rounded-lg lg:p-6 p-3 lg:mb-0 mb-2 about-scrollbar inset-shadow-sm/50 overflow-y-scroll about-scrollbar"
                            style={{
                                background: "linear-gradient(to bottom, #3E3E3E, #101010)",
                            }}
                        >
                            
                            {listToRender.length === 0 ? (
                                /*Coming Soon*/
                                <div className="flex items-center justify-center h-full relative">
                                    <div className='lg:h-50 lg:mb-50 sm:h-12 sm:mb-15 overflow-hidden absolute justify-center'>
                                        <img className="opacity-50 lg:h-85 sm:h-20" src="/Images/AssetArchives/3.png"></img>
                                    </div>
                                    <h2
                                        className="lg:text-[40px] lg:mt-7 sm:text-base text-center absolute z-10"
                                        style={{
                                            fontFamily: "HongMengTi",
                                            color: "#A3A3A3",
                                            textShadow: "-1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black, 1px 1px 0 black"
                                        }}
                                    >
                                        COMING SOON<span className='ellipsis'></span>
                                    </h2>

                                    <style jsx>{`
                                        @keyframes ellipsis {
                                            0%{content: '';}
                                            33%{content: '.';}
                                            66%{content: '..';}
                                            100%{content: '...';}
                                        }
                                        .ellipsis::after{
                                            display: inline-block;
                                            animation: ellipsis 2s infinite steps(4, end);
                                            content: '';
                                            width: 1em;
                                            text-align: left;
                                        }
                                    `}</style>
                                </div>
                                
                            ):(
                                /*Archive Image*/
                                <div className='grid lg:grid-cols-4 sm:grid-cols-3 lg:gap-3 sm:gap-2'>
                                    {listToRender.map((item, index) => (
                                        <div key={index} className='lg:w-42 sm:w-18 lg:h-29 sm:h-12 border-neutral-500 hover:border-yellow-300 lg:border-2 sm:border-1 lg:rounded-xl sm:rounded-lg overflow-hidden flex items-center justify-center'
                                            style={{backgroundColor: "#1F1F1F"}}>
                                            <img 
                                                className='object-contain h-full w-full cursor-pointer'
                                                src={item.src}
                                                alt="Archive Data"
                                                onClick={() => {
                                                    setSelectedImage(item);
                                                    setIsModalOpen(true);
                                                    playClickSound();
                                                }}
                                            ></img>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/*Key Chain*/}
                <div className='absolute z-4 lg:mr-238 lg:mb-25 sm:mr-87 sm:mb-13'>
                    <img 
                    src='/Images/AssetArchives/Group80.png'
                    className='swing origin-top lg:w-62 sm:w-20'>
                    </img>
                    <style jsx>{`
                        .swing {
                            animation: swing 2s ease-in-out infinite;
                            transform-origin: top center;
                        }
                        @keyframes swing {
                            0% { transform: rotate(5deg); }
                            50% { transform: rotate(-5deg); }
                            100% { transform: rotate(5deg); }
                        }
                    `}</style>
                </div>

                {/*Book Mark*/}
                <div className='lg:w-1/7 absolute z-1 lg:ml-285 sm:ml-103 sm:mb-20 lg:mb-70 justify-center items-center'>
                    <div className={`lg:w-44 sm:w-20 lg:mb-3 ${page === 1 ? 'lg:ml-7 sm:ml-2': 'lg:hover:ml-7 sm:hover:ml-2 transition-all delay-150 duration-300 ease-in-out'}`}>
                        <button
                            onClick={() => {setPage(1); playClickSound();}}
                            className='relative w-fit'
                        >
                            <img src="/Images/AssetArchives/Subtract(3).png"></img>
                            <span 
                            className={`text-[#848484] lg:text-[15px] sm:text-[8px] absolute inset-0 flex items-center justify-center 
                                ${page === 1 ? 'text-pulse' : 'lg:ml-5'}`}
                            style={{fontFamily: "HongMengTi"}}>
                                Briefing Day
                            </span>
                        </button>
                    </div>
                    <div className={`lg:w-44 sm:w-20 lg:mb-3  ${page === 2 ? 'lg:ml-7 sm:ml-2': 'lg:hover:ml-7 sm:hover:ml-2 transition-all delay-150 duration-300 ease-in-out'}`}>
                        <button onClick={() => {setPage(2); playClickSound();}} className="relative w-fit">
                            <img src="/Images/AssetArchives/Subtract(3).png"></img>
                            <span 
                            className={`lg:text-[15px] sm:text-[8px] absolute inset-0 flex items-center lg:ml-11 sm:ml-3
                                ${page === 2 ? 'text-pulse' : ''}`}
                            style={{fontFamily: "HongMengTi", color: "#848484"}}>
                                D-Day PPIF
                            </span>
                        </button>
                    </div>
                    <div className={`lg:w-44 sm:w-20 lg:mb-3 ${page === 3 ? 'lg:ml-7 sm:ml-2' : 'lg:hover:ml-7 sm:hover:ml-2 transition-all delay-150 duration-300 ease-in-out'}`}>
                        <button onClick={() => {setPage(3); playClickSound();}} className="relative w-fit">
                            <img className='lg:w-44' src="/Images/AssetArchives/Subtract(3).png"></img>   
                            <span 
                            className={`lg:text-[15px] sm:text-[8px] absolute inset-0 flex items-center justify-center 
                                ${page === 3 ? 'text-pulse' : 'lg:ml-5'}`}
                            style={{fontFamily: "HongMengTi", color: "#848484"}}>
                                DOMINATION!
                            </span>                   
                        </button>
                    </div>
                    <style jsx global>{`
                    @keyframes textPulse {
                        0%, 100% {
                            color: #84cc16;
                            text-shadow: 0 0 2px #84cc16;
                        }
                        50% {
                            color: #facc15;
                            text-shadow: 0 0 4px #facc15;
                        }
                    }
                    
                    .text-pulse {
                        animation: textPulse 1.5s infinite;
                    }
                `}</style>
                </div>
            </div>

            {/*Modal*/}
            < AnimatePresence >
                {isModalOpen && selectedImage && (
                    <motion.div
                        key="modal-bg"
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        style={{ pointerEvents: isClosing ? "none" : "auto" }}
                    >
                        {/* Modal Box */}
                        <motion.div
                            key="modal-box"
                            className="relative lg:h-[600px] h-[270px] lg:min-w-4xl lg:mt-0 mt-10 min-w-lg border-[4px] border-[#A9A9A9] bg-[#1a1a1a] rounded-2xl rounded-tr-none overflow-hidden shadow-xl"
                            initial={{
                                opacity: 0,
                                scale: 0.98,
                                filter: "none",
                                x: 0,
                                y: 0,
                                skewX: 0,
                            }}
                            animate={{
                                opacity: 1,
                                scale: 1,
                                filter: "none",
                                x: 0,
                                y: 0,
                                skewX: 0,
                            }}
                            exit={isClosing ? {
                                // Glitch effect: opacity turun, goyang X, filter drop-shadow warna
                                opacity: [1, 0.8, 0.85, 0.7, 0],
                                x: [0, -10, 10, -5, 5, 0, -20, 20, 0],
                                skewX: [0, 12, -12, 8, -8, 0],
                                filter: [
                                    "none",
                                    "drop-shadow(0 0 8px #fbce2a)",
                                    "drop-shadow(0 0 12px #5ae93a)",
                                    "drop-shadow(0 0 8px #ff1e1e)",
                                    "none",
                                ],
                                transition: { duration: 0.6, ease: "easeInOut" }
                            } : {
                                opacity: 0
                            }}
                            transition={{ duration: 0.6, ease: "easeInOut" }}
                        >
                            {/* Header */}
                            <div className="relative bg-[#2b2b2b] lg:px-6 lg:py-4 px-4 py-2 border-b border-[#6B6B6B] flex justify-between items-center">
                                <h2 
                                    className="text-white lg:text-lg text-sm font-bold"
                                    style={{fontFamily: 'HongMengTi'}}
                                >
                                    Archive Picture Log
                                </h2>
                                <button
                                    onClick={handleModalClose}
                                    disabled={isClosing}
                                    className={`relative bg-red-600 lg:w-[80px] h-[40px] w-[60px]${showPulse ? " fast-pulse-4x" : ""} skew-x-[-12] overflow-hidden flex items-center justify-center rounded-full`}
                                >
                                    <span className="skew-x-[12] text-black font-black z-10">
                                        ✕
                                    </span>
                                    <span className="absolute inset-1 border-[4px] border-black skew-x-[-12] rounded-full"></span>
                                </button>
                            </div>
            
                            {/* Image Area */}
                            <div className="relative lg:h-[530px] h-[210px] overflow-hidden">
                                <div className="modal-background w-full h-full">
                                    <Background textChild="Gallery Images" height="full">
                                        <div className="relative w-full h-full flex items-center justify-center">
                                            {/* Blur Box */}
                                            <div className="absolute inset-0 z-0 flex items-center justify-center">
                                                <div className="w-full lg:h-[450px] h-[160px] rounded-xl backdrop-blur-md bg-[#2b2b2b]/40"></div>
                                                </div>
                                                {/* Actual Image */}
                                                <img
                                                    src={selectedImage.src}
                                                    alt="Archive Data"
                                                    className="relative z-10 lg:w-[500px] w-[240px] h-auto rounded-xl border-[4px] border-[#6B6B6B] object-contain"
                                                />
                                        </div>
                                    </Background>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

        </Background>
        
    )
}
