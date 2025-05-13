import { FaStar, FaStarHalfAlt } from "react-icons/fa";

export default function AppDownloadCard() {
    return (
        <div className="relative bg-white rounded-2xl shadow-md px-4 sm:px-6 md:px-8 py-8 flex flex-col md:flex-row items-start md:items-center justify-between max-w-7xl mx-auto overflow-hidden translate-y-9 gap-6 md:gap-0 mb-6">
            {/* Left curved line */}
            <div className="absolute top-0 left-10 w-16 h-16 sm:w-24 sm:h-24 border-t-2 border-l-2 border-orange-300 rounded-bl-full"></div>

            {/* Right semicircle background */}
            <div className="absolute bottom-0 right-0 w-32 h-32 sm:w-48 sm:h-48 bg-red-100 rounded-tl-full"></div>

            {/* Logo and Features Section */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 z-10 w-full md:w-2/3">
                <img
                    src="https://i.postimg.cc/BnV7sNjG/abhibus-box.png"
                    alt="AbhiBus"
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl object-cover"
                />
                <div>
                    <h2 className="text-base sm:text-lg font-semibold">Download the App</h2>
                    <ul className="text-sm mt-2 space-y-1">
                        <li className="flex items-center gap-2">
                            <img
                                src="https://i.ibb.co/zhc0GGCR/Screenshot-2025-05-06-210252-removebg-preview.png"
                                alt="Discount Icon"
                                className="w-5 h-5"
                            />
                            Get exclusive discounts
                        </li>
                        <li className="flex items-center gap-2">
                            <img
                                src="https://i.ibb.co/v4fzMGPS/Screenshot-2025-05-06-205845-removebg-preview.png"
                                alt="Alerts Icon"
                                className="w-5 h-5"
                            />
                            Receive instant fare alerts
                        </li>
                        <li className="flex items-center gap-2">
                            <img
                                src="https://i.ibb.co/8LpvFbvS/Screenshot-2025-05-06-205107-removebg-preview.png"
                                alt="Track Icon"
                                className="w-5 h-5"
                            />
                            Track bus status
                        </li>
                    </ul>

                    {/* Rating */}
                    <div className="flex items-center mt-3 gap-2">
                        <span className="bg-green-100 text-green-700 px-2 py-0.5 text-xs font-semibold rounded">
                            4.8
                        </span>
                        <img
                            src="https://i.postimg.cc/SRg7dN8p/app-rating-20230824.webp"
                            alt="App Rating"
                            className="w-24 sm:w-28 h-auto"
                        />
                    </div>
                </div>
            </div>

            {/* Store Buttons & QR Section */}
            <div className="flex flex-col sm:flex-row items-center gap-4 z-10 w-full md:w-auto">
                <div className="flex flex-col gap-2 items-start">
                    <img
                        src="https://i.postimg.cc/W3M5GvX2/app-store-black.png"
                        alt="App Store"
                        className="w-28 sm:w-32 h-auto"
                    />
                    <img
                        src="https://i.postimg.cc/431GBr81/imageye-install-andriod-app-20230824.jpg"
                        alt="Google Play"
                        className="w-28 sm:w-32 h-auto"
                    />
                </div>
                <img
                    src="https://i.postimg.cc/Pr015ZrD/abhibus-app-qr.png"
                    alt="QR Code"
                    className="w-20 sm:w-24 h-20 sm:h-24 object-contain"
                />
            </div>
        </div>
    );
}
