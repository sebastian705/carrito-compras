import { create } from "zustand";
import Product from "../components/Product";
const url = "https://fakestoreapi.com/products";
export const useStore = create((set) => ({
  products: [],
  product: [],
  setProducts: () => fetch(url).then(res => res.json()).then(data => set({ products: data })),
  setProduct: (id) => fetch(`${url}/${id}`).then(res => res.json()).then(data => set({ product: data })),
  cartProducts: [],
  setCartProducts: (newCartProduct) => set({ cartProducts: newCartProduct }),
  counter: 0,
  setCounter: (newCounter) => set({ counter: newCounter }),
  price: 0,
  setPrice: (newPrice) => set({ price: newPrice })
}));

