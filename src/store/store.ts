import { create } from "zustand";
import { OrderItem } from "../types";
import { Product } from "../generated/prisma/client";

interface Store {
  order: OrderItem[];
  AddToOrder: (product: Product) => void;
}
export const useStore = create<Store>((set, get) => ({
  order: [],
  AddToOrder: (product) => {
    const { categoryId, image, ...data } = product;

    //Variable temporal donde agregarmos los productos
    let order: OrderItem[] = [];

    //Si ya esta en el carrito
    if (get().order.find((item) => item.id === product.id)) {
      order = get().order.map((item) =>
        item.id === product.id
          ? {
              ...item,
              quantity: item.quantity + 1,
              subtotal: item.price * (item.quantity + 1),
            }
          : item,
      );
    } 
    // Si no esta en el carrito 
    else {
      order = [
        ...get().order,
        {
          ...data,
          quantity: 1,
          subtotal: 1 * product.price,
        },
      ];
    }

    // lo agregamos al state General 
    set(() => ({
      order: order,
    }));
  },
}));
