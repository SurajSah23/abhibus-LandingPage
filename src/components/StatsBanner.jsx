export default function StatsBanner() {
    return (
      <div className="relative bg-[#4A0000] text-white rounded-2xl px-4 py-10 md:py-12 flex flex-col md:flex-row justify-around items-center gap-6 overflow-hidden max-w-7xl mx-auto">
        {/* Left Decorative Circle */}
        <div className="absolute top-0 left-0 w-16 h-16 bg-green-700 rounded-full transform -translate-x-1/2 -translate-y-1/2 z-0">
          <div className="w-10 h-10 bg-orange-400 rounded-full absolute top-0 left-0"></div>
        </div>
  
        {/* Right Decorative Circle */}
        <div className="absolute bottom-0 right-0 w-16 h-16 bg-green-700 rounded-full transform translate-x-1/2 translate-y-1/2 z-0">
          <div className="w-10 h-10 bg-orange-400 rounded-full absolute bottom-0 right-0"></div>
        </div>
  
        <div className="relative z-10 text-center">
          <p className="text-sm font-semibold">Bus routes across india</p>
          <p className="text-3xl font-bold mt-1">350000+</p>
        </div>
        <div className="relative z-10 text-center">
          <p className="text-sm font-semibold">Bus partners</p>
          <p className="text-3xl font-bold mt-1">4000+</p>
        </div>
        <div className="relative z-10 text-center">
          <p className="text-sm font-semibold">Trusted travellers</p>
          <p className="text-3xl font-bold mt-1">500000000+</p>
        </div>
        <div className="relative z-10 text-center">
          <p className="text-sm font-semibold">Daily Offers</p>
          <p className="text-3xl font-bold mt-1">20+</p>
        </div>
      </div>
    );
  }
  