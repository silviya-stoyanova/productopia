import React, { Context, createContext } from "react";
import { IProductData } from "./types/productTypes";
import { useProducts } from "./hooks/useProducts";
import Products from "./components/Products";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Banner from "./components/Banner";

import "./assets/styles/index.scss";

export const ProductsContext: Context<IProductData> =
  createContext<IProductData>({
    products: [],
    loadingProducts: true,
    error: "",
  });

const App: React.FC = () => {
  const productsData: IProductData = useProducts();

  return (
    <>
      <Header />
      <main className="main">
        <Banner />
        <ProductsContext.Provider value={productsData}>
          <Products />
        </ProductsContext.Provider>
      </main>
      <Footer />
    </>
  );
};

export default App;
