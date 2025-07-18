import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const RelatedProducts = ({ title, products }) => {
  return (
    <div className="px-4">
      <h2 className="text-2xl font-semibold mb-6">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="border rounded-lg p-4 shadow-md hover:shadow-lg transition">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-40 object-contain mb-2"
            />
            <h3 className="text-lg font-medium">{product.name}</h3>
            <p className="text-gray-500 text-sm">{product.category}</p>
            <p className="text-pink-600 font-semibold mt-1">{product.price}</p>
            <Link
              to={`/product/${product.id}`}
              className="inline-block mt-3 text-sm text-white bg-pink-600 px-3 py-1 rounded hover:bg-pink-700"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
