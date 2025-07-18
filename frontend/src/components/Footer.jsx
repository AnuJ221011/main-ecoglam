import { FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Explore EcoGlam Section */}
              <div>
                <h3 className="text-2xl font-serif mb-4 text-white">Explore EcoGlam</h3>
                <ul className="space-y-3">
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">About Us</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Contact Us</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Blog: Skin, Science and Sustainability</a></li>
                </ul>
              </div>
              
              {/* Skin & Sustainability Section */}
              <div>
                <h4 className="text-lg font-semibold mb-4 text-white">Skin & Sustainability</h4>
                <ul className="space-y-3">
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Why Personalised Skin Care</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Our Eco Promises</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Ingredients Glossary</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Responsible Beauty Standards</a></li>
                </ul>
              </div>
            </div>

            {/* Brand Certification Logos */}
            <div className="mt-8 flex flex-wrap gap-8">
                <div className="text-center group">
                  <div className="bg-white rounded-full p-1 mb-3 mx-auto w-16 h-16 flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
                    <img 
                      src="https://res.cloudinary.com/djbjfsshe/image/upload/v1748092358/cruelty_uputro.jpg" 
                      alt="Cruelty Free Certified" 
                      className="h-10 w-10 object-contain"
                    />
                  </div>
                  <p className="text-sm text-gray-300 font-medium">Cruelty Free</p>
                </div>
                
                <div className="text-center group">
                  <div className="bg-white rounded-full p-3 mb-3 mx-auto w-16 h-16 flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
                    <img 
                      src="https://res.cloudinary.com/djbjfsshe/image/upload/v1748092359/EWG_i27qr0.jpg" 
                      alt="EWG Verified" 
                      className="h-10 w-10 object-contain"
                    />
                  </div>
                  <p className="text-sm text-gray-300 font-medium">EWG Verified</p>
                </div>
                
                <div className="text-center group">
                  <div className="bg-white rounded-full p-3 mb-3 mx-auto w-16 h-16 flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
                    <img 
                      src="https://res.cloudinary.com/djbjfsshe/image/upload/v1748092358/vegan_rdn18u.jpg" 
                      alt="Vegan Certified" 
                      className="h-10 w-10 object-contain"
                    />
                  </div>
                  <p className="text-sm text-gray-300 font-medium">100% Vegan</p>
                </div>
                
                <div className="text-center group">
                  <div className="bg-white rounded-full p-3 mb-3 mx-auto w-16 h-16 flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
                    <img 
                      src="https://res.cloudinary.com/djbjfsshe/image/upload/v1748092359/recycle_bzkz84.jpg" 
                      alt="Eco-Friendly Packaging" 
                      className="h-10 w-10 object-contain"
                    />
                  </div>
                  <p className="text-sm text-gray-300 font-medium">Eco-Friendly</p>
                </div>
            </div>
          </div>

          
          {/* Get Tips & Updates Section */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Get Tips & Updates</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Join Our Community</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Monthly Eco Challenges</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Get Your Personalised Routine</a></li>
            </ul>
          </div>

          {/* Stay Connected Section */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Stay Connected</h4>
            
            {/* Social Media Links */}
            <div className="mb-6">
              <h6 className="text-sm font-medium mb-3 text-gray-200">Follow us:</h6>
              <div className="flex items-center gap-4 mb-3">
                <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors duration-200 text-xl">
                  <FaInstagram />
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200 text-xl">
                  <FaLinkedin />
                </a>
                <a href="#" className="text-gray-400 hover:text-red-400 transition-colors duration-200 text-xl">
                  <FaYoutube />
                </a>
              </div>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
                #YourSkinYourWay
              </a>
            </div>

            {/* Contact Information */}
            <div>
              <h6 className="text-sm font-medium mb-3 text-gray-200">Contact us:</h6>
              <ul className="space-y-2">
                <li>
                  <a href="mailto:support@ecoglam.com" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
                    Email: support@ecoglam.com
                  </a>
                </li>
                <li>
                  <a href="tel:+911800123456" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
                    Phone: +91 1800 123 456
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Tagline and Brand Logos Section
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-serif mb-4 text-white">Our Promise</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              <span className="font-semibold text-white">EcoGlam:</span> Because no two skins are the same and neither are our formulas
            </p>
          </div>
        </div> */}



        {/* Copyright Section */}
        <div className="border-t border-gray-700 mt-12 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 EcoGlam | All Rights Reserved | 
            <a href="#" className="hover:text-white transition-colors duration-200 ml-1">Privacy Policy</a> | 
            <a href="#" className="hover:text-white transition-colors duration-200 ml-1">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;