import React, { useState } from 'react';

const CartModel = ({ cart, onClose, onRemove }) => {
  const [isPaymentFormVisible, setPaymentFormVisible] = useState(false);

  // Toggle Payment Form visibility
  const togglePaymentForm = () => {
    setPaymentFormVisible(!isPaymentFormVisible);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-2xl p-8 w-11/12 max-w-lg max-h-[80vh] overflow-y-auto transform transition-all duration-300">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-full focus:outline-none"
        >
          X
        </button>

        {/* Modal Content */}
        <h2 className="text-2xl font-semibold mb-6 text-center">Your Cart</h2>
        {cart.length === 0 ? (
          <p className="text-lg text-gray-500 text-center">Your cart is empty.</p>
        ) : (
          <ul className="space-y-4">
            {cart.map((item) => (
              <li
                key={item.id}
                className="flex items-center justify-between bg-gray-50 p-4 rounded-lg shadow-sm hover:bg-gray-100 transition duration-200"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-16 h-16 object-contain rounded-md"
                />
                <div className="flex-1 ml-6">
                  <h4 className="text-lg font-semibold">{item.title}</h4>
                  <p className="text-sm text-gray-600">
                    ${item.price.toFixed(2)} x {item.quantity}
                  </p>
                  <p className="text-sm font-semibold mt-1 text-gray-800">
                    Total: ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
                <button
                  onClick={() => onRemove(item.id)}
                  className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-full focus:outline-none"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}

        {/* Cart Summary */}
        {cart.length > 0 && (
          <div className="mt-6 flex justify-between items-center text-lg font-bold">
            <span>Total:</span>
            <span>
              ${cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}
            </span>
          </div>
        )}

        {/* Payment Section */}
        {cart.length > 0 && !isPaymentFormVisible ? (
          <div className="mt-6 text-center">
            <button
              onClick={togglePaymentForm}
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full focus:outline-none"
            >
              Proceed to Payment
            </button>
          </div>
        ) : null}

        {/* Payment Form */}
        {isPaymentFormVisible && (
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-4 text-center">Payment Information</h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="cardNumber" className="block text-sm font-semibold">Card Number</label>
                <input
                  id="cardNumber"
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  placeholder="1234 5678 9876 5432"
                />
              </div>
              <div className="flex space-x-4">
                <div className="w-1/2">
                  <label htmlFor="expiryDate" className="block text-sm font-semibold">Expiry Date</label>
                  <input
                    id="expiryDate"
                    type="text"
                    className="w-full p-3 border border-gray-300 rounded-lg"
                    placeholder="MM/YY"
                  />
                </div>
                <div className="w-1/2">
                  <label htmlFor="cvv" className="block text-sm font-semibold">CVV</label>
                  <input
                    id="cvv"
                    type="text"
                    className="w-full p-3 border border-gray-300 rounded-lg"
                    placeholder="123"
                  />
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full focus:outline-none"
                >
                  Complete Payment
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartModel;
