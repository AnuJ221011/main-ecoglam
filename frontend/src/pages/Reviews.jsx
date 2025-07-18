import React from 'react';
import { Star } from 'lucide-react';

const reviews = [
  {
    name: "Priya Saha",
    rating: 4,
    feedback: "Absolutely fantastic! The service exceeded my expectations. Highly recommend!",
  },
  {
    name: "Anuj Kumar",
    rating: 4,
    feedback: "Great experience overall, but there's a little room for improvement in delivery speed.",
  },
  {
    name: "Raman Pandey",
    rating: 5,
    feedback: "Excellent quality! I'm a repeat customer for a reason. Keep up the great work!",
  },
  {
    name: "Juhi Dugar",
    rating: 3,
    feedback: "The product is decent, but the packaging could use some improvement.",
  },
  {
    name: "Umesh Sharma",
    rating: 4,
    feedback: "Phenomenal experience! The support team was quick to respond to my queries.",
  },
  {
    name: "Rohit Singh",
    rating: 4,
    feedback: "Very satisfied with my purchase, but I wish there were more color options.",
  },
  {
    name: "Riya Kapoor",
    rating: 4,
    feedback: "I'm so happy with my purchase! The quality is outstanding, and it arrived on time.",
  },
  {
    name: "Neelam Chauhan",
    rating: 3,
    feedback: "The product is okay, but the packaging could use some improvement.",
  },
  {
    name: "Azad Gautam",
    rating: 3,
    feedback: "Superb customer service and excellent quality! Will definitely order again.",
  },
  {
    name: "Pallavi Verma",
    rating: 4,
    feedback: "Good value for money, but the delivery took a bit longer than expected.",
  },
  {
    name: "Anisha Patel",
    rating: 4,
    feedback: "The team went above and beyond to ensure I was satisfied. Thank you so much!",
  },
  {
    name: "Shreya Kumari",
    rating: 3,
    feedback: "The product is okay, but I think it's slightly overpriced for what you get.",
  },
  {
    name: "Aryan Kapoor",
    rating: 4,
    feedback: "Absolutely love it! The quality and attention to detail are amazing.",
  },
  {
    name: "Aishwarya Chaudhary",
    rating: 4,
    feedback: "Great experience overall, but I would appreciate faster responses from the team.",
  },
  {
    name: "Deepali Dubey",
    rating: 5,
    feedback: "Highly recommend! This has been one of the best shopping experiences I've had.",
  },
];

const Reviews = () => {
  const averageRating = (reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length).toFixed(1);
  
  return (
    <div className="p-6 bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen font-sans">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4 md:mb-0">Customer Reviews</h2>
          <div className="bg-white px-6 py-3 rounded-full shadow-md flex items-center space-x-3">
            <div className="text-3xl font-bold text-indigo-600">4.5</div>
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  size={20} 
                  fill={i < Math.round(parseFloat(4.4)) ? "#4F46E5" : "none"} 
                  color={i < Math.round(parseFloat(4.4)) ? "#4F46E5" : "#CBD5E1"} 
                  className="mr-1" 
                />
              ))}
            </div>
            <span className="text-gray-500 ml-2">(3K+  reviews)</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-xl shadow-md transition-all duration-300 hover:shadow-lg border-l-4 border-indigo-500"
            >
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-lg font-semibold text-gray-900">{review.name}</h3>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={16} 
                      fill={i < review.rating ? "#4F46E5" : "none"} 
                      color={i < review.rating ? "#4F46E5" : "#CBD5E1"} 
                      className="mr-1" 
                    />
                  ))}
                </div>
              </div>
              <div className="relative">
                <span className="text-5xl text-indigo-100 font-serif absolute top-0 left-0 opacity-60">"</span>
                <p className="mt-2 text-gray-700 relative z-10 pl-4">{review.feedback}</p>
              </div>
              <div className="mt-4 pt-3 border-t border-gray-100 flex justify-between items-center">
                <span className="text-xs text-gray-500">Verified Purchase</span>
                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Recommended</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;