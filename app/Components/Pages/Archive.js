import React, {useState, useEffect} from 'react';
import Background from '../Background';
import {BriefingDay, DDay, DominationDay} from '../ArchiveData';
import { initClickSound, playClickSound } from "../SoundPlayer";

export default function Archive() {
    const [page, setPage] = useState(1);

    useEffect(()=>{
        initClickSound('/Audio/clicking.mp3', 0.6);
    }, []);
    
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
                            <div className='grid lg:grid-cols-4 sm:grid-cols-3 lg:gap-3 sm:gap-2'>
                            {listToRender.map((item, index) => (
                                <div key={index} className='lg:w-42 sm:w-18 lg:h-29 sm:h-12 border-neutral-500 hover:border-yellow-300 lg:border-2 sm:border-1 lg:rounded-xl sm:rounded-lg overflow-hidden flex items-center justify-center'
                                    style={{backgroundColor: "#1F1F1F"}}>
                                    <img className='object-contain h-full w-full' key={index} src={item.src} alt={'/Images/AssetArchive/Group32.png'}></img>
                                </div>
                            ))}
                            </div>

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
                    <div className={`lg:w-44 sm:w-20 lg:mb-3 ${page === 1 ? 'lg:ml-7 sm:ml-2': ''}`}>
                        <button
                            onClick={() => {setPage(1); playClickSound();}}
                            className='relative w-fit'
                        >
                            <img src="/Images/AssetArchives/Subtract(3).png"></img>
                            <span 
                            className={`lg:text-[15px] sm:text-[8px] absolute inset-0 flex items-center justify-center 
                                ${page === 1 ? 'text-pulse' : 'lg:ml-5'}`}
                            style={{fontFamily: "HongMengTi", color: "#848484"}}>
                                Briefing Day
                            </span>
                        </button>
                    </div>
                    <div className={`lg:w-44 sm:w-20 lg:mb-3  ${page === 2 ? 'lg:ml-7 sm:ml-2': ''}`}>
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
                    <div className={`lg:w-44 sm:w-20 lg:mb-3 ${page === 3 ? 'lg:ml-7 sm:ml-2' : ''}`}>
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

        </Background>
        
    )
}
