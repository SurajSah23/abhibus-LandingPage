import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { FaSnowflake, FaBed, FaMapMarkerAlt } from "react-icons/fa";
import { HiArrowNarrowRight } from "react-icons/hi";

import busData from "../data/buses.json";
import Header from "./Header";

function BusTypeButton({ icon: Icon, label, selected, onClick }) {
  return (
    <button
      onClick={() => onClick(label)}
      className={`flex flex-col items-center p-3 rounded-lg border ${
        selected
          ? "border-blue-500 text-blue-500"
          : "border-gray-200 text-gray-600 hover:border-gray-300"
      }`}
    >
      <Icon size={20} className="mb-1" />
      <span className="text-sm">{label}</span>
    </button>
  );
}

const PriceRangeSlider = ({ minPrice, maxPrice, setMinPrice, setMaxPrice }) => {
  const totalMin = 427;
  const totalMax = 3199;

  return (
    <div className="max-w-md">
      <label className="text-gray-700 text-sm font-medium  block">
        Price Range
      </label>
      <div className="relative flex items-center">
        <input
          type="range"
          min={totalMin}
          max={totalMax}
          value={minPrice}
          onChange={(e) => setMinPrice(Number(e.target.value))}
          className="w-full appearance-none bg-transparent"
        />
        <input
          type="range"
          min={totalMin}
          max={totalMax}
          value={maxPrice}
          onChange={(e) => setMaxPrice(Number(e.target.value))}
          className="w-full appearance-none bg-transparent"
        />
        <div className="w-full h-1 bg-red-300 rounded-full absolute top-1/2 transform -translate-y-1/2">
          <div
            className="h-1 bg-red-500 absolute rounded-full"
            style={{
              left: `${((minPrice - totalMin) / (totalMax - totalMin)) * 100}%`,
              width: `${((maxPrice - minPrice) / (totalMax - totalMin)) * 100}%`,
            }}
          ></div>
        </div>
      </div>
      <div className="flex justify-between text-sm text-gray-700">
        <span>₹{minPrice}</span>
        <span>₹{maxPrice}</span>
      </div>
    </div>
  );
};

