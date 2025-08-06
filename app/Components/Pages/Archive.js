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

                    <img className="absolute z-0" src="/Images/AssetArchives/Group49.png"></img>
                    <img className="absolute z-5 mb-127 mr-237" src="/Images/AssetArchives/binder.png"></img>

                    <img className="absolute z-2 mt-2" src="/Images/AssetArchives/Frame32.png"></img>
                    
                    <div className='absolute z-3 ml-40'>
                        <div
                            className="w-185 h-30 bg-gradient-to-b rounded-xl lg:p-6 p-3 lg:mb-0 mb-2 about-scrollbar inset-shadow-sm/50"
                            style={{
                                background: "linear-gradient(to bottom, #3E3E3E, #101010)",
                            }}
                        >
                            <h1 style={{fontSize: 30, fontFamily: "HongMengTi", color: "#A3A3A3", textShadow: "-1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black, 1px 1px 0 black"}}>
                                {title}
                            </h1>
                        </div>

                        <div
                            className="mt-5 h-120 w-185 bg-gradient-to-b rounded-xl lg:p-6 p-3 lg:mb-0 mb-2 about-scrollbar inset-shadow-sm/50 overflow-y-scroll about-scrollbar"
                            style={{
                                background: "linear-gradient(to bottom, #3E3E3E, #101010)",
                            }}
                        >
                            <div className='grid grid-cols-4 gap-3'>
                            {listToRender.map((item, index) => (
                                <div className='w-42 h-29 border-neutral-500 border-2 rounded-xl overflow-hidden flex items-center justify-center'
                                    style={{backgroundColor: "#1F1F1F"}}>
                                    <img className='object-contain h-full w-full' key={index} src={item.src} alt={'/Images/AssetArchive/Group32.png'}></img>
                                </div>
                            ))}
                            </div>

                        </div>
                    </div>
                </div>

                <div className='absolute z-4 mr-238 mb-25'>
                    <img 
                    src='/Images/AssetArchives/Group80.png'
                    className='swing origin-top'>
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

                <div className='w-1/7 absolute z-1 ml-285 mb-70 justify-center items-center'>
                    <div className={`mb-3 ${page === 1 ? 'ml-7': ''}`}>
                        <button
                            onClick={() => {setPage(1); playClickSound();}}
                            className='relative w-fit'
                        >
                            <img src="/Images/AssetArchives/Subtract(3).png" className='w-full h-auto'></img>
                            <span 
                            className={`absolute inset-0 flex items-center justify-center
                                ${page === 1 ? 'text-pulse' : 'ml-5'}`}
                            style={{fontFamily: "HongMengTi", color: "#848484"}}>
                                Briefing Day
                            </span>
                        </button>
                    </div>
                    <div className={`mb-3 ${page === 2 ? 'ml-7': ''}`}>
                        <button onClick={() => {setPage(2); playClickSound();}} className="relative w-fit">
                            <img src="/Images/AssetArchives/Subtract(3).png"></img>
                            <span 
                            className={`absolute inset-0 flex items-center ml-10
                                ${page === 2 ? 'text-pulse' : ''}`}
                            style={{fontFamily: "HongMengTi", color: "#848484"}}>
                                D-Day PPIF
                            </span>
                        </button>
                    </div>
                    <div className={`mb-3 ${page === 3 ? 'ml-7': ''}`}>
                        <button onClick={() => {setPage(3); playClickSound();}} className="relative w-fit">
                            <img src="/Images/AssetArchives/Subtract(3).png"></img>   
                            <span 
                            className={`absolute inset-0 flex items-center justify-center ml-5
                                ${page === 3 ? 'text-pulse' : ''}`}
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
