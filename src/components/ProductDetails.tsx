import React from "react";
import { camelCaseToReadable, getFeatureIcon } from "../utils/utils";
import { IProduct } from "../types/productTypes";
import Dialog from "./common/Dialog";

import "../assets/styles/components/product-details.scss";

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
          <p className="product-details__content-price">
            Price:
            <span className="product-details__content-price-value">
              ${product.price}
            </span>
          </p>
          <p className="product-details__content-category">
            Category:
            <span className="product-details__content-category-value">
              {product.category}
            </span>
          </p>
          <article className="product-details__content-features">
            <p className="product-details__content-features-title">
              Specifications
            </p>
            <ul className="product-details__content-features-list">
              {Object.entries(product.features).map(([key, value]) => (
                <li
                  key={key}
                  className="product-details__content-features-list-item"
                >
                  <i className={getFeatureIcon(product.category, key)}></i>
                  <p>
                    {camelCaseToReadable(key)}:
                    <span className="product-details__content-features-list-item-value">
                      {value}
                    </span>
                  </p>
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
