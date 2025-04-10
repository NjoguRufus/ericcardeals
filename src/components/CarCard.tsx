import React from 'react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom
import { Settings, Fuel, Calendar, Activity } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

interface CarCardProps {
  car: Car;
}

const CarCard = ({ car }: CarCardProps) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'KES',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-[1.02] transition-transform duration-300">
      <Link to={`/car/${car.id}`} className="relative cursor-pointer">
        <img 
          src={car.image} 
          alt={car.title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-4 right-4">
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${car.condition === 'New' ? 'bg-green-500 text-white' : 'bg-blue-500 text-white'}`}>
            {car.condition}
          </span>
        </div>
      </Link>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{car.title}</h3>
        <p className="text-2xl font-bold text-blue-600 mb-4">{formatPrice(car.price)}</p>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="flex items-center space-x-2 text-gray-600">
            <Settings className="h-5 w-5" />
            <span>{car.transmission}</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-600">
            <Fuel className="h-5 w-5" />
            <span>{car.fuelType}</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-600">
            <Calendar className="h-5 w-5" />
            <span>{car.year}</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-600">
            <Activity className="h-5 w-5" />
            <span>{car.mileage} km</span>
          </div>
        </div>

        <div className="mt-4 bg-gray-100 p-4 rounded-md">
          {/* Center the WhatsApp button */}
          <div className="flex justify-center">
            <Link to={`https://wa.me/${car.whatsappLink}`} className="flex items-center space-x-2 text-green-500 hover:text-green-700">
              <FaWhatsapp className="h-5 w-5" />
              <span>Inquire via WhatsApp</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
