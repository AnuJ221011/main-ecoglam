// components/cart/PaymentForm.jsx
import React from 'react';
import { Copy } from 'lucide-react';

const PaymentForm = ({ 
  totalPrice, 
  formatCurrency, 
  utrNumber, 
  setUtrNumber, 
  onUtrSubmit, 
  utrSubmitted, 
  onCopyUpiId 
}) => {
  return (
    <div>
      <div className="text-center mb-6">
        <p className="text-gray-700 mb-2">Total Amount</p>
        <p className="text-2xl font-bold text-blue-600">{formatCurrency(totalPrice)}</p>
      </div>

      <div className="bg-gray-50 p-4 rounded-lg mb-6">
        <div className="flex justify-center mb-4">
          <div className="w-48 h-48 bg-white p-2 border border-gray-200 rounded-lg flex items-center justify-center relative">
            <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-70 text-center">
              <div>
                <img src="https://res.cloudinary.com/djbjfsshe/image/upload/v1747518431/qr_kd9ngs.jpg" alt="QR Code" />
                <p className="text-sm font-medium text-gray-700">Scan to Pay</p>
                <p className="text-xs text-gray-500">₹{totalPrice.toFixed(2)}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between bg-white p-3 rounded-md border border-gray-200">
          <div>
            <p className="text-sm font-medium text-gray-900">UPI ID: ecoglam@pay</p>
            <p className="text-xs text-gray-500">Scan QR or pay to this UPI ID</p>
          </div>
          <button 
            onClick={onCopyUpiId}
            className="text-blue-600 hover:text-blue-800"
          >
            <Copy size={16} />
          </button>
        </div>
      </div>

      <div className="mb-4">
        <label htmlFor="utr" className="block text-sm font-medium text-gray-700 mb-2">
          Enter UTR Number
        </label>
        <input
          type="text"
          id="utr"
          value={utrNumber}
          onChange={(e) => setUtrNumber(e.target.value)}
          placeholder="UTR / Transaction Reference Number"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
          disabled={utrSubmitted}
        />
        <p className="text-xs text-gray-500 mt-1">
          UTR number can be found in your payment app after successful transaction
        </p>
      </div>

      <button
        onClick={onUtrSubmit}
        disabled={utrSubmitted || !utrNumber.trim()}
        className={`w-full bg-blue-600 text-white py-3 px-4 rounded-md font-medium hover:bg-blue-700 transition-colors flex items-center justify-center
          ${(utrSubmitted || !utrNumber.trim()) ? "opacity-50 cursor-not-allowed" : ""}`}
      >
        {utrSubmitted ? (
          <>
            <span className="mr-2">Verifying Payment</span>
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
          </>
        ) : (
          "Confirm Payment"
        )}
      </button>
    </div>
  );
};

export default PaymentForm;