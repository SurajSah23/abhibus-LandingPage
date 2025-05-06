import React from "react";

export default function OnlineBusBookingSection() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 flex flex-col md:flex-row items-center justify-between gap-8">
      {/* Text Content */}
      <div className="md:w-1/2 text-gray-800">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Online Bus Booking Services
        </h2>
        <p className="mb-4 text-lg">
          AbhiBus is India&apos;s leading online bus ticket booking service provider. Check out
          budget friendly offers and save big with discount coupons to book bus tickets at the
          lowest price with us. You can check the bus schedules, compare prices, and find all
          the information you need to plan an ideal and comfortable bus or train journey.
        </p>
        <p className="mb-4 text-lg">
          AbhiBus has simplified the online bus booking process for your travel planning. In
          case you need to cancel the ticket or change the dates, You can save both time and
          money by choosing AbhiCash as a refund option which can be used instantly. Book now!!!
        </p>
        <p className="text-lg">
          Browse through all your bus route options, and use our advanced smart filters to
          ensure a reliable and comfortable journey, tailored to your scheduled travel plans.
        </p>
      </div>

      {/* Image */}
      <div className="md:w-1/2">
        <img
          src="https://i.ibb.co/27MPzJNm/online-bus-booking-service.png"
          alt="Online Bus Booking Illustration"
          className="w-full h-auto"
        />
      </div>
    </div>
  );
}
