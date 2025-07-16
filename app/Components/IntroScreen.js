"use client";
import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function IntroScreen({ onFinish }) {
    const [stage, setStage] = useState("tap");
    const [slideStage, setSlideStage] = useState("in");

    // Setelah tap
    const handleTap = () => setStage("video");

    // Setelah video selesai
    const handleVideoEnd = () => {
        setStage("transition");
        setSlideStage("in");
    };

    // Panel sliding variants
    const slideVariants = {
        hidden: { x: "100%" },
        visible: { x: "0%", transition: { duration: 0.8, ease: "easeInOut" } },
        exit: { x: "-100%", transition: { duration: 0.6, ease: "easeInOut" } },
    };

    // LOGIC: setelah animasi masuk selesai, tunggu 1 detik, lalu animasi keluar
    const handleSlideAnimationComplete = () => {
        if (slideStage === "in") {
            setSlideStage("wait");
            setTimeout(() => setSlideStage("out"), 700); // Timeout 1 detik
        } else if (slideStage === "out") {
            onFinish();
        }
    };


    return (
        <div className="fixed z-[9999] inset-0 bg-black flex items-center justify-center w-full h-full">
            {/* Tap to continue */}
            <AnimatePresence>
                {stage === "tap" && (
                    <motion.div
                        key="tap"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex flex-col items-center justify-center w-full h-full"
                    >
                        <Image src="/Images/ppif_logo.png" alt="PPIF logo" className="animate-pulse" width={140} height={60} priority />
                        <button
                            onClick={handleTap}
                            className="px-9 py-5 text-2xl font-bold text-white bg-opacity-10 rounded-2xl shadow-xl border-2 border-white/30 border-dashed animate-pulse hover:bg-opacity-30 transition"
                            style={{ fontFamily: 'HongMengTi' }}
                        >
                            Tap to Continue
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Video intro */}
            <AnimatePresence>
                {stage === "video" && (
                    <motion.div
                        key="video"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 flex items-center justify-center bg-black"
                    >
                        <video
                            src="/intro-logo.mp4"
                            autoPlay
                            onEnded={handleVideoEnd}
                            className="max-w-full max-h-full"
                        />
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Sliding transition */}
            <AnimatePresence>
                {stage === "transition" && (
                    <motion.div
                        key="slide"
                        className="absolute inset-0 w-full h-full bg-black"
                        initial="hidden"
                        animate={
                            slideStage === "in"
                                ? "visible"
                                : slideStage === "wait"
                                    ? "visible"
                                    : "exit"
                        }
                        exit="exit"
                        variants={slideVariants}
                        onAnimationComplete={handleSlideAnimationComplete}
                    >
                        <div
                            className="absolute bottom-8 right-8 z-10 h-[260px] w-[360px] bg-white"
                            style={{
                                WebkitMaskImage: `url('/Images/loading.webp')`,
                                maskImage: `url('/Images/loading.webp')`,
                                WebkitMaskSize: 'contain',
                                maskSize: 'contain',
                                WebkitMaskRepeat: 'no-repeat',
                                maskRepeat: 'no-repeat',
                                WebkitMaskPosition: 'center',
                                maskPosition: 'center',
                                filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.35))',
                            }}
                        />
                        {/* <h1 className="absolute bottom-8 right-8 z-10 animate-bounce text-white text-3xl" style={{ fontFamily: 'HongMengTi' }}>
                            Now Loading
                        </h1> */}

                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}