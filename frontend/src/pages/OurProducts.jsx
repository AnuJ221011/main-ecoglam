import { useState } from 'react';
import { useCart } from '../context/ProductContext';
import ProductCard from '../components/ProductCard';
import myProducts from '../data/myProducts.json';
import { Search, Filter, X, ChevronDown, ChevronUp } from 'lucide-react';
import CartSidebar from '../components/cart/CartSidebar';



const OurProducts = () => {
  const { products, addProduct, removeProduct } = useCart();
  const [searchTerm, setSearchTerm] = useState('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [priceRange, setPriceRange] = useState({ min: '', max: '' });
  const [selectedRating, setSelectedRating] = useState('');
  const [sortBy, setSortBy] = useState('');

  const [isCartOpen, setIsCartOpen] = useState(false);


  

  const [expandedSections, setExpandedSections] = useState({
    categories: true,
    price: true,
    rating: true,
    sort: true
  });

  const handleAddToCart = (product) => {
    addProduct({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      description: product.description,
      quantity: 1,
    });
    setIsCartOpen(true);
  };

  const checkIfAddedInCart = (id) => {
    return products.find((el) => el.id === id);
  };

  
  const categories = [...new Set(myProducts.map(product => product.category))].filter(Boolean);

  
  const prices = myProducts.map(product => parseFloat(product.price.replace('₹', '').replace(/,/g, '')));
  const minPrice = Math.min(...prices);
  const maxPrice = Math.max(...prices);

  const toggleCategory = (category) => {
    setSelectedCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const clearAllFilters = () => {
    setSelectedCategories([]);
    setPriceRange({ min: '', max: '' });
    setSelectedRating('');
    setSortBy('');
    setSearchTerm('');
  };


  const getFilteredProducts = () => {
    let filtered = myProducts.filter(product => {
      // Search filter
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
      
      
      const matchesCategory = selectedCategories.length === 0 || 
        selectedCategories.includes(product.category);
      
    
      const productPrice = parseFloat(product.price.replace('₹', '').replace(/,/g, ''));
      const matchesPrice = (!priceRange.min || productPrice >= parseFloat(priceRange.min)) &&
        (!priceRange.max || productPrice <= parseFloat(priceRange.max));
      
      
      const matchesRating = !selectedRating || product.rating >= parseFloat(selectedRating);
      
      return matchesSearch && matchesCategory && matchesPrice && matchesRating;
    });

    
    if (sortBy === 'price-low') {
      filtered.sort((a, b) => {
        const priceA = parseFloat(a.price.replace('₹', '').replace(/,/g, ''));
        const priceB = parseFloat(b.price.replace('₹', '').replace(/,/g, ''));
        return priceA - priceB;
      });
    } else if (sortBy === 'price-high') {
      filtered.sort((a, b) => {
        const priceA = parseFloat(a.price.replace('₹', '').replace(/,/g, ''));
        const priceB = parseFloat(b.price.replace('₹', '').replace(/,/g, ''));
        return priceB - priceA;
      });
    } else if (sortBy === 'rating') {
      filtered.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === 'name') {
      filtered.sort((a, b) => a.name.localeCompare(b.name));
    }

    return filtered;
  };

  const filteredProducts = getFilteredProducts();
  const activeFiltersCount = selectedCategories.length + 
    (priceRange.min || priceRange.max ? 1 : 0) + 
    (selectedRating ? 1 : 0);

  return (
    <section className="py-10 bg-gradient-to-b from-white to-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-8 md:flex-row flex-col gap-4">
          <h2 className="text-4xl font-serif font-bold text-gray-900 relative inline-block">
            Our Products
            <div className="absolute -bottom-2 left-0 h-1 w-24 bg-pink-500 rounded-full"></div>
          </h2>
          
          {/* Mobile Filter Button */}
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="md:hidden flex items-center gap-2 bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 transition-colors"
          >
            <Filter size={20} />
            Filters {activeFiltersCount > 0 && `(${activeFiltersCount})`}
          </button>
        </div>

        <div className="flex gap-8">
          
          {/* Sidebar */}
          <div className={`${isSidebarOpen ? 'fixed inset-0 z-50 bg-black bg-opacity-50 md:relative md:bg-transparent' : 'hidden'} md:block`}>
            <div className={`${isSidebarOpen ? 'fixed right-0 top-0 h-full w-80 bg-white shadow-2xl transform translate-x-0' : ''} md:relative md:w-72 md:shadow-none`}>
              <div className="bg-white rounded-xl shadow-lg p-6 sticky top-4 max-h-[calc(200vh-4rem)] overflow-y-auto">
                
                {/* Mobile Header */}
                <div className="md:hidden flex items-center justify-between mb-6 pb-4 border-b">
                  <h3 className="text-xl font-bold text-gray-900">Filters</h3>
                  <button
                    onClick={() => setIsSidebarOpen(false)}
                    className="p-2 hover:bg-gray-100 rounded-full"
                  >
                    <X size={20} />
                  </button>
                </div>

                {/* Search */}
                <div className="mb-6">
                  <div className="relative">
                    <Search className="absolute left-3 top-3 text-gray-400" size={20} />
                    <input
                      type="text"
                      placeholder="Search products..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Clear Filters */}
                {activeFiltersCount > 0 && (
                  <button
                    onClick={clearAllFilters}
                    className="w-full mb-6 py-2 text-sm text-pink-600 hover:text-pink-700 font-medium border border-pink-200 hover:bg-pink-50 rounded-lg transition-colors"
                  >
                    Clear All Filters ({activeFiltersCount})
                  </button>
                )}

                {/* Categories Filter */}
                <div className="mb-6">
                  <button
                    onClick={() => toggleSection('categories')}
                    className="flex items-center justify-between w-full mb-3"
                  >
                    <h3 className="text-lg font-semibold text-gray-900">Categories</h3>
                    {expandedSections.categories ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </button>
                  {expandedSections.categories && (
                    <div className="space-y-3">
                      {categories.map(category => (
                        <label key={category} className="flex items-center cursor-pointer group">
                          <input
                            type="checkbox"
                            checked={selectedCategories.includes(category)}
                            onChange={() => toggleCategory(category)}
                            className="w-4 h-4 text-pink-600 border-gray-300 rounded focus:ring-pink-500"
                          />
                          <span className="ml-3 text-gray-700 group-hover:text-pink-600 transition-colors">
                            {category}
                          </span>
                        </label>
                      ))}
                    </div>
                  )}
                </div>

                {/* Price Range Filter */}
                <div className="mb-6">
                  <button
                    onClick={() => toggleSection('price')}
                    className="flex items-center justify-between w-full mb-3"
                  >
                    <h3 className="text-lg font-semibold text-gray-900">Price Range</h3>
                    {expandedSections.price ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </button>
                  {expandedSections.price && (
                    <div className="space-y-3">
                      <div className="flex gap-2">
                        <input
                          type="number"
                          placeholder={`Min ₹${minPrice}`}
                          value={priceRange.min}
                          onChange={(e) => setPriceRange(prev => ({ ...prev, min: e.target.value }))}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 text-sm"
                        />
                        <input
                          type="number"
                          placeholder={`Max ₹${maxPrice}`}
                          value={priceRange.max}
                          onChange={(e) => setPriceRange(prev => ({ ...prev, max: e.target.value }))}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 text-sm"
                        />
                      </div>
                      <div className="text-xs text-gray-500 text-center">
                        Range: ₹{minPrice} - ₹{maxPrice}
                      </div>
                    </div>
                  )}
                </div>

                {/* Rating Filter */}
                <div className="mb-6">
                  <button
                    onClick={() => toggleSection('rating')}
                    className="flex items-center justify-between w-full mb-3"
                  >
                    <h3 className="text-lg font-semibold text-gray-900">Minimum Rating</h3>
                    {expandedSections.rating ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </button>
                  {expandedSections.rating && (
                    <div className="space-y-2">
                      {[4, 3, 2, 1].map(rating => (
                        <label key={rating} className="flex items-center cursor-pointer group">
                          <input
                            type="radio"
                            name="rating"
                            value={rating}
                            checked={selectedRating === rating.toString()}
                            onChange={(e) => setSelectedRating(e.target.value)}
                            className="w-4 h-4 text-pink-600 border-gray-300 focus:ring-pink-500"
                          />
                          <span className="ml-3 flex items-center">
                            <span className="text-yellow-500">
                              {'★'.repeat(rating)}{'☆'.repeat(5-rating)}
                            </span>
                            <span className="ml-2 text-gray-700 group-hover:text-pink-600 transition-colors">
                              {rating}+ Stars
                            </span>
                          </span>
                        </label>
                      ))}
                    </div>
                  )}
                </div>

                {/* Sort By */}
                <div className="mb-6">
                  <button
                    onClick={() => toggleSection('sort')}
                    className="flex items-center justify-between w-full mb-3"
                  >
                    <h3 className="text-lg font-semibold text-gray-900">Sort By</h3>
                    {expandedSections.sort ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </button>
                  {expandedSections.sort && (
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                    >
                      <option value="">Default</option>
                      <option value="name">Name (A-Z)</option>
                      <option value="price-low">Price (Low to High)</option>
                      <option value="price-high">Price (High to Low)</option>
                      <option value="rating">Highest Rated</option>
                    </select>
                  )}
                </div>

              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-6">
              <p className="text-gray-600">
                Showing {filteredProducts.length} of {myProducts.length} products
              </p>
              
              {/* Desktop Sort Dropdown */}
              <div className="hidden md:block">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                >
                  <option value="">Sort by</option>
                  <option value="name">Name</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    isInCart={checkIfAddedInCart(product.id)}
                    onAdd={handleAddToCart}
                    onRemove={removeProduct}
                  />
                ))
              ) : (
                <div className="col-span-full text-center py-16">
                  <div className="text-gray-400 mb-4">
                    <Filter size={64} className="mx-auto mb-4" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-600 mb-2">No products found</h3>
                  <p className="text-gray-500 mb-4">
                    Try adjusting your filters or search term
                  </p>
                  <button
                    onClick={clearAllFilters}
                    className="px-6 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-colors"
                  >
                    Clear Filters
                  </button>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
      {isCartOpen && (
        <CartSidebar
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
          products={products}
          onRemove={removeProduct}
        />
      )}
       
    </section>

  );
};

export default OurProducts;