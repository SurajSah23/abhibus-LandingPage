import React from "react";
import { Link } from "react-router-dom";

const OfferBanner = () => {
  return (
    <div
      className="bg-[url('https://i.ibb.co/8Hwn4vj/offer-content-background.png')] bg-cover bg-center bg-no-repeat max-w-7xl mx-auto rounded-xl p-6 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 object-contain"
    >
      {/* Left Text */}
      <div className="text-white md:w-1/2">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Offers on Bus Booking</h2>
        <p className="text-base md:text-lg leading-relaxed">
          Travellers can find exclusive{" "}
          <Link
            to="/bus-booking-offers"
            className="text-blue-200 underline transition-colors"
          >
            bus booking offers
          </Link>
          , discount coupons, cashback and more on AbhiBus. You can book bus tickets at
          the lowest price to any destination in India. Choose bus ticket fares from
          operators offering the lowest, mid-range, and highest prices on AbhiBus.
          Check for bus ticket price comparisons, select your preferred bus for bus
          booking, apply coupon code and save money on your bus journey today!
        </p>
      </div>
    </div>
  );
};

export default OfferBanner;
