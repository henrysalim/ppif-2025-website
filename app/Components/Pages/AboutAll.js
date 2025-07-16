import React from 'react'
import Background from '../Background'

export default function AboutAll() {
    return (
        <Background>
            <div className='relative w-full h-screen flex justify-center items-center'>
                {/* Konten center yang benar */}
                <div className=''>
                    <h1
                        className='font-black text-white lg:text-5xl text-xl text-center italic'
                        style={{ fontFamily: 'HongMengTi' }}
                    >
                        About Page
                    </h1>
                </div>
            </div>
        </Background>
    )
}
