import React, { useEffect, useState } from 'react';
import CarCard from '../components/CarCard';
import { Car } from '../types';

const ViewAllCars = () => {
  const [cars, setCars] = useState<Car[]>([]);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const [newRes, usedRes] = await Promise.all([
          fetch('/data/newcars.json'),
          fetch('/data/usedcars.json'),
        ]);
        const newCars = await newRes.json();
        const usedCars = await usedRes.json();
        setCars([...newCars, ...usedCars]);
      } catch (err) {
        console.error('Failed to fetch cars:', err);
      }
    };

    fetchCars();
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold mb-10 text-center">All Available Cars</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cars.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ViewAllCars;