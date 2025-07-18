import React from 'react';
import { Truck } from 'lucide-react';

const Delivery = () => {
  return (
    <section className="py-16 bg-emerald-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-8 md:mb-0 md:mr-8">
            <h2 className="text-3xl font-serif mb-4">Fast & Reliable Delivery</h2>
            <p className="text-emerald-100 text-lg">
              We understand that you want your products as soon as possible! 
              That's why we offer 2-3 days delivery nation-wide, ensuring 
              you get your EcoGlam products in no time!
            </p>
          </div>
          <div className="flex-shrink-0">
            <Truck size={80} className="text-white" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Delivery;