import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Background from "../Background";

export default function Timeline() {
  const events = [
    {
      title: "BRIEFING DAY",
      date: "18 Agustus 2025",
      time: "09:00 AM",
      location: "Multimedia Nusantara University",
      text: "Briefing Day merupakan sesi pembuka dari rangkaian Perkenalan Prodi Informatika 2025 yang diselenggarakan secara online melalui Zoom. Dalam sesi ini, para Striders akan diperkenalkan dengan tema, judul, dan tagline utama acara sebagai bekal awal sebelum memasuki rangkaian kegiatan selanjutnya, yaitu D-Day dan Domination Day. Selanjutnya, para Striders akan dibagi ke dalam breakout room untuk berkenalan dengan PIC dan anggota kelompok, serta menentukan nama kelompok melalui aktivitas interaktif. Briefing Day dirancang untuk membekali para Striders dengan berbagai informasi agar siap mengikuti rangkaian kegiatan utama dengan antusias dan percaya diri.",
      polaroidImage: "/Images/Timeline/briefing-polaroid.webp",
      sideImage: "/Images/Timeline/briefing-side.webp",
      detailImage: "/Images/Timeline/briefing-detail.jpg",
      necessities: [
        "/Images/Timeline/shirt.webp",
        "/Images/Timeline/pen.webp",
        "/Images/Timeline/notebook.webp",
        "/Images/Timeline/shoes.webp",
      ],
      tags: ["Engagement", "UMN"],
      comments: [
        { user: "Anonymous", text: "Semangat banget buat briefing day!" },
      ],
      comments: [
        { user: "Anonymous", text: "Semangat banget buat briefing day!" },
      ],
      comments: [
        { user: "Anonymous", text: "Semangat banget buat briefing day!" },
      ],
    },
    {
      title: "D-DAY PPIF 2025",
      date: "19 Agustus 2025",
      time: "07:00 AM",
      location: "Multimedia Nusantara University",
      text: "D-DAY Perkenalan Prodi Informatika 2025 merupakan rangkaian yang dirancang untuk membekali para Striders dengan pemahaman mendalam mengenai dunia perkuliahan di Informatika UMN. Dalam sesi ini, Striders akan dikenalkan dengan profil Program Studi Informatika, para dosen pengajar, sistem akademik, serta tiga laboratorium utama: Cybersecurity R&D, Artificial Intelligence, dan Digital Interaction. Selain itu, para Striders juga akan memahami penggunaan berbagai platform pendukung pembelajaran seperti MyUMN dan UNION. Rangkaian ini ditutup dengan talkshow bertema “Eksplorasi Dunia Informatika” yang bertujuan memperluas wawasan Striders mengenai beragam peluang dan potensi di dunia informatika.",
      polaroidImage: "/Images/Timeline/dday-polaroid.webp",
      sideImage: "/Images/Timeline/dday-side.webp",
      detailImage: "/Images/Timeline/dday-detail.jpg",
      necessities: [
        "/Images/Timeline/shirt.webp",
        "/Images/Timeline/pen.webp",
        "/Images/Timeline/notebook.webp",
        "/Images/Timeline/shoes.webp",
      ],
      tags: ["Festival", "Informatics"],
      comments: [
        {
          user: "Anonymous",
          text: "Adrenalin gua naik kayak mau fight boss terakhir!",
        },
      ],
    },
    {
      title: "DOMINATION DAY!",
      date: "21 Agustus 2025",
      time: "10:00 AM",
      location: "Multimedia Nusantara University",
      text: "Domination Day merupakan puncak rangkaian acara yang dirancang untuk memberikan pengalaman transformatif bagi Striders dalam menjelajahi dunia teknologi. Selaras dengan tema ''Discovering for Future Domination'' dan tagline ''Discover, Develop, Dominate'', rangkaian kegiatan PPIF ini mendorong Striders untuk melalui tiga tahap penting: Discover (Menemukan): Mengenal lebih dalam berbagai aspek teknologi dan inovasi dalam dunia Informatika Develop (Mengembangkan): Meningkatkan keterampilan teknis dan kreativitas dengan bimbingan dari para ahli serta praktisi di bidang informatika. Dominate (Mendominasi): Mengasah kemampuan untuk mengendalikan dan menerapkan teknologi secara strategis demi menciptakan solusi masa depan yang inovatif.Melalui konsep ini, Domination Day tidak sekadar menjadi ajang pembelajaran, tetapi juga menjadi momen penting untuk menumbuhkan keberanian dalam mengambil peran aktif sebagai penggerak kemajuan teknologi. Dengan begitu, Striders dipersiapkan untuk menjadi pionir di era digital yang terus berkembang.",
      polaroidImage: "/Images/Timeline/domination-polaroid.webp",
      sideImage: "/Images/Timeline/domination-side.webp",
      detailImage: "/Images/Timeline/briefing-detail.jpg",
      necessities: [
        "/Images/Timeline/shirt.webp",
        "/Images/Timeline/pen.webp",
        "/Images/Timeline/notebook.webp",
        "/Images/Timeline/shoes.webp",
      ],
      tags: ["Celebration", "Finale"],
      comments: [{ user: "Anonymous", text: "Puncak dari semua keseruan!" }],
    },
  ];

  const [selectedEvent, setSelectedEvent] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const getShortText = (text) => {
    if (expanded || text.length <= 200) return text;
    return text.slice(0, 200) + "...";
  };

  return (
    <Background textChild="TIMELINE">
      <div className="relative w-full min-h-screen flex items-center justify-center py-10 pt-20 overflow-hidden">
        {!showPopup && (
          <>
            {/* Timeline Line */}
            <img
              src="/Images/Timeline/line.webp"
              alt="timeline line"
              className="absolute top-[65%] max-md:top-[55%] md:top-[60%] lg:top-[48%] transform -translate-y-[120px] left-1/2 -translate-x-1/2 w-[120%] z-0"
            />

            {/* Timeline Items */}
            <div
              className={`flex justify-start items-start gap-4 sm:gap-20 lg:gap-30 mt-[3%] relative z-10 max-md:translate-y-8
              transition-all duration-500 overflow-x-auto sm:overflow-visible 
              snap-x snap-mandatory px-2 sm:px-0 scrollbar-hide
              ${selectedEvent !== null ? "translate-x-[-200px]" : ""}`}
            >
              {events.map((item, idx) => (
                <div
                  key={idx}
                  className="relative flex flex-col items-center cursor-pointer 
                 min-w-[120px] sm:min-w-[200px] lg:min-w-[300px] snap-center"
                  onClick={() => {
                    setSelectedEvent(item);
                    setExpanded(false);
                  }}
                >
                  {/* Title */}
                  <div className="absolute -top-12 sm:-top-16 lg:-top-24 text-center w-max mt-4">
                    <span
                      className="block text-gray-400 font-bold text-[8px] sm:text-sm lg:text-xl drop-shadow-md"
                      style={{ fontFamily: "HongMengTi" }}
                    >
                      Timeline
                    </span>
                    <span
                      className="block font-bold text-white text-xs sm:text-lg lg:text-3xl drop-shadow-lg"
                      style={{ fontFamily: "HongMengTi" }}
                    >
                      {item.title}
                    </span>
                  </div>

                  {/* Pin */}
                  <img
                    src="/Images/Timeline/pin.webp"
                    alt="pin"
                    className="w-4 h-4 sm:w-8 sm:h-8 lg:w-9 lg:h-9 object-contain z-20"
                  />

                  {/* Polaroid */}
                  <motion.div
                    className="relative w-28 sm:w-48 lg:w-80 mt-[-5%]"
                    whileHover={{
                      rotate: [0, 1.5, -1.5, 1.5, 0],
                      transition: { duration: 2, repeat: Infinity },
                    }}
                  >
                    <img
                      src={item.polaroidImage}
                      alt={item.title}
                      className="w-full h-auto relative z-10"
                    />
                  </motion.div>
                </div>
              ))}
            </div>

            {/* Slide-in Panel */}
            <div
              className={`fixed top-0 right-0 h-full transform transition-transform duration-500 z-50 ${
                selectedEvent ? "translate-x-0" : "translate-x-full"
              }  w-[240px] sm:w-[320px] md:w-[300px] lg:w-[450px] xl:w-[500px] max-w-[70vw]`}
            >
              {/* Background frame */}
              <img
                src="/Images/Timeline/popup.webp"
                alt="popup frame"
                className="absolute inset-0 w-full h-full object-contain pointer-events-none"
              />

              {selectedEvent && (
                <div className="absolute inset-0 flex flex-col px-3 pt-[12%] pb-2 sm:px-6 sm:pt-[18%] sm:pb-3 md:px-12 md:pt-[25%] md:pb-4 lg:px-16 lg:pt-[30%] lg:pb-5 xl:px-[72px] xl:pt-[36%] xl:pb-6">
                  {/* Title + Close in one row */}
                  <div className="flex items-center justify-between">
                    <h2
                      className="text-black text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl"
                      style={{ fontFamily: "HongMengTi" }}
                    >
                      {selectedEvent.title}
                    </h2>
                    <button
                      onClick={() => setSelectedEvent(null)}
                      className="hover:scale-110 transition-transform duration-200
                                 w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8"
                    >
                      <img
                        src="/Images/Timeline/close.webp"
                        alt="Close"
                        className="w-full h-full"
                      />
                    </button>
                  </div>

                  {/* Image */}
                  {selectedEvent.sideImage && (
                    <motion.img
                      key={selectedEvent.sideImage}
                      src={selectedEvent.sideImage}
                      alt={selectedEvent.title}
                      className="w-full h-auto rounded-md shadow-lg mt-1 sm:mt-2 sm:rounded-md md:mt-2 md:rounded-lg lg:mt-3 lg:rounded-lg xl:mt-4 xl:rounded-lg"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                    />
                  )}

                  {/* Scrollable text only */}
                  <div className="overflow-y-auto no-scrollbar text-justify timeline-scrollbar mt-1 max-h-[40px] sm:mt-2 sm:max-h-[60px] md:mt-3 md:max-h-[100px] lg:mt-4 lg:max-h-[150px] xl:mt-5 xl:max-h-[200px]">
                    <p
                      className="text-gray-800 leading-tight text-[10px] sm:text-xs sm:leading-relaxed md:text-[12px] md:leading-relaxed lg:text-sm lg:leading-relaxed xl:text-sm xl:leading-relaxed"
                      style={{ fontFamily: "HongMengTi" }}
                    >
                      {getShortText(selectedEvent.text)}
                    </p>

                    {selectedEvent.text.length > 200 && (
                      <button
                        onClick={() => setExpanded(!expanded)}
                        className="text-gray-600 underline mt-0.5 text-[8px] sm:mt-1 sm:text-[10px] md:mt-1 md:text-xs lg:mt-2 lg:text-xs xl:mt-2 xl:text-xs"
                        style={{ fontFamily: "HongMengTi" }}
                      >
                        {expanded ? "Minimize" : "Read more"}
                      </button>
                    )}
                  </div>

                  {/* Fixed bottom button */}
                  <div className="mt-auto flex justify-center p-1 sm:p-2 sm:mt-1 md:p-3 md:mt-2 lg:p-4 lg:mt-3 xl:p-6 xl:mt-auto">
                    <button
                      style={{ fontFamily: "HongMengTi" }}
                      className="bg-[#23252A] text-white rounded-full border-2 border-[#797979] hover:bg-[#383A3F] transition-all cursor-pointer px-2 py-0.5 text-[10px] mb-[5%] sm:px-2 sm:py-1 sm:text-xs sm:mb-[8%] sm:border-3 md:px-3 md:py-1 md:text-sm md:mb-[15%] md:border-3 lg:px-4 lg:py-1 lg:text-base lg:mb-[25%] lg:border-4 xl:px-6 xl:py-2 xl:text-lg xl:mb-[40%] xl:border-4"
                      onClick={() => setShowPopup(true)}
                    >
                      See Details
                    </button>
                  </div>
                </div>
              )}
            </div>
          </>
        )}

        {/* Detail Popup */}
        <AnimatePresence>
          {showPopup && selectedEvent && (
            <motion.div
              className="fixed inset-0 flex items-center justify-center z-[999] bg-black/50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="relative w-[95%] sm:w-[70%] lg:w-[85%] max-w-6xl flex items-center justify-center"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {/* Popup Box */}
                <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-12">
                  <div
                    className={`
                      bg-[#222326] rounded-4xl shadow-2xl
                      flex flex-col md:flex-row gap-6 sm:gap-8
                      w-[full] 
                      sm:max-w-3xl lg:max-w-6xl 
                      border-6 border-[#74787b] 
                      lg:h-auto sm:h-[250px] 
                      overflow-hidden
                    `}
                  >
                    {/* Close Button */}
                    <button
                      className="absolute lg:top-[22%] lg:right-[10%] sm:top-[28%] sm:right-[12%] z-50"
                      onClick={() => setShowPopup(false)}
                    >
                      <img
                        src="/Images/Timeline/previous.webp"
                        alt="Close"
                        className="w-8 sm:w-[40px] lg:w-[70px] h-auto"
                      />
                    </button>

                    {/* Left Sidebar */}
                    <div className="bg-[#383838] rounded-xl p-0 lg:w-1/3 sm:w-[23%] flex-shrink-0 lg:ml-8 sm:ml-4 lg:my-8 sm:my-4">
                      <div className="flex flex-col items-center">
                        <img
                          src={selectedEvent.detailImage}
                          alt={selectedEvent.title}
                          className="w-[150px] sm:w-[120px] lg:w-[450px] h-auto rounded-md lg:mb-4 sm:mb-2"
                        />
                        <p
                          className="text-gray-300 mb-2 text-sm lg:text-base sm:text-[8px]"
                          style={{ fontFamily: 'HongMengTi' }}
                        >
                          Necessities
                        </p>
                        <div className="grid grid-cols-4 gap-2 lg:gap-4 sm:gap-1">
                          {selectedEvent.necessities.map((n, i) => (
                            <img
                              key={i}
                              src={n}
                              alt="necessity"
                              className="w-10 sm:w-4 lg:w-12 h-10 sm:h-4 lg:h-12 drop-shadow-md"
                            />
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Right Content */}
                    <div className="bg-[#383838] rounded-xl sm:p-4 lg:p-8 flex-grow overflow-y-auto lg:mr-8 sm:mr-4 lg:my-8 sm:my-4">
                      <h2
                        className="text-xl sm:text-sm lg:text-3xl mb-3 text-white"
                        style={{ fontFamily: 'HongMengTi' }}
                      >
                        {selectedEvent.title}
                      </h2>

                      {/* Event Info */}
                      <div className="flex flex-wrap gap-2 lg:gap-2 sm:gap-1 text-xs sm:text-[6px] lg:text-xs mb-4">
                        <span className="bg-yellow-400 text-black lg:px-3 sm:px-1 py-1 rounded-full font-semibold">
                          {selectedEvent.date}
                        </span>
                        <span className="bg-green-400 text-black lg:px-3 sm:px-1 py-1 rounded-full font-semibold">
                          {selectedEvent.time}
                        </span>
                        <span className="bg-blue-400 text-black lg:px-3 sm:px-1 py-1 rounded-full font-semibold">
                          {selectedEvent.location}
                        </span>
                      </div>

                      {/* Scrollable Event Text */}
                      <div className="overflow-y-auto max-h-[150px] sm:max-h-[200px] mb-4 pr-2">
                        <p
                          className="text-xs lg:text-sm sm:text-[10%] leading-relaxed text-justify text-gray-300"
                          style={{ fontFamily: 'HongMengTi' }}
                        >
                          {selectedEvent.text}
                        </p>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {selectedEvent.tags.map((tag, i) => (
                          <span
                            key={i}
                            style={{ fontFamily: 'HongMengTi' }}
                            className="bg-[#23252A] text-white lg:px-3 sm:px-1 sm:py-1 lg:py-1 rounded-full lg:border-4 sm:border-2 border-[#797979] text-xs lg:text-sm sm:text-[10%]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Comments */}
                      <div className="bg-black/40 rounded-lg sm:p-2 lg:p-4 flex-1 overflow-y-auto max-h-[150px] lg:max-h-[200px] sm:max-h-[45%]">
                        <p
                          className="text-yellow-400 mb-2 text-sm sm:text-[15%] lg:text-base"
                          style={{ fontFamily: 'HongMengTi' }}
                        >
                          Comments
                        </p>
                        {selectedEvent.comments.map((c, i) => (
                          <div
                            key={i}
                            className="bg-white/10 sm:p-2 lg:p-3 rounded-lg mb-2"
                            style={{ fontFamily: 'HongMengTi' }}
                          >
                            <p className="text-xs sm:text-[10%] lg:text-sm font-semibold">{c.user}</p>
                            <p className="text-xs sm:text-[10%] lg:text-sm opacity-90">{c.text}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Background>
  );
}
