import { useState } from "react";
import { FiShare2, FiMaximize2 } from "react-icons/fi";

const ProductGallery = ({ images, name }) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  return (
    <div className="mb-4">
      {/* Main image display */}
      <div className="relative h-96 bg-gray-50 rounded-2xl overflow-hidden mb-4 group">
        <div 
          className={`absolute inset-0 flex items-center justify-center transition-transform duration-500 ${isZoomed ? 'scale-150 cursor-zoom-out' : 'cursor-zoom-in'}`}
          onClick={() => setIsZoomed(!isZoomed)}
        >
          <img
            src={images[selectedImage]}
            alt={name}
            className="max-h-full max-w-full object-contain"
          />
        </div>
        
        {/* Image controls overlay */}
        <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <button className="bg-white/90 p-2 rounded-full shadow-md hover:bg-white transition-colors">
            <FiMaximize2 className="text-gray-800" />
          </button>
          <button className="bg-white/90 p-2 rounded-full shadow-md hover:bg-white transition-colors">
            <FiShare2 className="text-gray-800" />
          </button>
        </div>
        
        {/* Zoom instructions that appear on hover */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/60 text-white text-xs px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
          Click to {isZoomed ? 'reset zoom' : 'zoom in'}
        </div>
      </div>
      
      {/* Thumbnail navigation */}
      <div className="flex space-x-2 overflow-x-auto pb-2">
        {images.map((img, idx) => (
          <div
            key={idx}
            className={`cursor-pointer rounded-lg overflow-hidden transition-all duration-200 
              ${selectedImage === idx 
                ? 'border-2 border-pink-500 shadow-md shadow-pink-200' 
                : 'border border-gray-200 opacity-70'}`}
            onClick={() => setSelectedImage(idx)}
          >
            <div className="w-16 h-16">
              <img src={img} alt={`${name} view ${idx + 1}`} className="w-full h-full object-cover" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ProductGallery;