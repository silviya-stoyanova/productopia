import React from "react";
import { IProduct } from "../../App";

import "../../styles/components/common/card.scss";

interface ICard {
  product: IProduct;
}

const Card: React.FC<ICard> = ({ product }) => {
  const handleClick = () => {
    console.log("I was clicked!");
  };

  return (
    <article key={product.id} className="card" onClick={handleClick}>
      <header className="card__header">
        <img
          src={product.image}
          alt={product.name}
          className="card__header-image"
        />
      </header>
      <footer className="card__footer">
        <h5 className="card__footer-name">{product.name}</h5>
        <p className="card__footer-price">Price: ${product.price}</p>
        <button className="card__footer-button">See details</button>
      </footer>
    </article>
  );
};

export default Card;
