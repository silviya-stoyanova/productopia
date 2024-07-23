import React, { useContext, useState } from "react";
import { Category, IProduct } from "../types/productTypes";
import { ProductsContext } from "../App";
import SkeletonCard from "./common/SkeletonCard";
import ProductDetails from "./ProductDetails";
import Skeleton from "./common/Skeleton";
import Filters from "./common/Filters";
import Card from "./common/Card";

import "../assets/styles/components/products.scss";

const Products: React.FC = () => {
  const { products, loadingProducts, error } = useContext(ProductsContext);
  const [visibleProducts, setVisibleProducts] = useState<number>(6);
  const [selectedProductId, setSelectedProductId] = useState<string | null>(
    null
  );
  const [selectedFilters, setSelectedFilters] = useState<Category[]>([]);

  const showMoreProducts = () => {
    setVisibleProducts((prevVisibleProducts) => prevVisibleProducts + 6);
  };

  const handleFilterChange = (filter: Category) => {
    setSelectedFilters((prevSelectedFilters) =>
      prevSelectedFilters.includes(filter)
        ? prevSelectedFilters.filter((prevFilter) => prevFilter !== filter)
        : [...prevSelectedFilters, filter]
    );
  };

  const filteredProducts = selectedFilters.length
    ? products.filter((product) => selectedFilters.includes(product.category))
    : products;

  const selectedProduct = products.find(
    (product: IProduct) => product.id === selectedProductId
  );

  return (
    <section className="products">
      <section className="container">
        <h2 className="products__title">Our Products</h2>
        <Filters
          items={Object.values(Category)}
          selectedItems={selectedFilters}
          onFilterChange={handleFilterChange}
        />
        {error && (
          <p className="products__error">
            Something went wrong while fetching products. Please try again
            later.
          </p>
        )}
        <article className="cards">
          {/* todo: extract in a separate Cards component */}
          {loadingProducts
            ? Array.from({ length: visibleProducts }).map((value, index) => (
                <SkeletonCard key={index} />
              ))
            : filteredProducts
                .slice(0, visibleProducts)
                .map((product) => (
                  <Card
                    key={product.id}
                    item={product}
                    onClick={() => setSelectedProductId(product.id)}
                  />
                ))}
        </article>
        {loadingProducts && <Skeleton />}
        {visibleProducts < filteredProducts.length && (
          <button
            onClick={showMoreProducts}
            className="products__show-more-button"
          >
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
