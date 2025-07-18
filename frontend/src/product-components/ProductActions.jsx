import { FiShoppingCart, FiHeart } from "react-icons/fi";
import { useCart } from "../context/ProductContext";

const ProductActions = ({
  product,
  quantity,
  handleBuyNow,
  handleAddToCart,
  handleRemoveFromCart,
  checkIfAddedInCart
}) => {
  const isInCart = checkIfAddedInCart(product.id);
  const { updateQuantity } = useCart();

  const handleIncrement = () => {
    if (quantity < 10) updateQuantity(product.id, "increment");
  };

  const handleDecrement = () => {
    if (quantity > 1) updateQuantity(product.id, "decrement");
  };

  return (
    <div className="space-y-6">
      {/* Quantity Selector */}
      <div className="flex items-center space-x-4">
        <span className="text-gray-700 font-medium">Quantity:</span>
        <div className="flex items-center">
          <button
            className="bg-gray-100 hover:bg-gray-200 text-gray-700 w-9 h-9 flex items-center justify-center rounded-l-lg transition-colors"
            onClick={handleDecrement}
            disabled={quantity <= 1}
          >
            -
          </button>
          <input
            type="number"
            value={quantity}
            readOnly
            className="w-12 h-9 text-center border-y border-gray-100 focus:outline-none"
          />
          <button
            className="bg-gray-100 hover:bg-gray-200 text-gray-700 w-9 h-9 flex items-center justify-center rounded-r-lg transition-colors"
            onClick={handleIncrement}
            disabled={quantity >= 10}
          >
            +
          </button>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex space-x-3">
        {!isInCart ? (
          <button
            onClick={handleAddToCart}
            className="flex-1 border-2 border-pink-600 text-pink-600 py-3 px-6 rounded-xl font-semibold hover:bg-pink-50 transition-colors flex items-center justify-center gap-2 shadow-sm"
          >
            <FiShoppingCart />
            Add to Cart
          </button>
        ) : (
          <button
            onClick={handleRemoveFromCart}
            className="flex-1 border-2 border-red-600 text-red-600 py-3 px-6 rounded-xl font-semibold hover:bg-red-50 transition-colors flex items-center justify-center gap-2 shadow-sm"
          >
            <FiShoppingCart />
            Remove From Cart
          </button>
        )}
        <button
          onClick={handleBuyNow}
          className="flex-1 bg-pink-600 text-white py-3 px-6 rounded-xl font-semibold transition-all shadow-md hover:bg-pink-700"
        >
          Buy Now
        </button>
        <button className="bg-gray-50 hover:bg-gray-100 p-3 rounded-xl transition-colors border border-gray-200">
          <FiHeart className={`text-xl ${isInCart ? "text-pink-600" : "text-gray-600"}`} />
        </button>
      </div>
    </div>
  );
};

export default ProductActions;
