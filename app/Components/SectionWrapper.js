"use client";
import { motion } from "framer-motion";
import React from "react";

const variants = {
  enter: { opacity: 0, y: 50 },
  center: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -50 },
};

export default function SectionWrapper({ children, id, active }) {
  return (
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
  );
}