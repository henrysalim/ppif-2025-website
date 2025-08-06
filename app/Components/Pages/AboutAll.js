import React, { useState } from "react";
import Background from "../Background";
import "../../globals.css";
import { informaticsGallery, ppifGallery } from "../GalleryData";
import BackButton from "../BackButton";

export default function AboutAll() {
  const tabs = ["information", "gallery"];
  const [activeTab, setActiveTab] = useState("information");
  const [activeContent, setActiveContent] = useState("informatics");
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const renderContent = () => {
    if (activeTab === "information") {
      if (activeContent === "informatics") {
        return (
          <>
            {/* <BackButton href="/#home" /> */}
            <h2 className="text-2xl font-bold">What is Informatics?</h2>
            <p className="text-gray-400 text-sm mb-4">
              Multimedia Nusantara University
            </p>
            <div
              className="bg-gradient-to-b rounded-2xl p-6 h-[300px] overflow-y-scroll about-scrollbar shadow-lg border border-gray-700"
              style={{
                background: "linear-gradient(to bottom, #5C5C5C, #3A3A3A)",
              }}
            >
              <p className="text-white text-base leading-relaxed">
                Informatika adalah bidang ilmu yang menggabungkan teknologi dan
                pemrograman untuk memecahkan masalah melalui pengolahan
                informasi dan data. Di jurusan ini, kamu akan belajar memahami
                algoritma, pengembangan perangkat lunak yang cerdas, interaktif,
                secure, dan terintegrasi dengan kecerdasan buatan (AI), serta
                merancang sistem yang inovatif untuk kebutuhan di berbagai
                sektor, mulai dari bisnis hingga kesehatan.
                <br />
                <br />
                Di era digital ini, Informatika menjadi semakin penting karena
                hampir setiap aspek kehidupan kita terhubung dengan teknologi.
                Di Universitas Multimedia Nusantara, kamu akan mendapatkan
                banyak dukungan untuk belajar Informatika, mulai dari fasilitas
                lab modern dan acara yang diselenggarakan oleh Himpunan
                Mahasiswa Informatika (HMIF) UMN, seperti BYTE (Bringing Your
                Tech Experience), yang memberikan pengalaman langsung dan
                memperluas wawasan dalam dunia teknologi.
              </p>
            </div>
          </>
        );
      } else if (activeContent === "ppif") {
        return (
          <>
            <h2 className="text-2xl font-bold">What is PPIF?</h2>
            <p className="text-gray-400 text-sm mb-4">
              Program Pengenalan Informatika & Fakultas
            </p>
            <div
              className="bg-gradient-to-b rounded-2xl p-6 h-[300px] overflow-y-scroll about-scrollbar shadow-lg border border-gray-700"
              style={{
                background: "linear-gradient(to bottom, #5C5C5C, #3A3A3A)",
              }}
            >
              <p className="text-white text-base leading-relaxed">
                Perkenalan Prodi Informatika (PPIF) merupakan bagian dari
                kegiatan Orientasi Mahasiswa Baru (OMB) Universitas Multimedia
                Nusantara yang diselenggarakan oleh Himpunan Mahasiswa
                Informatika (HMIF) setiap tahunnya pada awal tahun ajar
                perkuliahan. Pada tahun ini, dengan tema "Discovering for Future
                Domination", diharapkan PPIF 2025 menjadi penguat dari semangat
                eksplorasi dan visi besar untuk menguasai masa depan.
                <br />
                <br />
                Sebagai generasi yang hidup di era digital, Striders sebagai
                mahasiswa baru Informatika 2025 perlu lebih dari sekadar belajar
                mereka perlu menemukan, mencoba, dan menguasai setiap peluang
                yang ada. Penemuan ini bukan hanya tentang teknologi terbaru,
                tetapi juga tentang mengenali potensi diri, menemukan passion,
                dan membentuk visi pribadi dalam ranah Informatika. Dari proses
                eksplorasi inilah akan lahir dominasi bukan dalam arti kekuasaan
                semata, tetapi dalam kemampuan untuk menjadi pemimpin dan
                inovator di masa depan digital yang terus berkembang.
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
            className="rounded-3xl mb-6 p-6 max-h-[400px] overflow-y-scroll about-scrollbar"
            style={{
              background: "#1C1E21",
              borderWidth: "10px 0px",
              borderStyle: "solid",
              borderColor: "#595959",
            }}
          >
            <div className="grid grid-cols-4 grid-rows-4 gap-4">
              {galleryImages.map((img, idx) => (
                <div
                  key={idx}
                  onClick={() => setSelectedImage(img)}
                  className="cursor-pointer bg-[#23252A] h-30 w-full rounded-xl flex items-center justify-center overflow-hidden border border-gray-600"
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
            className="relative w-full rounded-3xl p-8 h-[150px] mt-0 flex flex-row justify-between items-start"
            style={{
              background: "linear-gradient(to bottom, #383A3F, #1C1E21)",
            }}
          >
            {/* Text Section */}
            <div className="flex-1">
              <h3 className="text-xl font-bold mb-2">
                {selectedImage?.title ||
                  `Gallery ${
                    activeContent === "informatics" ? "Informatics" : "PPIF"
                  }`}
              </h3>
              <p className="text-gray-300 mt-4">
                {selectedImage?.description ||
                  "Klik gambar untuk melihat detail tiap dokumentasi acara."}
              </p>
            </div>

            {/* Button Section */}
            <button
              className="bg-[#23252A] text-white px-6 py-2 rounded-2xl font-semibold border-4 border-[#797979] hover:bg-[#383A3F] transition-all cursor-pointer"
              onClick={() => setIsModalOpen(true)}
            >
              See Picture
            </button>
          </div>
        </>
      );
    }
  };

  return (
    <Background textChild="ABOUT INFORMATICS & PPIF">
      <div className="relative w-full h-screen flex justify-center items-center px-4 md:px-20 about-font">
        <div className="flex flex-col md:flex-row gap-4 w-full max-w-7xl item-stretch mt-10">
          {/* Sidebar Kiri */}
          <div className="w-full md:w-1/4 flex flex-col items-center h-full mt md:mt-[58px]">
            <div
              className="w-11/12 bg-black/40 rounded-4xl flex flex-col items-center py-2 flex-1 min-h-[650px]"
              style={{
                borderWidth: "6px",
                borderStyle: "solid",
                borderColor: "#74777B",
              }}
            >
              {/* Top Chevron */}
              <div className="w-full flex justify-center my-2">
                <button
                  className="rounded-full w-full flex justify-center items-center py-2 focus:outline-none mt-0 mb-0 mx-[8px] border-4"
                  style={{ backgroundColor: "#51545B", borderColor: "#797979" }}
                  onClick={handleChevronUp}
                  aria-label="Previous Tab"
                  type="button"
                  disabled={activeTab === "information"}
                  {...(activeTab === "information"
                    ? {
                        className:
                          "rounded-full w-full flex justify-center items-center py-2 focus:outline-none mt-0 mb-0 mx-[8px] border-4 opacity-50 cursor-not-allowed",
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
                className={`w-11/12 mb-0 py-3 rounded-lg font-bold text-lg transition-all duration-200 ${
                  activeTab === "information"
                    ? "bg-yellow-400 text-black"
                    : "bg-transparent text-white"
                }`}
                onClick={() => setActiveTab("information")}
              >
                Information
              </button>
              <hr className="w-10/12 mt-0 mb-2 border-gray-400" />
              <button
                className={`w-11/12 mb-0 py-3 rounded-lg font-bold text-lg transition-all duration-200 ${
                  activeTab === "gallery"
                    ? "bg-yellow-400 text-black"
                    : "bg-transparent text-white"
                }`}
                onClick={() => setActiveTab("gallery")}
              >
                Gallery
              </button>
              <hr className="w-10/12 mt-0 mb-2 border-gray-400" />
              {/* Bottom Chevron */}
              <div className="w-full flex justify-center my-2 mt-auto">
                <button
                  className="rounded-full w-full flex justify-center items-center py-2 focus:outline-none mt-0 mb-0 mx-[8px] border-4"
                  style={{ backgroundColor: "#51545B", borderColor: "#797979" }}
                  onClick={handleChevronDown}
                  aria-label="Next Tab"
                  type="button"
                  disabled={activeTab === "gallery"}
                  {...(activeTab === "gallery"
                    ? {
                        className:
                          "rounded-full w-full flex justify-center items-center py-2 focus:outline-none mt-0 mb-0 mx-[8px] border-4 opacity-50 cursor-not-allowed",
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

          <div className="w-full md:w-3/4 flex flex-col">
            {/* Toggle Atas Kanan */}
            {(activeTab === "information" || activeTab === "gallery") && (
              <div className="w-full flex justify-end mb-4 pr-4">
                <div className="flex gap-0 overflow-hidden rounded-full border-4 border-[#8F8F8F] relative z-20">
                  {/* Informatics Button */}
                  <button
                    className={`px-5 py-2 font-semibold text-sm transition-all duration-200 relative ${
                      activeContent === "informatics"
                        ? "bg-[#FBCE2A] text-black"
                        : "bg-[#25272B] text-white hover:bg-white/10"
                    } rounded-l-full`}
                    onClick={() => setActiveContent("informatics")}
                  >
                    {activeContent === "informatics" && (
                      <span className="absolute -right-2 top-0 z-10 h-full w-4 bg-[#FBCE2A] skew-x-[-25deg] pointer-events-none" />
                    )}
                    <span className="relative z-10">Informatics</span>
                  </button>

                  {/* PPIF Button */}
                  <button
                    className={`px-5 py-2 font-semibold text-sm transition-all duration-200 relative ${
                      activeContent === "ppif"
                        ? "bg-[#FBCE2A] text-black"
                        : "bg-[#25272B] text-white hover:bg-white/10"
                    } rounded-r-full`}
                    onClick={() => setActiveContent("ppif")}
                  >
                    {activeContent === "ppif" && (
                      <span className="absolute -left-2 top-0 h-full w-4 bg-[#FBCE2A] transform skew-x-[-25deg] pointer-events-none" />
                    )}
                    <span className="relative z-10">PPIF</span>
                  </button>
                </div>
              </div>
            )}

            {/* Konten Kanan */}
            <div
              className="bg-gradient-to-b backdrop-blur-md rounded-3xl p-6 text-white relative min-h-[650px]"
              style={{
                background: "linear-gradient(to bottom,#363A3F, #25272B )",
                borderWidth: "6px",
                borderStyle: "solid",
                borderColor: "#A9A9A9",
              }}
            >
              {/* Konten utama */}
              <div className="mb-6 z-10 relative">{renderContent()}</div>

              {/* Footer absolute niban konten */}
              {activeTab === "information" && (
                <div
                  className="absolute left-0 right-0 bottom-0 px-5 rounded-2xl border-6 border-[#A9A9A9]"
                  style={{
                    background: "#787C84",
                    boxShadow: "inset 0 4px 12px #00000066",
                  }}
                >
                  <div className="flex justify-between items-center">
                    <img
                      src="/Images/FooterAbout/kiri.png"
                      className="w-[150px] h-auto"
                    />
                    <img
                      src="/Images/FooterAbout/kanan.png"
                      className="w-[150px] h-auto"
                    />
                  </div>
                </div>
              )}
            </div>

            {isModalOpen && selectedImage && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
                {/* Modal Box */}
                <div className="relative h-[600px] w-[1000px] max-w-[95%] border-[4px] border-[#A9A9A9] bg-[#1a1a1a] rounded-2xl rounded-tr-none overflow-hidden shadow-xl">
                  {/* Header */}
                  <div className="relative bg-[#2b2b2b] px-6 py-4 border-b border-[#6B6B6B] flex justify-between items-center">
                    <h2 className="text-white text-lg font-bold">
                      Picture Log
                    </h2>
                    <button
                      onClick={() => setIsModalOpen(false)}
                      className="relative bg-red-600 w-[100px] h-[40px] skew-x-[-12] overflow-hidden flex items-center justify-center rounded-full"
                    >
                      <span className="skew-x-[12] text-black font-bold z-10">
                        ✕
                      </span>
                      <span className="absolute inset-1 border-[4px] border-black skew-x-[-12] rounded-full"></span>
                    </button>
                  </div>

                  {/* Image Area */}
                  <div className="relative h-[530px] overflow-hidden">
                    <div className="modal-background w-full h-full">
                      <Background textChild="Gallery Images" height="full">
                        <div className="relative w-full h-full flex items-center justify-center">
                          {/* Blur Box */}
                          <div className="absolute inset-0 z-0 flex items-center justify-center">
                            <div className="w-[750px] h-[450px] rounded-xl backdrop-blur-md bg-[#2b2b2b]/40"></div>
                          </div>
                          {/* Actual Image */}
                          <img
                            src={selectedImage.src}
                            alt={selectedImage.title}
                            className="relative z-10 max-w-[500px] h-auto rounded-xl border-[4px] border-[#6B6B6B] object-contain"
                          />
                        </div>
                      </Background>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </Background>
  );
}
