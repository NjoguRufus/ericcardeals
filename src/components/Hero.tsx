import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, CreditCard, RefreshCw } from 'lucide-react';

export default function Hero() {
  const [currentBg, setCurrentBg] = useState(0);
  const backgrounds = [
    //'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80', // Original
    'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80', // Dark parking lot
    //'https://images.unsplash.com/photo-1609521263047-f8f205293f24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80', // Blue car
    'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80' // Vintage teal car
  ];

  useEffect(() => {
    // Load Cinzel font from Google Fonts
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    const interval = setInterval(() => {
      setCurrentBg(prev => (prev + 1) % backgrounds.length);
    }, 5000); // Rotate every 5 seconds

    return () => {
      clearInterval(interval);
      document.head.removeChild(link);
    };
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Images with Transition */}
      {backgrounds.map((bg, index) => (
        <div 
          key={index}
          className={`absolute inset-0 z-0 transition-opacity duration-1000 ${currentBg === index ? 'opacity-100' : 'opacity-0'}`}
          style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 md:pt-32 pb-16">
        <div className="max-w-3xl">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-4 sm:mb-6" style={{ fontFamily: 'Cinzel, serif' }}>
            Drive Your Dreams with Eric Car Deals
          </h1>
          <p className="text-lg sm:text-xl text-gray-200 mb-6 sm:mb-8">
            Quality new and locally used vehicles with flexible finance options. 
            Making car ownership easier and more accessible for everyone.
          </p>
          
          <div className="flex flex-row flex-wrap gap-3 sm:gap-4">
            <Link
              to="/new-cars"
              className="flex-1 sm:flex-none px-4 sm:px-6 py-3 sm:py-4 bg-[#4A90A4] text-white rounded-lg font-medium hover:bg-[#4A90A4]/90 transition-colors text-sm sm:text-base text-center"
            >
              Browse New Cars
            </Link>
            <Link
              to="/used-cars"
              className="flex-1 sm:flex-none px-4 sm:px-6 py-3 sm:py-4 bg-[#bd922f] text-white rounded-lg font-medium hover:bg-[#F5D58B]/90 transition-colors text-sm sm:text-base text-center"
            >
              View Used Cars
            </Link>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mt-12 sm:mt-16">
          <div className="bg-[#D8B980]/10 backdrop-blur-lg rounded-xl p-4 sm:p-6">
            <Search className="h-6 sm:h-8 w-6 sm:w-8 text-[#4A90A4] mb-3 sm:mb-4" />
            <h3 className="text-lg sm:text-xl font-semibold text-white mb-1 sm:mb-2">
              Wide Selection
            </h3>
            <p className="text-gray-300 text-sm sm:text-base">
              Browse through our extensive collection of quality new and used vehicles.
            </p>
          </div>
          
          <div className="bg-[#D8B980]/10 backdrop-blur-lg rounded-xl p-4 sm:p-6">
            <CreditCard className="h-6 sm:h-8 w-6 sm:w-8 text-[#4A90A4] mb-3 sm:mb-4" />
            <h3 className="text-lg sm:text-xl font-semibold text-white mb-1 sm:mb-2">
              Flexible Financing
            </h3>
            <p className="text-gray-300 text-sm sm:text-base">
              Get approved for car financing with competitive rates and flexible terms.
            </p>
          </div>
          
          <div className="bg-[#D8B980]/10 backdrop-blur-lg rounded-xl p-4 sm:p-6">
            <RefreshCw className="h-6 sm:h-8 w-6 sm:w-8 text-[#4A90A4] mb-3 sm:mb-4" />
            <h3 className="text-lg sm:text-xl font-semibold text-white mb-1 sm:mb-2">
              Trade-In Options
            </h3>
            <p className="text-gray-300 text-sm sm:text-base">
              Trade in your current vehicle and upgrade to your dream car today.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}