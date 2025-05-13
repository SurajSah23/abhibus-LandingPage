export default function AboutAbhibus() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 bg-white w-full">
      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-4 text-center sm:text-left">
        About Abhibus
      </h2>

      {/* Paragraphs */}
      <div className="space-y-4 text-sm sm:text-base text-gray-800 leading-relaxed">
        <p>
          AbhiBus, over the years, has strived to deliver easy booking solutions to its customers.
          Our continued efforts have resulted in AbhiBus becoming one of the leading and top-rated
          bus booking platforms in India for various Bus services. We have a strong presence with a
          ticket inventory from over 4000 bus partners and 350000 route options on our app and website.
        </p>

        <p>
          Founded in the year 2008, AbhiBus is a pioneer in providing end-to-end software and other
          value-added solutions such as e-ticketing systems, fleet management solutions, vehicle tracking
          systems, passenger information systems, and logistics management backed by a 24x7 customer support
          center. The company also provides technology solutions to more than 300 large private bus partners
          in India, 5 state transport corporations, and 2 international bus partners.
        </p>
      </div>

      {/* Read More Button */}
      <div className="mt-6">
        <button className="text-red-600 hover:underline font-semibold text-sm sm:text-base">
          Read More
        </button>
      </div>
    </div>
  );
}
