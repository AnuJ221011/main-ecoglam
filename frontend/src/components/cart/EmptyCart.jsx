// components/cart/EmptyCart.jsx
import React from 'react';
import { ShoppingBag } from 'lucide-react';

const EmptyCart = ({ onContinueShopping }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-8 text-center">
      <div className="flex justify-center mb-4">
        <ShoppingBag size={64} className="text-gray-300" />
      </div>
      <h2 className="text-xl font-semibold text-gray-800 mb-2">Your cart is empty</h2>
      <p className="text-gray-600 mb-6">Looks like you haven't added anything to your cart yet.</p>
      <button 
        className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
        onClick={onContinueShopping}
      >
        Continue Shopping
      </button>
    </div>
  );
};

export default EmptyCart;