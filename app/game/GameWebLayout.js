"use client";
import Image from "next/image";
import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { initClickSound, playClickSound } from "../Components/SoundPlayer";
import IntroScreen from "../Components/IntroScreen";
import SectionWrapper from "../Components/SectionWrapper";
import GamePage from "./Pages/GamePage";

function RotateOverlay() {
    const [show, setShow] = useState(false);

    useEffect(() => {
        initClickSound("/Audio/clicking.mp3", 0.6);
    }, []);

    useEffect(() => {
        const check = () => {
            const isPortrait = window.innerHeight > window.innerWidth;
            const isMobile = window.innerWidth < 900;
            setShow(isMobile && isPortrait);
        };
        check();
        window.addEventListener("resize", check);
        window.addEventListener("orientationchange", check);
        return () => {
            window.removeEventListener("resize", check);
            window.removeEventListener("orientationchange", check);
        };
    }, []);

    if (!show) return null;
    return (
        <div
            style={{
                position: "fixed",
                zIndex: 99999,
                inset: 0,
                background: "rgba(0,0,0,0.95)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                color: "#fff",
                fontFamily: "sans-serif",
                fontSize: 24,
            }}
        >
            <div style={{ marginBottom: 16 }}>
                <Image src="/Images/ppif_logo.png" alt="PPIF logo"
                    onClick={() => {
                        playClickSound();
                    }}
                    width={80}
                    height={75}
                    priority
                    className="animate-bounce"
                />
                <Image src="/Images/rotate_device.gif" alt="PPIF logo"
                    onClick={() => {
                        playClickSound();
                    }}
                    width={80}
                    height={75}
                    priority
                />
            </div>
            <div className="text-center text-[20px]">
                <b>Rotate your device</b><br />
                <b>or change your device to larger</b>
            </div>
            <div style={{ fontSize: 16, marginTop: 8, textAlign: "center" }}>
                Please use landscape mode<br />for the best experience.
            </div>
        </div>
    );
}

export default function GameWebLayout() {
    const [introDone, setIntroDone] = useState(false);
    const [contentVisible, setContentVisible] = useState(false);
    const [showGlitch, setShowGlitch] = useState(false);

    const musicAudioRef = useRef(null);
    const glitchAudioRef = useRef(null);
    const [isMusicPlaying, setIsMusicPlaying] = useState(false);

    useEffect(() => {
        if (musicAudioRef.current) {
            musicAudioRef.current.volume = 0.4;
        }
        if (glitchAudioRef.current) {
            glitchAudioRef.current.volume = 1;
        }
    }, []);

    const toggleMusic = () => {
        if (musicAudioRef.current) {
            if (isMusicPlaying) {
                musicAudioRef.current.pause();
            } else {
                musicAudioRef.current.play().catch(() => { });
            }
            setIsMusicPlaying(!isMusicPlaying);
        }
    };

    useEffect(() => {
        const introSeen = localStorage.getItem("intro_seen_game");
        if (introSeen === "true") {
            setIntroDone(true);
            setContentVisible(true);
        }
    }, []);

    const handleIntroFinish = () => {
        localStorage.setItem("intro_seen_game", "true");
        setIntroDone(true);
        setTimeout(() => setContentVisible(true), 100);
    };

    return (
        <div className="locked-desktop-wrapper">
            <div className="locked-desktop-content">
                <RotateOverlay />
                <>
                    <audio ref={musicAudioRef} loop preload="auto">
                        <source src="/Audio/bg-music.mp3" type="audio/mp3" />
                    </audio>
                    <audio ref={glitchAudioRef} preload="auto">
                        <source src="/Audio/glitch_transition.mp3" type="audio/mp3" />
                    </audio>

                    <main className="flex flex-col w-full" style={{ height: "100vh" }}>
                        <SectionWrapper id="game-section" active={true}>
                            <GamePage />
                        </SectionWrapper>
                    </main>
                </>
            </div>
        </div>
    );
}