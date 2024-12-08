import { FaBell, FaHeart, FaCog, FaUserCircle, FaSearch, FaFilter } from 'react-icons/fa';

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-4 py-2 text-blue-500 mt-4">
      <div className="flex items-center">
        <h1 className="text-xl font-bold">MORENT</h1>
      </div>

      <div className="flex items-center space-x-4">
        
        <FaSearch className="hidden lg:block h-6 w-6 text-blue-500" />
        <input type="text" placeholder="Search..." className="hidden lg:block" />
        <FaFilter className="hidden lg:block h-6 w-6 text-blue-500" />
        
    </div>

      <div className="flex justify-center items-center space-x-4">

        <FaHeart className="h-6 w-6 text-red-500" />
        <FaBell className="h-6 w-6 text-blue-500" />
        <FaCog className="h-6 w-6 text-blue-500" />
        <FaUserCircle className="h-6 w-6 text-blue-500" />
      </div>
    </nav>
  );
};
