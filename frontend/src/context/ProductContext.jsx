import { createContext, useContext, useEffect, useState } from "react";

const ProductContext = createContext();

const ProductContextWrapper = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const total = products.reduce((sum, pr) => {
      if (typeof pr.price === "string") {
        const numericPrice = parseFloat(pr.price.replace(/[^0-9.]/g, ""));
        return sum + (numericPrice * (pr.quantity || 1));
      }
      return sum;
    }, 0);
    console.log("Total cart price:", total);
  }, [products]);

  const addProduct = (product) => {
    setProducts((prev) => {
      const exists = prev.find((p) => p.id === product.id);
      if (exists) {
        return prev.map((p) =>
          p.id === product.id
            ? { ...p, quantity: (p.quantity || 1) + (product.quantity || 1) }
            : p
        );
      } else {
        return [...prev, { ...product, quantity: product.quantity || 1 }];
      }
    });
  };

  const removeProduct = (id) => {
    setProducts((prev) => prev.filter((el) => el.id !== id));
  };

  const updateQuantity = (id, type) => {
    setProducts((prev) =>
      prev.map((product) => {
        if (product.id !== id) return product;
        const newQty =
          type === "increment"
            ? product.quantity + 1
            : product.quantity - 1;

        return {
          ...product,
          quantity: Math.max(1, newQty), // Prevent less than 1
        };
      })
    );
  };

  return (
    <ProductContext.Provider
      value={{ products, addProduct, removeProduct, updateQuantity }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useCart = () => useContext(ProductContext);

export default ProductContextWrapper;
