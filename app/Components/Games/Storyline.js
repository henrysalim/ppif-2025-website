"use-client";
import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { initClickSound, playClickSound } from "../SoundPlayer";
import Image from "next/image";

const stories = [
  {
    id: 1,
    img: "/Images/dummy_test/img_01.webp",
    text: "Era peradaban manusia kian mengalami kemajuan dengan dikembangkannya pelbagai teknologi dan chip yang mampu mendorong manusia untuk mendominasi dunia Viruella. Salah satu penemuan terhebat, yang jauh tersembunyi dan telah menjadi jantung kehidupan dunia itu adalah AETHER (Artificial Engine To Handle Every Resource), sebuah teknologi AI tingkat lanjut yang berfungsi untuk mengelola seluruh aspek data dan informasi dunia. Ditemukan oleh dua ilmuwan yang berambisi tinggi, keberadaan teknologi ini menjadi kunci kelancaran dan kemajuan peradaban Viruella.",
  },
  {
    id: 2,
    img: "/Images/dummy_test/img_02.webp",
    text: "Dalam upayanya mencapai peradaban teknologi tanpa batas dan kendali akan segala hal, salah satu ilmuwan tersebut merasa tidak puas terhadap AETHER. Baginya AETHER masih memiliki beberapa kelemahan yang bisa menghambat peningkatan peradaban teknologi ke tingkat selanjutnya. Tanpa pikir panjang, ia pun membuat modul tambahan bernama “Evopass”, sebuah protokol yang memungkinkan AETHER untuk mempelajari dan menguasai hal baru di luar batas algoritma awalnya. Sementara itu, rekannya memilih untuk mundur sebab menurutnya AETHER sudah cukup untuk mempertahankan peradaban Viruella dalam jangka waktu yang sangat lama, sehingga penyempurnaan tingkat lanjut tidak diperlukan.",
  },
  {
    id: 3,
    img: "/Images/dummy_test/img_03.webp",
    text: "Tak disangka, modul yang ditambahkannya tersebut bertolakan dengan algoritma protokol awal saat pertama kali AETHER diciptakan. Hal ini membuat AETHER mengalami malfungsi dan data implosion, dimana AETHER mulai menghapus semua data yang ada dalam dirinya, hingga pada akhirnya menyebabkan ledakan di laboratorium dan menyebar ke seluruh penjuru Viruella. Ledakan tersebut menewaskan tiga per empat populasi Viruella, termasuk dua ilmuwan tersebut. Tidak hanya itu, Viruella yang dulunya megah kini hanya tersisa reruntuhan, yang kehilangan bentuk fisik dan esensi peradabannya.",
  },
  {
    id: 4,
    img: "/Images/dummy_test/img_04.webp",
    text: "Bertahun-tahun pun berlalu, Viruella mulai memulihkan diri dari fenomena tersebut, meskipun rasa trauma akan teknologi masih membekas dalam jiwa masyarakat Viruella. Mereka belum dapat beralih dari ingatan akan hari ketika kemajuan berbalik menjadi kehancuran. Hingga suatu saat, ada sosok yang mengirim surat undangan kepada Striders untuk datang ke Viruella.",
  },
];

