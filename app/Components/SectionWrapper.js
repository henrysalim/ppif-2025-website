"use client";
import { motion } from "framer-motion";
import React from "react";
import GlitchTransition from './GlitchTransition';

export default function SectionWrapper({ children, id, active }) {
  const isClient = typeof window !== "undefined";
  const isMobile = isClient ? window.innerWidth <= 768 : false;

  if (isMobile) {
    return (
      <section
        id={id}
        className="w-full min-h-screen flex items-center justify-center snap-start"
        style={{ width: "100vw" }}
      >
        {children}
      </section>
    );
  }

  const variants = {
    enter: { opacity: 0, scale: 1.2 },
    center: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.8 },
  };

  return (
    <>
      <GlitchTransition />
      <motion.section
        id={id}
        className="w-full h-screen flex items-center justify-center snap-center"
        initial="enter"
        animate={active ? "center" : "exit"}
        exit="exit"
        variants={variants}
        transition={{ type: "spring", stiffness: 80, damping: 20 }}
        style={{ width: "100vw" }}
      >
        {children}
      </motion.section>
    </>
  );
}
