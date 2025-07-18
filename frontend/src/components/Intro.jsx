import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Intro = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const navigate = useNavigate();
  
  const features = [
    {
      id: 1,
      title: 'Personalised Care',
      description: 'Skincare solutions tailored to your unique needs and concerns',
      image: "https://res.cloudinary.com/djbjfsshe/image/upload/v1748096849/personalisedCare_zaq6z3.jpg",
      icon: '👤'
    },
    {
      id: 2,
      title: 'High Quality Yet Affordable',
      description: 'Premium ingredients and formulations without the premium price tag',
      image: "https://res.cloudinary.com/djbjfsshe/image/upload/v1748029495/quality_jzn9qw.jpg",
      icon: '✨'
    },
    {
      id: 3,
      title: 'Transparency',
      description: 'Clear information about our ingredients, sourcing, and processes',
      image: "https://res.cloudinary.com/djbjfsshe/image/upload/v1748067089/transparency-image2_ksvfo3.jpg",
      icon: '🔍'
    }
  ];
  function goToOurProducts() {
    navigate('/ourproducts');
  }

  return (
    <div className="relative overflow-hidden py-16 px-6">
      {/* Background with modern gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 opacity-80"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-0 left-1/2 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      
      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h4 className="inline-block px-3 py-1 text-xs font-medium tracking-wider text-pink-600 uppercase bg-pink-100 rounded-full mb-4">
            Clean Beauty
          </h4>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
            Skincare that is good for you and the planet
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our range of eco-friendly skincare products, thoughtfully crafted to nourish your skin 
            while being kind to the planet. Each product is made with sustainable ingredients and 
            environmentally conscious packaging.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {features.map((feature) => (
            <div 
              key={feature.id}
              className="relative bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
              style={{
                transform: hoveredCard === feature.id ? 'translateY(-8px)' : 'translateY(0)',
              }}
              onMouseEnter={() => setHoveredCard(feature.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-110"
                />
              </div>
              
              <div className="relative px-6 py-8">
                <div className="absolute -top-8 left-6 w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br from-pink-500 to-purple-600 text-white text-2xl shadow-lg">
                  {feature.icon}
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 mt-2 mb-3">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 mb-4">
                  {feature.description}
                </p>
                
                <div className="flex items-center text-pink-600 font-medium">
                  Learn more
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-16">
          <button className="px-8 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-medium rounded-full shadow-lg hover:shadow-xl transform transition-all duration-300 hover:-translate-y-1"
            onClick={goToOurProducts}>
            Explore our products
          </button>
        </div>
      </div>
    </div>
  );
};

export default Intro;