import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const UseProduct = () => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();
  
  const benefits = [
    {
      title: "Sustainable Materials",
      description: "Made with eco-friendly, responsibly sourced ingredients"
    },
    {
      title: "Advanced Technology",
      description: "Utilizes cutting-edge scientific formulations"
    },
    {
      title: "Adaptive Design",
      description: "Perfect for home, work, or travel situations"
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-tr from-gray-50 to-white z-0"></div>
      <div className="absolute top-0 right-0 w-1/3 h-full bg-pink-50 opacity-50 rounded-l-full z-0"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-16">
          {/* Content Area */}
          <div className="lg:w-1/2 order-2 lg:order-1">
            <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider text-pink-600 uppercase bg-pink-50 rounded-full mb-4">
              Revolutionary Care
            </span>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-6 leading-tight">
              The Future of <span className="text-pink-600">Comfort</span> and Well-Being
            </h2>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Discover our innovative Care Product, designed for ultimate comfort and well-being. 
              Crafted with cutting-edge technology and eco-friendly materials, it seamlessly fits 
              into all lifestyles, ensuring convenience and luxury at every step.
            </p>
            
            <div className="space-y-6 mb-10">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gradient-to-br from-pink-400 to-purple-500 flex items-center justify-center mr-4">
                    <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">{benefit.title}</h4>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-medium rounded-full shadow-md hover:shadow-lg transform transition-all duration-300 hover:-translate-y-1"
                onClick= {() => navigate('/ourproducts')}
              >
                Shop Now
              </button>
              <button className="px-8 py-3 border border-gray-300 text-gray-700 font-medium rounded-full hover:bg-gray-50 hover:border-gray-400 transform transition-all duration-300 hover:-translate-y-1 flex items-center justify-center">
                Learn More
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </button>
            </div>
            
            {/* Stats */}
            <div className="mt-12 pt-8 border-t border-gray-100 grid grid-cols-3 gap-4">
              <div>
                <p className="text-3xl font-bold text-pink-600">98%</p>
                <p className="text-sm text-gray-500">Customer Satisfaction</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-pink-600">100%</p>
                <p className="text-sm text-gray-500">Eco-Friendly</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-pink-600">30+</p>
                <p className="text-sm text-gray-500">Awards Won</p>
              </div>
            </div>
          </div>
          
          {/* Image Area */}
          <div 
            className="lg:w-1/2 order-1 lg:order-2"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-6 -left-6 w-64 h-64 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
              <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
              
              {/* Image container */}
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-500 hover:scale-105">
                <img
                  className="w-full h-auto object-cover"
                  src="https://res.cloudinary.com/djbjfsshe/image/upload/v1748029926/womenCare_zmpmvr.avif"
                  alt="Woman using skincare product"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent opacity-70"></div>
                
                {/* Product tag */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm rounded-xl p-4 transform transition-all duration-500 shadow-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-semibold text-pink-600 uppercase">Featured Product</p>
                      <p className="text-lg font-bold text-gray-900">Calm and Soothe Moisturizer</p>
                    </div>
                    <div className="bg-pink-500 text-white rounded-lg px-3 py-1 text-sm font-bold">
                       ₹ 349
                    </div>
                  </div>
                </div>
              </div>
              
              
              
             
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseProduct;