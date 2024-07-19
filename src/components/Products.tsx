import React, { useContext, useState } from "react";
import { IProduct, IProductData } from "../types/productTypes";
import { ProductsContext } from "../App";
import ProductDetails from "./ProductDetails";
import Card from "./common/Card";

import "../assets/styles/components/products.scss";

const Products: React.FC = () => {
  const { products, loadingProducts, error } = useContext(ProductsContext);
  const [visibleProducts, setVisibleProducts] = useState<number>(6);
  const [selectedProductId, setSelectedProductId] = useState<string | null>(
    null
  );


  const showMoreProducts = () => {
    setVisibleProducts((prevVisibleProducts) => prevVisibleProducts + 6);
  };

  const selectedProduct = products.find(
    (product: IProduct) => product.id === selectedProductId
  );

  return (
    <section className="products">
      <section className="container">
        <h2 className="products__title">Our Products</h2>
        <article className="cards">
          {products.slice(0, visibleProducts).map((product) => (
            <Card
              key={product.id}
              item={product}
              onClick={() => setSelectedProductId(product.id)}
            ></Card>
          ))}
        </article>
        {visibleProducts < products.length && (
          <button className="products__button" onClick={showMoreProducts}>
            Show more
          </button>
        )}
      </section>
      {selectedProduct && (
        <ProductDetails
          product={selectedProduct}
          onClose={() => setSelectedProductId(null)}
        />
      )}
    </section>
  );
};

export default Products;
