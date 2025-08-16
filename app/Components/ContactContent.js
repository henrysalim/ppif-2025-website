"use client";

import Image from 'next/image';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "../globals.css";

// Data icon + link
const ICONS_DATA = [
  {
    src: "/Assets/icons/Discord.png",
    alt: "Discord",
    link: "https://discord.gg/vfCShCKEFV",
  },
  {
    src: "/Assets/icons/Instagram.png",
    alt: "Instagram",
    link: "https://instagram.com/ppif.umn",
  },
  {
    src: "/Assets/icons/Line.png",
    alt: "Line",
    link: "https://line.me/ti/p/@682fnddg",
  },
];

const SWIPER_CONFIG = {
  modules: [Autoplay, FreeMode],
  slidesPerView: 'auto',
  spaceBetween: 6,
  loop: true,
  freeMode: true,
  speed: 3500,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
    reverseDirection: false,
  }
};

export default function Contact() {

  const extendedIcons = [...ICONS_DATA, ...ICONS_DATA, ...ICONS_DATA];
  
  // Render roll kiri/kanan
  const renderFilmRoll = (side, src, alt) => (
    <div className={`film-roll ${side}-roll`}>
      <Image
        src={src}
        alt={alt}
        width={0}
        height={0}
        sizes="auto"
        className="roll-image"
        priority
      />
    </div>
  );

  // Render 1 frame
  const renderSingleFrameSlide = (icon, index) => (
    <SwiperSlide key={index} className="single-frame-slide">
      <div className="film-frame-container">
        <div className="film-frame-bg">
          <div className="frame-perforations-top">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="perforation"></div>
            ))}
          </div>
          
          <div className="frame-content-area">
            <div className="icon-container">
              <a href={icon.link} target="_blank" rel="noopener noreferrer">
                <Image 
                  src={icon.src}
                  alt={icon.alt}
                  width={80}
                  height={80}
                  className="app-icon"
                />
              </a>
            </div>
          </div>
          
          <div className="frame-perforations-bottom">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="perforation"></div>
            ))}
          </div>
        </div>
      </div>
    </SwiperSlide>
  );

  return (
  <div className="main-content flex flex-col items-center pt-[80px]">
  <h1 className="text-3xl font-bold max-w-[1500px] w-full mb-[60px] text-center px-[60px] py-5 rounded-[50px] backdrop-blur-[10px] border border-white/10 text-white/40 bg-gradient-to-br from-[#3D3F44] to-[#25272B]">
    Connect to the Network
  </h1>

  <div className="flex items-center justify-center">
    {/* Sisi kiri */}
    <div className="flex justify-end items-center">
      {renderFilmRoll("left", "/Assets/RollKiri.png", "Film Roll Left")}
    </div>

    {/* Strip tengah */}
    <div className="flex-1 max-w-[800px] relative z-[1]">
      <Swiper {...SWIPER_CONFIG} className="w-full h-[200px] overflow-visible">
        {extendedIcons.map(renderSingleFrameSlide)}
      </Swiper>
    </div>

    {/* Sisi kanan */}
    <div className="flex justify-start items-center">
      {renderFilmRoll("right", "/Assets/RollKanan.png", "Film Roll Right")}
    </div>
  </div>
</div>

);

}