import React, { Context, createContext, useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import Products from "./components/Products";
import productsData from "./data/products.json";

import "./styles/index.scss";

interface ISoftwareFeatures {
  operatingSystem: string;
  license: string;
  support: string;
}

interface IMobileDevicesFeatures {
  battery: string;
  processor: string;
  camera: string;
  storage: string;
  display: string;
}

interface IFashionFeatures {
  size: string;
  color: string;
  material: string;
}

type ProductFeatures =
  | ISoftwareFeatures
  | IMobileDevicesFeatures
  | IFashionFeatures;

export interface IProduct {
  id: string;
  category: string;
  name: string;
  description: string;
  image: string;
  price: number;
  features: ProductFeatures;
}

export const ProductsContext: Context<IProduct[]> = createContext<IProduct[]>(
  []
);

const App: React.FC = () => {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    setProducts(productsData);
  }, []);

  return (
    <>
      <Header />
      <main className="main">
        <Banner />
        <ProductsContext.Provider value={products}>
          <Products />
        </ProductsContext.Provider>
      </main>
      <Footer />
    </>
  );
};

export default App;
