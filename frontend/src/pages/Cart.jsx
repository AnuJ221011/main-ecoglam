import React, { useState } from "react";
import { useCart } from "../context/ProductContext";
import DeliveryAddress  from "../components/DeliveryAddress";
import { ShoppingBag } from "lucide-react";
import { useNavigate } from "react-router-dom";

// Import all the new components
import EmptyCart from "../components/cart/EmptyCart";
import ProductList from "../components/cart/ProductList";
import OrderSummary from "../components/cart/OrderSummary";
import ShippingInfo from "../components/cart/ShippingInfo";
import PaymentModal from "../components/cart/PaymentModal";
import { useAuth } from "../context/AuthContext";
import { toast } from "react-toastify";

const Cart = () => {
  const { products, updateQuantity, removeProduct, clearCart } = useCart();
  const [couponCode, setCouponCode] = useState("");
  const [couponApplied, setCouponApplied] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [utrNumber, setUtrNumber] = useState("");
  const [utrSubmitted, setUtrSubmitted] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderNumber, setOrderNumber] = useState("");
  const navigate = useNavigate();
  const { user } = useAuth(); 

  const [deliveryAddress, setDeliveryAddress] = useState(null);


  
  const parsePrice = (priceStr) => {
    if (priceStr && typeof priceStr === "string" && priceStr.includes("₹")) {
      return Number(priceStr.split("₹")[1]);
    }
    return 0;
  };

  const formatCurrency = (amount) => {
    return "₹" + amount.toFixed(2);
  };


  const subtotal = products.reduce((sum, product) => {
    return sum + parsePrice(product.price) * product.quantity;
  }, 0);

  const discount = couponApplied ? subtotal * 0.1 : 0;
  const shipping = subtotal > 1000 ? 0 : 99;
  const tax = subtotal * 0.05;
  const totalPrice = subtotal - discount + shipping + tax;

  const handleQuantityChange = (id, type) => {
    const product = products.find((p) => p.id === id);
    if (type === "decrement") {
      if (product.quantity === 1) {
        removeProduct(id);
      } else {
        updateQuantity(id, type);
      }
    } else {
      updateQuantity(id, type);
    }
  };

  const handleApplyCoupon = () => {
    setIsLoading(true);
    setTimeout(() => {
      if (couponCode.toLowerCase() === "save10") {
        setCouponApplied(true);
      }
      setIsLoading(false);
    }, 800);
  };

  const handleCheckout = () => {
      if (!user) {
    toast.error("Please log in to proceed with checkout.");
    return;
  }
    if (!deliveryAddress) {
    toast.warning("Please fill the address first.");
    return;
  }
    
   
    setShowPaymentModal(true);
  };

  const closePaymentModal = () => {
    if (!orderPlaced) {
      setShowPaymentModal(false);
    }
  };

  const copyUpiId = () => {
    navigator.clipboard.writeText("ecoglam@pay");
    alert("UPI ID copied to clipboard!");
  };

  const handleUtrSubmit = () => {
    if (utrNumber.trim().length < 8) {
      alert("Please enter a valid UTR number");
      return;
    }

    setUtrSubmitted(true);
    
    setTimeout(() => {
      const randomOrderNum = "ORD" + Math.floor(Math.random() * 1000000).toString().padStart(6, "0");
      setOrderNumber(randomOrderNum);
      setOrderPlaced(true);
      
      setTimeout(() => {
        clearCart();
      }, 5000);
    }, 1500);
  };

  const handleContinueShopping = () => {
    navigate("/ourproducts");
  };

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-2xl font-bold text-gray-800 mb-8 flex items-center">
          <ShoppingBag className="mr-2" size={24} />
          Your Shopping Cart
          <span className="ml-2 text-gray-500 text-lg font-normal">
            ({products.length} {products.length === 1 ? "item" : "items"})
          </span>
        </h1>

        {products.length === 0 ? (
          <EmptyCart onContinueShopping={handleContinueShopping} />
        ) : (
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left: Delivery Address Only */}
            <div className="w-full lg:w-1/3">
              <DeliveryAddress onSave={(address) => setDeliveryAddress(address)} />

            </div>

            {/* Right: Product List and Order Summary */}
            <div className="w-full lg:w-2/3 space-y-8">
              <ProductList
                products={products}
                onQuantityChange={handleQuantityChange}
                onRemove={removeProduct}
                formatCurrency={formatCurrency}
                parsePrice={parsePrice}
              />

              <OrderSummary
                subtotal={subtotal}
                discount={discount}
                shipping={shipping}
                tax={tax}
                totalPrice={totalPrice}
                couponApplied={couponApplied}
                formatCurrency={formatCurrency}
                couponCode={couponCode}
                setCouponCode={setCouponCode}
                onApplyCoupon={handleApplyCoupon}
                isLoading={isLoading}
                onCheckout={handleCheckout}
              />
              
              <ShippingInfo />
            </div>
          </div>
        )}
      </div>

      <PaymentModal
        showModal={showPaymentModal}
        onClose={closePaymentModal}
        orderPlaced={orderPlaced}
        orderNumber={orderNumber}
        totalPrice={totalPrice}
        formatCurrency={formatCurrency}
        utrNumber={utrNumber}
        setUtrNumber={setUtrNumber}
        onUtrSubmit={handleUtrSubmit}
        utrSubmitted={utrSubmitted}
        onCopyUpiId={copyUpiId}
        onContinueShopping={handleContinueShopping}
      />
    </div>
  );
};

export default Cart;