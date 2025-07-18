// components/cart/ProductItem.jsx
import React from 'react';
import { Trash2 } from 'lucide-react';

const ProductItem = ({ product, onQuantityChange, onRemove, formatCurrency, parsePrice }) => {
  return (
    <div className="p-6 flex flex-col sm:flex-row gap-4">
      <div className="flex-shrink-0">
        <img
          src={product.image}
          alt={product.name}
          className="w-24 h-24 object-cover rounded-md bg-gray-100"
        />
      </div>
      
      <div className="flex-grow">
        <div className="flex justify-between">
          <h3 className="text-lg font-medium text-gray-800">{product.name}</h3>
          <p className="font-semibold text-gray-800">
            {formatCurrency(parsePrice(product.price) * product.quantity)}
          </p>
        </div>
        
        <p className="text-sm text-gray-600 mb-3">{product.description}</p>
        
        <div className="flex justify-between items-end">
          <div className="flex items-center border border-gray-300 rounded-md">
            <button
              onClick={() => onQuantityChange(product.id, "decrement")}
              className="px-3 py-1 text-gray-600 hover:bg-gray-100 transition-colors"
            >
              -
            </button>
            <span className="px-3 py-1 border-x border-gray-300">
              {product.quantity}
            </span>
            <button
              onClick={() => onQuantityChange(product.id, "increment")}
              className="px-3 py-1 text-gray-600 hover:bg-gray-100 transition-colors"
            >
              +
            </button>
          </div>
          
          <button
            onClick={() => onRemove(product.id)}
            className="text-red-500 hover:text-red-700 transition-colors flex items-center text-sm"
          >
            <Trash2 size={16} className="mr-1" />
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;