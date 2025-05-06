// src/components/AllOffersPage.jsx
import React from "react";

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

const AllOffersPage = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">All Bus Discount Offers</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {offers.map((offer) => (
          <div key={offer.id} className="shadow-md rounded-2xl overflow-hidden">
            <img
              src={offer.img}
              alt={offer.alt}
              className="w-full h-48 object-contain"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllOffersPage;
