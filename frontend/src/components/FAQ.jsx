import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: 'What is personalised skincare?',
    answer: 'Personalized skincare products are formulated to suit your unique skin type and concerns. Our skin quiz helps us understand your needs.',
  },
  {
    question: 'How do I know which products are right for me?',
    answer: 'Our skin quiz analyzes your skin type, goals, and concerns to provide personalized product recommendations.',
  },
  {
    question: 'Are EcoGlam products cruelty-free?',
    answer: 'Yes! All EcoGlam products are cruelty-free and made with natural ingredients.',
  },
  {
    question: 'How long does it take to see results?',
    answer: 'Depending on your skin type and concern, you may begin to notice improvements within 2-4 weeks.',
  },
  {
    question: 'What is the delivery time for EcoGlam products?',
    answer: 'We offer 2-3 day delivery across the country.',
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-20 bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-14 tracking-tight">
          Frequently Asked Questions
        </h2>
        <div className="space-y-5">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-2xl shadow-sm overflow-hidden transition duration-300 bg-white"
            >
              <button
                className="w-full px-6 py-5 flex justify-between items-center text-left hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-pink-500"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-lg font-medium text-gray-900">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-pink-500" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                )}
              </button>
              <div
                className={`px-6 pb-5 transition-all duration-300 text-gray-600 ${
                  openIndex === index ? 'max-h-screen opacity-100' : 'max-h-0 overflow-hidden opacity-0'
                }`}
              >
                <p className="text-base">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
