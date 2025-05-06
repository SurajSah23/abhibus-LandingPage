import React, { useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"; // Only for carousel arrows

const features = [
  {
    icon: "https://i.ibb.co/7ctGqZB/Screenshot-2025-05-03-163125-removebg-preview.png", // Replace with your icon URLs
    title: "3,50,000+ Bus Routes",
    description: "offering unparalleled choices for your travel needs",
    bg: "bg-green-50",
  },
  {
    icon: "https://i.ibb.co/DH9PP2HN/Screenshot-2025-05-03-164411-removebg-preview.png",
    title: "4000+ Bus Partners",
    description: "ranging from State RTCs to private partners",
    bg: "bg-blue-50",
  },
  {
    icon: "https://i.ibb.co/GfwCfvS0/Screenshot-2025-05-03-164610-removebg-preview.png",
    title: "Fastest Bus Booking",
    description: "swift and seamless bus ticket booking experience",
    bg: "bg-yellow-50",
  },
  {
    icon: "https://i.ibb.co/JF8ryv8Q/Screenshot-2025-05-03-165059-removebg-preview.png",
    title: "24/7 Customer Support",
    description: "available for your booking needs",
    bg: "bg-purple-50",
  },
  {
    icon: "https://i.ibb.co/Cf4bC8s/Screenshot-2025-05-03-170402-removebg-preview.png",
    title: "24/7 Customer Support",
    description: "available for your booking needs",
    bg: "bg-purple-50",
  },
  {
    icon: "https://i.ibb.co/gF3KrcP6/Screenshot-2025-05-03-170843-removebg-preview.png",
    title: "24/7 Customer Support",
    description: "available for your booking needs",
    bg: "bg-purple-50",
  },
];

const WhyChooseUs = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -300 : 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 relative">
      <h2 className="text-2xl font-bold text-gray-800 mb-2">
        Why Choose AbhiBus for Bus Ticket Booking ?
      </h2>
      <p className="text-gray-600 mb-8">
        AbhiBus is India’s fastest growing online ticket booking platform.
        AbhiBus is the official ticketing partner of several State Road Transport
        Corporation (SRTC) operators and over 4000+ private bus partners covering
        more than 3,50,000 bus routes
      </p>

      {/* Carousel Buttons */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-0 top-[55%] transform translate-y-6 z-10 bg-white p-2 rounded-full shadow-md"
      >
        <FaArrowLeft />
      </button>

      <button
        onClick={() => scroll("right")}
        className="absolute right-0 top-[55%] transform translate-y-6 z-10 bg-white p-2 rounded-full shadow-md"
      >
        <FaArrowRight />
      </button>

      {/* Scrollable Cards */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scroll-smooth no-scrollbar pb-2"
      >
        {features.map((feature, index) => (
          <div
          key={index}
          className={`min-w-[250px] sm:min-w-[300px] rounded-2xl p-5 ${feature.bg} flex-shrink-0 flex items-start gap-4 shadow-sm`}
        >
          <img src={feature.icon} alt="feature icon" className="w-8 h-8 mt-1" />
          <div>
            <h3 className="font-semibold text-gray-800 text-sm">{feature.title}</h3>
            <p className="text-gray-600 text-sm">{feature.description}</p>
          </div>
        </div>          
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
