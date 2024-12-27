import React from 'react';

const ProductCard = ({ product, cartItem, onAddToCart, onDecrementFromCart }) => {
  return (
    <div className="border rounded-lg shadow-xl p-6 flex flex-col items-center bg-white transform transition-all duration-300 hover:scale-105">
      <img
        src={product.image}
        alt={product.title}
        className="w-28 h-28 object-contain mb-4 transition-transform duration-300 hover:scale-110"
      />
      <h3 className="text-lg font-semibold text-center text-gray-800 mb-2">{product.title}</h3>
      <p className="text-xl font-bold text-teal-600 mb-4">${product.price.toFixed(2)}</p>

      {cartItem ? (
        <div className="flex items-center space-x-3">
          <button
            onClick={onDecrementFromCart}
            className="bg-red-600 hover:bg-red-700 text-white text-lg px-4 py-2 rounded-full transition-all duration-300 transform hover:scale-105"
          >
            −
          </button>
          <span className="text-xl font-medium text-gray-700">{cartItem.quantity}</span>
          <button
            onClick={onAddToCart}
            className="bg-teal-600 hover:bg-teal-700 text-white text-lg px-4 py-2 rounded-full transition-all duration-300 transform hover:scale-105"
          >
            +
          </button>
        </div>
      ) : (
        <button
          onClick={onAddToCart}
          className="bg-purple-700 hover:bg-purple-800 text-white text-lg px-5 py-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
        >
          Add to Cart
        </button>
      )}
    </div>
  );
};

export default ProductCard;
