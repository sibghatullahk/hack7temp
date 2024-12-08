import Image from "next/image";
import { FaHeart } from "react-icons/fa";
import Link from "next/link";

const Recommend = () => {
  const cars = [
    {
      src: "/crv.png",
      carName: "CRV",
      bodyType: "SUV",
      transmission: "Automatic",
      seatingCapacity: "5",
      price: "$99/day",
    },
    {
      src: "/crv1.png",
      carName: "CRV-2",
      bodyType: "Sedan",
      transmission: "Manual",
      seatingCapacity: "4",
      price: "$89/day",
    },
    {
      src: "/terios.png",
      carName: "Terios Kid",
      bodyType: "Hatchback",
      transmission: "Automatic",
      seatingCapacity: "5",
      price: "$79/day",
    },
    {
      src: "/MG.png",
      carName: "MG-Z",
      bodyType: "Coupe",
      transmission: "Manual",
      seatingCapacity: "4",
      price: "$109/day",
    },
    {
      src: "/mgzs.png",
      carName: "MG-ZS",
      bodyType: "SUV",
      transmission: "Automatic",
      seatingCapacity: "6",
      price: "$119/day",
    },
    {
      src: "/Rush.png",
      carName: "Rush",
      bodyType: "Convertible",
      transmission: "Manual",
      seatingCapacity: "2",
      price: "$129/day",
    },
    {
      src: "/crv.png",
      carName: "CRV",
      bodyType: "Pickup",
      transmission: "Automatic",
      seatingCapacity: "4",
      price: "$139/day",
    },
    {
      src: "/terios.png",
      carName: "Terios",
      bodyType: "Minivan",
      transmission: "Automatic",
      seatingCapacity: "7",
      price: "$149/day",
    },
    {
      src: "/Rush.png",
      carName: "Rush",
      bodyType: "Sedan",
      transmission: "Manual",
      seatingCapacity: "4",
      price: "$89/day",
    },
    {
      src: "/crv1.png",
      carName: "CRV-2",
      bodyType: "SUV",
      transmission: "Automatic",
      seatingCapacity: "5",
      price: "$99/day",
    },
    {
      src: "/MG.png",
      carName: "MG-Z",
      bodyType: "Hatchback",
      transmission: "Automatic",
      seatingCapacity: "5",
      price: "$79/day",
    },
    {
      src: "/terios.png",
      carName: "Terios Kid",
      bodyType: "Coupe",
      transmission: "Manual",
      seatingCapacity: "4",
      price: "$109/day",
    },
  ];

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold text-center mb-6 text-blue-500">Recommended Cars</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
        {cars.map((car, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-lg flex flex-col items-center shadow-lg"
          >
            <div className="relative w-full">
              <span className="absolute top-2 right-2 text-black p-1 rounded-md">
                <FaHeart />
              </span>
              <Image
                src={car.src}
                alt={`Car ${index + 1}`}
                className="w-full h-auto object-cover rounded-t-lg"
                width={300}
                height={200}
                sizes="(max-width: 640px) 100vw, 640px"
              />
            </div>
            <div className="mt-2 w-full">
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
                <p className="text-sm text-black font-bold">{car.price}</p>
                <button className="p-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg">
                <Link href="/payment">Rent Now</Link>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-4">
        <button className="p-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg">
         <Link href="/categories">View All Cars</Link> 
        </button>
      </div>
    </div>
  );
};

export default Recommend;