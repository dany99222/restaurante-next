"use client";

import { Product } from "@/src/generated/prisma/client";
import { useStore } from "@/src/store/store";

type AddProductButtonProps = {
  product: Product;
};

// Pasamos el producto al boton
export default function AddProductButton({ product }: AddProductButtonProps) {
  // extraemos la funcion del store para agregar
  const addToOrder = useStore((state) => state.AddToOrder);

  return (
    <button className="bg-blue-500 hover:bg-blue-700 text-white w-full mt-5 p-3 uppercase font-bold cursor-pointer rounded-sm" onClick={()=> addToOrder(product)}>
      Agregar
    </button>
  );
}
