'use client';
import React, { useState, useEffect } from 'react';
import Spline from '@splinetool/react-spline';

export default function Envelope() {
  const scenes = [
    'https://prod.spline.design/QwCKxSuek9YolkQb/scene.splinecode', // flip
    'https://prod.spline.design/RRF-H-e5ZfciGKxs/scene.splinecode', // open
    'https://prod.spline.design/ESmbWcgsyPh93M2Y/scene.splinecode', // out
  ];

  useEffect(() => {
    scenes.forEach(url => {
      fetch(url, { method: 'GET', mode: 'no-cors' }).catch(() => {});
    });
  }, []);

  const [sceneIndex, setSceneIndex] = useState(0);
  const [hasClickedOnce, setHasClickedOnce] = useState(false);

  const handleClick = () => {
    if (!hasClickedOnce) {
      setHasClickedOnce(true);
    } else if (sceneIndex < scenes.length - 1) {
      setSceneIndex(prev => prev + 1);
      setHasClickedOnce(false); 
    }
  };

  return (
    <div onClick={handleClick}>
      <Spline scene={scenes[sceneIndex]} />
    </div>
  );
}
