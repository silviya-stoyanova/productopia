import React, { Context, createContext, useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import Products from "./components/Products";
import productsData from "./data/products.json";

import "./styles/index.scss";

export enum Category {
  Software = "Software",
  MobileDevices = "Mobile Devices",
  Fashion = "Fashion",
}

export interface ISoftwareFeatures {
  operatingSystem: string;
  license: string;
  support: string;
}

export interface IMobileDevicesFeatures {
  battery: string;
  processor: string;
  camera: string;
  storage: string;
  display: string;
}

export interface IFashionFeatures {
  size: string;
  color: string;
  material: string;
}

// export type ProductFeatures =
//   | ISoftwareFeatures
//   | IMobileDevicesFeatures
//   | IFashionFeatures;

export interface IBaseProduct {
  id: string;
  name: string;
  description: string;
  image: string;
  price: number;
}

export interface ISoftwareProduct extends IBaseProduct {
  category: Category.Software;
  features: ISoftwareFeatures;
}

export interface IMobileDevicesProduct extends IBaseProduct {
  category: Category.MobileDevices;
  features: IMobileDevicesFeatures;
}

export interface IFashionProduct extends IBaseProduct {
  category: Category.Fashion;
  features: IFashionFeatures;
}

export type IProduct =
  | ISoftwareProduct
  | IMobileDevicesProduct
  | IFashionProduct;

export const ProductsContext: Context<IProduct[]> = createContext<IProduct[]>(
  []
);

const App: React.FC = () => {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    const transformedProducts = productsData.map((product) => ({
      ...product,
      category: product.category as Category,
    })) as IProduct[];

    setProducts(transformedProducts);
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
