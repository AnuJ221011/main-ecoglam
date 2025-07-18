// components/ProductCard.js
import { Link } from 'react-router-dom';

const ProductCard = ({ product, isInCart, onAdd, onRemove, showActions = true }) => {
  // Star rating renderer
  const renderStars = (rating) => {
    const totalStars = 5;
    const filledStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const emptyStars = totalStars - filledStars - (halfStar ? 1 : 0);

    return (
      <div className="flex items-center">
        {[...Array(filledStars)].map((_, index) => (
          <span key={`filled-${index}`} className="text-yellow-400 drop-shadow-sm">★</span>
        ))}
        {halfStar && <span className="text-yellow-300 drop-shadow-sm">★</span>}
        {[...Array(emptyStars)].map((_, index) => (
          <span key={`empty-${index}`} className="text-white/60 drop-shadow-sm">★</span>
        ))}
      </div>
    );
  };

  return (
    <div className="relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 bg-white group">
      <Link to={`/product/${product.id}`} className="block relative aspect-[4/3] overflow-hidden">
  <img
    src={product.image}
    alt={product.name}
    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
  />

        {/* Improved gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Content overlay with better text styling */}
        <div className="absolute bottom-0 left-0 right-0 p-4 pb-1 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
          <h3 className="text-2xl font-bold tracking-wide mb-2 text-white drop-shadow-lg">
            {product.name}
          </h3>
          <p className="text-sm text-gray-100 line-clamp-3 mb-4 drop-shadow-md leading-relaxed">
            {product.description}
          </p>
          <div className="flex items-center justify-between">
            <p className="text-xl font-bold text-green-400 drop-shadow-lg bg-black/30 px-3 py-1 rounded-full">
              {product.price}
            </p>
            <div className="flex items-center space-x-2 bg-black/30 px-3 py-1 rounded-full">
              {renderStars(product.rating)}
              <span className="text-sm text-white drop-shadow-sm font-medium">
                ({product.noOfRating}+)
              </span>
            </div>
          </div>
        </div>
      </Link>

      {showActions && (
        <div className="p-6 bg-white">
          {!isInCart ? (
            <button
              onClick={() => onAdd(product)}
              className="w-full py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors duration-300 shadow-md hover:shadow-lg"
            >
              Add to Cart
            </button>
          ) : (
            <button
              onClick={() => onRemove(product.id)}
              className="w-full py-3 bg-green-800 text-white rounded-lg font-semibold hover:bg-green-900 transition-colors duration-300 shadow-md hover:shadow-lg"
            >
              Remove From Cart
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default ProductCard;