const SearchResults = () => {
  const { from, to, date } = useParams();
  const [minPrice, setMinPrice] = useState(427);
  const [maxPrice, setMaxPrice] = useState(3199);

  const [selectedTypes, setSelectedTypes] = useState([]);

  const toggleBusType = (type) => {
    setSelectedTypes((prev) =>
      prev.includes(type)
        ? prev.filter((t) => t !== type)
        : [...prev, type]
    );
  };

  const matchesBusType = (bus) => {
    if (selectedTypes.length === 0) return true;

    const lowerType = bus.busTypeName.toLowerCase();
    return selectedTypes.some((type) => {
      if (type === "AC") return lowerType.includes("ac");
      if (type === "Non AC") return !lowerType.includes("ac");
      if (type === "Sleeper") return lowerType.includes("sleeper");
      if (type === "Seater") return lowerType.includes("seater");
      if (type === "Bus Track") return bus.tracking === true;
      return false;
    });
  };

  const filteredBuses = busData.serviceDetailsList.filter(
    (bus) =>
      bus.fare >= minPrice &&
      bus.fare <= maxPrice &&
      matchesBusType(bus)
  );

  return (
    <div>
      <Header />
      <div className="bg-gray-100 min-h-screen p-6">
        <div className="max-w-md bg-white p-10">
          <h2 className="text-xl font-medium text-gray-800">Bus Type</h2>
          <div className="grid grid-cols-4 gap-3">
            <BusTypeButton icon={FaSnowflake} label="AC" selected={selectedTypes.includes("AC")} onClick={toggleBusType} />
            <BusTypeButton icon={FaBed} label="Sleeper" selected={selectedTypes.includes("Sleeper")} onClick={toggleBusType} />
            <BusTypeButton icon={HiArrowNarrowRight} label="Seater" selected={selectedTypes.includes("Seater")} onClick={toggleBusType} />
            <BusTypeButton icon={FaSnowflake} label="Non AC" selected={selectedTypes.includes("Non AC")} onClick={toggleBusType} />
          </div>
          <div className="mt-3">
            <BusTypeButton icon={FaMapMarkerAlt} label="Bus Track" selected={selectedTypes.includes("Bus Track")} onClick={toggleBusType} />
          </div>
        </div>

        <div className="max-w-md bg-white p-10">
        <PriceRangeSlider
          minPrice={minPrice} 
          maxPrice={maxPrice}
          setMinPrice={setMinPrice}
          setMaxPrice={setMaxPrice}
        />
        </div>


        {filteredBuses.map((bus, index) => (
          <div
            key={index}
            className="p-4 rounded-xl shadow-md border mb-4 max-w-4xl ml-auto -translate-y-96 bg-white"
          >
            <div className="flex justify-between items-start">
              <div>
                <div className="flex items-center mb-1">
                  <img
                    src="https://i.ibb.co/LzZp2SNQ/assured-svg-log0-removebg-preview.png"
                    alt=""
                    className="h-16 w-20 object-contain"
                  />
                </div>
                <h2 className="text-xl font-bold text-gray-800 flex items-center">
                  {bus.travelerAgentName}
                  <span className="ml-2 text-xs bg-gray-300 text-gray-700 px-1 py-0.5 rounded">
                    AD
                  </span>
                </h2>
                <p className="text-sm text-gray-600">{bus.busTypeName}</p>
                <span className="inline-flex mt-2 items-center text-blue-600 bg-blue-50 text-xs font-medium px-2 py-0.5 rounded-full">
                  🚌 Brand New
                </span>
              </div>

              <div className="text-right">
                <p className="text-gray-600 text-sm">From</p>
                <p className="text-2xl font-bold text-gray-800">₹{bus.fare}</p>
                <button className="bg-red-500 hover:bg-red-600 text-white text-sm px-4 py-1.5 rounded mt-2">
                  Select Seats
                </button>
                <p className="text-green-600 text-sm mt-1">
                  {bus.availableSeats} Seats Available
                </p>
              </div>
            </div>

            <div className="mt-4 flex justify-between items-center border-t pt-4 text-sm">
              <div className="text-center">
                <p className="text-lg font-semibold text-gray-800">{bus.startTime}</p>
                <p className="text-gray-500">{from}</p>
              </div>
              <div className="text-center">
                <p className="bg-gray-200 text-gray-700 rounded-full px-4 py-1">
                  {bus.travelTime}
                </p>
              </div>
              <div className="text-center">
                <p className="text-lg font-semibold text-gray-800">{bus.arriveTime}</p>
                <p className="text-gray-500">{to}</p>
              </div>
            </div>

            <div className="mt-4 flex items-center text-sm text-gray-600 gap-4 flex-wrap">
              <span className="bg-green-600 text-white px-2 py-0.5 text-xs rounded">
                ★ {bus.rating || "4.5"}
              </span>
              <span className="flex items-center gap-1">
                <img
                  src="https://i.ibb.co/XZ2w4p21/Screenshot-2025-05-13-120936-removebg-preview.png"
                  alt="Tracking"
                  className="w-4 h-4"
                />
                Tracking
              </span>
              <span className="flex items-center gap-1">
                <img
                  src="https://i.ibb.co/HpnbT1Vg/Screenshot-2025-05-13-121549-removebg-preview.png"
                  alt="Amenities"
                  className="w-4 h-4"
                />
                5+ Amenities
              </span>
              <span className="flex items-center gap-1">
                <img
                  src="https://i.ibb.co/HLQ1RBDg/Screenshot-2025-05-13-123952-removebg-preview.png"
                  alt="Boarding"
                  className="w-4 h-4"
                />
                Boarding & Dropping Points
              </span>
              <span className="text-blue-600 cursor-pointer">View More ⌄</span>
            </div>

            {bus.edgeDeals?.dealsList?.length > 0 && (
              <div className="mt-4 bg-blue-50 p-2 rounded flex items-center">
                <img
                  src={bus.edgeDeals.dealsList[0].imgUrl}
                  alt="Offer"
                  className="w-6 h-6 mr-2"
                />
                <p className="text-sm text-blue-700">{bus.discountMsg}</p>
              </div>
            )}

            {bus.busMeta?.metaText?.length > 0 && (
              <div className="mt-2 text-xs text-gray-500 italic">
                🚌 {bus.busMeta.metaText[0]}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
