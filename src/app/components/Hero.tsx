import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="p-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-1 sm:grid-rows-2 lg:grid-cols-2 lg:grid-rows-1 items-center mt-4">
        {/* Card 1 */}
        <div className="p-6 bg-blue-300 flex flex-col items-start rounded-lg shadow-lg min-h-[400px]">
          <h2 className="text-2xl font-bold mb-2 text-white">
            The Best Platform for Car Rental
          </h2>
          <p className="text-white font-sans mb-4">
            Ease of doing a car rental safely and reliably. Of course at a low
            price.
          </p>
          <Image
            src="/image 7.png"
            alt="Image 1"
            className="w-full h-auto object-cover mb-4"
            width={300}
            height={200}
            sizes="(max-width: 640px) 100vw, 640px"
          />
          <button
            title="Book Now"
            className="p-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg"
          >
            <Link href="/details">Rent Now</Link>
          </button>
        </div>

        {/* Card 2 */}
        <div className="p-6 bg-blue-300 flex flex-col items-start rounded-lg shadow-lg min-h-[400px]">
          <h2 className="text-2xl font-bold mb-2 text-white">
            Easy way to rent a car at a low price
          </h2>
          <p className="text-white font-sans mb-4">
            Providing cheap car rental services and safe and comfortable facilities.
          </p>
          <Image
            src="/image 8.png"
            alt="Image 2"
            className="w-full h-auto object-cover mb-4"
            width={300}
            height={200}
            sizes="(max-width: 640px) 100vw, 640px"
          />
          <button
            title="Book Now"
            className="p-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg"
          >
            <Link href="/categories">Categories</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;