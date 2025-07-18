import React, { useState } from "react";
import { X, Loader2, Eye, EyeOff, Sparkles, Shield, Heart } from "lucide-react";

const AuthModal = ({
  isLoginForm,
  formData,
  handleInputChange,
  handleFormToggle,
  handleSubmit,
  handleUserClick,
}) => {
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await handleSubmit(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50 p-4">
      <div className="bg-white rounded-3xl w-full max-w-4xl max-h-[90vh] flex relative overflow-hidden shadow-2xl transform transition-all duration-300 scale-100">
        {/* Left Section - Enhanced Visual Appeal */}
        <div className="w-1/2 bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 p-6 flex flex-col items-center justify-center text-center relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-20 h-20 bg-pink-300 rounded-full blur-xl"></div>
            <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-300 rounded-full blur-xl"></div>
            <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-indigo-300 rounded-full blur-xl"></div>
          </div>
          
          <div className="relative z-10">
            <div className="mb-4 relative">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg mb-3 mx-auto">
                <img 
                  src="https://res.cloudinary.com/djbjfsshe/image/upload/v1748025097/favicon-logo_k5csof.jpg" 
                  alt="EcoGlam Logo" 
                  className="w-10 h-10 rounded-xl"
                />
              </div>
            </div>
            
            <h2 className="text-2xl font-bold bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-2">
              Welcome to EcoGlam!
            </h2>
            <p className="text-gray-600 mb-6 text-base leading-relaxed">
              Join our community for eco-friendly beauty solutions crafted with love for you and the planet.
            </p>
            
            <div className="space-y-3 text-left">
              <div className="flex items-center space-x-3 bg-white/50 backdrop-blur-sm rounded-xl p-2 shadow-sm">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 text-xs">🌿</span>
                </div>
                <span className="text-gray-700 font-medium text-sm">100% Eco-friendly Products</span>
              </div>
              
              <div className="flex items-center space-x-3 bg-white/50 backdrop-blur-sm rounded-xl p-2 shadow-sm">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                  <Shield className="w-3 h-3 text-blue-600" />
                </div>
                <span className="text-gray-700 font-medium text-sm">Designed by Dermatologists</span>
              </div>
              
              <div className="flex items-center space-x-3 bg-white/50 backdrop-blur-sm rounded-xl p-2 shadow-sm">
                <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center">
                  <Heart className="w-3 h-3 text-purple-600 fill-current" />
                </div>
                <span className="text-gray-700 font-medium text-sm">EWF Certified Excellence</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section - Modern Form Design */}
        <div className="w-1/2 bg-white p-6 relative overflow-y-auto">
          <button
            onClick={handleUserClick}
            className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full p-2 transition-all duration-200"
            disabled={loading}
          >
            <X className="h-4 w-4" />
          </button>
          
          <div className="max-w-sm mx-auto pt-2">
            <h2 className="text-xl font-bold text-gray-900 mb-1">
              {isLoginForm ? "Welcome Back" : "Create Account"}
            </h2>
            <p className="text-gray-600 mb-4 text-sm">
              {isLoginForm ? "Sign in to your account" : "Join our eco-beauty community"}
            </p>

            <button
              onClick={handleFormToggle}
              className="text-sm text-purple-600 hover:text-purple-700 mb-6 inline-flex items-center space-x-1 font-medium transition-colors duration-200"
              disabled={loading}
            >
              <span>
                {isLoginForm
                  ? "Don't have an account? Sign up"
                  : "Already have an account? Sign in"}
              </span>
            </button>

            <div className="space-y-4">
              {!isLoginForm && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 bg-gray-50 hover:bg-white text-sm"
                    placeholder="Enter your full name"
                    required
                    disabled={loading}
                  />
                </div>
              )}
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 bg-gray-50 hover:bg-white text-sm"
                  placeholder="Enter your email"
                  required
                  disabled={loading}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2.5 pr-10 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 bg-gray-50 hover:bg-white text-sm"
                    placeholder="Enter your password"
                    required
                    disabled={loading}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-2.5 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors duration-200"
                    disabled={loading}
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>
              
              {!isLoginForm && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Confirm Password
                  </label>
                  <div className="relative">
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2.5 pr-10 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 bg-gray-50 hover:bg-white text-sm"
                      placeholder="Confirm your password"
                      required
                      disabled={loading}
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-2.5 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors duration-200"
                      disabled={loading}
                    >
                      {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                </div>
              )}
              
              <button
                onClick={onSubmit}
                className="w-full flex justify-center items-center bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white py-2.5 px-4 rounded-xl font-medium hover:shadow-lg hover:scale-[1.02] transform transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:shadow-none text-sm"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <Loader2 className="animate-spin h-4 w-4 mr-2" />
                    <span>{isLoginForm ? "Signing in..." : "Creating account..."}</span>
                  </>
                ) : (
                  <span className="flex items-center space-x-2">
                    <span>{isLoginForm ? "Sign In" : "Create Account"}</span>
                  </span>
                )}
              </button>
            </div>
            
            {isLoginForm && (
              <div className="mt-4 text-center">
                <button className="text-xs text-gray-500 hover:text-purple-600 transition-colors duration-200">
                  Forgot your password?
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;