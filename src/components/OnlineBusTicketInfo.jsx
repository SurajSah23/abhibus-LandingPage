import React from "react";

export default function OnlineBusTicketInfo() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10 space-y-6">
      {/* Heading */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center sm:text-left">
        Online Bus Ticket Booking at Lowest Price
      </h1>

      {/* Paragraphs */}
      <div className="space-y-3 text-base sm:text-lg text-gray-800">
        <p>
          With AbhiBus, travellers can book bus tickets online at the lowest ticket fares. Travellers
          can choose their favorite bus for online bus booking. AbhiBus is the right place
        </p>
        <p>
          for reserving bus tickets as you will find a wide range of Private buses and SRTC (State
          Road Transport Corporation) buses available for online booking on
        </p>
        <p>AbhiBus.</p>
        <p>
          Below, you will find various types of buses available to book bus tickets on AbhiBus at the
          lowest fare for bus ticket booking:
        </p>
      </div>

      {/* Flex Section */}
      <div className="flex flex-col md:flex-row gap-8 items-center">
        {/* Left Image */}
        <div className="w-full md:w-1/2">
          <img
            src="https://i.ibb.co/bgHbfJKC/online-bus-ticket-booking-a-l-p.png"
            alt="Bus Booking Illustration"
            className="w-full h-auto rounded-xl shadow-md"
          />
        </div>

        {/* Right Content */}
        <div className="w-full md:w-1/2">
          {/* List */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-3 text-sm sm:text-base font-medium text-gray-700 mb-4">
            <ul className="space-y-1">
              <li>AC Buses</li>
              <li>Non AC Buses</li>
              <li>Ordinary Buses</li>
              <li>Mini Buses</li>
              <li>Super Luxury (Non-AC Seater)</li>
            </ul>
            <ul className="space-y-1">
              <li>Volvo AC Buses</li>
              <li>Sleeper AC Buses</li>
              <li>Sleeper Buses</li>
              <li>Deluxe Buses</li>
              <li>Sleeper Cum Seater AC</li>
            </ul>
            <ul className="space-y-1">
              <li>Double Decker Buses</li>
              <li>Mercedes buses</li>
              <li>Non-Mercedes buses</li>
              <li>Electric Buses</li>
              <li>Express Buses</li>
            </ul>
          </div>

          {/* Footer Text */}
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
            The bus ticket fare depends on various factors such as the type of bus, operator, route
            distance, and amenities offered. Prices may also change during festive seasons. Bus travel
            is cost-effective, comfortable, and a convenient option compared to other transport modes.
          </p>
        </div>
      </div>
    </div>
  );
}
