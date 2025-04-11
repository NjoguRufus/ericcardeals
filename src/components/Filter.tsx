import React, { useState } from 'react';
import { FaFilter } from 'react-icons/fa';

type Filters = {
  priceRange: [number, number];
  transmission: string;
  fuelType: string;
};

type FilterProps = {
  filters: Filters;
  onFilterChange: (filterName: string, value: string | [number, number]) => void;
};

const Filter: React.FC<FilterProps> = ({ filters, onFilterChange }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    onFilterChange(name, value);
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>, isMinPrice: boolean) => {
    const newPrice = Number(e.target.value);
    const newPriceRange = [...filters.priceRange];
    if (isMinPrice) {
      newPriceRange[0] = newPrice;
    } else {
      newPriceRange[1] = newPrice;
    }
    onFilterChange('priceRange', newPriceRange as [number, number]);
  };

  const toggleFilter = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="relative">
      {/* Floating Filter Button on Mobile */}
      <div className="fixed bottom-6 right-6 md:static md:bottom-auto md:right-auto z-50">
        {!isExpanded && (
          <button
            onClick={toggleFilter}
            className="bg-gray-800 text-white p-4 rounded-full shadow-lg md:hidden"
          >
            <FaFilter size={20} />
          </button>
        )}
      </div>

      {/* Filter Panel */}
      {isExpanded && (
        <div
          className="fixed inset-0 z-40 bg-gray-900 bg-opacity-90 md:relative md:bg-transparent p-6 overflow-auto md:w-80 rounded-lg shadow-xl transition-all"
        >
          {/* Header */}
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-white">Filter Cars</h2>
            <button onClick={toggleFilter} className="text-white text-xl font-bold">
              ✕
            </button>
          </div>

          {/* Price Range */}
          <div className="mb-4">
            <label className="text-white">Price Range</label>
            <div className="flex gap-4">
              <input
                type="number"
                value={filters.priceRange[0]}
                onChange={(e) => handlePriceChange(e, true)}
                className="mt-1 block w-full bg-gray-700 text-white p-2 rounded-md"
                placeholder="Min"
              />
              <input
                type="number"
                value={filters.priceRange[1]}
                onChange={(e) => handlePriceChange(e, false)}
                className="mt-1 block w-full bg-gray-700 text-white p-2 rounded-md"
                placeholder="Max"
              />
            </div>
          </div>

          {/* Transmission */}
          <div className="mb-4">
            <label htmlFor="transmission" className="text-white">Transmission</label>
            <select
              id="transmission"
              name="transmission"
              value={filters.transmission}
              onChange={handleChange}
              className="mt-1 block w-full bg-gray-700 text-white p-2 rounded-md"
            >
              <option value="">All</option>
              <option value="Automatic">Automatic</option>
              <option value="Manual">Manual</option>
            </select>
          </div>

          {/* Fuel Type */}
          <div className="mb-4">
            <label htmlFor="fuelType" className="text-white">Fuel Type</label>
            <select
              id="fuelType"
              name="fuelType"
              value={filters.fuelType}
              onChange={handleChange}
              className="mt-1 block w-full bg-gray-700 text-white p-2 rounded-md"
            >
              <option value="">All</option>
              <option value="Petrol">Petrol</option>
              <option value="Diesel">Diesel</option>
              <option value="Hybrid">Hybrid</option>
            </select>
          </div>
        </div>
      )}
    </div>
  );
};

export default Filter;
