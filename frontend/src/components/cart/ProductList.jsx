// components/cart/ProductList.jsx
import React from 'react';
import ProductItem from './ProductItem';

const ProductList = ({ products, onQuantityChange, onRemove, formatCurrency, parsePrice }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-4 bg-gray-50 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-gray-800">Product Details</h2>
      </div>

      <div className="divide-y divide-gray-200">
        {products.map((product, index) => (
          <ProductItem
            key={product.id || index}
            product={product}
            onQuantityChange={onQuantityChange}
            onRemove={onRemove}
            formatCurrency={formatCurrency}
            parsePrice={parsePrice}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;