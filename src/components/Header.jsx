import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-white border-b border-gray-200">
      <div className="container mx-auto flex flex-wrap items-center justify-between p-4">
        {/* Logo and Trust Badge */}
        <div className="flex items-center gap-3 sm:gap-5">
          <Link to="/" className="text-2xl sm:text-3xl font-bold text-red-700">
            abhi<span className="text-gray-900">bus</span>
          </Link>
          <img
            src="https://i.ibb.co/TMxz9kVy/Screenshot-2025-05-02-105826-removebg-preview.png"
            alt="Trusted by 5 Crore+ Indians"
            className="h-8 sm:h-10 md:h-14 w-auto"
          />
        </div>

        {/* Navigation Icons */}
        <div className="flex flex-wrap justify-center sm:justify-end items-center gap-3 sm:gap-6 text-sm text-gray-700 mt-4 sm:mt-0">
          <Link
            to="/offers"
            className="flex items-center gap-1 hover:bg-gray-100 hover:rounded-xl px-2 py-1"
          >
            <img
              src="https://i.ibb.co/TMnmhtzL/Screenshot-2025-05-02-115047-removebg-preview.png"
              alt="Offers Icon"
              className="h-5 w-5 sm:h-6 sm:w-6"
            />
            Offers
          </Link>

          <Link
            to="/track-ticket"
            className="flex items-center gap-1 hover:bg-gray-100 hover:rounded-xl px-2 py-1"
          >
            <img
              src="https://i.ibb.co/sphRPwyr/Screenshot-2025-05-02-123532-removebg-preview.png"
              alt="Track Ticket Icon"
              className="h-5 w-5 sm:h-6 sm:w-6"
            />
            Track Ticket
          </Link>

          <Link
            to="/help"
            className="flex items-center gap-1 hover:bg-gray-100 hover:rounded-xl px-2 py-1"
          >
            <img
              src="https://i.ibb.co/4ZXxj2y4/Screenshot-2025-05-02-123800.png"
              alt="Need Help Icon"
              className="h-5 w-5 sm:h-6 sm:w-6"
            />
            Need Help?
          </Link>

          <Link
            to="/login"
            className="flex items-center gap-1 hover:bg-gray-100 hover:rounded-xl px-2 py-1"
          >
            <img
              src="https://i.ibb.co/HLZT9Djx/Screenshot-2025-05-02-124258-removebg-preview.png"
              alt="Login Icon"
              className="h-5 w-5 sm:h-6 sm:w-6"
            />
            Login/SignUp
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
