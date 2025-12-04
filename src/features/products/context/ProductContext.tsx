import { createContext, useContext, useState, type ReactNode } from "react";
import type { IProductContext } from "../type";

const ProductContext = createContext<IProductContext | null>(null);

export const ProductProvider = ({ children }: { children: ReactNode }) => {
  const [selectedCategory, setSelectedCategory] =
    useState<string>("Tất cả sản phẩm");
  const [Products, setProducts] = useState<Array>([]);

  const value: IProductContext = {
    selectedCategory,
    setSelectedCategory,
  };

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};

export const useProductContext = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error("useProductContext must be used within AuthProvider");
  }
  return context;
};
