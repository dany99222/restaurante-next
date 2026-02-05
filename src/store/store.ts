import { create } from "zustand";
import { OrderItem } from "../types";
import { Product } from "../generated/prisma/client";

interface Store {
  order: OrderItem[];
   AddToOrder: (product: Product) => void
}
export const useStore = create<Store>(() => ({
  order: [],
  AddToOrder: (product) =>{
    console.log(product)
  }
}));
