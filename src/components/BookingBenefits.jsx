import React from "react";

export default function BookingBenefits() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 flex flex-col">
      <h1 className="text-4xl font-bold">Benefits of Booking Bus Tickets Online</h1>
      <br />
      <p>
        In this day and age of technology, offline modes of bus ticket booking are no longer preferred. Online ticket booking is easy, fast, and hassle-free. AbhiBus ticks off all the
      </p>
      <p>three with user-friendly app and website navigation.Booking bus tickets online with AbhiBus has resolved many issues that people encounter while booking tickets at</p>
      <p>offline counters or through travel agents. Download the AbhiBus App to experience the benefits of bus ticket booking online.</p>
      <br />

      <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
        {/* Left Text Content */}
        <div className="md:w-2/3 w-full">
          <p className="text-lg mb-4">
            Here is a list of all the benefits of booking bus tickets online on AbhiBus
          </p>

          {/* Bullet List */}
          <ul className="list-disc list-inside space-y-2 text-base mb-6">
            <li>Avoid standing in long queues at offline bus ticket counters.</li>
            <li>No more hassle of approaching travel agents.</li>
            <li>Choose from multiple bus services.</li>
            <li>Book both Private and SRTC bus tickets online.</li>
            <li>Check bus ticket availability online.</li>
            <li>Get bus timings, ticket price, boarding & dropping point details online.</li>
          </ul>

          <ul className="list-disc list-inside space-y-2 text-base ">
            <li>Access to payment partner discounts and cashback offers.</li>
            <li>Free Cancellation - Get 100% refund if your plan changes and you cancel your ticket.</li>
            <li>24/7 customer support.</li>
            <li>Each and every transaction is simple, safe and secure.</li>
          </ul>
        </div>

        {/* Right Image */}
        <div className="md:w-1/3 w-full">
          <img
            src="https://i.ibb.co/jvqf5dHR/online-bus-ticket-booking-benefits.png"
            alt="Benefits Illustration"
            className="w-[600px] h-[400px]"
          />
        </div>
      </div>

    </div>
  );
}
