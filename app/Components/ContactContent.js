"use client";

import Image from 'next/image';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "../globals.css";

export default function Home() {
  const icons = [
    { src: "/Assets/icons/Whatsapp.png", alt: "WhatsApp" },
    { src: "/Assets/icons/Discord.png", alt: "Discord" },
    { src: "/Assets/icons/Instagram.png", alt: "Instagram" },
    { src: "/Assets/icons/Line.png", alt: "Line" },
    { src: "/Assets/icons/Whatsapp.png", alt: "WhatsApp" },
    { src: "/Assets/icons/Discord.png", alt: "Discord" },
    { src: "/Assets/icons/Instagram.png", alt: "Instagram" },
    { src: "/Assets/icons/Line.png", alt: "Line" }
  ];

  // Group icons into chunks of 4 for 4-frame layout
  const groupedIcons = [];
  for (let i = 0; i < icons.length; i += 4) {
    groupedIcons.push(icons.slice(i, i + 4));
  }

  // Duplicate for smooth looping
  const allGroups = [...groupedIcons, ...groupedIcons];

  return (
    <div className="w-full h-screen bg-gradient-to-br from-[#1e1e1e] to-[#2d2d2d] flex items-center justify-center overflow-hidden gap-5 p-5 md:gap-4 md:p-4 sm:gap-3 sm:p-3">
      {/* Left Roll */}
      <div className="flex items-center justify-center flex-shrink-0">
        <Image
          src="/Assets/RollKiri.png"
          alt="Film Roll Left"
          width={100}
          height={100}
          className="drop-shadow-[0_4px_20px_rgba(0,0,0,0.5)] transition-transform duration-300 hover:scale-[1.02] w-full lg:h-[350px] h-[150px]"
        />
      </div>

      {/* Film Strip Carousel */}
      <div className="flex-1 max-w-[600px] relative">
        <Swiper
          modules={[Autoplay, FreeMode]}
          slidesPerView={'auto'}
          spaceBetween={10}
          loop={true}
          freeMode={true}
          speed={3000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            reverseDirection: false,
          }}
          className="w-full h-[180px] md:h-[240px] sm:h-[120px]"
        >
          {allGroups.map((group, groupIndex) => (
            <SwiperSlide key={groupIndex} className=" h-[280px]">
              <div className="w-full h-full relative rounded-lg overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.6)]">
                {/* Film Strip Background */}
                <Image
                  src="/Assets/film-strip.png"
                  alt="Film Strip 4 Frame"
                  fill
                  className="object-cover z-[1]"
                />
                {/* Content over the film strip */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 grid grid-cols-4 grid-rows-1 gap-2 w-[85%] h-[60%] z-[2] md:gap-[6px] md:w-[88%] md:h-[65%] sm:gap-1 sm:w-[90%] sm:h-[70%]">
                  {group.map((icon, iconIndex) => (
                    <div key={iconIndex} className="flex items-center justify-center bg-white/90 rounded-lg p-2 backdrop-blur-[2px] transition-all duration-300 hover:bg-white hover:scale-[1.05] md:p-[6px] sm:p-1">
                      <Image 
                        src={icon.src}
                        alt={icon.alt}
                        width={100}
                        height={100}
                        className="rounded-xl shadow-[0_4px_16px_rgba(0,0,0,0.2)] transition-transform duration-300 h-20"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Right Roll */}
      <div className="flex items-center justify-center flex-shrink-0">
        <Image
          src="/Assets/RollKanan.png"
          alt="Film Roll Right"
          width={100}
          height={100}
          className="drop-shadow-[0_4px_20px_rgba(0,0,0,0.5)] transition-transform duration-300 hover:scale-[1.02] w-full lg:h-[350px] h-[150px]"
        />
      </div>
    </div>
  );
}