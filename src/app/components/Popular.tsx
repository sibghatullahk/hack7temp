import Image from "next/image";
import { FaHeart } from "react-icons/fa";
import Link from "next/link";

const Popular = () => {
  // Array containing car details
  const cars = [
    {
      src: "/crv.png",
      carName: "Audi",
      bodyType: "SUV",
      transmission: "Automatic",
      seatingCapacity: "5",
      price: "$99/day",
    },
    {
      src: "/MG.png",
      carName: "Bentley",
      bodyType: "Sedan",
      transmission: "Manual",
      seatingCapacity: "4",
      price: "$89/day",
    },
    {
      src: "/mgzs.png",
      carName: "Terios",
      bodyType: "Hatchback",
      transmission: "Automatic",
      seatingCapacity: "5",
      price: "$79/day",
    },
    {
      src: "/crv1.png",
      carName: "Corolla",
      bodyType: "Coupe",
      transmission: "Manual",
      seatingCapacity: "4",
      price: "$109/day",
    },
  ];

  return (
    <div className="mt-8">
      <h2 className="text-2xl justify-center font-bold text-center mb-6 text-blue-500">Popular Cars</h2>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-4">
        {cars.map((car, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <div className="relative">
              <span className="absolute top-2 right-2 px-2 py-1 rounded-md">
                <FaHeart className="h-6 w-6 text-white border-spacing-1" />
              </span>
              <Image
                src={car.src}
                alt={`Car ${index + 1}`}
                className="w-full h-auto object-cover"
                width={300}
                height={200}
                sizes="(max-width: 640px) 100vw, 640px"
              />
            </div>
            <div className="p-4">
              <div className="flex justify-between items-center mb-2">
                <p className="text-sm text-black">{car.bodyType}</p>
                <div className="flex items-center">
                  <span className="ml-2 text-black">{car.transmission}</span>
                </div>
              </div>
              <div className="flex justify-between items-center mb-2">
                <p className="text-sm text-black">{car.seatingCapacity} seats</p>
                <div className="flex items-center">
                  <span className="ml-2 text-black">{car.carName}</span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-sm text-white font-bold">{car.price}</p>
                <button className="p-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg">
                  <Link href="/payment">Rent Now</Link>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Popular;
