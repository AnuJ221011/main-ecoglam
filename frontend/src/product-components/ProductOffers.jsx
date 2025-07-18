const ProductOffers = () => {
  const bankOffers = [
    { 
      bank: "HDFC Bank", 
      discount: "10% instant discount on Credit Cards", 
      code: "HDFC10",
      img: "https://res.cloudinary.com/djbjfsshe/image/upload/v1747510318/hdfc_qlasyg.png" 
    },
    { 
      bank: "ICICI Bank", 
      discount: "5% cashback on Debit Cards", 
      code: "ICICI5",
      img: "https://res.cloudinary.com/djbjfsshe/image/upload/v1747510318/icici_tlhykd.jpg" 
    },
    { 
      bank: "Axis Bank", 
      discount: "No-cost EMI on 3 months", 
      code: "AXIS3EMI",
      img: "https://res.cloudinary.com/djbjfsshe/image/upload/v1747510318/axis_ijlz0t.jpg" 
    }
  ];

  return (
    <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-4 border border-gray-100 shadow-sm">
      <h3 className="font-semibold text-lg mb-3 flex items-center text-gray-800">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-pink-600" viewBox="0 0 20 20" fill="currentColor">
          <path d="M2 6a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 100 4v2a2 2 0 01-2 2H4a2 2 0 01-2-2v-2a2 2 0 100-4V6z" />
        </svg>
        Available Offers
      </h3>
      <ul className="space-y-3">
        {bankOffers.map((offer, idx) => (
          <li key={idx} className="flex items-start">
            <div className="bg-white border border-gray-200 p-1 rounded-md mr-3 h-8 w-8 flex items-center justify-center shadow-sm">
              <img src={offer.img} alt={offer.bank} className="w-6 h-6 object-contain" />
            </div>
            <div className="text-sm flex-1">
              <span className="font-semibold text-gray-900">{offer.bank}: </span>
              <span className="text-gray-700">{offer.discount}</span>
              <div className="text-gray-600 mt-0.5">
                Use Code: <span className="font-medium text-pink-600">{offer.code}</span>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-3 pt-2 border-t border-gray-100">
        <button className="text-pink-600 text-sm font-medium flex items-center hover:text-pink-800 transition-colors">
          See All Offers
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ProductOffers;
