import { FiTruck, FiClock } from "react-icons/fi";
import { useState } from "react";

const DeliveryInfo = () => {
  const [pincode, setPincode] = useState("");
  const [isDeliverable, setIsDeliverable] = useState(null);
  
  const checkDelivery = () => {
    // Mock function - in real app would check against API
    if (pincode.length === 6) {
      setIsDeliverable(true);
    }
  };
  
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-4">
      <h3 className="font-semibold text-lg mb-3 flex items-center text-gray-800">
        <FiTruck className="mr-2 text-pink-600" />
        Delivery Options
      </h3>
      
      <div className="space-y-3">
        {/* Pincode checker */}
        <div className="flex flex-wrap gap-2 items-center">
          <div className="relative flex-1">
            <input 
              type="text" 
              value={pincode}
              onChange={(e) => setPincode(e.target.value)}
              placeholder="Enter your pincode" 
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              maxLength={6}
            />
          </div>
          <button 
            onClick={checkDelivery}
            className="px-4 py-2 bg-gray-100 text-gray-800 rounded-lg hover:bg-gray-200 transition-colors font-medium"
          >
            Check
          </button>
        </div>
        
        {/* Delivery status */}
        {isDeliverable === true && (
          <div className="flex items-start text-sm">
            <div className="mr-2 text-green-500 mt-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <div className="font-medium text-green-700">Delivery available to your location</div>
              <div className="text-gray-600 mt-1 flex items-center">
                <FiClock className="mr-1" />
                Expected delivery: 2-3 business days
              </div>
            </div>
          </div>
        )}
        
        {isDeliverable === false && (
          <div className="flex items-start text-sm">
            <div className="mr-2 text-red-500 mt-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <div className="font-medium text-red-600">Delivery not available to this location</div>
              <div className="text-gray-600 mt-1">Please try a different pincode</div>
            </div>
          </div>
        )}
        
        {/* General delivery info */}
        <div className="flex items-center text-sm text-gray-600 mt-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Free delivery on orders above ₹499
        </div>
      </div>
    </div>
  );
};

export default DeliveryInfo;