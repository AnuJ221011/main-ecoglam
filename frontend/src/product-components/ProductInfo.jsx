import { FiStar } from "react-icons/fi";

const ProductInfo = ({ product }) => {
  return (
    <div className="space-y-4">
      {/* Product name with badges */}
      <div>
        <div className="flex flex-wrap items-center gap-2 mb-1">
          {product.isNew && (
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded">NEW</span>
          )}
          {product.isOrganic && (
            <span className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded">ORGANIC</span>
          )}
          {product.isBestseller && (
            <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold px-2 py-1 rounded">BESTSELLER</span>
          )}
        </div>
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900">{product.name}</h1>
      </div>
      
    
      {/* Ratings summary */}
      <div className="flex items-center">
        <div className="flex items-center bg-green-100 text-green-800 px-2 py-1 rounded">
          <span className="font-semibold mr-1">{product.rating}</span>
          <FiStar className="fill-green-800" />
        </div>
        <div className="ml-2 text-sm text-gray-600 flex items-center">
          <span className="underline cursor-pointer hover:text-gray-900">See all reviews</span>
          <span className="mx-1">•</span>
          <span>{product.reviewCount || 250}+ ratings</span>
        </div>
      </div>
      
      {/* Price section */}
      <div className="pt-2 border-t">
        <div className="flex items-center gap-2">
          <span className="text-3xl font-bold text-gray-900">{product.price}</span>
          {product.originalPrice && (
            <span className="text-lg text-gray-500 line-through">{product.originalPrice}</span>
          )}
          {product.discount && (
            <span className="text-sm text-white font-semibold bg-green-500 px-2 py-1 rounded">
              SAVE {product.discount}%
            </span>
          )}
        </div>
        <div className="text-sm text-green-600 mt-1">Inclusive of all taxes</div>
      </div>
    </div>
  );
};
export default ProductInfo;