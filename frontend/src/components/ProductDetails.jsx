import { useParams, Link, useNavigate } from "react-router-dom";
import { useCart } from '../context/ProductContext';
import myProducts from '../data/myProducts.json';

import Breadcrumb from "../product-components/Breadcrumb";
import ProductGallery from "../product-components/ProductGallery";
import ProductActions from "../product-components/ProductActions";
import ProductInfo from "../product-components/ProductInfo";
import ProductOffers from "../product-components/ProductOffers";
import DeliveryInfo from "../product-components/DeliveryInfo";
import ProductSpecs from "../product-components/ProductSpecs";
import ReviewSection from "../product-components/ReviewSection";
import RelatedProducts from "../product-components/RelatedProducts";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { products, addProduct, removeProduct } = useCart();
  
  const product = myProducts.find(p => p.id === parseInt(id));
  const cartItem = products.find((p) => p.id === product?.id);
  const quantity = cartItem?.quantity || 1;

  if (!product) {
    return (
      <div className="max-w-6xl mx-auto p-4 sm:p-6 flex flex-col items-center justify-center min-h-[50vh]">
        <div className="text-2xl sm:text-3xl text-gray-400 mb-4 text-center">Product not found</div>
        <Link 
          to="/" 
          className="bg-gradient-to-r from-pink-600 to-pink-700 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg hover:from-pink-700 hover:to-pink-800 shadow-lg transition-all duration-300 text-sm sm:text-base"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    addProduct({ ...product, quantity: 1 });
  };

  const handleRemoveFromCart = () => {
    removeProduct(product.id);
  };

  const handleBuyNow = () => {
    if (!cartItem) {
      addProduct({ ...product, quantity: 1 });
    }
    navigate("/cart");
  };

  const checkIfAddedInCart = (id) => products.some((p) => p.id === id);

  const similarProducts = myProducts.filter(p => p.category === product?.category && p.id !== product?.id).slice(0, 4);
  const recentlyViewed = myProducts.slice(0, 4);

  return (
    <div className="max-w-6xl mx-auto bg-white pb-6 sm:pb-12">
      {/* Breadcrumb - mobile optimized */}
      <div className="px-4 sm:px-0">
        <Breadcrumb product={product} />
      </div>
      
      {/* Main product section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 p-4">
        {/* Product Gallery - Mobile first, desktop sticky */}
        <div className="lg:sticky lg:top-4">
          <ProductGallery images={[product.image]} name={product.name} />
          
          {/* Mobile: Actions right after gallery */}
          <div className="mt-4 lg:mt-6">
            <ProductActions
              product={product}
              quantity={quantity}
              handleAddToCart={handleAddToCart}
              handleRemoveFromCart={handleRemoveFromCart}
              handleBuyNow={handleBuyNow}
              checkIfAddedInCart={checkIfAddedInCart}
            />
          </div>
        </div>

        {/* Product Info Section */}
        <div className="space-y-4 sm:space-y-6">
          <ProductInfo product={product} />
          
          {/* Mobile: Specs in collapsible or compact format */}
          <div className="lg:block">
            <ProductSpecs product={product} />
          </div>
          
          <DeliveryInfo />
          <ProductOffers />
        </div>
      </div>

      {/* Reviews Section */}
      <div className="px-4">
        <ReviewSection product={product} />
      </div>
      
      {/* Related Products Section */}
      <div className="space-y-8 sm:space-y-12 mt-8 sm:mt-12 px-4">
        <RelatedProducts title="You may also like" products={similarProducts} />
        <RelatedProducts title="Recently Viewed" products={recentlyViewed} />
      </div>
    </div>
  );
};

export default ProductDetails;