// components/cart/CouponCode.jsx
import React from 'react';
import { Tag } from 'lucide-react';

const CouponCode = ({ 
  couponCode, 
  setCouponCode, 
  onApplyCoupon, 
  couponApplied, 
  isLoading 
}) => {
  return (
    <div className="mb-6">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        <Tag size={16} className="inline mr-1" />
        Apply Coupon Code
      </label>
      <div className="flex">
        <input
          type="text"
          value={couponCode}
          onChange={(e) => setCouponCode(e.target.value)}
          placeholder="Enter code"
          className="flex-grow px-3 py-2 border border-gray-300 rounded-l-md focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
          disabled={couponApplied}
        />
        <button
          onClick={onApplyCoupon}
          disabled={!couponCode || couponApplied || isLoading}
          className={`px-4 py-2 bg-gray-800 text-white rounded-r-md hover:bg-gray-900 transition-colors ${
            (!couponCode || couponApplied || isLoading) ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {isLoading ? "..." : couponApplied ? "Applied" : "Apply"}
        </button>
      </div>
      {couponApplied && (
        <p className="text-xs text-green-600 mt-1">Coupon applied successfully!</p>
      )}
      <p className="text-xs text-gray-500 mt-1">Try "SAVE10" for 10% off</p>
    </div>
  );
};

export default CouponCode;