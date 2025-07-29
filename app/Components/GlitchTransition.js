'use client';

import { useEffect, useState, useRef } from 'react';
import { usePathname } from 'next/navigation';

export default function GlitchTransition() {
  const pathname = usePathname();
  const [show, setShow] = useState(false);
  const prevPath = useRef(pathname);

  useEffect(() => {
    if (
      pathname === '/game' ||
      prevPath.current === '/game'
    ) {
      setShow(true);
      const timer = setTimeout(() => setShow(false), 1080);
      return () => clearTimeout(timer);
    }
    prevPath.current = pathname;
  }, [pathname]);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[9999] pointer-events-none mix-blend-screen opacity-80 transition-opacity duration-700">
      <video
        className="w-full h-full object-cover"
        autoPlay
        muted
        playsInline
        key={pathname} // reload video tiap route
      >
        <source src="/Images/glitch_transition.webm" type="video/webm" />
      </video>
      <audio autoPlay>
        <source src="/Audio/glitch_transition.mp3" type="audio/mp3" />
      </audio>
    </div>
  );
}