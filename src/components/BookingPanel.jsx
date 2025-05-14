import React, { useState } from "react";
import {
  FaLocationArrow,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaArrowRight,
  FaExchangeAlt,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const tabs = [
  { label: "Buses", icon: "https://i.ibb.co/RpHHjxsF/Screenshot-2025-05-02-151736-removebg-preview.png" },
  { label: "Flights", icon: "https://i.ibb.co/Zp7XY2Tn/Screenshot-2025-05-02-152431-removebg-preview.png" },
  { label: "Trains", icon: "https://i.ibb.co/qFB5pg4L/Screenshot-2025-05-02-152635-removebg-preview.png" },
  { label: "Hotels", icon: "https://i.ibb.co/Kchr4jtL/Screenshot-2025-05-02-130104-removebg-preview.png" },
];

const locations = [
  "", // for default empty value
  "Delhi",
  "Mumbai",
  "Bangalore",
  "Chennai",
  "Kolkata",
  "Hyderabad",
  "Jaipur",
  "Pune",
];

const BookingPanel = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("Buses");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [departureDate, setDepartureDate] = useState(() => {
    const today = new Date();
    return today.toISOString().split("T")[0];
  });

  const handleSwap = () => {
    setFrom(to);
    setTo(from);
  };

  const handleToday = () => {
    const today = new Date();
    setDepartureDate(today.toISOString().split("T")[0]);
  };

  const handleTomorrow = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    setDepartureDate(tomorrow.toISOString().split("T")[0]);
  };

  const handleSearch = () => {
    if (from && to && departureDate) {
      navigate(`/search/${from}/${to}/${departureDate}`);
    } else {
      alert("Please fill all fields");
    }
  };

  return (
    <div className="bg-[url('https://i.ibb.co/q3cv3wWc/web-new-bg.webp')] bg-cover bg-center py-20 px-4">
      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-lg p-6 sm:p-8">
        {/* Tabs */}
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="flex gap-6 items-center">
            {tabs.map((tab) => (
              <div
                key={tab.label}
                className={`flex flex-col items-center cursor-pointer ${
                  activeTab === tab.label ? "text-red-600 font-semibold" : "text-gray-600"
                }`}
                onClick={() => setActiveTab(tab.label)}
              >
                <img src={tab.icon} className="h-8 w-8" alt={`${tab.label} icon`} />
                <span className="text-sm">{tab.label}</span>
                {activeTab === tab.label && (
                  <div className="w-10 h-1 bg-red-500 mt-1 rounded-full"></div>
                )}
              </div>
            ))}
          </div>
          <div className="text-sm text-gray-800 font-medium text-right sm:text-left">
            Book Buses, Trains, Flights, & Hotels
          </div>
        </div>

        {/* Search Bar */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-5 gap-2 items-center bg-gray-100 p-4 rounded-xl">
          {/* Leaving From */}
          <div className="flex items-center gap-2 border-r border-gray-300 pr-3">
            <FaLocationArrow className="text-gray-500" />
            <select
              className="bg-transparent outline-none text-sm w-full"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
            >
              <option value="">Leaving From</option>
              {locations.map((location) => (
                <option key={location} value={location}>
                  {location}
                </option>
              ))}
            </select>
          </div>

          {/* Going To */}
          <div className="flex items-center gap-2 border-r border-gray-300 pr-3 pl-2">
            <button onClick={handleSwap}>
              <FaExchangeAlt className="text-gray-500" />
            </button>
            <FaMapMarkerAlt className="text-gray-500" />
            <select
              className="bg-transparent outline-none text-sm w-full"
              value={to}
              onChange={(e) => setTo(e.target.value)}
            >
              <option value="">Going To</option>
              {locations.map((location) => (
                <option key={location} value={location}>
                  {location}
                </option>
              ))}
            </select>
          </div>

          {/* Departure Date */}
          <div className="flex items-center gap-2 border-r border-gray-300 pr-3 pl-2">
            <div className="text-xs text-gray-500">Departure</div>
            <FaCalendarAlt className="text-gray-500" />
            <input
              type="date"
              className="bg-transparent outline-none text-sm"
              value={departureDate}
              onChange={(e) => setDepartureDate(e.target.value)}
            />
          </div>

          {/* Today / Tomorrow Buttons */}
          <div className="flex gap-2 pl-2">
            <button
              className="text-sm bg-white border border-gray-300 rounded-lg px-3 py-1 hover:bg-gray-100"
              onClick={handleToday}
            >
              Today
            </button>
            <button
              className="text-sm bg-white border border-gray-300 rounded-lg px-3 py-1 hover:bg-gray-100"
              onClick={handleTomorrow}
            >
              Tomorrow
            </button>
          </div>

          {/* Search Button */}
          <button
            onClick={handleSearch}
            className="bg-red-500 text-white font-semibold flex items-center justify-center gap-2 text-sm py-2 rounded-xl hover:bg-red-600"
          >
            Search <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingPanel;
