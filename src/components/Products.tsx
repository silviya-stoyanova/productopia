import React, { useContext, useState } from "react";
import { Category, IProduct, IProductData } from "../types/productTypes";
import { ProductsContext } from "../App";
import ProductDetails from "./ProductDetails";
import Card from "./common/Card";

import "../assets/styles/components/products.scss";
import Filters from "./common/Filters";

const Products: React.FC = () => {
  const { products, loadingProducts, error } = useContext(ProductsContext);
  const [visibleProducts, setVisibleProducts] = useState<number>(6);
  const [selectedProductId, setSelectedProductId] = useState<string | null>(
    null
  );
  const [selectedCategories, setSelectedCategories] = useState<Category[]>([]);


  const showMoreProducts = () => {
    setVisibleProducts((prevVisibleProducts) => prevVisibleProducts + 6);
  };

  const handleFilterChange = (category: Category) => {
    setSelectedCategories((prevSelectedCategories) =>
      prevSelectedCategories.includes(category)
        ? prevSelectedCategories.filter((cat) => cat !== category)
        : [...prevSelectedCategories, category]
    );
  };

  const selectedProduct = products.find(
    (product: IProduct) => product.id === selectedProductId
  );

  const filteredProducts = selectedCategories.length
    ? products.filter((product) =>
        selectedCategories.includes(product.category)
      )
    : products;

  return (
    <section className="products">
      <section className="container">
        <h2 className="products__title">Our Products</h2>
        <Filters
          items={Object.values(Category)}
          selectedItems={selectedCategories}
          onFilterChange={handleFilterChange}
        />
        <article className="cards">
          {filteredProducts.slice(0, visibleProducts).map((product) => (
            <Card
              key={product.id}
              item={product}
              onClick={() => setSelectedProductId(product.id)}
            ></Card>
          ))}
        </article>
        {visibleProducts < products.length && (
          <button
            className="products__show-more-button"
            onClick={showMoreProducts}
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
