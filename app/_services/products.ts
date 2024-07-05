import { Product, Products } from "../_types/products";

export const getAllProducts = async (page?: string) => {
  const limit = 10;
  const skip = page ? (parseInt(page) - 1) * limit : 0;

  const res = await fetch(
    `https://dummyjson.com/products?limit=${limit}&skip=${skip}`,
  );
  const data: Products = await res.json();
  return data;
};

export const getProductById = async (id: string) => {
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  const data: Product = await res.json();
  return data;
};
