import {useNavigate}from 'react-router-dom';

const PersonalizedCare = () => {
  const navigate = useNavigate();
  const benefits = [
    { 
      title: "Targeted Solutions", 
      description: "Address your specific skin concerns with precision" 
    },
    { 
      title: "Better Results", 
      description: "See visible improvements faster with formulas matched to your needs" 
    },
    { 
      title: "Less Waste", 
      description: "Only use products that work for your skin type" 
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50 overflow-hidden relative">
      {/* Decorative elements */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-emerald-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Image container with decorative elements */}
          <div className="lg:w-1/2 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-200 to-emerald-50 rounded-3xl transform rotate-3 scale-105"></div>
            <div className="relative z-10 overflow-hidden rounded-2xl shadow-xl">
              <img
                src="https://res.cloudinary.com/djbjfsshe/image/upload/v1748029644/personlized_cryyok.jpg"
                alt="Diverse people with glowing skin"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                <span className="text-white text-sm font-medium">Real results from real customers</span>
              </div>
            </div>
            
           
          </div>
          
          {/* Content container */}
          <div className="lg:w-1/2">
            <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider text-emerald-600 uppercase bg-emerald-100 rounded-full mb-4">
              Your Unique Skin Journey
            </span>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-6 leading-tight">
              Why Personalized Skincare <span className="text-emerald-600">Matters</span>
            </h2>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Everyone's skin is unique, with its own set of needs and challenges. By personalizing your skincare routine, 
              we ensure that you're getting exactly the right ingredients for your skin's specific needs. No more guesswork 
              or wasted products – EcoGlam makes skincare effective, sustainable, and tailored just for you.
            </p>
            
            <div className="space-y-6 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-emerald-100 flex items-center justify-center mr-4 mt-1">
                    <svg className="h-4 w-4 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
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
              <button className="px-8 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-medium rounded-full shadow-md hover:shadow-lg transform transition-all duration-300 hover:-translate-y-1"
                onClick={() => navigate('/quiz')}
              >
                Take Skin Quiz
              </button>
              <button className="px-8 py-3 border border-gray-300 text-gray-700 font-medium rounded-full hover:bg-gray-50 hover:border-gray-400 transform transition-all duration-300 hover:-translate-y-1 flex items-center justify-center">
                Learn How It Works
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        {/* Testimonial section */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8 relative">
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-emerald-500 rounded-full w-8 h-8 flex items-center justify-center"
          onClick={() => navigate('/reviews')}
          >
            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
            </svg>
          </div>
          <div className="text-center">
            <p className="text-lg italic text-gray-600 mb-4">
              "The personalized routine EcoGlam created for me completely transformed my skin. 
              For the first time, I'm using products that actually work for my combination skin."
            </p>
            <div className="inline-flex items-center">
              <div className="flex -space-x-2 mr-4">
                <div className="h-8 w-8 rounded-full bg-emerald-300 flex items-center justify-center text-white text-xs font-bold">PS</div>
              </div>
              <div className="text-left">
                <p className="text-sm font-semibold text-gray-900"> Dr. Priya Saha</p>
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalizedCare;