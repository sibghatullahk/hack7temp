"use client";
import { useState } from "react";
import Image from "next/image";
import Customnav from "../components/Customnav";
import Popular from "../components/Popular";
import Foot from "../components/Foot";

export default function CarDetailCard() {
  const [priceRange, setPriceRange] = useState<number[]>([0, 1000]);

  const handleRangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(e.target.value, 10);
    setPriceRange([0, newValue]);
  };

  return (
    <div>
    <Customnav></Customnav>
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-[1fr,3fr] gap-6 p-3">
     
      <aside className="bg-gray-100 p-4 hidden lg:block">
        <h2 className="text-lg font-bold mb-4 text-blue-500">Filter Options</h2>
        
        <div className="space-y-6">
          
          <div>
            <h3 className="font-semibold text-blue-500 mb-2">Type</h3>
            <div className="space-y-1">
              {["SUV", "Sedan", "Hatchback", "Crossover", "Van", "Sports Car", "Minivan", "Coupe", "Convertible", "MPV"].map((type) => (
                <label key={type} className="flex items-center space-x-2">
                  <input type="checkbox" className="form-checkbox" />
                  <span>{type}</span>
                </label>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-blue-500 mb-2">Transmission</h3>
            <div className="space-y-1">
              {["Automatic", "Manual"].map((type) => (
                <label key={type} className="flex items-center space-x-2">
                  <input type="checkbox" className="form-checkbox" />
                  <span>{type}</span>
                </label>
              ))}
            </div>
          </div>
         
          <div>
            <h3 className="font-semibold text-blue-500 mb-2">Fuel Type</h3>
            <div className="space-y-1">
              {["Petrol", "Diesel", "Electric"].map((type) => (
                <label key={type} className="flex items-center space-x-2">
                  <input type="checkbox" className="form-checkbox" />
                  <span>{type}</span>
                </label>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-blue-500 mb-2">Capacity</h3>
            <div className="space-y-1">
              {["2 Seats", "4 Seats", "6 Seats"].map((type) => (
                <label key={type} className="flex items-center space-x-2">
                  <input type="checkbox" className="form-checkbox" />
                  <span>{type}</span>
                </label>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-blue-500 mb-2">Price Range</h3>
            <input
              aria-label="Price range"
              type="range"
              min="0"
              max="1000"
              value={priceRange[1]}
              onChange={handleRangeChange}
              className="w-full"
            />
            <p className="text-blue-500 text-sm">
              Selected Range: ${priceRange[0]} - ${priceRange[1]}
            </p>
          </div>
        </div>
      </aside>

     
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 bg-white rounded-lg shadow-md max-w-4xl mx-auto">
        
        
        <div className="space-y-4">
          
          <div className="h-64 w-full bg-gray-200 rounded-lg overflow-hidden relative">
            <Image
              src="/terios.png"
              alt="Main"
              layout="fill"
              objectFit="cover"
            />
          </div>
         
          <div className="grid grid-cols-3 gap-2">
            {["/crv.png", "/crv1.png", "/MG.png"].map((src, index) => (
              <div key={index} className="h-20 bg-gray-200 rounded-lg overflow-hidden relative">
                <Image src={src} alt={`Car image ${index + 1}`} layout="fill" objectFit="cover" />
              </div>
            ))}
          </div>
        </div>

        
        <div className="space-y-4 p-4">
          
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Terios Kid</h2>
            <div className="flex items-center space-x-2 text-yellow-500">
              {[...Array(5)].map((_, i) => (
                <span key={i}>&#9733;</span>
              ))}
              <span className="text-gray-500 text-sm">(440+ Reviews)</span>
            </div>
          </div>
         
          <p className="text-gray-600">
            This is a great car with amazing features, perfect for both city and
            long drives.
          </p>
          
          <div className="grid grid-cols-2 gap-4 text-sm text-gray-700">
            <div>
              <span className="font-semibold">Car Type:</span> SUV
            </div>
            <div>
              <span className="font-semibold">Capacity:</span> 5 Seats
            </div>
            <div>
              <span className="font-semibold">Transmission:</span> Automatic
            </div>
            <div>
              <span className="font-semibold">Gasoline:</span> 15 L
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <p className="text-lg font-bold text-gray-800">$100/day</p>
              <p className="text-sm text-gray-500">Inclusive of all taxes</p>
            </div>
            <button className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600">
              Rent Now
            </button>
                </div>
                
            </div>
            <div className="space-y-4">
  
  <div className="flex items-start space-x-4">
    <div className="flex-shrink-0">
      <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
    </div>
    <div className="flex-1">
      <div className="flex items-center space-x-1">
        <span className="text-yellow-500">★★★★★</span>
        <span className="text-gray-500 text-sm">(450+ Reviews)</span>
      </div>
      <p className="text-gray-600">“Absolutely loved driving this car! It handled so well on the highways and in the city. The features are top notch, and it was a smooth ride throughout. Highly recommend!”</p>
      <p className="text-gray-500 text-sm">John D December 5, 2024</p>
    </div>
  </div>

  
  <div className="flex items-start space-x-4">
    <div className="flex-shrink-0">
      <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
    </div>
    <div className="flex-1">
      <div className="flex items-center space-x-1">
        <span className="text-yellow-500">★★★★☆</span>
        <span className="text-gray-500 text-sm">(440+ Reviews)</span>
      </div>
      <p className="text-gray-600">“Great car! The comfort and space were perfect for my family. The fuel efficiency was also a pleasant surprise. Would have given it 5 stars if the infotainment system was a bit more responsive.”</p>
      <p className="text-gray-500 text-sm">Emily S December 3, 2024</p>
    </div>
  </div>
</div>

        </div>
    </div>
    <Popular></Popular>
    <Foot></Foot>
    </div>
  );
}
