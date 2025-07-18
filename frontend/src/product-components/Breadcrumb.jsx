import { Link } from "react-router-dom";

const Breadcrumb = ({ product }) => {
  return (
    <nav className="p-4 text-sm text-gray-500 flex items-center">
      <Link to="/" className="hover:text-pink-600 transition-colors">Home</Link>
      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mx-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
      <Link to={`/category/${product.category}`} className="hover:text-pink-600 transition-colors">{product.category}</Link>
      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mx-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
      <span className="text-gray-800 font-medium truncate">{product.name}</span>
    </nav>
  );
};

export default Breadcrumb;