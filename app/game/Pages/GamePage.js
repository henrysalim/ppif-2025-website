'use client';
import React, { useState } from 'react';
import Background from '../../Components/Background';
import Link from 'next/link';

export default function GamePage() {
  const [started, setStarted] = useState(false);

  return (
    <Background textChild="GAME ZONE">
      <div className="w-full h-screen flex flex-col items-center justify-center">
        <Link href="/">
            <button className=''>
                kembali
            </button>
        </Link>
        {!started ? (
          <button
            className="bg-green-500 text-white px-8 py-4 rounded-2xl text-2xl font-bold shadow-lg hover:bg-green-700 transition"
            onClick={() => setStarted(true)}
            style={{ fontFamily: 'HongMengTi' }}
          >
            Start Game
          </button>
        ) : (
          <div className="w-full flex flex-col items-center">
            <h1 className="text-4xl font-black mb-8" style={{ fontFamily: 'HongMengTi' }}>
              Selamat Bermain!
            </h1>
            <div className="bg-[#1a1a1a]/80 p-8 rounded-2xl shadow-xl text-center text-lg text-white w-full max-w-md">
              <p>[Game content goes here! 🎮]</p>
              <button
                className="mt-8 bg-orange-400 px-6 py-2 rounded-xl text-lg font-bold hover:bg-orange-500 transition"
                onClick={() => setStarted(false)}
              >
                Kembali
              </button>
            </div>
          </div>
        )}
      </div>
    </Background>
  );
}