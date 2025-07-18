// components/cart/OrderSummary.jsx
import React from 'react';
import { Tag, Truck, CreditCard, ArrowRight } from 'lucide-react';
import CouponCode from './CouponCode';

const OrderSummary = ({ 
  subtotal,
  discount,
  shipping,
  tax,
  totalPrice,
  couponApplied,
  formatCurrency,
  couponCode,
  setCouponCode,
  onApplyCoupon,
  isLoading,
  onCheckout
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md divide-y divide-gray-200">
      <div className="p-4 bg-gray-50">
        <h2 className="text-lg font-semibold text-gray-800">Order Summary</h2>
      </div>
      
      <div className="p-6">
        <div className="flex justify-between mb-4">
          <span className="text-gray-600">Subtotal</span>
          <span className="font-medium">{formatCurrency(subtotal)}</span>
        </div>
        
        {couponApplied && (
          <div className="flex justify-between text-green-600 mb-4">
            <span className="flex items-center">
              <Tag size={16} className="mr-1" />
              Discount (10%)
            </span>
            <span>-{formatCurrency(discount)}</span>
          </div>
        )}
        
        <div className="flex justify-between mb-4">
          <span className="text-gray-600 flex items-center">
            <Truck size={16} className="mr-1" />
            Shipping
          </span>
          <span className="font-medium">
            {shipping === 0 ? "Free" : formatCurrency(shipping)}
          </span>
        </div>
        
        <div className="flex justify-between mb-4">
          <span className="text-gray-600">Tax (5%)</span>
          <span className="font-medium">{formatCurrency(tax)}</span>
        </div>
        
        <div className="border-t border-gray-200 pt-4 mt-4">
          <div className="flex justify-between mb-2">
            <span className="text-lg font-semibold">Total</span>
            <span className="text-lg font-bold text-blue-600">{formatCurrency(totalPrice)}</span>
          </div>
          <p className="text-xs text-gray-500 mb-4">
            Including {formatCurrency(tax)} in taxes
          </p>
        </div>
        
        <CouponCode
          couponCode={couponCode}
          setCouponCode={setCouponCode}
          onApplyCoupon={onApplyCoupon}
          couponApplied={couponApplied}
          isLoading={isLoading}
        />
        
        <button
          onClick={onCheckout}
          className="w-full bg-blue-600 text-white py-3 px-4 rounded-md font-medium hover:bg-blue-700 transition-colors flex items-center justify-center"
        >
          <CreditCard size={18} className="mr-2" />
          Proceed to Pay
          <ArrowRight size={18} className="ml-2" />
        </button>
      </div>
    </div>
  );
};

export default OrderSummary;