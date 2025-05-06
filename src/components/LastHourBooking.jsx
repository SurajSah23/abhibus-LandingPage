import React from "react";

const LastHourBooking = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-8 py-10 max-w-7xl mx-auto">
      {/* Left Content */}
      <div className="md:w-2/3 w-full text-gray-800">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Last Hour Ticket Booking
        </h2>
        <p className="mb-4 text-base md:text-lg leading-relaxed">
          Most of the online bus bookings are unplanned, with only 32% of the people
          reserving tickets on the day of travel and 24% one day before the journey.
          Keeping this in mind, AbhiBus has ensured buses are available round the clock
          24/7 by listing all the scheduled buses. At times you could be the lucky one
          because many of our bus partners provide last-minute deals that offer up to
          25% discount on the bus ticket fare. You can experience flexibility in both
          bus timings and price choices when booking tickets on AbhiBus.
        </p>
        <p className="text-base md:text-lg leading-relaxed">
          AbhiBus provides the quickest way to find last-minute online bus bookings,
          allowing you to compare prices, operator schedules, and more. Travellers can
          enjoy the affordability and convenience that comes with thousands of trusted
          bus operators who have partnered with us in India. You can avail last-minute
          ticket booking options and choose from multiple pick-up and drop-off locations
          on AbhiBus.com.
        </p>
      </div>

      {/* Right Image */}
      <div className="md:w-1/3 w-full flex justify-center">
        <img
          src="https://i.ibb.co/5W4s8sxZ/last-hour-ticket-booking.png"
          alt="Bus Illustration"
          className="w-full max-w-sm object-contain"
        />
      </div>
    </div>
  );
};

export default LastHourBooking;
