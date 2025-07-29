import React from 'react'
import Background from '../Background'
import Footer from "../FooterContact"

export default function Contact() {
    return (
        <Background textChild="CONTACT">
            <div className='w-full flex h-full justify-center items-center'>
                <Footer />
            </div>
        </Background>
    )
}
