import React, { useEffect, useState } from 'react';
import CarCard from '../components/CarCard';
import Filter from '../components/Filter'; // Import the Filter component
import { Car } from '../types';

const UsedCars = () => {
  const [usedCars, setUsedCars] = useState<Car[]>([]);
  const [filters, setFilters] = useState({
    priceRange: [0, 10000000],
    transmission: '',
    fuelType: '',
  });

  useEffect(() => {
    // Fetch used cars data
    const fetchUsedCars = async () => {
      try {
        const response = await fetch('/data/usedcars.json');
        const data = await response.json();
        setUsedCars(data);
      } catch (error) {
        console.error('Error fetching used cars data:', error);
      }
    };

    fetchUsedCars();
  }, []);

  const handleFilterChange = (filterName: string, value: string | [number, number]) => {
    setFilters(prev => ({
      ...prev,
      [filterName]: value
    }));
  };

  const filteredCars = usedCars.filter(car => {
    return (
      (!filters.transmission || car.transmission === filters.transmission) &&
      (!filters.fuelType || car.fuelType === filters.fuelType) &&
      car.price >= filters.priceRange[0] &&
      car.price <= filters.priceRange[1]
    );
  });

  return (
    <div className="min-h-screen bg-gray-900 text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-white mb-8">Used Cars</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <Filter filters={filters} onFilterChange={handleFilterChange} />
          </div>
          
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredCars.map(car => (
                <CarCard key={car.id} car={car} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsedCars;
