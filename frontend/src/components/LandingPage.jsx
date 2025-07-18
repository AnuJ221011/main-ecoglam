
import img1 from '../assets/oily1.png';

const LandingPage = () => {
  return (
    <div className="landing-page font-poppins">

      {/* Hero Section */}
      <section className="hero text-center bg-[#F9F9F9] py-4 px-4 sm:px-8 lg:px-16">
        <h1 className="text-4xl sm:text-5xl font-bold text-[#2C3E50] leading-tight">Vitamin C Face Serum</h1>
        {/* <p className="text-lg sm:text-xl text-[#7F8C8D] mt-4">Catchy Tagline or Unique Selling Point</p> */}
        <img src={img1} alt="Product Image" className="mx-auto mt-8 rounded-lg shadow-lg max-w-full max-h-[400px] object-contain" />
        <div className="cta-buttons mt-8 flex justify-center space-x-4">
          <button className="bg-pink-600 text-white px-8 py-3 rounded-lg shadow-md hover:bg-pink-700 transform transition duration-300 hover:scale-105">Buy Now</button>
          
        </div>
      </section>

      {/* Product Details Section */}
      <section className="product-details px-6 sm:px-8 py-12 bg-white">
        <h2 className="text-3xl sm:text-3xl font-semibold text-[#2C3E50]">Product Description</h2>
        <p className="text-lg sm:text-xl text-[#34495E] mt-4">
  Our Vitamin C Face Serum is a powerful antioxidant-rich formula that helps brighten, hydrate, and rejuvenate your skin. Packed with pure Vitamin C, this serum helps to reduce the appearance of dark spots, fine lines, and wrinkles, giving you a youthful glow. Its lightweight and fast-absorbing texture make it perfect for all skin types, providing intense hydration and nourishment without any greasy residue. Make it a part of your daily skincare routine for smoother, brighter, and more even-toned skin.
</p>

<h3 className="text-2xl sm:text-3xl font-semibold text-[#2C3E50] mt-8">Ingredients News</h3>
<ul className="list-disc pl-6 sm:pl-8 mt-4 space-y-2 text-lg sm:text-xl text-[#34495E]">
  <li>Vitamin C (Ascorbic Acid)</li>
  <li>Hyaluronic Acid </li>
  <li>Vitamin E</li>
  <li>Ferulic Acid </li>
</ul>

      </section>

      {/* User Ratings and Reviews Section */}
      <section className="user-reviews bg-[#ECF0F1] py-12 px-6 sm:px-8">
        <h2 className="text-3xl sm:text-4xl font-semibold text-[#2C3E50]">User Ratings</h2>
        <div className="rating text-2xl sm:text-3xl mt-4">
          <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
          <span className="ml-2">(4.5/5 from 100 reviews)</span>
        </div>
        <div className="reviews mt-8 space-y-6">
          <div className="review text-lg sm:text-xl text-[#34495E]">
            <p>"Great product! I love it!" - User1</p>
            <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
          </div>
          <div className="review text-lg sm:text-xl text-[#34495E]">
            <p>"It does exactly what it promises!" - User2</p>
            <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
          </div>
        </div>
        <button className="bg-pink-600 text-white px-8 py-3 rounded-lg shadow-md mt-6 hover:bg-pink-700 transform transition duration-300 hover:scale-105">Write a Review</button>
      </section>

      {/* Pricing Section */}
      <section className="pricing text-center py-12 px-6 sm:px-8 bg-gradient-to-r from-[#16A085] to-[#1ABC9C] text-white">
        <h2 className="text-4xl sm:text-5xl font-semibold">Price: 399</h2>
        <p className="text-xl sm:text-2xl mt-4">Discount: 20% off for a limited time!</p>
        <button className="bg-[#E74C3C] text-white px-8 py-3 rounded-lg shadow-md mt-6 hover:bg-[#C0392B] transform transition duration-300 hover:scale-105">Buy Now</button>
      </section>

      {/* Additional Information Section */}
      <section className="additional-info px-6 sm:px-8 py-12 bg-white">
        <h2 className="text-3xl sm:text-4xl font-semibold text-[#2C3E50]">Usage Instructions</h2>
        <p className="text-lg sm:text-xl text-[#34495E] mt-4">Apply a small amount to skin and massage gently for 5 minutes. Use twice daily.</p>

        <h3 className="text-2xl sm:text-3xl font-semibold text-[#2C3E50] mt-8">FAQs</h3>
        <ul className="list-disc pl-6 sm:pl-8 mt-4 space-y-2 text-lg sm:text-xl text-[#34495E]">
          <li><strong>Q1:</strong> How long does the product last?</li>
          <li><strong>Q2:</strong> Can I use it for sensitive skin?</li>
        </ul>
      </section>

    </div>
  );
};

export default LandingPage;
