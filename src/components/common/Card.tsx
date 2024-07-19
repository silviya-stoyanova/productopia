import React from "react";

import "../../assets/styles/components/common/card.scss";

interface IItem {
  id: string;
  name: string;
  image: string;
  price: number;
}

interface ICard {
  item: IItem;
  onClick: () => void;
}

const Card: React.FC<ICard> = ({ item, onClick }) => {
  return (
    <article key={item.id} className="card" onClick={onClick}>
      <header className="card__header">
        <img src={item.image} alt={item.name} className="card__header-image" />
      </header>
      <footer className="card__footer">
        <h5 className="card__footer-name">{item.name}</h5>
        <p className="card__footer-price">Price: ${item.price}</p>
        <button className="card__footer-button">See details</button>
      </footer>
    </article>
  );
};

export default Card;
