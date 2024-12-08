"use client";

import { useState } from "react";
import PickupDropoff from "../components/Pickup";
import Recommend from "../components/Recommend";
import Customnav from "../components/Customnav";
import Foot from "../components/Foot";

export default function SearchPage() {
  const [priceRange, setPriceRange] = useState<number[]>([0, 1000]); // Ensure type is number[]

  const handleRangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(e.target.value, 10); // Convert string to number
    setPriceRange([0, newValue]); // Update state with the new range
  };

  return (
   <div>
    <Customnav></Customnav>
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-[1fr,3fr] p-3">

      {/* Left Section (Filters) */}
      <aside className="bg-gray-100 p-2 hidden lg:block">
        <h2 className="text-lg font-bold mb-4 text-blue-500">Filter Options</h2>

        {/* Type */}
        <div className="mb-6">
          <h3 className="font-semibold text-blue-500 mb-2">Type</h3>
          <div>
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="form-checkbox" />
              <span>SUV</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="form-checkbox" />
              <span>Sedan</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="form-checkbox" />
              <span>Hatchback</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="form-checkbox" />
              <span>Crossover</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="form-checkbox" />
              <span>Van</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="form-checkbox" />
              <span>Sports Car</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="form-checkbox" />
              <span>Minivan</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="form-checkbox" />
              <span>Coupe</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="form-checkbox" />
              <span>Convertible</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="form-checkbox" />
              <span>MPV</span>
            </label>
          </div>
        </div>

        {/* Transmission */}
        <div className="mb-6">
          <h3 className="font-semibold text-blue-500 mb-2">Transmission</h3>
          <div>
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="form-checkbox" />
              <span>Automatic</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="form-checkbox" />
              <span>Manual</span>
            </label>
          </div>
        </div>

        {/* Fuel Type */}
        <div className="mb-6">
          <h3 className="font-semibold text-blue-500 mb-2">Fuel Type</h3>
          <div>
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="form-checkbox" />
              <span>Petrol</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="form-checkbox" />
              <span>Diesel</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="form-checkbox" />
              <span>Electric</span>
            </label>
          </div>
        </div>

        {/* Capacity */}
        <div className="mb-6">
          <h3 className="font-semibold text-blue-500 mb-2">Capacity</h3>
          <div>
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="form-checkbox" />
              <span>2 Seats</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="form-checkbox" />
              <span>4 Seats</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="form-checkbox" />
              <span>6 Seats</span>
            </label>
          </div>
        </div>

        {/* Price Range */}
        <div>
          <h3 className="font-semibold text-gray-700 mb-2">Price Range</h3>
          <input
            aria-label="Price range"
            type="range"
            min="0"
            max="100"
            value={priceRange[1]} // Bind to the second value of the range
            onChange={handleRangeChange} // Handle changes with the function
            className="w-32"
          />
          <p className="text-blue-500 text-sm">
            Selected Range: ${priceRange[0]} - ${priceRange[1]}
          </p>
        </div>
      </aside>

      {/* Right Section */}
      <main className="p-4">
            <PickupDropoff />
            <Recommend/>
      </main>
    </div>
    <Foot></Foot>
    </div>
  );
}