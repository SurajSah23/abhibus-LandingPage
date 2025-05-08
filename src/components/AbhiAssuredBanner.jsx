import React from "react";
import { Link } from "react-router-dom";

export default function AbhiAssuredBanner() {
  return (
    <div
      className="flex flex-col md:flex-row items-center justify-between text-white rounded-3xl overflow-hidden shadow-lg p-6 bg-cover bg-center max-w-7xl m-auto"
      style={{
        backgroundImage: 'url("https://i.ibb.co/zVDykbwP/abhi-assured.png")',
      }}
    >
      {/* Left Panel */}
      <div className="bg-blue-900 bg-opacity-60 p-6 rounded-xl max-w-100 w-full">
        <div className="flex items-center mb-6">
          <img
            src="https://i.ibb.co/4ZkWJY00/Screenshot-2025-05-04-124244-removebg-preview-1.png"
            alt="Verified Badge"
            className="w-80 h-10 object-contain"
          />
        </div>

        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <img
              src="https://i.ibb.co/QRdYyN0/Screenshot-2025-05-05-001445-removebg-preview-1.png"
              alt="Bus"
              className="w-6 h-6 mt-1"
            />
            <div>
              <p className="font-bold">Bus cancelled?</p>
              <p>150% Refund</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <img
              src="https://i.ibb.co/273NMtkM/Screenshot-2025-05-05-001037-removebg-preview.png"
              alt="Sad"
              className="w-6 h-6 mt-1"
            />
            <div>
              <p className="font-bold">Bad service quality?</p>
              <p>Upto 100% refund</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <img
              src="https://i.ibb.co/gZvCNML4/Screenshot-2025-05-05-001807-removebg-preview.png"
              alt="Clock"
              className="w-6 h-6 mt-1"
            />
            <div>
              <p className="font-bold">Bus delayed?</p>
              <p>Upto 100% refund</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <img
              src="https://i.ibb.co/gFSDsKCN/Screenshot-2025-05-05-000314-removebg-preview.png"
              alt="Exchange"
              className="w-6 h-6 mt-1"
            />
            <div>
              <p className="font-bold">Changed your plans?</p>
              <p>100% refund</p>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <Link
            to="/abhi-assured"
            className="text-red-300 hover:text-red-500 flex items-center gap-1"
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
