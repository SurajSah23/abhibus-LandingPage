import React, { useRef } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const offers = [
  { id: 1, img: "https://i.ibb.co/23Bg0x46/1745580652-720x360-WP.webp", alt: "CSK Offer" },
  { id: 2, img: "https://i.ibb.co/ZpKKbp2p/1746235988-720x360-RCBvs-CSKSUPER60.png", alt: "Super 4 & 6 Offer" },
  { id: 3, img: "https://i.ibb.co/s9sKkGh4/imageye-1744264550-720x360.png", alt: "APSRTC Offer" },
  { id: 4, img: "https://i.ibb.co/rK3Wd5hQ/1717449451-apsrtc-bus-offer.webp", alt: "TGSRTC Offer" },
  { id: 5, img: "https://i.ibb.co/zhsyWDs2/1728295367-720x360.webp", alt: "Another Offer" },
  { id: 6, img: "https://i.ibb.co/NnTLKqhJ/1735561676-720x360.webp", alt: "More Offer" },
  { id: 7, img: "https://i.ibb.co/v004VFC/1744897728-ZETcc-Offer-720x360.webp", alt: "More Offer" },
  { id: 8, img: "https://i.ibb.co/SwcGtmLY/1719986415-720x360.webp", alt: "More Offer" },
  { id: 9, img: "https://i.ibb.co/3YYCPxmJ/1722592574-720x360.webp", alt: "More Offer" },
  { id: 10, img: "https://i.ibb.co/j9M7dgtp/1717451070-upsrtc-bus-offer.webp", alt: "More Offer" },
  { id: 11, img: "https://i.ibb.co/sJFfh4HP/1717450497-hrtc-bus-offer.webp", alt: "More Offer" },
  { id: 12, img: "https://i.ibb.co/Xfry3rn4/1743591136-720x360.webp", alt: "More Offer" },
  { id: 13, img: "https://i.ibb.co/twnX8Nmy/1717448842-abhiparty-bus-offer.webp", alt: "More Offer" },
];

const OffersSection = () => {
  const navigate = useNavigate();
  const scrollRef = useRef(null);

  const handleScroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const handleViewAll = () => {
    navigate("/offers");
  };

  return (
    <div className="relative max-w-7xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">Bus Booking Discount Offers</h2>
        <button
          onClick={handleViewAll}
          className="text-red-500 flex items-center gap-1 text-sm hover:underline"
        >
          View All <FaArrowRight className="text-xs mt-0.5" />
        </button>
      </div>

      {/* Left Scroll Button */}
      <button
        onClick={() => handleScroll("left")}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white shadow-md p-2 rounded-full z-10"
      >
        <FaArrowLeft />
      </button>

      {/* Offer Images */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto no-scrollbar pb-2 scroll-smooth"
      >
        {offers.map((offer) => (
          <img
            key={offer.id}
            src={offer.img}
            alt={offer.alt}
            loading="lazy"
            className="h-40 min-w-[250px] rounded-2xl shadow-md object-contain"
          />
        ))}
      </div>

      {/* Right Scroll Button */}
      <button
        onClick={() => handleScroll("right")}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white shadow-md p-2 rounded-full z-10"
      >
        <FaArrowRight />
      </button>
    </div>
  );
};

export default OffersSection;
