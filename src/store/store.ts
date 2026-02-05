import { create } from "zustand";
import { OrderItem } from "../types";
import { Product } from "../generated/prisma/client";

interface Store {
  order: OrderItem[];
  AddToOrder: (product: Product) => void;
  inceaseQuantity: (id: Product["id"]) => void;
  decreaseQuantity: (id: Product["id"]) => void;
  removeItem: (id: Product["id"]) => void;
}
export const useStore = create<Store>((set, get) => ({
  order: [],
  AddToOrder: (product) => {
    const { categoryId,  ...data } = product;

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
  //La logica se puede colocar antes o despues
  //Increanse: Logica adentro del set
  //Decrease: Logica por fuera del set (antes del set)
  inceaseQuantity: (id) => {
    set((state) => ({
      order: state.order.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1,
              subtotal: item.price * (item.quantity + 1),
            }
          : item,
      ),
    }));
  },
  decreaseQuantity: (id) => {
    const order = get().order.map((item) =>
      item.id === id
        ? {
            ...item,
            quantity: item.quantity - 1,
            subtotal: item.price * (item.quantity - 1),
          }
        : item,
    );

    set(() => ({
      order: order,
    }));
  },
  removeItem: (id)=>{
    set((state)=> ({
      order: state.order.filter(item => item.id !== id)
    }))
  }
}));
