import React from 'react'
import Background from '../Background'

export default function Timeline() {
    return (
        <Background textChild="TIMELINE">
            <div className='relative w-full h-screen flex justify-center items-center'>
                {/* Konten center yang benar */}
                <div className=''>
                    <h1
                        className='font-black text-white lg:text-5xl text-xl text-center italic'
                        style={{ fontFamily: 'HongMengTi' }}
                    >
                        Timeline
                    </h1>
                </div>
            </div>
        </Background>
    )
}
