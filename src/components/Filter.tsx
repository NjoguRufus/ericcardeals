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
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    onFilterChange(name, value);
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>, isMin: boolean) => {
    const newVal = Number(e.target.value);
    const newRange = [...filters.priceRange] as [number, number];
    if (isMin) newRange[0] = newVal;
    else newRange[1] = newVal;
    onFilterChange('priceRange', newRange);
  };

  const toggleMobileFilter = () => setIsMobileFilterOpen(!isMobileFilterOpen);

  // --- Shared Filter Content ---
  const FilterContent = () => (
    <div className="space-y-4">
      {/* Price Range */}
      <div>
        <label className="text-white">Price Range</label>
        <div className="flex gap-3 mt-1">
          <input
            type="number"
            value={filters.priceRange[0]}
            onChange={(e) => handlePriceChange(e, true)}
            placeholder="Min"
            className="w-full bg-gray-700 text-white p-2 rounded-md"
          />
          <input
            type="number"
            value={filters.priceRange[1]}
            onChange={(e) => handlePriceChange(e, false)}
            placeholder="Max"
            className="w-full bg-gray-700 text-white p-2 rounded-md"
          />
        </div>
      </div>

      {/* Transmission */}
      <div>
        <label className="text-white">Transmission</label>
        <select
          name="transmission"
          value={filters.transmission}
          onChange={handleChange}
          className="mt-1 w-full bg-gray-700 text-white p-2 rounded-md"
        >
          <option value="">All</option>
          <option value="Automatic">Automatic</option>
          <option value="Manual">Manual</option>
        </select>
      </div>

      {/* Fuel Type */}
      <div>
        <label className="text-white">Fuel Type</label>
        <select
          name="fuelType"
          value={filters.fuelType}
          onChange={handleChange}
          className="mt-1 w-full bg-gray-700 text-white p-2 rounded-md"
        >
          <option value="">All</option>
          <option value="Petrol">Petrol</option>
          <option value="Diesel">Diesel</option>
          <option value="Hybrid">Hybrid</option>
        </select>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Filter - Always Visible */}
      <div className="hidden md:block bg-gray-800 p-6 rounded-lg w-72 sticky top-20">
        <h2 className="text-lg font-semibold text-white mb-4">Filter Cars</h2>
        <FilterContent />
      </div>

      {/* Mobile Filter Trigger Button */}
      <div className="absolute top-16 right-4 z-40 md:hidden">
        <button
          onClick={toggleMobileFilter}
          className="bg-gray-800 text-white p-3 rounded-full shadow-md"
        >
          <FaFilter size={20} />
        </button>
      </div>

      {/* Mobile Filter Modal */}
      {isMobileFilterOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={toggleMobileFilter}
          />

          {/* Modal Panel */}
          <div className="fixed top-1/2 left-1/2 z-50 w-[90%] max-w-md transform -translate-x-1/2 -translate-y-1/2 bg-gray-900 p-6 rounded-lg shadow-xl">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-white">Filter Cars</h2>
              <button
                onClick={toggleMobileFilter}
                className="text-white text-2xl font-bold hover:text-red-400"
              >
                ✕
              </button>
            </div>
            <FilterContent />
          </div>
        </>
      )}
    </>
  );
};

export default Filter;
