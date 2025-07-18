import React, { useState } from 'react';
import { Droplet, Leaf, Star, Sun, Heart, Shield, Flower, Sparkles } from 'lucide-react';

const ingredients = [
  {
    name: 'Ceramides',
    description: 'Strengthen the skin\'s barrier and retain moisture. Ideal for dry and sensitive skin types.',
    benefitsFor: 'Dry, Sensitive',
    icon: Shield,
    color: 'bg-cyan-50',
    iconColor: 'text-cyan-600',
    gradient: 'from-cyan-500 to-blue-500'
  },
  {
    name: 'Niacinamide',
    description: 'Reduces inflammation and brightens skin. Effective for treating hyperpigmentation and redness.',
    benefitsFor: 'All Skin Types',
    icon: Sun,
    color: 'bg-amber-50',
    iconColor: 'text-amber-600',
    gradient: 'from-amber-500 to-orange-500'
  },
  {
    name: 'Hyaluronic Acid',
    description: 'Deeply hydrates and plumps the skin. Holds up to 1000x its weight in water.',
    benefitsFor: 'Dehydrated, Aging',
    icon: Droplet,
    color: 'bg-blue-50',
    iconColor: 'text-blue-600',
    gradient: 'from-blue-500 to-purple-500'
  },
  {
    name: 'Argan Oil',
    description: 'Rich in antioxidants, protects and nourishes. Provides essential fatty acids to repair skin barrier.',
    benefitsFor: 'Dry, Mature',
    icon: Leaf,
    color: 'bg-green-50',
    iconColor: 'text-green-600',
    gradient: 'from-green-500 to-emerald-500'
  },
  {
    name: 'Mandelic Acid',
    description: 'Gentle exfoliation and skin renewal. Larger molecular structure for sensitive skin tolerance.',
    benefitsFor: 'Sensitive, Acne-prone',
    icon: Star,
    color: 'bg-purple-50',
    iconColor: 'text-purple-600',
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    name: 'Salicylic Acid',
    description: 'Deep cleanses pores and fights acne. Oil-soluble ingredient that penetrates into pores.',
    benefitsFor: 'Oily, Acne-prone',
    icon: Sparkles,
    color: 'bg-indigo-50',
    iconColor: 'text-indigo-600',
    gradient: 'from-indigo-500 to-blue-500'
  },
  {
    name: 'Oat Proteins',
    description: 'Soothes and protects sensitive skin. Natural anti-inflammatory properties reduce redness and irritation.',
    benefitsFor: 'Sensitive, Irritated',
    icon: Heart,
    color: 'bg-rose-50',
    iconColor: 'text-rose-600',
    gradient: 'from-rose-500 to-red-500'
  },
  {
    name: 'Peptides',
    description: 'Stimulate collagen production for a youthful glow. Signal skin to boost repair processes.',
    benefitsFor: 'Aging, Fine Lines',
    icon: Flower,
    color: 'bg-pink-50',
    iconColor: 'text-pink-600',
    gradient: 'from-pink-500 to-rose-500'
  },
];

const Ingredients = () => {
  const [activeIngredient, setActiveIngredient] = useState(null);

  return (
    <section className="py-24 bg-gradient-to-b from-emerald-50 to-emerald-100 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-10 right-10 w-64 h-64 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider text-emerald-600 uppercase bg-emerald-100 rounded-full mb-4">
            Pure & Effective
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
            Ingredients We Use for Your Skin's Health
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We carefully select natural, effective ingredients that work in harmony with your skin's natural processes to enhance its beauty and health.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {ingredients.map((ingredient, index) => (
            <div 
              key={ingredient.name} 
              className={`${ingredient.color} p-6 rounded-2xl shadow-lg transition-all duration-300 transform ${activeIngredient === index ? 'scale-105 shadow-xl' : 'hover:shadow-xl hover:-translate-y-1'}`}
              onMouseEnter={() => setActiveIngredient(index)}
              onMouseLeave={() => setActiveIngredient(null)}
            >
              <div className="flex items-center mb-6">
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center bg-gradient-to-br ${ingredient.gradient} shadow-lg`}>
                  <ingredient.icon className="w-8 h-8 text-white" />
                </div>
                <div className="ml-4">
                  <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">Best For</span>
                  <p className="text-sm font-medium">{ingredient.benefitsFor}</p>
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-2">{ingredient.name}</h3>
              <p className="text-gray-600 mb-4">{ingredient.description}</p>
              
              <div className={`pt-4 border-t border-gray-200 flex justify-between items-center transition-opacity duration-300 ${activeIngredient === index ? 'opacity-100' : 'opacity-70'}`}>
                <span className="text-sm font-medium text-emerald-600">Learn more</span>
                <svg className={`w-5 h-5 ${ingredient.iconColor} transition-transform duration-300 ${activeIngredient === index ? 'translate-x-1' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </div>
            </div>
          ))}
        </div>
        
        
      
      </div>
    </section>
  );
};

export default Ingredients;