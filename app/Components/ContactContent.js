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
    <div className="film-carousel-container">
      {/* Left Roll */}
      <div className="film-roll left-roll">
        <Image
          src="/Assets/RollKiri.png"
          alt="Film Roll Left"
          width={60}
          height={200}
          className="roll-image"
        />
      </div>

      {/* Film Strip Carousel */}
      <div className="film-strip-wrapper">
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
          className="film-swiper"
        >
          {allGroups.map((group, groupIndex) => (
            <SwiperSlide key={groupIndex} className="four-frame-slide">
              <div className="film-strip-container">
                {/* Film Strip Background */}
                <Image
                  src="/Assets/film-strip.png"
                  alt="Film Strip 4 Frame"
                  fill
                  className="film-strip-bg"
                />
                {/* Content over the film strip */}
                <div className="four-frames-content">
                  {group.map((icon, iconIndex) => (
                    <div key={iconIndex} className="frame-slot">
                      <Image 
                        src={icon.src}
                        alt={icon.alt}
                        width={60}
                        height={60}
                        className="app-icon"
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
      <div className="film-roll right-roll">
        <Image
          src="/Assets/RollKanan.png"
          alt="Film Roll Right"
          width={60}
          height={200}
          className="roll-image"
        />
      </div>
    </div>
  );
}