import { useState } from "react";
import { CheckCircle, ArrowRight, ArrowLeft, User, Sparkles, RefreshCw, ShoppingBag } from "lucide-react";
import myProducts from "../data/myProducts.json";
import { useNavigate } from "react-router-dom";

function SkincareQuiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [name, setName] = useState("");
  const [recommendation, setRecommendation] = useState(null);
  const [showResults, setShowResults] = useState(false);

  const navigate = useNavigate();

  const questions = [
    {
      id: 1,
      question: "What is your gender?",
      options: [
        { text: "Male", emoji: "👨" },
        { text: "Female", emoji: "👩" }
      ],
    },
    {
      id: 2,
      question: "In which climate do you live?",
      options: [
        { text: "Hot and Dry", emoji: "🌵" },
        { text: "Hot and Humid", emoji: "🌴" },
        { text: "Cold and Dry", emoji: "❄️" },
        { text: "Cool and Humid", emoji: "🌫️" },
        { text: "Temperate/Moderate", emoji: "🌤️" },
      ],
    },


    {
      id: 3,
      question: "How does your skin feel after washing it?",
      options: [
        { text: "Tight and dry", emoji: "😣" },
        { text: "Normal and comfortable", emoji: "😊" },
        { text: "Oily and greasy", emoji: "😅" },
        { text: "Dry in some areas and oily in others", emoji: "🤔" },
      ],
    },

    {
      id: 4,
      question: "How often does your skin feel oily during the day?",
      options: [
        { text: "Rarely or never", emoji: "😌" },
        { text: "Sometimes", emoji: "🙂" },
        { text: "Frequently throughout the day", emoji: "😰" },
        { text: "Only in the T-zone (forehead, nose, chin)", emoji: "🎯" },
      ],
    },
    {
      id: 5,
      question: "Do you experience redness or irritation on your skin?",
      options: [
        { text: "Often - my skin is very sensitive", emoji: "😖" },
        { text: "Sometimes - certain products irritate me", emoji: "😐" },
        { text: "Rarely - only with harsh products", emoji: "🙂" },
        { text: "Never - my skin tolerates everything", emoji: "😎" },
      ],
    },
    {
      id: 6,
      question: "How would you describe your pores?",
      options: [
        { text: "Barely visible", emoji: "✨" },
        { text: "Small and fine", emoji: "🔍" },
        { text: "Large and noticeable", emoji: "👀" },
        { text: "Large in T-zone, small elsewhere", emoji: "🎭" },
      ],
    },
    {
      id: 7,
      question: "What's your main skin concern?",
      options: [
        { text: "Dryness and flaking", emoji: "🏜️" },
        { text: "Excess oil and shine", emoji: "💧" },
        { text: "Uneven texture", emoji: "🌊" },
        { text: "Sensitivity and redness", emoji: "🌹" },
      ],
    },
  ];

  const getSkinTypeKey = (skinType) => {
    if (skinType.toLowerCase().includes("dry")) return "dry";
    if (skinType.toLowerCase().includes("oily")) return "oily";
    if (skinType.toLowerCase().includes("combination")) return "combination";
    if (skinType.toLowerCase().includes("sensitive")) return "sensitive";
    return "normal";
  };

  const getRecommendation = () => {
    let skinType = "";
    let tips = [];
    let routine = [];

    // Analyze answers for skin type determination
    const firstAnswer = answers[2]; // "How does your skin feel after washing it?"
    const oilinessAnswer = answers[3]; // "How often does your skin feel oily during the day?"
    const sensitivityAnswer = answers[4]; // "Do you experience redness or irritation on your skin?"
    const poreAnswer = answers[5]; // "How would you describe your pores?"
    const concernAnswer = answers[6]; // "What's your main skin concern?"

    if (firstAnswer?.includes("Tight and dry") || concernAnswer?.includes("Dryness")) {
      skinType = "Dry Skin";
      tips = [
        "Use lukewarm water when cleansing",
        "Apply moisturizer on damp skin",
        "Use a humidifier in dry environments",
        "Avoid over-cleansing"
      ];
      routine = ["Gentle Cleanser", "Hydrating Toner", "Serum", "Rich Moisturizer", "Sunscreen (AM)"];
    } else if (firstAnswer?.includes("Oily") || oilinessAnswer?.includes("Frequently")) {
      skinType = "Oily Skin";
      tips = [
        "Don't skip moisturizer",
        "Use blotting papers during the day",
        "Choose non-comedogenic products",
        "Use gentle exfoliation 2-3 times per week"
      ];
      routine = ["Gel Cleanser", "Toner", "Niacinamide Serum", "Light Moisturizer", "Sunscreen (AM)"];
    } else if (firstAnswer?.includes("Dry in some areas") || poreAnswer?.includes("Large in T-zone")) {
      skinType = "Combination Skin";
      tips = [
        "Use different products for different areas",
        "Focus oil control on T-zone",
        "Hydrate dry areas more intensively",
        "Use gentle, balanced products"
      ];
      routine = ["Gentle Cleanser", "Balancing Toner", "Targeted Treatments", "Moisturizer", "Sunscreen (AM)"];
    } else {
      skinType = "Normal Skin";
      tips = [
        "Maintain your current routine",
        "Focus on prevention",
        "Use antioxidants for protection",
        "Don't over-complicate your routine"
      ];
      routine = ["Gentle Cleanser", "Toner", "Vitamin C Serum", "Moisturizer", "Sunscreen (AM)"];
    }

    // Add sensitivity considerations
    if (sensitivityAnswer?.includes("Often")) {
      tips.unshift("Always patch test new products");
      skinType += " (Sensitive)";
    }

    // Filter products from myProducts.json based on determined skin type
    const skinTypeKey = getSkinTypeKey(skinType);
    const filteredProducts = myProducts.filter(product => {
      // Check if product has skinType field and it matches
      if (product.skinType && Array.isArray(product.skinType)) {
        return product.skinType.includes(skinTypeKey) || product.skinType.includes("all");
      }
      // If product has category or tags that match skin concerns
      if (product.category || product.tags) {
        const productText = `${product.category || ""} ${product.tags ? product.tags.join(" ") : ""}`.toLowerCase();
        return productText.includes(skinTypeKey) || productText.includes("universal");
      }
      return false;
    });

    const productNames = filteredProducts.slice(0, 6).map(product => product.name || product.title);

    return {
      skinType,
      products: productNames,
      tips,
      routine
    };
  };

  const handleAnswer = (option) => {
    const newAnswers = { ...answers, [step - 1]: option.text };
    setAnswers(newAnswers);

    if (step < questions.length) {
      setStep(step + 1);
    } else {
      const recommendationResult = getRecommendation();
      setRecommendation(recommendationResult);
      setShowResults(true);
    }
  };

  const handleRestart = () => {
    setStep(0);
    setAnswers({});
    setName("");
    setRecommendation(null);
    setShowResults(false);
  };

  const handleShowProducts = () => {
    navigate("/ourproducts");
  };

  const handlePrevious = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const progressPercentage = step === 0 ? 0 : ((step - 1) / questions.length) * 100;

  if (showResults && recommendation) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50 flex items-center justify-center px-4 py-8">
        <div className="max-w-4xl w-full">
          {/* Header */}
          <div className="text-center mb-8">
            
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              Hi {name}! ✨
            </h1>
            <p className="text-lg text-gray-600">Here's your personalized skincare analysis</p>
          </div>

          {/* Results Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Skin Type */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="w-3 h-3 bg-pink-500 rounded-full mr-3"></div>
                <h3 className="text-xl font-semibold text-gray-800">Your Skin Type</h3>
              </div>
              <div className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-xl p-4">
                <p className="text-2xl font-bold text-gray-800">{recommendation.skinType}</p>
              </div>
            </div>

            {/* Recommended Products */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="w-3 h-3 bg-purple-500 rounded-full mr-3"></div>
                <h3 className="text-xl font-semibold text-gray-800">Recommended Products</h3>
              </div>
              <div className="space-y-3">
                {recommendation.products.map((product, index) => (
                  <div key={index} className="flex items-center p-3 bg-gray-50 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{product}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Tips and Routine */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Tips */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                <h3 className="text-xl font-semibold text-gray-800">Expert Tips</h3>
              </div>
              <div className="space-y-3">
                {recommendation.tips.map((tip, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p className="text-gray-600 text-sm">{tip}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Daily Routine */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="w-3 h-3 bg-orange-500 rounded-full mr-3"></div>
                <h3 className="text-xl font-semibold text-gray-800">Daily Routine</h3>
              </div>
              <div className="space-y-3">
                {recommendation.routine.map((step, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-6 h-6 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center text-sm font-semibold mr-3">
                      {index + 1}
                    </div>
                    <span className="text-gray-700">{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={handleShowProducts}
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-xl hover:from-pink-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <ShoppingBag className="w-5 h-5 mr-2" />
              Visit Our Store 
            </button>
            
            <button
              onClick={handleRestart}
              className="inline-flex items-center px-8 py-3 bg-white text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl border border-gray-200"
            >
              <RefreshCw className="w-5 h-5 mr-2" />
              Take Quiz Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50 flex items-center justify-center px-4 py-8">
      <div className="max-w-2xl w-full">
        {/* Welcome Screen */}
        {step === 0 && (
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100">
            <div className="text-center mb-8">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 leading-tight">
                Discover Your Perfect
                <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent"> Skincare Routine</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Take our personalized quiz to get expert recommendations tailored specifically for your skin type and concerns.
              </p>
            </div>

            <div className="space-y-4">
              <div className="relative">
                <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name to get started"
                  className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:border-pink-500 focus:outline-none transition-all duration-300 text-lg"
                />
              </div>
              
              <button
                onClick={() => setStep(1)}
                disabled={!name.trim()}
                className={`w-full py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center ${
                  name.trim()
                    ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:from-pink-600 hover:to-purple-700 shadow-lg hover:shadow-xl transform hover:scale-105"
                    : "bg-gray-200 text-gray-400 cursor-not-allowed"
                }`}
              >
                Start Your Skincare Journey
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </div>
          </div>
        )}

        {/* Quiz Questions */}
        {step > 0 && step <= questions.length && (
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
            {/* Progress Bar */}
            <div className="h-2 bg-gray-100">
              <div 
                className="h-full bg-gradient-to-r from-pink-500 to-purple-600 transition-all duration-500 ease-out"
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>

            <div className="p-8 md:p-12">
              {/* Question Header */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-semibold text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                    Question {step} of {questions.length}
                  </span>
                  <span className="text-sm text-gray-500">
                    {Math.round(progressPercentage)}% Complete
                  </span>
                </div>
                
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 leading-tight">
                  {questions[step - 1].question}
                </h2>
              </div>

              {/* Answer Options */}
              <div className="space-y-4 mb-8">
                {questions[step - 1].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswer(option)}
                    className="w-full p-4 md:p-5 text-left border-2 border-gray-200 rounded-xl hover:border-pink-300 hover:bg-pink-50 transition-all duration-300 group"
                  >
                    <div className="flex items-center">
                      <span className="text-2xl mr-4">{option.emoji}</span>
                      <span className="text-lg text-gray-700 group-hover:text-gray-800 font-medium">
                        {option.text}
                      </span>
                    </div>
                  </button>
                ))}
              </div>

              {/* Navigation */}
              <div className="flex justify-between items-center">
                <button
                  onClick={handlePrevious}
                  disabled={step === 1}
                  className={`flex items-center px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    step === 1
                      ? "text-gray-400 cursor-not-allowed"
                      : "text-gray-600 hover:text-gray-800 hover:bg-gray-100"
                  }`}
                >
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  Previous
                </button>
                
                <div className="text-sm text-gray-500">
                  Select an answer to continue
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default SkincareQuiz;