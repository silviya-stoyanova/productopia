import { Category, IProduct } from "../types/productTypes";

export const fetchProducts = async (): Promise<IProduct[]> => {
  try {
    await new Promise((resolve) => setTimeout(resolve, 2000));

    const response = await fetch(`${process.env.PUBLIC_URL}/products.json`);

    if (!response.ok) {
      throw new Error("Data fetching was not successful.");
    }

    const data = await response.json();

    const products = data.map((product: IProduct) => ({
      ...product,
      category: product.category as Category,
    })) as IProduct[];

    return products;
  } catch (err: any) {
    throw new Error(
      err.message || "An unknown error occurred while fetching products."
    );
  }
};
