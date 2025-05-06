import React from "react";

const HowToBookBus = () => {
    return (
        <div className=" items-center p-8 bg-white max-w-7xl mx-auto">
            {/* Text Section */}
            <div className="space-y-4">
                <h1 className="text-3xl font-bold text-gray-900 whitespace-nowrap">
                    How to Book Bus Tickets Online on AbhiBus
                </h1>
                <p className="text-gray-600">
                    Each and every booking or transaction you do on the AbhiBus website is simple, safe & secure. You can complete your booking process from the best bus booking website AbhiBus.com by following the steps mentioned below.
                </p>
            </div>

            <div className="flex flex-col lg:flex-row items-start justify-between gap-8">
                {/* Image Left */}
                <div className="lg:w-1/2 w-full flex justify-center">
                    <img
                        src="https://i.ibb.co/DD7WHdbS/how-to-book-bus-ticket-online.png"
                        alt="How to Book on AbhiBus"
                        className="max-w-full h-auto"
                    />
                </div>

                {/* Content Right */}
                <div className="lg:w-1/2 w-full">
                    <ul className="list-disc pl-5 text-gray-700 space-y-2">
                        <li>
                            Enter the Origin city and Destination city details in the “leaving from” and “Going to” fields respectively
                        </li>
                        <li>
                            Select the “Journey date” from calendar icon and click on the “Search” button
                        </li>
                        <li>
                            Select any bus operator of your choice from the list of buses which are displayed
                        </li>
                        <li>
                            Select a seat, boarding and dropping points and hit “Continue to payment”
                        </li>
                        <li>
                            Enter all the required information including contact number & passenger details
                        </li>
                        <li>
                            Complete the payment process by selecting your preferred mode of payment
                        </li>
                    </ul>
                    <p className="text-gray-700 mt-4">
                        Once the payment process is done, you will receive an M-ticket on your mobile via SMS, WhatsApp message and an e-ticket on email ID provided at “Enter Contact Details” field.
                    </p>
                </div>
            </div>

        </div>
    );
};

export default HowToBookBus;
