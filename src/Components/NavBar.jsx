import React from 'react';

const Navbar = ({ cartCount, onCartClick }) => {
  return (
    <nav className="sticky top-0 bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 text-white flex justify-between items-center px-6 py-4 shadow-lg z-50 transition-all duration-300">
      <h1 className="text-2xl font-semibold tracking-wide">Products</h1>
      <button
        onClick={onCartClick}
        className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105 focus:outline-none"
      >
        Cart ({cartCount})
      </button>
    </nav>
  );
};

export default Navbar;
