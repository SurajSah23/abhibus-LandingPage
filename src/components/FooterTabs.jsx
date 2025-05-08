import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // ✅ Import Link

const tabs = [
  'Top Bus Routes',
  'Buses From Top Cities',
  'Top RTC Buses',
  'Top Bus Services',
  'Quick Links'
];

const tabContent = {
  'Top Bus Routes': ["Hyderabad to Bangalore Bus", "Vijayawada to Hyderabad Bus", "Chennai to Madurai Bus", "Mumbai to Ahmedabad Bus", "Ahmedabad to Rajkot Bus", "Jaipur to Anmedabad Bus", "Delhi to Jaipur Bus", "Hyderabad to Vijayawada Bus", "Bangalore to Hyderabad Bus", "Chennai to Coimbatore Bus", "Indore to Bhopal Bus", "Ahmedabad to Indore Bus", "Delhi to Lucknow Bus", "Hyderabad to Mumbai Bus", "Bangalore to Chennai Bus", "Mumbai to Pune Bus"," Indore to Ahmedabad Bus", "Udaipur to Jaipur Bus", "Delhi to Gorakhpur Bus", "Vijayawada to Bangalore Bus", "Chennai to Bangalore Bus", "Mumbai to Hyderabad Bus", "Ahmedabad to Jaipur Bus", "Jaipur to Delhi Bus", "Delhi to Shimla Bus"],
  'Buses From Top Cities': [
    'Hyderabad Bus Tickets', 'Mangalore Bus Tickets', 'Coimbatore Bus Tickets',
    'Indore Bus Tickets', 'Rajkot Bus Tickets', 'Gorakhpur Bus Tickets',
    'Shimla Bus Tickets', 'Vijayawada Bus Tickets', 'Bellary Bus Tickets',
    'Goa Bus Tickets', 'Bhopal Bus Tickets', 'Udaipur Bus Tickets',
    'Lucknow Bus Tickets', 'Tirupathi Bus Tickets', 'Chennai Bus Tickets',
    'Mumbai Bus Tickets', 'Surat Bus Tickets', 'Jodhpur Bus Tickets',
    'Chandigarh Bus Tickets', 'Bangalore Bus Ticket', 'Madurai Bus Tickets',
    'Pune Bus Tickets', 'Ahmedabad Bus Tickets', 'Jaipur Bus Tickets',
    'Manali Bus Tickets',
  ],
  'Top RTC Buses': ["APSRTC", "TGSRTC", "GSRTC", "Kerala RTC", "HRTC", "TNSTC", "RSRTC", "OSRTC", "UPSRTC", "BSRTC", "PRTC", "JKSRTC"],
  'Top Bus Services': ["Orange Tours and Travels", "Dashmesh Travels", "Intrcity SmartBus", "SRS Travels", "Raj Ratan Tours and Travels", "Patel Tours and Travels", "Mahalaxmi Travels", "Shrinath Travels", "Morning Star Travels", "Royal Safari", "Zing Bus", "Greenline Travels", "Dolphin Travels House", "Kanker Roadways", "Hans Travels", "Sri Krishna Travels", "Samay Shatabdi", "M.R Travels", "Swamy Ayyappa Travels", "YBM Travels", "VRL Travels", "V Kaveri Travels", "Gujarat Travels", "Kalpana Travels", "Jakhar Travels"],
  'Quick Links': ["Bus Ticket Booking", "Cancel Booking", "AbhiBus Travel Blog", "Bus Booking Offers", "Refer A Friend", "bus ixigo booking", "Check Bus Ticket Status", "News", "Sitemap", "Live Bus Tracking", "Abhi Assured", "SRTC Directory"]
};

export default function FooterTabs() {
  const [activeTab, setActiveTab] = useState('Top Bus Routes');

  return (
    <div className="bg-gray-50 border-t border-gray-200 py-8 px-4 md:px-16">
      {/* Tabs */}
      <div className="flex border-b border-gray-300 mb-6 text-gray-600 overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 text-sm md:text-base font-medium whitespace-nowrap transition-colors duration-300 ${
              activeTab === tab
                ? 'text-red-500 border-b-2 border-red-500 bg-red-100'
                : 'hover:text-red-500'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 text-sm text-gray-700 leading-7">
        {tabContent[activeTab].map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>

      {/* Bottom Links */}
      <hr className="my-6" />
      <div className="text-sm text-gray-700">
        <p className="font-semibold mb-2">Important Links</p>
        <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs">
          {[
            'Home',
            'Offer',
            'About',
            'Contact',
            "FAQ's",
            'Terms',
            'Privacy',
            'Responsible Disclosure',
            'Operators',
            'Routes',
            'Careers',
            'Our Management',
            'Investors Relations'
          ].map((link, idx) => (
            <Link
              key={idx}
              to={`/${link.toLowerCase().replace(/[^a-z]+/g, '-')}`} // generates route paths like /home, /about, /faq-s
              className="hover:underline"
            >
              {link}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
