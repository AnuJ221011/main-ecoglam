const ProductSpecs = ({ product }) => {
  const keyFeatures = [
    "Hydrates and nourishes skin",
    "Reduces fine lines",
    "Improves skin texture",
    "Non-comedogenic formula",
    "Dermatologically tested"
  ];
  
  const suitableFor = [
    "All skin types",
    "Daily use",
    "Morning & night routine",
    "Sensitive skin friendly"
  ];
  
  return (
    <div className="space-y-6">
      {/* Product description */}
      <div>
        <h3 className="font-semibold text-lg mb-2 text-gray-800">Product Description</h3>
        <div className="text-gray-700 leading-relaxed">{product.description}</div>
      </div>
      
      {/* Key features and specs */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-gray-50 p-4 rounded-xl">
          <h4 className="font-medium text-pink-600 mb-2">Key Benefits</h4>
          <ul className="space-y-2">
            {keyFeatures.map((feature, idx) => (
              <li key={idx} className="flex items-start text-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-green-500 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                {feature}
              </li>
            ))}
          </ul>
        </div>
        
        <div className="bg-gray-50 p-4 rounded-xl">
          <h4 className="font-medium text-pink-600 mb-2">Suitable For</h4>
          <ul className="space-y-2">
            {suitableFor.map((item, idx) => (
              <li key={idx} className="flex items-start text-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-green-500 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      {/* How to use section */}
      <div className="bg-pink-50 p-4 rounded-xl">
        <h4 className="font-medium text-pink-700 mb-2">How to Use</h4>
        <ol className="list-decimal list-inside space-y-1 text-gray-700 pl-2">
          <li>Cleanse your face with a gentle face wash</li>
          <li>Apply a pea-sized amount of the product evenly across face and neck</li>
          <li>Gently massage in upward circular motions until absorbed</li>
          <li>Follow with sunscreen during daytime use</li>
        </ol>
      </div>
    </div>
  );
};
export default ProductSpecs;