
// components/cart/ShippingInfo.jsx
import React from 'react';
import { Truck, CreditCard } from 'lucide-react';

const ShippingInfo = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center mb-4">
        <Truck size={20} className="text-gray-700 mr-2" />
        <p className="text-sm text-gray-600">
          Free shipping on orders over ₹1,000
        </p>
      </div>
      <div className="flex items-center">
        <CreditCard size={20} className="text-gray-700 mr-2" />
        <p className="text-sm text-gray-600">
          Secure payment processing
        </p>
      </div>
    </div>
  );
};

export default ShippingInfo;