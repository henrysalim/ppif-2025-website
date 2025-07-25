import React, { useState } from 'react'
import Background from '../Background'
import Storyline from '../Storyline'
import Envelope from '../Envelope'
import Play from '../Play'

export default function Game() {
    const [phase, setPhase] = useState('storyline');
    const [code, setCode] = useState('')

    return (
        <Background textChild="GAME">
            <div className='w-full flex h-screen justify-center items-center'>
                {phase === 'storyline' && <Storyline onNext={() => setPhase('envelope')} />}
                {phase === 'envelope' && <Envelope onNext={(correctCode) => {setPhase('play'), setCode(correctCode)}}/>}
                {phase === 'play' && <Play groupCode={code} />}
            </div>
        </Background>
    )
}
