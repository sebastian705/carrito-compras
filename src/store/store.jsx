import { create } from "zustand";
const url = "https://fakestoreapi.com/products";
export const useStore = create((set) => ({
  products: [],
  setProducts: () => fetch(url).then(res => res.json()).then(data => set({ products: data })),
  cartProducts: [],
  setCartProducts: (newCartProduct) => set({ cartProducts: newCartProduct }),
  counter: 0,
  setCounter: (newCounter) => set({ counter: newCounter }),
  price: 0,
  setPrice: (newPrice) => set({ price: newPrice })
}));

