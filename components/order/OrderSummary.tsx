// Si quiero utilizar zustand necesito hacer componentes de cliente
"use client";

import { useStore } from "@/src/store/store";
import ProductDetails from "./ProductDetails";

export default function OrderSummary() {
  const order = useStore((state) => state.order);
  return (
    <aside className="md:h-screen md:overflow-y-scroll md:w-64 lg:w-96 p5">
      <h1 className="text-3xl text-center from-neutral-800  font-bold my-5">
        Mi Pedido
      </h1>

      {order.length === 0 ? (
        <p className="text-center my-10">El carrito esta vacio</p>
      ) : (
        <div className="mt-5">
          {order.map(item => (
           <ProductDetails key={item.id} item={item} /> 
          ))}
        </div>
      )}
    </aside>
  );
}
