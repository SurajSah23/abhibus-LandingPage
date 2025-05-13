import React from "react";
import { useParams } from "react-router-dom";
import busData from "../data/buses.json";

const SearchResults = () => {
  const { from, to, date } = useParams();

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      {busData.serviceDetailsList.map((bus, index) => (
        <div
          key={index}
          className="bg-white p-4 rounded-xl shadow-md border mb-6 max-w-4xl mx-auto"
        >
          {/* Top Badge & Info Row */}
          <div className="flex justify-between items-start">
            {/* Left Side */}
            <div>
              <div className="flex items-center mb-1">
                <span className="bg-blue-600 text-white text-xs font-semibold px-2 py-0.5 rounded flex items-center mr-2">
                  <svg className="w-3 h-3 mr-1" fill="white" viewBox="0 0 24 24"><path d="M12 2l2.09 6.26L21 9.27l-5 3.63 1.91 6.2L12 15.77l-5.91 3.33L8 12.9 3 9.27l6.91-1.01z"/></svg>
                  Abhi Assured
                </span>
              </div>
              <h2 className="text-xl font-bold text-gray-800 flex items-center">
                {bus.travelerAgentName}
                <span className="ml-2 text-xs bg-gray-300 text-gray-700 px-1 py-0.5 rounded">AD</span>
              </h2>
              <p className="text-sm text-gray-600">{bus.busTypeName}</p>
              <span className="inline-flex mt-2 items-center text-blue-600 bg-blue-50 text-xs font-medium px-2 py-0.5 rounded-full">
                🚌 Brand New
              </span>
            </div>

            {/* Right Side Fare */}
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

          {/* Timing Grid */}
          <div className="mt-4 flex justify-between items-center border-t pt-4 text-sm">
            <div className="text-center">
              <p className="text-lg font-semibold text-gray-800">{bus.startTime}</p>
              <p className="text-gray-500">{from}</p>
            </div>
            <div className="text-center">
              <p className="bg-gray-200 text-gray-700 rounded-full px-4 py-1">{bus.travelTime}</p>
            </div>
            <div className="text-center">
              <p className="text-lg font-semibold text-gray-800">{bus.arriveTime}</p>
              <p className="text-gray-500">{to}</p>
            </div>
          </div>

          {/* Amenities Row */}
          <div className="mt-4 flex items-center text-sm text-gray-600 gap-4 flex-wrap">
            <span className="bg-green-600 text-white px-2 py-0.5 text-xs rounded">
              ★ {bus.rating || "4.5"}
            </span>
            <span>📍 Tracking</span>
            <span>👜 5+ Amenities</span>
            <span>🛑 Boarding & Dropping Points</span>
            <span className="text-blue-600 cursor-pointer">View More ⌄</span>
          </div>

          {/* Optional Deal */}
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

          {/* Meta Info */}
          {bus.busMeta?.metaText?.length > 0 && (
            <div className="mt-2 text-xs text-gray-500 italic">
              🚌 {bus.busMeta.metaText[0]}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default SearchResults;
