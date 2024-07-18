import React, { useContext } from "react";
import { ProductsContext } from "../App";
import Card from "./common/Card";

import "../styles/components/products.scss";

const Products: React.FC = () => {
  const products = useContext(ProductsContext);

  return (
    <section className="products">
      <section className="container">
        <h2 className="products__title">Our Products</h2>
        <article className="cards">
          {products.map((product) => (
            <Card key={product.id} product={product}></Card>
          ))}
        </article>
      </section>
    </section>
  );
};

export default Products;
