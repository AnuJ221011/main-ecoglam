// components/cart/PaymentModal.jsx
import React from 'react';
import { CreditCard, X } from 'lucide-react';
import PaymentForm from './PaymentForm';
import PaymentSuccess from './PaymentSuccess';

const PaymentModal = ({ 
  showModal,
  onClose,
  orderPlaced,
  orderNumber,
  totalPrice,
  formatCurrency,
  utrNumber,
  setUtrNumber,
  onUtrSubmit,
  utrSubmitted,
  onCopyUpiId,
  onContinueShopping
}) => {
  if (!showModal) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="p-4 border-b border-gray-200 flex justify-between items-center bg-gray-50 rounded-t-lg">
          <h3 className="text-xl font-semibold text-gray-900 flex items-center">
            <CreditCard size={20} className="mr-2" />
            {orderPlaced ? "Order Confirmed" : "Complete Payment"}
          </h3>
          {!orderPlaced && (
            <button 
              onClick={onClose}
              className="text-gray-400 hover:text-gray-500"
            >
              <X size={20} />
            </button>
          )}
        </div>

        <div className="p-6">
          {orderPlaced ? (
            <PaymentSuccess
              orderNumber={orderNumber}
              totalPrice={totalPrice}
              formatCurrency={formatCurrency}
              onContinueShopping={onContinueShopping}
            />
          ) : (
            <PaymentForm
              totalPrice={totalPrice}
              formatCurrency={formatCurrency}
              utrNumber={utrNumber}
              setUtrNumber={setUtrNumber}
              onUtrSubmit={onUtrSubmit}
              utrSubmitted={utrSubmitted}
              onCopyUpiId={onCopyUpiId}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default PaymentModal;