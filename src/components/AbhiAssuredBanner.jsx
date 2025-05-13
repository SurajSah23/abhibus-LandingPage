import React from "react";
import { Link } from "react-router-dom";

export default function AbhiAssuredBanner() {
  return (
    <div
      className="flex flex-col md:flex-row items-center justify-between text-white rounded-3xl overflow-hidden shadow-lg px-4 py-8 sm:px-6 md:px-8 lg:px-12 bg-cover bg-center max-w-7xl mx-auto"
      style={{
        backgroundImage: 'url("https://i.ibb.co/zVDykbwP/abhi-assured.png")',
      }}
    >
      {/* Left Panel */}
      <div className="bg-blue-900 bg-opacity-70 p-4 sm:p-6 md:p-8 rounded-xl w-full md:max-w-[55%] lg:max-w-[45%]">
        <div className="flex items-center mb-6">
          <img
            src="https://i.ibb.co/4ZkWJY00/Screenshot-2025-05-04-124244-removebg-preview-1.png"
            alt="Verified Badge"
            className="w-40 sm:w-52 md:w-60 lg:w-72 h-auto object-contain"
          />
        </div>

        <div className="space-y-4">
          {/* Feature List */}
          {[
            {
              icon: "https://i.ibb.co/QRdYyN0/Screenshot-2025-05-05-001445-removebg-preview-1.png",
              title: "Bus cancelled?",
              desc: "150% Refund",
            },
            {
              icon: "https://i.ibb.co/273NMtkM/Screenshot-2025-05-05-001037-removebg-preview.png",
              title: "Bad service quality?",
              desc: "Upto 100% refund",
            },
            {
              icon: "https://i.ibb.co/gZvCNML4/Screenshot-2025-05-05-001807-removebg-preview.png",
              title: "Bus delayed?",
              desc: "Upto 100% refund",
            },
            {
              icon: "https://i.ibb.co/gFSDsKCN/Screenshot-2025-05-05-000314-removebg-preview.png",
              title: "Changed your plans?",
              desc: "100% refund",
            },
          ].map((item, index) => (
            <div key={index} className="flex items-start gap-3">
              <img src={item.icon} alt="icon" className="w-6 h-6 mt-1 shrink-0" />
              <div>
                <p className="font-semibold text-sm sm:text-base">{item.title}</p>
                <p className="text-sm sm:text-base">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6">
          <Link
            to="/abhi-assured"
            className="text-red-300 hover:text-red-500 flex items-center gap-1 text-sm sm:text-base"
          >
            Read More
            <img
              src="https://img.icons8.com/ios-filled/20/fa314a/arrow.png"
              alt="Arrow"
              className="w-4 h-4"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
