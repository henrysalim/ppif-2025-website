import React, { useState } from 'react'
import Background from '../Background'
import Storyline from '../Storyline'
import Envelope from '../Envelope'
import Play from '../Play'

export default function Game() {
    const [phase, setPhase] = useState('storyline');
    return (
        <Background textChild="GAME">
            <div className='w-full flex h-screen justify-center items-center'>
                {phase === 'storyline' && <Storyline onNext={() => setPhase('envelope')} />}
                {phase === 'envelope' && <Envelope onNext={() => setPhase('play')}/>}
                {phase === 'play' && <Play />}
            </div>
        </Background>
    )
}
