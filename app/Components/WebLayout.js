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

    const handleIntroFinish = () => {
        setIntroDone(true);
        setTimeout(() => setContentVisible(true), 100);
    };

    // Navigation
    const handleNavigate = (id) => {
        setCurrentSection(id);
        const section = document.getElementById(id);
        if (section) section.scrollIntoView({ behavior: "smooth" });
    };

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
                setCurrentSection(sectionList[index].id);
                wheelDelta = 0;
                ticking = true;
                setTimeout(() => (ticking = false), 600);
            }
            // Scroll ke atas
            else if (wheelDelta < -SCROLL_THRESHOLD && index > 0) {
                index--;
                setCurrentSection(sectionList[index].id);
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
                        <header className="p-4 bg-transparent fixed w-full text-white z-40">
                            <Navigation currentSection={currentSection} onNavigate={handleNavigate} isMobile={isMobile} />
                        </header>
                        <main
                            ref={containerRef}
                            className={`${isMobile ? "snap-y snap-mandatory overflow-y-auto" : "overflow-hidden"} flex flex-col w-full`}
                            style={{ height: "100vh" }}
                        >
                            {isMobile
                                ? sectionList.map(({ id, component: SectionComp }) => (
                                    <SectionWrapper key={id} id={id} active={true}>
                                        <SectionComp />
                                    </SectionWrapper>
                                ))
                                : (() => {
                                    const { id, component: SectionComp } = sectionList.find(s => s.id === currentSection);
                                    return (
                                        <SectionWrapper id={id} active={true}>
                                            <SectionComp />
                                        </SectionWrapper>
                                    );
                                })()
                            }
                        </main>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
            );
}