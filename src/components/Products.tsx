import React, { useContext } from "react";
import { ProductsContext } from "../App";
import Card from "./common/Card";

import "../styles/components/products.scss";

const Products: React.FC = () => {
  const products = useContext(ProductsContext);

  return (
    <section className="products">
      <section className="container">
        {products.map((product) => (
          <Card product={product}></Card>
        ))}
      </section>
    </section>
  );
};

export default Products;
