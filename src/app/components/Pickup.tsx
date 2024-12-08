import { FaExchangeAlt } from "react-icons/fa";

const PickupDropoff = () => {
  return (
    <div className="p-6">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 items-center">
        {/* Pick-Up Section */}
        <div className="flex flex-col items-start">
          <h3 className="text-lg font-semibold mb-4">Pick-Up</h3>
          <div className="mb-2 w-full">
            <label htmlFor="pickup-location" className="block text-sm font-medium mb-1">
              Location
            </label>
            <input
              type="text"
              id="pickup-location"
              placeholder="Enter location"
              className="w-full p-1 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-2 w-full">
            <label htmlFor="pickup-date" className="block text-sm font-medium mb-1">
              Date
            </label>
            <input
              type="date"
              id="pickup-date"
              placeholder="Select date"
              className="w-full p-1 border border-gray-300 rounded"
            />
          </div>
          <div className="w-full">
            <label htmlFor="pickup-time" className="block text-sm font-medium mb-1">
              Time
            </label>
            <input
              type="time"
              id="pickup-time"
              placeholder="Select time"
              className="w-full p-1 border border-gray-300 rounded"
            />
          </div>
        </div>

        {/* Two-Way Icon */}
        <div className="flex justify-center items-center">
          <FaExchangeAlt className="text-3xl text-blue-500" />
        </div>

        {/* Drop-Off Section */}
        <div className="flex flex-col items-start">
          <h3 className="text-lg font-semibold mb-4">Drop-Off</h3>
          <div className="mb-2 w-full">
            <label htmlFor="dropoff-location" className="block text-sm font-medium mb-1">
              Location
            </label>
            <input
              type="text"
              id="dropoff-location"
              placeholder="Enter location"
              className="w-full p-1 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-2 w-full">
            <label htmlFor="dropoff-date" className="block text-sm font-medium mb-1">
              Date
            </label>
            <input
              type="date"
              id="dropoff-date"
              placeholder="Select date"
              className="w-full p-1 border border-gray-300 rounded"
            />
          </div>
          <div className="w-full">
            <label htmlFor="dropoff-time" className="block text-sm font-medium mb-1">
              Time
            </label>
            <input
              type="time"
              id="dropoff-time"
              placeholder="Select time"
              className="w-full p-1 border border-gray-300 rounded"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PickupDropoff;