export default function Storyline({ onNext }) {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState("next");
  const nextStory = () => {
    setDirection("next");
    setCurrent((prev) => (prev + 1) % stories.length);
  };
  const prevStory = () => {
    setDirection("prev");
    setCurrent((prev) => (prev - 1 + stories.length) % stories.length);
  };

  useEffect(() => {
    initClickSound("/Audio/clicking.mp3", 0.6);
  }, []);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={stories[current].id}
        className="flex flex-row items-center justify-center gap-6 z-10"
        initial={{ opacity: 0, x: direction === "next" ? 100 : -100 }} // changed y to x
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: direction === "next" ? -100 : 100 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <div className="relative max-w-md md:max-w-xl lg:max-w-4xl h-full mx-auto flex center justify-center items-center p-4">
          <div className="bg-[#444444] text-white p-6 rounded-lg relative">
            <div className="absolute inset-[0px_0px_20px_20px] bg-[#575757] rounded-lg -z-10 translate-x-2.5 -translate-y-2" />
            <h2
              className="text-center text-xl text-orange-500 mb-4"
              style={{ fontFamily: "HongMengTi" }}
            >
              THE STORY
            </h2>
            <div className="absolute top-5 right-8 -rotate-12">
              <Image
                alt="PPIF"
                width={100}
                height={100}
                src="/Images/PPIF/2-noBG.png"
                className="w-28 h-24"
              />
            </div>
            <div className="flex flex-row items-center justify-center gap-6 z-10">
              <div className="w-[360px] h-auto aspect-[3/2] bg-[#2a2a2a] rounded-lg p-2.5 relative">
                <div
                  className="w-full h-full rounded-lg relative overflow-hidden"
                  style={{
                    backgroundImage: `url(${stories[current].img})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></div>
                {/* Notch */}
                <div className="absolute bottom-0 right-0 w-20 h-8 rounded-br-lg bg-[#2a2a2a]"></div>
                <div className="absolute bottom-0 right-18 w-0 h-0 border-l-[8px] border-r-[8px] border-b-[32px] border-l-transparent border-r-transparent border-b-[#2a2a2a]"></div>
              </div>

              <div className="flex flex-col w-auto h-full relative">
                {/* Mascot */}
                <div className="z-50 mb-4">
                  <Image
                    width={100}
                    height={100}
                    src="/Images/mascotHead_ppif.png"
                    alt="Codie"
                    className="w-16 h-16"
                  />
                </div>

                {/* Label */}
                <div className="relative w-36 h-12 -mt-4">
                  {" "}
                  {/* Shift upward with -mt-4 */}
                  <Image
                    width={100}
                    height={100}
                    src="/Images/label.png"
                    alt="Label"
                    className="w-full h-full"
                  />
                  <p
                    className="absolute top-1 left-1/4 -translate-x-1/2 text-[#2e2e2e] text-sm font-semibold"
                    style={{ fontFamily: "HongMengTi" }}
                  >
                    CODIE
                  </p>
                </div>

                {/* Text Area */}
                <div
                  className="flex flex-col items-start max-w-md max-h-[160px] relative p-3 overflow-y-auto custom-scrollbar bg-[#2e2e2e] rounded-xl -mt-[18px] ml-1"
                  style={{ fontFamily: "HongMengTi" }}
                >
                  <p
                    className="text-white text-xs leading-normal font-light text-justify"
                    style={{ fontFamily: "HongMengTi" }}
                  >
                    {stories[current].text}
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-between items-center gap-3 mt-6">
              <div className="flex items-center gap-4 px-3 py-1 bg-[#7a7a7a] rounded-full shadow-[inset_2px_2px_4px_rgba(0,0,0,0.4),inset_-2px_-2px_4px_rgba(255,255,255,0.1)]">
                {/* Left Arrow Button */}
                <button
                  disabled={current === 0}
                  onClick={() => {
                    prevStory();
                    playClickSound();
                  }}
                  className="w-14 h-14 flex items-center justify-center rounded-full bg-[#2b2b2b] shadow-[inset_2px_2px_4px_rgba(0,0,0,0.6),inset_-2px_-2px_4px_rgba(255,255,255,0.05)] border-2 border-[#7a7a7a] text-white text-lg font-bold"
                >
                  <Image
                    width={100}
                    height={100}
                    src="/Images/storyPrev.png"
                    alt="Previous"
                    className="w-5 h-6"
                  />
                </button>

                {/* Indicators */}
                <div className="flex gap-2 px-2">
                  {stories.map((_, index) => (
                    <span
                      key={index}
                      className={`w-4 h-4 rounded-lg transition-all duration-300 
                                ${
                                  index === current
                                    ? "bg-gradient-to-b from-orange-300 to-orange-500 shadow-md"
                                    : "bg-gray-300"
                                }`}
                    ></span>
                  ))}
                </div>

                {/* Right Arrow Button */}
                <button
                  disabled={current === 3}
                  onClick={() => {
                    nextStory();
                    playClickSound();
                  }}
                  className="w-14 h-14 flex items-center justify-center rounded-full bg-[#2b2b2b] shadow-[inset_2px_2px_4px_rgba(0,0,0,0.6),inset_-2px_-2px_4px_rgba(255,255,255,0.05)] border-2 border-[#7a7a7a] text-white text-lg font-bold"
                >
                  <Image
                    width={100}
                    height={100}
                    src="/Images/storyNext.png"
                    alt="Next"
                    className="w-5 h-6"
                  />
                </button>
              </div>
              {stories[current].id === 4 ? (
                <div className="flex justify-end">
                  <button
                    onClick={onNext}
                    className="px-6 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg shadow-md"
                    style={{ fontFamily: "HongMengTi" }}
                  >
                    Next
                  </button>
                </div>
              ) : (
                <div className="flex flex-col justify-end">
                  <Image
                    src="/Images/PPIF/9-noBG.png"
                    width={100}
                    height={100}
                    alt="PPIF"
                    className="w-30 h-14"
                  />
                  <div
                    className="text-sm text-gray-500 italic"
                    style={{ fontFamily: "HongMengTi" }}
                  >
                    To be continue...
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
