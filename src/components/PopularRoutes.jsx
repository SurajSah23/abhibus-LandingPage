import React from 'react';

const routes = [
  {
    from: 'Bangalore',
    to: 'Hyderabad',
    image: 'https://i.ibb.co/xKGjz1c9/hyderabad.png',
  },
  {
    from: 'Hyderabad',
    to: 'Vijayawada',
    image: 'https://i.ibb.co/xKGjz1c9/hyderabad.png',
  },
  {
      from: 'Bangalore',
      to: 'Chennai',
      image: 'https://i.ibb.co/JRSPJbgz/chennai.png',
    },
    {
      from: 'Hyderabad',
      to: 'Visakhapatnam',
      image: 'https://i.ibb.co/xKGjz1c9/hyderabad.png',
    },
    {
        from: 'Bangalore',
        to: 'Tirupathi',
        image: 'https://i.ibb.co/nNxRjtNs/Tirupathi.png',
    },
    {
      from: 'Hyderabad',
      to: 'Tirupathi',
      image: 'https://i.ibb.co/nNxRjtNs/Tirupathi.png',
    },
  {
    from: 'Delhi',
    to: 'Lucknow',
    image: 'https://i.ibb.co/YTt8n9ML/delhi.png',
  },
  {
    from: 'Chennai',
    to: 'Madurai',
    image: 'https://i.ibb.co/JRSPJbgz/chennai.png',
  },
  {
    from: 'Delhi',
    to: 'Manali',
    image: 'https://i.ibb.co/YTt8n9ML/delhi.png',
  },
  {
    from: 'Delhi',
    to: 'Jaipur',
    image: 'https://i.ibb.co/YTt8n9ML/delhi.png',
  },
  {
    from: 'Mumbai',
    to: 'Pune',
    image: 'https://i.ibb.co/nMQX2YnM/mumbai.png',
  },
  {
    from: 'Pune',
    to: 'Nagpur',
    image: 'https://i.ibb.co/FbYvW1pD/pune.png',
  },
  {
    from: 'Hydrabad',
    to: 'Nellore',
    image: 'https://i.ibb.co/xKGjz1c9/hyderabad.png',
  },
  {
    from: 'Chennai',
    to: 'Coimbatore',
    image: 'https://i.ibb.co/JRSPJbgz/chennai.png',
  },
  {
    from: 'Mumbai',
    to: 'Indore',
    image: 'https://i.ibb.co/nMQX2YnM/mumbai.png',
  },
  {
    from: 'Ahmedabad',
    to: 'Rajkot',
    image: 'https://i.ibb.co/Q3YhKzqb/Ahemdabad.png',
  },
];

const PopularRoutes = () => {
  return (
    <section className="py-10 px-4 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold mb-2">Popular Bus Routes</h2>
      <p className="text-gray-600 mb-8 max-w-3xl">
        You can check popular bus routes, compare bus schedules, timings and their prices to book bus tickets online. AbhiBus offers you low-cost bus fares for your travel across India. For a seamless travel experience, book bus tickets online with AbhiBus for your bus journey.
      </p>

      <div className="grid md:grid-cols-2 gap-4">
        {routes.map((route, index) => (
          <div
            key={index}
            className="flex items-center justify-between border rounded-lg p-4 hover:shadow-sm transition"
          >
            <div className="flex items-center gap-4">
              <img
                src={route.image}
                alt={`${route.from} to ${route.to}`}
                className="w-14 h-14 rounded-lg object-cover"
              />
              <span className="font-semibold text-lg">
                {route.from} → {route.to}
              </span>
            </div>
            <button className="border rounded-full px-4 py-1 hover:bg-gray-100 cursor-pointer">
              View Buses
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularRoutes;
