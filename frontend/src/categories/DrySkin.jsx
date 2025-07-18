
import myProducts from '../data/myProducts.json';
import { useCart } from '../context/ProductContext';
import ProductCard from '../components/ProductCard';

const DrySkin = () => {
  const { products, addProduct, removeProduct } = useCart();

  const drySkinProducts = myProducts.filter(
    (product) => product.category === 'Dry Skin'
  );

  const handleAddToCart = (product) => {
    addProduct({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      description: product.description,
      quantity: 1,
    });
  };

  const checkIfAddedInCart = (id) => {
    return products.find((el) => el.id === id);
  };

  return (
    <section className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-serif text-center text-gray-900 mb-16">
          Dry Skin Products
          <div className="h-1 w-24 bg-emerald-500 rounded-full mt-2 mx-auto"></div>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {drySkinProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              isInCart={checkIfAddedInCart(product.id)}
              onAdd={handleAddToCart}
              onRemove={removeProduct}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DrySkin;
