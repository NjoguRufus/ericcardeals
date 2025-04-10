import React from 'react';

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

  return (
    <div className="bg-gray-800 p-6 rounded-lg">
      <h2 className="text-lg font-semibold text-white mb-4">Filter Cars</h2>
      
      {/* Price Range Filter */}
      <div className="mb-4">
        <label className="text-white">Price Range</label>
        <div className="flex gap-4">
          <input
            type="number"
            value={filters.priceRange[0]}
            onChange={(e) => handlePriceChange(e, true)}
            className="mt-1 block w-full bg-gray-700 text-white p-2 rounded-md"
            placeholder="Min Price"
          />
          <input
            type="number"
            value={filters.priceRange[1]}
            onChange={(e) => handlePriceChange(e, false)}
            className="mt-1 block w-full bg-gray-700 text-white p-2 rounded-md"
            placeholder="Max Price"
          />
        </div>
        <div className="flex justify-between text-white text-xs mt-2">
          <span>${filters.priceRange[0]}</span>
          <span>${filters.priceRange[1]}</span>
        </div>
      </div>
      
      {/* Transmission Filter */}
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
      
      {/* Fuel Type Filter */}
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
  );
};

export default Filter;
