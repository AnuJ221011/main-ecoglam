// components/cart/PaymentSuccess.jsx
import React from 'react';
import { CheckCircle } from 'lucide-react';

const PaymentSuccess = ({ orderNumber, totalPrice, formatCurrency, onContinueShopping }) => {
  return (
    <div className="text-center">
      <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
        <CheckCircle size={32} className="text-green-500" />
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">
        Payment Successful!
      </h3>
      <p className="text-gray-600 mb-4">
        Your order has been placed successfully.
      </p>
      <div className="bg-gray-50 p-4 rounded-lg text-left mb-4">
        <p className="text-sm text-gray-500 mb-1">Order Number</p>
        <p className="text-lg font-medium text-gray-900 mb-3">{orderNumber}</p>
        <p className="text-sm text-gray-500 mb-1">Amount Paid</p>
        <p className="text-lg font-medium text-gray-900">{formatCurrency(totalPrice)}</p>
      </div>
      <p className="text-sm text-gray-500 mb-6">
        A confirmation email has been sent to your registered email address.
      </p>
      <button
        onClick={onContinueShopping}
        className="w-full bg-blue-600 text-white py-3 px-4 rounded-md font-medium hover:bg-blue-700 transition-colors"
      >
        Continue Shopping
      </button>
    </div>
  );
};

export default PaymentSuccess;