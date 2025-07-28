import React, { useState, useEffect } from "react";
import Background from "../Background";
import "../../globals.css";
import { informaticsGallery, ppifGallery } from "../GalleryData";
import BackButton from "../BackButton";
import DiagonalSwiper from "../DiagonalSwiper";
import { initClickSound, playClickSound } from "../SoundPlayer";
import { motion, AnimatePresence } from "framer-motion";

export default function AboutAll() {
  const tabs = ["information", "gallery"];
  const [activeTab, setActiveTab] = useState("information");
  const [activeContent, setActiveContent] = useState("informatics");
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showDivision, setShowDivision] = useState(false);
  const [showPulse, setShowPulse] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    initClickSound("/Audio/clicking.mp3", 0.6);
  }, []);

  // Carousel chevron handlers
  const handleChevronUp = () => {
    const currentIndex = tabs.indexOf(activeTab);
    const prevIndex = (currentIndex - 1 + tabs.length) % tabs.length;
    setActiveTab(tabs[prevIndex]);
  };
  const handleChevronDown = () => {
    const currentIndex = tabs.indexOf(activeTab);
    const nextIndex = (currentIndex + 1) % tabs.length;
    setActiveTab(tabs[nextIndex]);
  };

  const handleModalClose = () => {
    setShowPulse(true);
    setIsClosing(true);
    playClickSound();
    setTimeout(() => {
      setIsModalOpen(false);
      setIsClosing(false);
      setShowPulse(false);
    }, 350);
  };

  const renderContent = () => {
    if (activeTab === "information") {
      if (activeContent === "informatics") {
        return (
          <>
            <h2 className="lg:text-2xl text-sm font-bold">What is Informatics?</h2>
            <p className="text-gray-400 lg:text-sm text-[10px] lg:mb-4 mb-2">
              Multimedia Nusantara University
            </p>
            <div
              className="bg-gradient-to-b rounded-xl lg:p-6 p-3 lg:h-[300px] h-[105px] lg:mb-0 mb-2 overflow-y-scroll about-scrollbar shadow-lg border border-gray-700"
              style={{
                background: "linear-gradient(to bottom, #5C5C5C, #3A3A3A)",
              }}
            >
              <p className="text-white lg:text-lg text-[10px] leading-relaxed">
                Informatika adalah bidang ilmu yang menggabungkan teknologi dan
                pemrograman untuk memecahkan masalah melalui pengolahan data dan
                informasi. Di jurusan ini, kamu akan belajar mengembangkan
                perangkat lunak, memahami algoritma, dan merancang sistem
                inovatif untuk berbagai sektor, seperti bisnis dan kesehatan.
                <br />
                <br />
                Di era digital, informatika semakin penting karena hampir semua
                aspek kehidupan terhubung dengan teknologi. Di Universitas
                Multimedia Nusantara (UMN), kamu akan didukung dengan fasilitas
                modern dan acara seperti CodeXP yang memberikan pengalaman
                langsung di dunia teknologi.
                <br />
                <br />
                Buat kamu yang tertarik dengan teknologi...
              </p>
            </div>
          </>
        );
      } else if (activeContent === "ppif") {
        return (
          <>
            <h2 className="lg:text-2xl text-sm font-bold">What is PPIF?</h2>
            <p className="text-gray-400 lg:text-sm text-[10px] lg:mb-4 mb-2">
              Program Pengenalan Informatika & Fakultas
            </p>
            <div
              className="bg-gradient-to-b rounded-2xl lg:p-6 p-3 lg:h-[300px] h-[105px] lg:mb-0 mb-2 overflow-y-scroll about-scrollbar shadow-lg border border-gray-700"
              style={{
                background: "linear-gradient(to bottom, #5C5C5C, #3A3A3A)",
              }}
            >
              <p className="text-white lg:text-lg text-[10px] leading-relaxed">
                PPIF adalah program pengenalan untuk mahasiswa baru Informatika.
                Di sini kamu akan dikenalkan dengan budaya kampus, nilai-nilai
                program studi, serta aktivitas-aktivitas seru yang akan
                membekali kamu untuk survive dan thrive di dunia perkuliahan.
                <br />
                <br />
                Event ini biasanya dilengkapi dengan workshop, pengenalan dosen,
                sampai simulasi project bareng tim. Cocok banget buat kamu yang
                baru nyemplung ke dunia coding.
              </p>
            </div>
          </>
        );
      }
    } else if (activeTab === "gallery") {
      const originalImages =
        activeContent === "informatics" ? informaticsGallery : ppifGallery;
      const noImg = "/Assets/noIMG.png";
      const galleryImages = [...originalImages];
      while (galleryImages.length < 16) {
        galleryImages.push({
          src: noImg,
          title: "No Image",
          description: "This is a placeholder image.",
        });
      }
      return (
        <>
          {/* Gallery Images Container */}
          <div
            className="rounded-3xl lg:mb-6 mb-3 p-6 lg:max-h-[340px] max-h-[134px] overflow-y-scroll about-scrollbar"
            style={{
              background: "#1C1E21",
              borderWidth: "6px 0px",
              borderStyle: "solid",
              borderColor: "#595959",
            }}
          >
            <div className="grid grid-cols-4 grid-rows-4 gap-4">
              {galleryImages.map((img, idx) => (
                <div
                  key={idx}
                  onClick={() => {
                    setSelectedImage(img);
                    playClickSound();
                  }}
                  className="cursor-pointer bg-[#23252A] lg:h-30 w-full rounded-xl flex items-center justify-center overflow-hidden border border-gray-600"
                >
                  <img
                    src={img.src}
                    alt={img.title}
                    className="object-cover w-full h-full"
                  />
                </div>
              ))}
            </div>
          </div>
          {/* Gallery Footer */}
          <div
            className="relative w-full rounded-3xl lg:p-8 p-4 h-auto gap-2 flex flex-row justify-between items-start"
            style={{
              background: "linear-gradient(to bottom, #383A3F, #1C1E21)",
            }}
          >
            {/* Text Section */}
            <div className="flex-1">
              <h3 className="lg:text-xl text-[12px] font-bold mb-2">
                {selectedImage?.title ||
                  `Gallery ${activeContent === "informatics" ? "Informatics" : "PPIF"
                  }`}
              </h3>
              <p className="text-gray-300 lg:text-lg text-[9px] mt-4 lg:w-[500px] w-[230px] truncate">
                {selectedImage?.description ||
                  "Klik gambar untuk melihat detail tiap dokumentasi acara."}
              </p>
            </div>

            {/* Button Section */}
            <button
              className="bg-[#23252A] text-white lg:px-6 lg:py-2 px-3 py-1 lg:text-lg text-[10px] lg:rounded-2xl rounded-xl font-semibold border-4 border-[#797979] hover:bg-[#383A3F] transition-all cursor-pointer"
              onClick={() => {
                setIsModalOpen(true);
                playClickSound();
              }}
            >
              See Picture
            </button>
          </div>
        </>
      );
    }
  };

  // Konten utama (Informasi & Gallery)
  const renderMainContent = () => (
    <div className="relative w-auto h-auto flex justify-center items-center px-4 md:px-20 about-font">
      <div className="flex flex-col md:flex-row gap-4 w-full lg:max-w-6xl max-w-2xl item-stretch mt-10">
        {/* Sidebar Kiri */}
        <div className="w-full md:w-1/4 flex flex-col items-center h-full lg:mt-[58px]">
          <div
            className="lg:w-11/12 w-44 bg-black/40 rounded-4xl flex flex-col items-center py-2 flex-1 lg:mt-0 mt-10 lg:min-h-[615px] min-h-[280px]"
            style={{
              borderWidth: "6px",
              borderStyle: "solid",
              borderColor: "#74777B",
            }}
          >
            {/* Top Chevron */}
            <div className="w-full flex justify-center my-2">
              <button
                className="rounded-full w-full flex justify-center items-center lg:py-2 py-1 focus:outline-none mt-0 mb-0 mx-[8px] border-4"
                style={{ backgroundColor: "#51545B", borderColor: "#797979" }}
                onClick={() => {
                  handleChevronUp();
                  playClickSound();
                }}
                aria-label="Previous Tab"
                type="button"
                disabled={activeTab === "information"}
                {...(activeTab === "information"
                  ? {
                    className:
                      "rounded-full w-full flex justify-center items-center lg:py-2 py-1 focus:outline-none mt-0 mb-0 mx-[8px] border-4 opacity-50 cursor-not-allowed",
                  }
                  : {})}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 12L10 7L15 12"
                    stroke="white"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
            {/* Buttons */}
            <button
              className={`w-11/12 mb-0 py-3 rounded-lg font-bold lg:text-lg text-[11px] transition-all duration-200 ${activeTab === "information"
                ? "bg-yellow-400 text-black pulse-ring"
                : "bg-transparent text-white"
                }`}
              onClick={() => {
                setActiveTab("information");
                playClickSound();
              }}
            >
              Information
            </button>
            <hr className="w-10/12 mt-0 mb-2 border-gray-400" />
            <button
              className={`w-11/12 mb-0 py-3 rounded-lg font-bold lg:text-lg text-[11px] transition-all duration-200 ${activeTab === "gallery"
                ? "bg-yellow-400 text-black pulse-ring"
                : "bg-transparent text-white"
                }`}
              onClick={() => {
                setActiveTab("gallery");
                playClickSound();
              }}
            >
              Gallery
            </button>
            <hr className="w-10/12 mt-0 mb-2 border-gray-400" />

            {/* Tambahan: Tombol Division */}
            {activeContent === "ppif" && (
              <>
                <button
                  className={`w-11/12 mb-0 py-3 rounded-lg font-bold lg:text-lg text-[11px] transition-all duration-200 ${showDivision
                    ? "bg-yellow-400 text-black pulse-ring"
                    : "bg-transparent text-white hover:bg-yellow-400/10"
                    }`}
                  onClick={() => {
                    playClickSound();
                    setShowDivision(true);
                  }}
                >
                  Division
                </button>
                <hr className="w-10/12 mt-0 mb-2 border-gray-400" />
              </>
            )}

            {/* Bottom Chevron */}
            <div className="w-full flex justify-center my-2 mt-auto">
              <button
                className="rounded-full w-full flex justify-center items-center lg:py-2 py-1 focus:outline-none mt-0 mb-0 mx-[8px] border-4"
                style={{ backgroundColor: "#51545B", borderColor: "#797979" }}
                onClick={() => {
                  handleChevronDown();
                  playClickSound();
                }}
                aria-label="Next Tab"
                type="button"
                disabled={activeTab === "gallery"}
                {...(activeTab === "gallery"
                  ? {
                    className:
                      "rounded-full w-full flex justify-center items-center lg:py-2 py-1 focus:outline-none mt-0 mb-0 mx-[8px] border-4 opacity-50 cursor-not-allowed",
                  }
                  : {})}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 8L10 13L15 8"
                    stroke="white"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="w-full md:w-3/4 flex flex-col h-auto mt-5">
          {/* Toggle Atas Kanan */}
          {(activeTab === "information" || activeTab === "gallery") && (
            <div className="w-full flex justify-end lg:mb-4 mb-2">
              <div className="flex gap-0 overflow-hidden rounded-full border-4 border-[#8F8F8F] relative z-20">
                {/* Informatics Button */}
                <button
                  className={`lg:px-5 lg:py-2 px-4 py-1 font-semibold text-sm transition-all duration-200 relative ${activeContent === "informatics"
                    ? "bg-[#FBCE2A] text-black"
                    : "bg-[#25272B] text-white hover:bg-white/10"
                    } rounded-l-full`}
                  onClick={() => {
                    setActiveContent("informatics");
                    playClickSound();
                  }}
                >
                  {activeContent === "informatics" && (
                    <span className="absolute lg:-right-3 -right-2 top-0 z-10 h-full w-6 bg-[#FBCE2A] skew-x-[-25deg] pointer-events-none" />
                  )}
                  <span className="relative z-10 lg:text-lg text-[11px]">Informatics</span>
                </button>

                {/* PPIF Button */}
                <button
                  className={`lg:px-5 lg:py-2 px-4 py-1 font-semibold text-sm transition-all duration-200 relative ${activeContent === "ppif"
                    ? "bg-[#FBCE2A] text-black"
                    : "bg-[#25272B] text-white hover:bg-white/10"
                    } rounded-r-full`}
                  onClick={() => {
                    setActiveContent("ppif");
                    playClickSound();
                  }}
                >
                  {activeContent === "ppif" && (
                    <span className="absolute lg:-left-3 -left-2 top-0 h-full w-6 bg-[#FBCE2A] transform skew-x-[-25deg] pointer-events-none" />
                  )}
                  <span className="relative z-10 lg:text-lg text-[11px]">PPIF</span>
                </button>
              </div>
            </div>
          )}

          {/* Konten Kanan */}
          <div
            className="bg-gradient-to-b backdrop-blur-md rounded-3xl text-white relative h-auto"
            style={{
              background: "linear-gradient(to bottom,#363A3F, #25272B )",
              borderWidth: "5px",
              borderStyle: "solid",
              borderColor: "#A9A9A9",
            }}
          >
            {/* Konten utama */}
            <div className="lg:p-6 p-3">{renderContent()}</div>

            {/* Footer absolute niban konten */}
            {activeTab === "information" && (
              <div
                className="px-6 rounded-2xl border-4 border-[#A9A9A9]"
                style={{
                  background: "#787C84",
                  boxShadow: "inset 0 4px 12px #00000066",
                }}
              >
                <div className="flex justify-between items-center">
                  <img
                    src="/Images/FooterAbout/kiri.png"
                    className="lg:w-[150px] w-[60px] h-auto"
                  />
                  <img
                    src="/Images/FooterAbout/kanan.png"
                    className="lg:w-[150px] w-[60px] h-auto"
                  />
                </div>
              </div>
            )}
          </div>

          < AnimatePresence >
            {isModalOpen && selectedImage && (
              <motion.div
                key="modal-bg"
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                style={{ pointerEvents: isClosing ? "none" : "auto" }}
              >
                {/* Modal Box */}
                <motion.div
                  key="modal-box"
                  className="relative lg:h-[600px] h-[270px] lg:min-w-4xl lg:mt-0 mt-10 min-w-lg border-[4px] border-[#A9A9A9] bg-[#1a1a1a] rounded-2xl rounded-tr-none overflow-hidden shadow-xl"
                  initial={{
                    opacity: 0,
                    scale: 0.98,
                    filter: "none",
                    x: 0,
                    y: 0,
                    skewX: 0,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    filter: "none",
                    x: 0,
                    y: 0,
                    skewX: 0,
                  }}
                  exit={isClosing ? {
                    // Glitch effect: opacity turun, goyang X, filter drop-shadow warna
                    opacity: [1, 0.8, 0.85, 0.7, 0],
                    x: [0, -10, 10, -5, 5, 0, -20, 20, 0],
                    skewX: [0, 12, -12, 8, -8, 0],
                    filter: [
                      "none",
                      "drop-shadow(0 0 8px #fbce2a)",
                      "drop-shadow(0 0 12px #5ae93a)",
                      "drop-shadow(0 0 8px #ff1e1e)",
                      "none",
                    ],
                    transition: { duration: 0.6, ease: "easeInOut" }
                  } : {
                    opacity: 0
                  }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                >
                  {/* Header */}
                  <div className="relative bg-[#2b2b2b] lg:px-6 lg:py-4 px-4 py-2 border-b border-[#6B6B6B] flex justify-between items-center">
                    <h2 className="text-white lg:text-lg text-sm font-bold">
                      Picture Log
                    </h2>
                    <button
                      onClick={handleModalClose}
                      disabled={isClosing}
                      className={`relative bg-red-600 lg:w-[80px] h-[40px] w-[60px]${showPulse ? " fast-pulse-4x" : ""} skew-x-[-12] overflow-hidden flex items-center justify-center rounded-full`}
                    >
                      <span className="skew-x-[12] text-black font-black z-10">
                        ✕
                      </span>
                      <span className="absolute inset-1 border-[4px] border-black skew-x-[-12] rounded-full"></span>
                    </button>
                  </div>

                  {/* Image Area */}
                  <div className="relative lg:h-[530px] h-[210px] overflow-hidden">
                    <div className="modal-background w-full h-full">
                      <Background textChild="Gallery Images" height="full">
                        <div className="relative w-full h-full flex items-center justify-center">
                          {/* Blur Box */}
                          <div className="absolute inset-0 z-0 flex items-center justify-center">
                            <div className="w-full lg:h-[450px] h-[160px] rounded-xl backdrop-blur-md bg-[#2b2b2b]/40"></div>
                          </div>
                          {/* Actual Image */}
                          <img
                            src={selectedImage.src}
                            alt={selectedImage.title}
                            className="relative z-10 lg:w-[500px] w-[240px] h-auto rounded-xl border-[4px] border-[#6B6B6B] object-contain"
                          />
                        </div>
                      </Background>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div >
  );

  // Konten Division
  const renderDivision = () => (
    <div className="relative w-full h-screen flex justify-center items-center about-font">
      <div className="absolute bottom-8 right-8 z-20">
        <button
          onClick={() => {
            setShowPulse(true);
            playClickSound();
            setTimeout(() => {
              setShowDivision(false);
              setShowPulse(false);
            }, 300);
          }}
          className={`bg-[#FBCE2A] text-black rounded-full ${showPulse ? " fast-pulse-4x" : ""} lg:px-6 lg:py-2 px-3 py-1 lg:text-lg text-[12px] font-bold shadow-md hover:bg-yellow-300 transition`}
        >
          ← Back
        </button>
      </div>
      <div className="w-full flex justify-center items-center">
        <DiagonalSwiper />
      </div>
    </div>
  );

  return (
    <Background textChild="ABOUT INFORMATICS & PPIF">
      {/* Render konten 1 atau Division */}
      {!showDivision ? renderMainContent() : renderDivision()}
    </Background>
  );
}
