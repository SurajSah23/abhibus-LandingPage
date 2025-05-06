import React from 'react';

const TopPrivateTravels = () => {
  const travelCompanies = [
    { name: 'Orange Tours & Travels', src: 'https://i.ibb.co/5hKcCQcg/Orange-Travels.png' },
    { name: 'Dream Line', src: 'https://i.ibb.co/6c36qWXH/Dreamline.jpg' },
    { name: 'Meghana Travels', src: 'https://i.ibb.co/whPnVzHk/Meghana-Travels.png' },
    { name: 'Ravina Travels', src: 'https://i.ibb.co/W4dbfc9m/Ravina-Travels.png' },
    { name: 'SR Travels', src: 'https://i.ibb.co/0p2qmhTs/Sr-Travels.png' },
  ];

  return (
    <div className="w-full bg-white py-8  max-w-7xl mx-auto">
      <h2 className="text-xl font-semibold text-center mb-6">Top Private Travels</h2>
      <div className="flex justify-center gap-10 flex-wrap px-4">
        {travelCompanies.map((company, index) => (
          <img
            key={index}
            src={company.src}
            alt={company.name}
            className="w-50 h-30 object-contain"
          />
        ))}
      </div>
    </div>
  );
};

export default TopPrivateTravels;
