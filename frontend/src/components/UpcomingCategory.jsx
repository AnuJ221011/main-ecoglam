// UpcomingCategory.js
import { useState } from 'react';
import { FiArrowRight, FiClock, FiCalendar, FiStar } from 'react-icons/fi';



const UpcomingCategory = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  
  const categories = [
    {
      id: 1,
      image: "https://res.cloudinary.com/djbjfsshe/image/upload/v1748028485/up2_meqqpf.png",
      title: "FACE MASK",
      description: "Rejuvenate your skin with our botanical face masks",
      comingSoon: "Coming June 2025",
      color: "from-pink-500 to-purple-500",
      monthsAway: 1,
    },
    {
      id: 2,
      image: "https://res.cloudinary.com/djbjfsshe/image/upload/v1748028483/up1_ts1h2f.png",
      title: "LIP CARE",
      description: "Nourish and protect with natural lip treatments",
      comingSoon: "Coming July 2025",
      color: "from-red-400 to-pink-500",
      monthsAway: 2,
    },
    {
      id: 3,
      image: "https://res.cloudinary.com/djbjfsshe/image/upload/v1748028483/up3_fmpf9f.jpg",
      title: "EYE CARE",
      description: "Revitalize tired eyes with our gentle formulas",
      comingSoon: "Coming August 2025",
      color: "from-blue-400 to-indigo-500",
      monthsAway: 3,
    },
    {
      id: 4,
      image: "https://res.cloudinary.com/djbjfsshe/image/upload/v1748096356/hair_n2v5ld.jpg",
      title: "HAIR CARE",
      description: "Restore shine and strength with botanical extracts",
      comingSoon: "Coming September 2025",
      color: "from-amber-400 to-yellow-500",
      monthsAway: 4,
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-serif text-white mb-3 relative inline-block">
            Upcoming Categories
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-1 w-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
          </h2>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
            Explore our new product lines coming soon. Join the waitlist to be the first to know when they launch.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
          {categories.map((category, index) => (
            <div
              key={category.id}
              className="relative rounded-xl overflow-hidden shadow-xl backdrop-blur-sm group hover:-translate-y-2 transition-all duration-500 border border-transparent hover:border-pink-500/30"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                background: "rgba(15, 15, 20, 0.6)",
                boxShadow: hoveredIndex === index ? "0 0 25px rgba(236, 72, 153, 0.4)" : "0 0 15px rgba(0, 0, 0, 0.3)"
              }}
            >
              {/* Animated particles for futuristic effect (only visible on hover) */}
              {hoveredIndex === index && (
                <div className="absolute inset-0 z-10 overflow-hidden">
                  <div className="particle-1 absolute w-2 h-2 rounded-full bg-pink-300 opacity-75"></div>
                  <div className="particle-2 absolute w-3 h-3 rounded-full bg-purple-300 opacity-50"></div>
                  <div className="particle-3 absolute w-1 h-1 rounded-full bg-blue-300 opacity-60"></div>
                </div>
              )}
              
              {/* Background gradient overlay with new animated glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-t ${category.color} opacity-0 group-hover:opacity-70 transition-opacity duration-500 z-10`}></div>
              
              {/* Geometric accent shapes (only visible on hover) */}
              {hoveredIndex === index && (
                <>
                  <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-pink-400 opacity-70 z-20 rounded-bl-lg"></div>
                  <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-pink-400 opacity-70 z-20 rounded-tr-lg"></div>
                </>
              )}
              
              {/* Image with blur effect */}
              <div className="h-64 relative overflow-hidden">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:blur-sm"
                />
                
                {/* Animated overlay line patterns */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500 z-20">
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white to-transparent transform -translate-y-1 group-hover:translate-y-4 transition-transform duration-1000"></div>
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white to-transparent transform translate-y-1 group-hover:-translate-y-4 transition-transform duration-1000"></div>
                  <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white to-transparent transform -translate-x-1 group-hover:translate-x-4 transition-transform duration-1000"></div>
                  <div className="absolute right-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white to-transparent transform translate-x-1 group-hover:-translate-x-4 transition-transform duration-1000"></div>
                </div>
              </div>
              
              {/* Content overlay with improved typography and animation */}
              <div className="absolute inset-0 z-30 flex flex-col justify-end p-6 text-white opacity-0 group-hover:opacity-100 transition-all duration-500">
                <h3 className="text-xl font-bold tracking-wider mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{category.title}</h3>
                <p className="text-sm mb-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">{category.description}</p>
                
                {/* Countdown display */}
                <div className="flex items-center mb-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                  <FiClock className="text-pink-300 mr-2" />
                  <span className="text-xs font-medium text-pink-100">
                    {category.monthsAway} {category.monthsAway === 1 ? 'month' : 'months'} away
                  </span>
                </div>
                
                <div className="flex justify-between items-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-150">
                  <span className="text-xs font-semibold bg-white/10 backdrop-blur-md text-white px-4 py-1 rounded-full border border-white/20 flex items-center">
                    <FiCalendar className="mr-1" />
                    {category.comingSoon}
                  </span>
                  <button className="group-hover:animate-pulse h-10 w-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 hover:bg-white/30 transition-colors duration-300">
                    <FiArrowRight className="text-xl text-white" />
                  </button>
                </div>
              </div>
              
              {/* Static title for non-hover state with modernized design */}
              <div className="absolute bottom-0 left-0 right-0 bg-black/50 backdrop-blur-md py-4 px-6 transform translate-y-0 group-hover:translate-y-full transition-transform duration-500 flex justify-between items-center border-t border-white/10">
                <h3 className="text-lg font-semibold text-white">{category.title}</h3>
                <div className="h-8 w-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center">
                  <FiArrowRight className="text-pink-400" />
                </div>
              </div>
              
              {/* Notification badge with improved design */}
              <div className="absolute top-4 right-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white text-xs font-bold px-3 py-1 rounded-full z-40 flex items-center shadow-lg shadow-pink-500/20 animate-pulse">
                <FiStar className="mr-1" />
                NEW
              </div>
            </div>
          ))}
        </div>
        
        <style>{`
  @keyframes float-1 {
    0%, 100% { transform: translate(0, 0); }
    25% { transform: translate(100px, 50px); }
    50% { transform: translate(200px, 0); }
    75% { transform: translate(100px, -50px); }
  }

  @keyframes float-2 {
    0%, 100% { transform: translate(0, 0); }
    25% { transform: translate(-100px, -50px); }
    50% { transform: translate(-200px, 0); }
    75% { transform: translate(-100px, 50px); }
  }

  @keyframes float-3 {
    0%, 100% { transform: translate(0, 0); }
    25% { transform: translate(50px, 100px); }
    50% { transform: translate(0, 200px); }
    75% { transform: translate(-50px, 100px); }
  }

  .particle-1 {
    top: 20%;
    left: 20%;
    animation: float-1 8s infinite linear;
  }

  .particle-2 {
    top: 60%;
    left: 50%;
    animation: float-2 12s infinite linear;
  }

  .particle-3 {
    top: 40%;
    left: 80%;
    animation: float-3 10s infinite linear;
  }
`}</style>

      </div>
    </section>
  );
};

export default UpcomingCategory;