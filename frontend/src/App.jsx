import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useState } from "react";
import OurProducts from "./pages/OurProducts"; 
import ConnectDermatologist from "./components/ConnectDermatologist";
import Hero from "./components/Hero";
import Ingredients from "./components/Ingredients";
import Intro from "./components/Intro";
import Delivery from "./components/Delivery";
import PersonalizedCare from "./components/PersonalizedCare";
import FAQ from "./components/FAQ";
import Reviews from "./pages/Reviews";
import SomePage from "./pages/SomePage";
import OilySkin from "./categories/OilySkin";
import NormalSkin from "./categories/NormalSkin";
import CombinationSkin from "./categories/CombinationSkin";
import DrySkin from "./categories/DrySkin";
import SensitiveSkin from "./categories/SensitiveSkin";
import UseProduct from "./components/UseProduct";
import PopularCategory from "./components/PopularCategory";
import UpcomingCategory from "./components/UpcomingCategory";
import Quiz from "./pages/Quiz";
import Cart from "./pages/Cart";
import ProductDetails from './components/ProductDetails';
import Categories from "./components/Categories";
import FaceProductsChatbot from "./components/FaceProductsChatbot";
import { AuthProvider } from "./context/AuthContext";
import PageNotFound from "./pages/PageNotFound";
import ScrollToTop from "./pages/ScrollToTop";



function App() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const [cartCount, setCartCount] = useState(0); // State for cart count

  // Function to update cart count
  const addToCart = () => {
    setCartCount((prevCount) => prevCount + 1); // Increase cart count by 1
  };

  return (
      <>
       <AuthProvider>

        
        <Navbar setIsLoginModalOpen={setIsLoginModalOpen}  cartCount={cartCount}/>
        <div className={isLoginModalOpen ? "blur-background" : ""}>
          <main className="app-main">
            <ScrollToTop />
            <Routes>
              {/* Add your other routes here */}
              
              <Route path="/" element={

                <>
                  <Hero />
                  <PopularCategory></PopularCategory>
                  <UpcomingCategory></UpcomingCategory>
                  <ConnectDermatologist />
                  <Intro />
                  <Ingredients />
                  <PersonalizedCare></PersonalizedCare>
                  <UseProduct></UseProduct>
                  <FAQ></FAQ>

                </>
              } />
              <Route path="/ourproducts" element={<OurProducts addToCart={addToCart} />} /> {/* Add the new route here */}
              <Route path="/reviews" element={<Reviews />} /> {/* Add the new route here */}
              
              <Route path="/trackorder" element={<SomePage />}></Route>
  
              
              <Route path="/categories" element={<Categories />}></Route>
              <Route path="/categories/oilyskin" element={<OilySkin  addToCart={addToCart}/>}></Route>

              <Route path="/categories/normalskin" element={<NormalSkin addToCart={addToCart}/>}></Route>

              <Route path="/categories/combinationskin" element={<CombinationSkin addToCart={addToCart}/>}></Route>

              <Route path="/categories/dryskin" element={<DrySkin addToCart={addToCart}/>}></Route>

              <Route path="/categories/sensitiveskin" element={<SensitiveSkin addToCart={addToCart}/>}></Route>

              <Route path="/quiz" element={<Quiz />}></Route>

              <Route path="/cart" element={<Cart />}></Route>

              <Route path="*" element={<PageNotFound />}></Route>
               <Route path="/product/:id" element={<ProductDetails />} />
            </Routes>


          </main>
        </div>
        
        <Delivery></Delivery>
         
        <Footer />
       

        {/* Modal for Login/Signup handled in Navbar */}
        {isLoginModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            {/* Login/Signup form already handled in the Navbar component */}
          </div>
        )}
        <FaceProductsChatbot></FaceProductsChatbot>
        </AuthProvider>
      </>
  );
}

export default App;
