import React from 'react';

const BookBusTicketSection = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center px-6 py-12 bg-white text-gray-800">
      <div className="lg:w-1/2 mb-10 lg:mb-0 flex justify-center">
        <img src="https://i.ibb.co/zhsq30pp/best-way-to-book-ticket.png" alt="Book Bus Ticket" className="max-w-full h-auto" />
      </div>
      <div className="lg:w-1/2 max-w-2xl">
        <h2 className="text-2xl lg:text-3xl font-bold mb-6 text-center lg:text-left">
          The Best Way to Book Bus Ticket
        </h2>
        <p className="mb-4 text-justify">
          Do you want to know the best way to book tickets online securely and how to book tickets in advance? AbhiBus.com is the platform for you to book bus tickets, train tickets, Flights and hotels. With us, you can check the provided amenities, compare booking fares, check bus time & schedule on your chosen route, explore additional facilities, and more. AbhiBus offers an affordable and cost-effective online travel booking experience.
        </p>
        <p className="mb-4 text-justify">
          With AbhiBus, online bus ticket booking became easier. Simply enter your journey details in our search bar (departure city, destination city, and travel date), click the search button, and you will receive a list of available bus operators for online ticket booking. Then, select the bus that best suits your travel needs and securely complete your booking online on AbhiBus.com.
        </p>
        <p className="text-justify">
          We recommend booking your tickets at least 2 - 3 days in advance so that you can reserve bus seats as per your preference and get the best-discounted price on your booking.
        </p>
      </div>
    </div>
  );
};

export default BookBusTicketSection;
