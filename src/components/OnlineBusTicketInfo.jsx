import React from "react";

export default function OnlineBusTicketInfo() {
  return (
    <div
     className="max-w-7xl mx-auto px-4 py-12 gap-8">
        <h1 className="text-3xl font-bold">Online Bus Ticket Booking at Lowest Price</h1>
        <p>With AbhiBus, travellers can book bus tickets online at the lowest ticket fares. Travellers can choose their favorite bus for online bus booking. AbhiBus is the right place </p>
        <p>for reserving bus tickets as you will find a wide range of Private buses and SRTC (State Road Transport Corporation) buses are available for  online on</p>
        <p>AbhiBus.</p>
       <br />
       <br />
       <p>Below, you will find various types of buses available to book bus tickets on AbhiBus at the lowest fare for bus ticket booking:</p>

       <div className="flex">
      {/* Left: Image */}
      <div className="md:w-1/2 w-full">
        <img
          src="https://i.ibb.co/bgHbfJKC/online-bus-ticket-booking-a-l-p.png"
          alt="Bus Booking Illustration"
          className="w-full h-auto"
        />
      </div>

      {/* Right: Content */}
      <div className="md:w-1/2 w-full text-gray-800 ">
      <br />
      <br />
        {/* List */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-2 text-base font-medium mb-4">
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

        {/* Footer paragraph */}
        <p className="text-lg text-gray-700">
          The bus ticket fare depends on the factors such as type of bus, bus operator, bus routes
          distance between origin and destination cities, amenities offered by the bus operator, and
          bus operators may change ticket prices during festive seasons. Travelling by bus journey is
          the best option, cost effective and the most convenient travel option compared to other
          modes of transport.
        </p>
      </div>
       </div>
    </div>
  );
}
