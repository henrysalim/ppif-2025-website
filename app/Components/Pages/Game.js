import React from 'react'
import Background from '../Background'
import Envelope from '../Envelope'
import Groups from "../../Components/Groups/Groups.json"
import UniqueCodes from "../../Components/Groups/UniqueCodes.json"

export default function Game() {
    return (
        <Background textChild="GAME">
            <div className='w-full flex h-screen justify-center items-center'>
                <h1 className='font-black text-white lg:text-5xl text-xl text-center' style={{ fontFamily: 'HongMengTi' }}></h1>
                <Envelope groups={Groups} unique_codes={UniqueCodes} />
            </div>
        </Background>
    )
}
