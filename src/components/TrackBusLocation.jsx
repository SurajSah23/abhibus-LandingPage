import React from 'react';
import { Link } from 'react-router-dom';

const TrackBusLocation = () => {
  return (
    <section className="bg-gradient-to-r from-purple-500 to-purple-400 rounded-xl p-8 md:flex items-center justify-between text-white max-w-7xl mx-auto my-10 bg-[url('https://i.ibb.co/SD9pqzW6/live-location.png')] bg-cover bg-center">
      <div className="md:w-1/2 space-y-4">
        <h2 className="text-2xl md:text-3xl font-bold">
          Track Your Bus Live Location
        </h2>
        <p>
          AbhiBus is solving the biggest concern while boarding a bus by providing a tracking option
          that provides the live location of the bus. This option keeps passengers informed about the bus
          live location so that passengers can plan their boarding accordingly. AbhiBus live bus tracking
          system allows you to track your bus status by entering your AbhiBus Booking ID and either Email ID
          or Mobile Number details in the input field box. It's a simple, fast, and secure way to manage,
          track your bus live location on Google Maps with{' '}
          <Link
            to="/live-bus-tracking"
            className="underline text-blue-200 hover:text-blue-100"
          >
            AbhiBus live bus tracking
          </Link>{' '}
          technology. Find scheduled bus departure and arrival times of your bus route, the distance between
          cities and more information.
        </p>
        <p>
          Booking Bus tickets online in advance and reserving your seats also gives you benefits on early bird
          discount offers and help you to plan a hassle-free bus journey. Book bus tickets now and enjoy the
          live bus tracking status online with us.
        </p>
      </div>
    </section>
  );
};

export default TrackBusLocation;
