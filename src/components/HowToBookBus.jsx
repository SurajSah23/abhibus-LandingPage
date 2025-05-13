import React from "react";

const HowToBookBus = () => {
    return (
        <div className="px-4 py-8 bg-white max-w-7xl mx-auto">
            {/* Text Section */}
            <div className="space-y-4 text-center lg:text-left mb-8">
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
                    How to Book Bus Tickets Online on AbhiBus
                </h1>
                <p className="text-gray-600 text-sm sm:text-base">
                    Each and every booking or transaction you do on the AbhiBus website is simple, safe & secure. You can complete your booking process from the best bus booking website AbhiBus.com by following the steps mentioned below.
                </p>
            </div>

            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
                {/* Image Section */}
                <div className="w-full lg:w-1/2 flex justify-center">
                    <img
                        src="https://i.ibb.co/DD7WHdbS/how-to-book-bus-ticket-online.png"
                        alt="How to Book on AbhiBus"
                        className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-full h-auto object-contain"
                    />
                </div>

                {/* Steps Section */}
                <div className="w-full lg:w-1/2">
                    <ul className="list-disc pl-5 text-gray-700 space-y-2 text-sm sm:text-base">
                        <li>
                            Enter the Origin city and Destination city details in the “leaving from” and “Going to” fields respectively.
                        </li>
                        <li>
                            Select the “Journey date” from the calendar icon and click on the “Search” button.
                        </li>
                        <li>
                            Select any bus operator of your choice from the list of buses displayed.
                        </li>
                        <li>
                            Select a seat, boarding and dropping points, and hit “Continue to payment”.
                        </li>
                        <li>
                            Enter all the required information including contact number & passenger details.
                        </li>
                        <li>
                            Complete the payment process by selecting your preferred mode of payment.
                        </li>
                    </ul>
                    <p className="text-gray-700 mt-4 text-sm sm:text-base">
                        Once the payment is completed, you will receive an M-ticket on your mobile via SMS, WhatsApp, and an e-ticket via email.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default HowToBookBus;
