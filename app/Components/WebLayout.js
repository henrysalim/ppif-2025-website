"use client";
import Image from "next/image";
import React, { useRef, useState, useEffect } from "react";
import Navigation from "./Navigation";
import SectionWrapper from "./SectionWrapper";
import HomePage from "./Pages/HomePage";
import Contact from "./Pages/Contact";
import Timeline from "./Pages/Timeline";
import AboutAll from "./Pages/AboutAll";
import IntroScreen from "./IntroScreen";
import { motion, AnimatePresence } from "framer-motion";
import { initClickSound, playClickSound } from "./SoundPlayer";

const SCROLL_THRESHOLD = 20;

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

const sectionList = [
    { id: "home", component: HomePage },
    { id: "about-all", component: AboutAll },
    { id: "timeline", component: Timeline },
    { id: "contact", component: Contact },
];

const useIsMobile = () => {
    const [mobile, setMobile] = React.useState(false);
    React.useEffect(() => {
        const handleResize = () => setMobile(window.innerWidth <= 768);
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    return mobile;
};

export default function WebLayout() {
    const containerRef = useRef(null);
    const isMobile = useIsMobile();
    const [currentSection, setCurrentSection] = useState(sectionList[0].id);

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
        const introSeen = localStorage.getItem("intro_seen");
        if (introSeen === "true") {
            setIntroDone(true);
            setContentVisible(true);
        }
    }, []);

    const handleIntroFinish = () => {
        localStorage.setItem("intro_seen", "true");
        setIntroDone(true);
        setTimeout(() => setContentVisible(true), 100);
    };

    const triggerSectionChange = (id) => {
        if (glitchAudioRef.current) {
            glitchAudioRef.current.currentTime = 0;
            glitchAudioRef.current.play().catch(() => { });
        }

        setShowGlitch(true);
        setTimeout(() => {
            setCurrentSection(id);
            setTimeout(() => setShowGlitch(false), 350);
        }, 90);
    };


    const handleNavigate = (id) => {
        triggerSectionChange(id);
        const section = document.getElementById(id);
        if (section) section.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        if (isMobile) return;

        const handleKeyDown = (e) => {
            if (["INPUT", "TEXTAREA"].includes(document.activeElement.tagName)) return;

            let index = sectionList.findIndex((s) => s.id === currentSection);

            if (e.key === "ArrowDown" || e.key === "PageDown") {
                if (index < sectionList.length - 1) {
                    triggerSectionChange(sectionList[index + 1].id);
                }
            } else if (e.key === "ArrowUp" || e.key === "PageUp") {
                if (index > 0) {
                    triggerSectionChange(sectionList[index - 1].id);
                }
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [isMobile, currentSection]);

    // Desktop: intercept wheel
    useEffect(() => {
        if (!containerRef.current || isMobile) return;

        let ticking = false;
        let index = sectionList.findIndex((s) => s.id === currentSection);
        let wheelDelta = 0;

        const onWheel = (e) => {
            if (ticking) return;
            e.preventDefault();

            wheelDelta += e.deltaY;

            // Scroll ke bawah
            if (wheelDelta > SCROLL_THRESHOLD && index < sectionList.length - 1) {
                index++;
                triggerSectionChange(sectionList[index].id);
                wheelDelta = 0;
                ticking = true;
                setTimeout(() => (ticking = false), 600);
            } else if (wheelDelta < -SCROLL_THRESHOLD && index > 0) {
                index--;
                triggerSectionChange(sectionList[index].id);
                wheelDelta = 0;
                ticking = true;
                setTimeout(() => (ticking = false), 600);
            }
        };

        const el = containerRef.current;
        el.addEventListener("wheel", onWheel, { passive: false });
        return () => el.removeEventListener("wheel", onWheel);
    }, [isMobile, currentSection]);

    //untuk mobile ughhh
    useEffect(() => {
        if (!isMobile || !containerRef.current) return;

        const el = containerRef.current;

        const onScroll = () => {
            let foundSection = currentSection;

            for (const { id } of sectionList) {
                const sec = document.getElementById(id);
                if (!sec) continue;

                const rect = sec.getBoundingClientRect();
                if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
                    foundSection = id;
                    break;
                }
            }

            if (foundSection !== currentSection) {
                setCurrentSection(foundSection);
            }
        };

        el.addEventListener("scroll", onScroll, { passive: true });
        return () => el.removeEventListener("scroll", onScroll);
    }, [isMobile, currentSection, containerRef]);

    return (
        <div className="locked-desktop-wrapper">
            <div className="locked-desktop-content">
                <RotateOverlay />
                {!introDone && <IntroScreen onFinish={handleIntroFinish} />}
                <AnimatePresence>
                    <>
                        <audio ref={musicAudioRef} loop preload="auto">
                            <source src="/Audio/bg-music.mp3" type="audio/mp3" />
                        </audio>
                        {contentVisible && (
                            <motion.div
                                key="maincontent"
                                initial={{ opacity: 0, y: 32 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.9, ease: [0.4, 0, 0.2, 1] }}
                                style={{ minHeight: "100vh" }}
                            >
                                <header className="lg:p-4 p-2 lg:pr-6 pr-5 bg-transparent fixed w-full text-white z-50">
                                    <Navigation
                                        currentSection={currentSection}
                                        onNavigate={handleNavigate}
                                        isMobile={isMobile}
                                        isMusicPlaying={isMusicPlaying}
                                        onToggleMusic={toggleMusic}
                                    />

                                </header>

                                {showGlitch && (
                                    <div className="absolute inset-0 z-[9999] pointer-events-none mix-blend-screen opacity-80 transition-opacity duration-700">
                                        <video
                                            className="w-full h-full object-cover"
                                            autoPlay
                                            muted
                                            playsInline
                                        >
                                            <source src="/Images/glitch_transition.mp4" type="video/mp4" />
                                        </video>
                                    </div>
                                )}

                                <audio ref={glitchAudioRef} preload="auto">
                                    <source src="/Audio/glitch_transition.mp3" type="audio/mp3" />
                                </audio>

                                <main
                                    ref={containerRef}
                                    className={`${isMobile ? "snap-y snap-mandatory overflow-y-auto" : "overflow-hidden"} flex flex-col w-full`}
                                    style={{ height: "100vh" }}
                                >
                                    {isMobile
                                        ? sectionList.map(({ id, component: SectionComp }) => (
                                            <div
                                                key={id}
                                                id={id}
                                                className="snap-start min-h-screen w-full flex-shrink-0"
                                            >
                                                <SectionWrapper id={id} active={true}>
                                                    <SectionComp />
                                                </SectionWrapper>
                                            </div>
                                        ))
                                        : (
                                            <AnimatePresence mode="wait">
                                                {(() => {
                                                    const { id, component: SectionComp } = sectionList.find(s => s.id === currentSection);
                                                    return (
                                                        <motion.div
                                                            key={id}
                                                            initial={{ opacity: 0, scale: 1.2 }}
                                                            animate={{ opacity: 1, scale: 1 }}
                                                            exit={{ opacity: 0, scale: 1.5 }}
                                                            transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
                                                            style={{ height: "100vh" }}
                                                        >
                                                            <SectionWrapper id={id} active={true}>
                                                                <SectionComp />
                                                            </SectionWrapper>
                                                        </motion.div>
                                                    );
                                                })()}
                                            </AnimatePresence>
                                        )
                                    }
                                </main>
                            </motion.div>
                        )}
                    </>
                </AnimatePresence>
            </div>
        </div>
    );
}