import { useEffect, useState } from "react";
import { IProduct } from "../types/productTypes";
import { fetchProducts } from "../data/productService";

export const useProducts = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loadingProducts, setLoadingProducts] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  const loadProducts = async () => {
    fetchProducts()
      .then(setProducts)
      .catch(setError)
      .finally(() => setLoadingProducts(false));
  };

  useEffect(() => {
    loadProducts();
  }, []);

  return { products, error, loadingProducts };
};
