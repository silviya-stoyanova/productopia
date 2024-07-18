import React from "react";
import { IProduct } from "../../App";

import "../../styles/components/common/card.scss";

interface ICard {
  product: IProduct;
}

const Card: React.FC<ICard> = ({ product }) => {
  return (
    <article key={product.id} className="product-item">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
    </article>
  );
};

export default Card;
