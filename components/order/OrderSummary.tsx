// Si quiero utilizar zustand necesito hacer componentes de cliente
"use client";

import { useStore } from "@/src/store/store";

export default function OrderSummary() {
  const order = useStore((state) => state.order);
  return (
    <aside className="md:h-screen md:overflow-y-scroll md:w-64 lg:w-96 p5">
      <h1 className="text-3xl text-center from-neutral-800  font-bold">
        Mi Pedido
      </h1>

      {order.length === 0 ? (
        <p className="text-center my-10">El carrito esta vacio</p>
      ) : (
        <div className="mt-5">
          <p>Si hay</p>
        </div>
      )}
    </aside>
  );
}
