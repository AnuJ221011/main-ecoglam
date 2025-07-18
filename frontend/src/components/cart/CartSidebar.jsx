// components/CartSidebar.js
import React from "react";
import {
  X,
  Plus,
  Minus,
  ShoppingCart,
  ArrowRight,
  Trash2,
  Gift,
  Heart,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/ProductContext";

const CartSidebar = ({ isOpen, onClose }) => {
  const { products, removeProduct, updateQuantity } = useCart();
  const navigate = useNavigate();

  const parsePrice = (priceStr) => {
    if (priceStr && typeof priceStr === "string" && priceStr.includes("₹")) {
      return Number(priceStr.split("₹")[1].replace(/,/g, ''));
    }
    return 0;
  };

  const formatCurrency = (amount) => {
    return "₹" + amount.toLocaleString('en-IN', { minimumFractionDigits: 0, maximumFractionDigits: 0 });
  };

  const subtotal = products.reduce((sum, product) => {
    return sum + parsePrice(product.price) * product.quantity;
  }, 0);

  const deliveryThreshold = 500;
  const remainingForFreeDelivery = Math.max(0, deliveryThreshold - subtotal);
  const progressPercentage = Math.min(100, (subtotal / deliveryThreshold) * 100);

  const handleCheckout = () => {
    navigate("/cart");
    onClose();
  };

  const handleContinueShopping = () => {
    onClose();
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Background Overlay */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300"
      />

      {/* Sidebar */}
      <div className="fixed right-0 top-0 w-full max-w-sm h-full max-h-screen bg-white shadow-2xl z-50 flex flex-col transform transition-transform duration-300 ease-in-out overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-100 bg-gradient-to-r from-pink-50 to-purple-50 flex-shrink-0">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-pink-100 rounded-full">
              <ShoppingCart className="text-pink-600" size={20} />
            </div>
            <div>
              <h2 className="text-lg font-bold text-gray-900">Shopping Cart</h2>
              <span className="text-xs text-gray-500">
                {products.length} {products.length === 1 ? 'item' : 'items'}
              </span>
            </div>
          </div>
          <button 
            onClick={onClose} 
            className="p-2 hover:bg-white hover:bg-opacity-50 rounded-full transition-colors"
            aria-label="Close cart"
          >
            <X className="text-gray-600" size={20} />
          </button>
        </div>

        {/* Free Delivery Progress */}
        {products.length > 0 && (
          <div className="p-3 bg-gradient-to-r from-green-50 to-blue-50 border-b border-gray-100 flex-shrink-0">
            <div className="flex items-center gap-2 mb-2">
              <Gift className="text-green-600" size={14} />
              <span className="text-xs font-medium text-gray-700">
                {remainingForFreeDelivery > 0 
                  ? `Add ${formatCurrency(remainingForFreeDelivery)} more for FREE delivery!`
                  : "🎉 You've qualified for FREE delivery!"
                }
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-1.5">
              <div 
                className="bg-gradient-to-r from-green-400 to-green-600 h-1.5 rounded-full transition-all duration-500"
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
          </div>
        )}

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-4">
          {products.length === 0 ? (
            <div className="text-center py-16">
              <div className="mb-6">
                <div className="mx-auto w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                  <ShoppingCart className="text-gray-400" size={32} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Your cart is empty</h3>
                <p className="text-gray-500 mb-6">Discover amazing products and add them to your cart</p>
                <button
                  onClick={handleContinueShopping}
                  className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-full font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                >
                  Start Shopping
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              {products.map((product, index) => (
                <div 
                  key={product.id} 
                  className="flex gap-4 p-4 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative">
                    <img
                      src={product.image || "/api/placeholder/80/80"}
                      alt={product.name}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                    <button
                      onClick={() => removeProduct(product.id)}
                      className="absolute -top-2 -right-2 p-1 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors shadow-lg"
                    >
                      <X size={12} />
                    </button>
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-gray-900 mb-1 truncate">
                      {product.name}
                    </h3>
                    <p className="text-lg font-bold text-pink-600 mb-3">
                      {product.price}
                    </p>
                    
                    {/* Quantity Controls */}
                    <div className="flex items-center gap-3">
                      <div className="flex items-center border border-gray-200 rounded-lg">
                        <button
                          onClick={() => updateQuantity(product.id, "decrement")}
                          className="p-2 hover:bg-gray-100 rounded-l-lg transition-colors"
                          disabled={product.quantity <= 1}
                        >
                          <Minus size={14} className={product.quantity <= 1 ? 'text-gray-300' : 'text-gray-600'} />
                        </button>
                        <span className="px-4 py-2 font-medium text-gray-900 bg-gray-50 min-w-[3rem] text-center">
                          {product.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(product.id, "increment")}
                          className="p-2 hover:bg-gray-100 rounded-r-lg transition-colors"
                        >
                          <Plus size={14} className="text-gray-600" />
                        </button>
                      </div>
                      
                      <button
                        onClick={() => removeProduct(product.id)}
                        className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {products.length > 0 && (
          <div className="p-4 border-t border-gray-100 bg-gray-50">
            {/* Subtotal */}
            <div className="flex justify-between items-center mb-3 pb-2 border-b border-gray-200">
              <span className="text-sm font-medium text-gray-700">Subtotal:</span>
              <span className="text-lg font-bold text-gray-900">
                {formatCurrency(subtotal)}
              </span>
            </div>

            {/* Action Buttons */}
            <div className="space-y-2">
              <button
                className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-2.5 rounded-lg font-medium text-sm hover:shadow-md transform hover:scale-[1.01] transition-all duration-200 flex items-center justify-center gap-2"
                onClick={handleCheckout}
              >
                Proceed to Checkout
                <ArrowRight size={16} />
              </button>
              
              <button
                className="w-full border border-gray-200 text-gray-700 py-2 rounded-lg text-sm font-medium hover:bg-gray-50 hover:border-gray-300 transition-all duration-200"
                onClick={handleContinueShopping}
              >
                Continue Shopping
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CartSidebar;