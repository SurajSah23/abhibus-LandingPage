import React, { useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const srts = [
  {
    id: 1,
    logo: "https://i.ibb.co/bMJwsx0V/APSRTC-removebg-preview.png",
    bg: "https://i.ibb.co/8gW4ngjs/APSRTC-bg.jpg",
    name: "APSRTC",
    fullName: "Andhra Pradesh State Road Transport Corporation",
  },
  {
    id: 2,
    logo: "https://i.ibb.co/1kvfDBL/TGSRTC-removebg-preview.png",
    bg: "https://i.ibb.co/DgrM7KZk/TGSRTC-bg.jpg",
    name: "TGSRTC",
    fullName: "Telangana State Road Transport Corporation",
  },
  {
    id: 3,
    logo: "https://i.ibb.co/PvMHq3Sj/KERALARTC-removebg-preview.png",
    bg: "https://i.ibb.co/jkf89bwR/KERALARTC-bg-1.jpg",
    name: "Kerala RTC",
    fullName: "Kerala Road Transport Corporation",
  },
  {
    id: 4,
    logo: "https://i.ibb.co/Z1SXFgpC/GSRTC-1.jpg",
    bg: "https://i.ibb.co/hFVZjk7L/GSRTC-bg.jpg",
    name: "GSRTC",
    fullName: "Gujarat State Road Transport Corporation",
  },
  {
    id: 5,
    logo: "https://i.ibb.co/Kpp1Mk2r/RSRTC.jpg",
    bg: "https://i.ibb.co/11ntftS/RSRTC-bg.jpg",
    name: "RSRTC",
    fullName: "Rajasthan State Road Transport Corporation",
  },
  {
    id: 6,
    logo: "https://i.ibb.co/pr6s48fN/UPSRTC-removebg-preview.png",
    bg: "https://i.ibb.co/gZ2jK8f2/UPSRTC-bg.jpg",
    name: "RSRTC",
    fullName: "Rajasthan State Road Transport Corporation",
  },
  {
    id: 7,
    logo: "https://i.ibb.co/WWSTdF1f/HRTC-removebg-preview.png",
    bg: "https://i.ibb.co/8nn5KTQf/HRTC-bg.jpg",
    name: "RSRTC",
    fullName: "Rajasthan State Road Transport Corporation",
  },
  {
    id: 8,
    logo: "https://i.ibb.co/whGRk5c1/OSRTC-removebg-preview.png",
    bg: "https://i.ibb.co/Z1fKVJd6/OSRTC-bg.jpg",
    name: "RSRTC",
    fullName: "Rajasthan State Road Transport Corporation",
  },
  {
    id: 9,
    logo: "https://i.ibb.co/KpmrDGtg/BSRTC-removebg-preview.png",
    bg: "https://i.ibb.co/5gKC5S62/BSRTC-bg.jpg",
    name: "RSRTC",
    fullName: "Rajasthan State Road Transport Corporation",
  },
  {
    id: 10,
    logo: "https://i.ibb.co/PsDBKPBg/PRTC-removebg-preview.png",
    bg: "https://i.ibb.co/YFqzLgJJ/PRTC-bg.jpg",
    name: "RSRTC",
    fullName: "Rajasthan State Road Transport Corporation",
  },
  {
    id: 11,
    logo: "https://i.ibb.co/qYpNGP5p/JKSRTC-1-removebg-preview.png",
    bg: "https://i.ibb.co/N6HBh7jB/JKSRTC-bg.jpg",
    name: "RSRTC",
    fullName: "Rajasthan State Road Transport Corporation",
  },
];

const SrtcCarousel = () => {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir === "left" ? -320 : 320, behavior: "smooth" });
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 relative">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="text-2xl font-bold">Book Bus Tickets at AbhiBus</h2>
          <p className="text-gray-600 text-sm">From SRTC (State Road Transport Corporation)</p>
        </div>
        <button className="text-red-500 text-sm hover:underline">View All SRTCs</button>
      </div>

      {/* Arrows */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md"
      >
        <FaArrowLeft />
      </button>
      <button
        onClick={() => scroll("right")}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md"
      >
        <FaArrowRight />
      </button>

      {/* Cards */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scroll-smooth no-scrollbar"
      >
        {srts.map((srtc) => (
          <div
            key={srtc.id}
            className="min-w-[250px] rounded-xl overflow-hidden shadow-md relative flex-shrink-0"
          >
            <img src={srtc.bg} alt="background" className="w-full h-60 object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent p-4 flex flex-col justify-end">
              <img src={srtc.logo} alt="logo" className="w-16 h-16 mb-2 rounded-full m-auto" />
              <h3 className="text-white font-semibold">{srtc.name}</h3>
              <p className="text-white text-sm mb-3">{srtc.fullName}</p>
              <button className="text-red-500 border border-red-500 px-3 py-1 rounded hover:bg-red-500 hover:text-white text-sm w-fit">
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SrtcCarousel;
