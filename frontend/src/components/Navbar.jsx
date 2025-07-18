import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaRegUser } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import AuthModal from "./AuthModal";
import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";
import ProfileDropdown from './ProfileDropdown'
import { signup, login } from "../api";
import { useCart } from "../context/ProductContext";
import { useAuth } from "../context/AuthContext"; // Uncomment if using AuthContext


const Navbar = () => {
  const { products } = useCart();
   const userLogin = useAuth().login;
   const userLogout = useAuth().logout;
 

  const [userData, setUserData] = useState(null);
  const [isOpen, setIsOpen] = useState(false); // Mobile menu state
  const [isFormOpen, setIsFormOpen] = useState(false); // Auth modal
  const [isLoginForm, setIsLoginForm] = useState(true); // Login/signup toggle
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const navLinks = [
    { link: "/ourproducts", label: "Our Products" },
    { link: "/reviews", label: "Reviews" },
    { link: "/trackorder", label: "Track Order" },
    { link: "/categories", label: "Categories" },
  ];

  const categories = [
    { label: "Oily Skin", link: "/categories/oilyskin" },
    { label: "Normal Skin", link: "/categories/normalskin" },
    { label: "Sensitive Skin", link: "/categories/sensitiveskin" },
    { label: "Combination Skin", link: "/categories/combinationskin" },
    { label: "Dry Skin", link: "/categories/dryskin" },
  ];

  useEffect(() => {
    const storedUser = localStorage.getItem("userData");
    if (storedUser) {
      setUserData(JSON.parse(storedUser));
    }
  }, []);

  const handleUserClick = () => setIsFormOpen(!isFormOpen);
  const handleFormToggle = () => setIsLoginForm(!isLoginForm);

  const handleInputChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isLoginForm) {
      
      try {
        const response = await login({
          email: formData.email,
          password: formData.password,
        });
        const user = {
          email: formData.email,
          token: response.token,
          name: formData.name || "User",
        };
        localStorage.setItem("isLoggedIn", true);
        localStorage.setItem("userData", JSON.stringify(user));
        setUserData(user);
        toast.success("Login successful!");
        userLogin(true);
      } catch (error) {
        toast.error(error.message || "Login failed");
      }
    } else {
      if (formData.password !== formData.confirmPassword) {
        alert("Passwords do not match");
        return;
      }
      try {
        await signup({
          name: formData.name,
          email: formData.email,
          password: formData.password,
        });
        toast.success("Signup successful!");
      } catch (error) {
        toast.error(error.message || "Signup failed");
      }
    }
    setIsFormOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userData");
    setUserData(null);
    toast.success("Logged out successfully!");
    userLogout();
  };

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
          {/* <img src="https://res.cloudinary.com/djbjfsshe/image/upload/v1748025097/favicon-logo_k5csof.jpg" alt="EcoGlam Logo" className="h-10 w-auto" /> */}
          <span className="text-3xl font-bold font-serif text-emerald-600">EcoGlam</span>
        </Link>


          {/* Desktop Links */}
          <div className="hidden lg:flex lg:items-center space-x-3">
            <NavLinks navLinks={navLinks} categories={categories} />
            <Link to="/quiz">
              <button className="ml-2 mr-2 bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-700">
                Know Your Skin
              </button>
            </Link>

            {userData ? (
              <ProfileDropdown userData={userData} handleLogout={handleLogout} />
            ) : (
              <button onClick={handleUserClick} className="ml-2 text-black px-4 py-2 rounded-lg">
                <FaRegUser />
              </button>
            )}

            <Link to="/cart">
              <div className="relative">
                <FiShoppingCart className="text-2xl" />
                <span className="absolute -top-2 -right-3 bg-red-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {products.length}
                </span>
              </div>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 hover:bg-gray-100 rounded-lg" aria-label="Toggle menu">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
     {isOpen && (
  <MobileMenu
    navLinks={navLinks}
    categories={categories}
    isLoggedIn={!!userData}
    handleLogout={handleLogout}
    handleUserClick={handleUserClick}
    cartCount={products.length}
    handleClose={() => setIsOpen(false)} // <-- pass close function
  />
)}


      {/* Auth Modal */}
      {isFormOpen && (
        <AuthModal
          isLoginForm={isLoginForm}
          formData={formData}
          handleInputChange={handleInputChange}
          handleFormToggle={handleFormToggle}
          handleSubmit={handleSubmit}
          handleUserClick={handleUserClick}
        />
      )}

      <ToastContainer />
    </nav>
  );
};

export default Navbar;
