import React from "react";
import Dialog from "./common/Dialog";
import "../styles/components/product-details.scss";
import { IProduct } from "../App";
import { camelCaseToReadable } from "../utils/utils";

interface IProductDetails {
  product: IProduct;
  onClose: () => void;
}

const ProductDetails: React.FC<IProductDetails> = ({ product, onClose }) => {
  return (
    <Dialog onClose={onClose}>
      <section className="product-details">
        <article className="product-details__image">
          <img
            src={product.image}
            alt={product.name}
            className="product-details__image-item"
          />
        </article>
        <article className="product-details__content">
          <h2 className="product-details__content-name">{product.name}</h2>
          <p className="product-details__content-description">
            {product.description}
          </p>
          <p className="product-details__content-price">${product.price}</p>
          <p className="product-details__content-category">
            Category: {product.category}
          </p>
          <article className="product-details__content-features">
            <p className="product-details__content-features-title">
              Product Info
            </p>
            <ul className="product-details__content-features-list">
              {Object.entries(product.features).map(([key, value]) => (
                <li className="product-details__content-features-list-item">
                  <i className="fa-regular fa-circle-xmark"></i>
                  {camelCaseToReadable(key)}: {value}
                </li>
              ))}
            </ul>
          </article>
        </article>
      </section>
    </Dialog>
  );
};

export default ProductDetails;
