'use client';
import { motion, AnimatePresence } from 'framer-motion';
import React, { useState, useEffect } from 'react';

const WELCOME_DURATION = 1900;
const APPEAR_DELAY = 1;

const flickerVariants = {
    animate: {
        opacity: [0.2, 1, 0.6, 1, 0.2, 1, 0.7, 1, 0.4, 1],
        transition: {
            delay: APPEAR_DELAY,
            duration: 0.9,
            times: [0, 0.1, 0.2, 0.26, 0.35, 0.42, 0.55, 0.7, 0.85, 1],
            repeat: 0,
            ease: "linear",
        }
    },
    exit: {
        opacity: [1, 0.2, 1, 0.6, 0],
        transition: {
            duration: 0.5,
            times: [0, 0.2, 0.4, 0.7, 1],
            ease: "linear"
        }
    }
};

export function WelcomeFlicker() {
    const [show, setShow] = useState(true);

    useEffect(() => {
        const t = setTimeout(() => setShow(false), WELCOME_DURATION);
        return () => clearTimeout(t);
    }, []);

    return (
        <div className="absolute z-30 w-full top-[18vh] flex justify-center select-none pointer-events-none">
            <AnimatePresence>
                {show && (
                    <motion.h1
                        key="welcome-strider"
                        initial={{ opacity: 0 }}
                        animate="animate"
                        exit="exit"
                        variants={flickerVariants}
                        className="text-center font-black drop-shadow-lg lg:text-[2.2rem] text-[12px] lg:mt-10 mt-5"
                        style={{
                            color: "#e0e0e0",
                            fontFamily: "monospace",
                            letterSpacing: "0.12em",
                            textTransform: "uppercase",
                            textShadow: "0 0 18px #fff, 0 0 10px #33b3ff55",
                            filter: "brightness(1.2)",
                            userSelect: "none",
                            pointerEvents: "none"
                        }}
                    >
                        welcome <span style={{
                            color: "#4fd0ff",
                            textShadow: "0 0 12px #4fd0ffcc, 0 0 2px #fff"
                        }}>strider</span>
                    </motion.h1>
                )}
            </AnimatePresence>
        </div>
    );
}