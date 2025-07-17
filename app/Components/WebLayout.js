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


const SCROLL_THRESHOLD = 20;

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
    const [glitchType, setGlitchType] = useState(null); // null | "in" | "out"


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
        <>
            {!introDone && <IntroScreen onFinish={handleIntroFinish} />}

            <AnimatePresence>
                {contentVisible && (
                    <motion.div
                        key="maincontent"
                        initial={{ opacity: 0, y: 32 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.9, ease: [0.4, 0, 0.2, 1] }}
                        style={{ minHeight: "100vh" }}
                    >
                        <header className="p-4 bg-transparent fixed w-full text-white z-50">
                            <Navigation currentSection={currentSection} onNavigate={handleNavigate} isMobile={isMobile} />
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
                                                    transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
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
            </AnimatePresence>
        </>
    );
}