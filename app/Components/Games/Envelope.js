"use client";
import React, { useState, useEffect, useRef } from "react";
import Spline from "@splinetool/react-spline";
import { motion, AnimatePresence } from "framer-motion";
import { initClickSound, playClickSound } from "../SoundPlayer";
import UniqueCode from "../Groups/UniqueCodes.json";
import BackButton from "../BackButton";

export default function Envelope({ onNext, onPrev }) {
  const scenes = [
    "https://prod.spline.design/QwCKxSuek9YolkQb/scene.splinecode", // flip
    "https://prod.spline.design/RRF-H-e5ZfciGKxs/scene.splinecode", // open
    "https://prod.spline.design/ESmbWcgsyPh93M2Y/scene.splinecode", // out
  ];

  const validCodes = UniqueCode.codes;

  const [sceneIndex, setSceneIndex] = useState(0);
  const [hasClickedOnce, setHasClickedOnce] = useState(false);
  const [showPaper, setShowPaper] = useState(false);

  const [code, setCode] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    initClickSound("/Audio/page-flip.mp3", 0.6);
  }, []);

  useEffect(() => {
    scenes.forEach((url) => {
      fetch(url, { method: "GET", mode: "no-cors" }).catch(() => {});
    });
  }, []);

  const handleClick = () => {
    if (showPaper) return;

    if (!hasClickedOnce) {
      setHasClickedOnce(true);
    } else if (sceneIndex < scenes.length - 1) {
      setSceneIndex((prev) => prev + 1);
      setHasClickedOnce(false);
    } else {
      setShowPaper(true);
    }
  };

  return (
    <div
      className="relative w-full h-screen overflow-hidden"
      onClick={handleClick}
    >
      {!showPaper && (
        <Spline
          onLoad={() => <p>Loading...</p>}
          scene={scenes[sceneIndex]}
          onClick={playClickSound()}
        />
      )}

      <AnimatePresence>
        <BackButton key="backbtn" className="absolute top-[20%] left-[15%]" onPrev={onPrev} />

        {showPaper && (
          <motion.div
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            exit={{ y: "100%", opacity: 0 }}
            transition={{ type: "spring", stiffness: 80, damping: 15 }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-60 bg-[#d3cec6] shadow-2xl rounded-sm p-6 z-20"
          >
            <p
              className="text-start text-md text-black mb-6"
              style={{ fontFamily: "HongMengTi" }}
            >
              Dear Striders,
            </p>
            <p
              className="text-center text-sm text-black"
              style={{ fontFamily: "HongMengTi" }}
            >
              Enter your Unique Code
            </p>
            <div
              className="flex gap-2 my-3 justify-center"
              onClick={() => inputRef.current?.focus()}
            >
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="w-10 h-12 bg-gray-600 rounded-md flex items-center justify-center text-xl font-bold text-white"
                >
                  {code[i] || ""}
                </div>
              ))}

              <input
                ref={inputRef}
                type="text"
                value={code}
                onChange={(e) => {
                  const input = e.target.value.toUpperCase().slice(0, 5);
                  setCode(input);
                  if (input.length === 5) {
                    const isValid = validCodes.includes(input);
                    if (isValid) {
                      setTimeout(() => {
                        onNext(input);
                      }, 500);
                      setErrorMessage("");
                    } else {
                      setErrorMessage("Invalid code. Please try again.");
                    }
                  } else {
                    setErrorMessage("");
                  }
                }}
                maxLength={5}
                className="absolute opacity-0"
                autoFocus
              />
            </div>
            {errorMessage && (
              <p
                className="text-center text-red-600 text-sm mt-1"
                style={{ fontFamily: "HongMengTi" }}
              >
                {errorMessage}
              </p>
            )}
            <div className="absolute right-4 bottom-4">
              <img
                src="/Images/PPIF/1-noBG.png"
                alt="stamp"
                className="w-16 h-10"
              />
            </div>
            <div className="absolute left-4 bottom-4 rotate-30">
              <img
                src="/Images/PPIF/8-noBG.png"
                alt="stamp"
                className="w-16 h-10"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
