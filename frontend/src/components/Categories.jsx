import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const skinCategories = [
  {
    name: 'Oily Skin',
    description: 'Products specially formulated for oily skin.',
    image: 'https://res.cloudinary.com/djbjfsshe/image/upload/v1747859156/oily_wcubgq.webp',
    route: '/categories/oilyskin',
    color: 'from-emerald-400 to-teal-500',
  },
  {
    name: 'Normal Skin',
    description: 'Gentle care for normal skin types.',
    image: 'https://res.cloudinary.com/djbjfsshe/image/upload/v1747859558/normal_c8ubh0.webp',
    route: '/categories/normalskin',
    color: 'from-blue-400 to-indigo-500',
  },
  {
    name: 'Sensitive Skin',
    description: 'Soothing products for sensitive skin.',
    image: 'https://res.cloudinary.com/djbjfsshe/image/upload/v1747859374/sensitive_umqu8n.jpg',
    route: '/categories/sensitiveskin',
    color: 'from-rose-400 to-pink-500',
  },
  {
    name: 'Combination Skin',
    description: 'Balance oily and dry areas with these products.',
    image: 'https://res.cloudinary.com/djbjfsshe/image/upload/v1747859373/combination_rdawe9.webp',
    route: '/categories/combinationskin',
    color: 'from-amber-400 to-orange-500',
  },
  {
    name: 'Dry Skin',
    description: 'Hydrating solutions for dry skin.',
    image: 'https://res.cloudinary.com/djbjfsshe/image/upload/v1747859374/dry_detwkw.webp',
    route: '/categories/dryskin',
    color: 'from-purple-400 to-violet-500',
  },
];

const Categories = () => {
  const navigate = useNavigate();
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="py-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-serif text-gray-900 mb-4 relative inline-block">
            Shop by Skin Type
            <div className="absolute -bottom-3 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400 to-teal-600 rounded-full"></div>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-4">
            Discover products perfectly formulated for your unique skin needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skinCategories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.2 } 
              }}
              onClick={() => navigate(category.route)}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="cursor-pointer group relative rounded-xl overflow-hidden"
            >
              {/* Card Container with shadow */}
              <div className="relative h-full bg-pink-200 rounded-xl overflow-hidden shadow-md group-hover:shadow-xl transition-all duration-300">

                {/* Background gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-90 transition-opacity duration-300 z-10`}></div>
                
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={category.image} 
                    alt={category.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:opacity-40"
                  />
                  
                  {/* Decorative elements (visible on hover) */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 overflow-hidden">
                    <div className="absolute top-4 right-4 w-20 h-20 border-t-2 border-r-2 border-white opacity-30 rounded-tr-lg"></div>
                    <div className="absolute bottom-4 left-4 w-20 h-20 border-b-2 border-l-2 border-white opacity-30 rounded-bl-lg"></div>
                  </div>
                </div>

                {/* Content area */}
                <div className="p-6 relative z-20">
                  {/* Title with icon */}
                  <div className="flex items-center mb-3">
                    
                    <h3 className="text-xl font-semibold text-gray-900 group-hover:text-white transition-colors duration-300">
                      {category.name}
                    </h3>
                  </div>
                  
                  {/* Description */}
                  <p className="text-gray-600 group-hover:text-white transition-colors duration-300">
                    {category.description}
                  </p>
                  
                  {/* Action button - only visible on hover */}
                  <div className="mt-4 transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 flex justify-between items-center">
                    <span className="text-white font-medium">Explore Products</span>
                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className={`h-4 w-4 transition-colors duration-300`}
                        style={{ color: hoveredIndex === index ? getColor(category.color) : '#10b981' }}
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </div>
                </div>
                
                {/* Card accent line */}
                <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${category.color} w-0 group-hover:w-full transition-all duration-500`}></div>
              </div>
              
              {/* Floating badge */}
              <div className={`absolute top-4 left-4 text-xs uppercase tracking-wider font-bold py-1 px-3 rounded-full z-30
                bg-white text-emerald-600 shadow-sm transform -translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300`}>
                Recommended
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Helper function to get color from gradient string for the arrow icon
const getColor = (gradientString) => {
  const colorMap = {
    'from-emerald-400': '#10b981',
    'from-blue-400': '#60a5fa',
    'from-rose-400': '#fb7185',
    'from-amber-400': '#fbbf24',
    'from-purple-400': '#c084fc'
  };
  
  const color = Object.keys(colorMap).find(key => gradientString.includes(key));
  return colorMap[color] || '#10b981';
};

export default Categories;