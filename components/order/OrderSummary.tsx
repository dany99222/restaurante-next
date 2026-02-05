// Si quiero utilizar zustand necesito hacer componentes de cliente
"use client";

import { useStore } from "@/src/store/store";
import ProductDetails from "./ProductDetails";
import { useMemo } from "react";
import { formatCurrency } from "@/src/utils";
import { ArrowLongRightIcon } from "@heroicons/react/16/solid";

export default function OrderSummary() {
  const order = useStore((state) => state.order);
  const total = useMemo(
    () => order.reduce((total, item) => total + item.quantity * item.price, 0),
    [order],
  );
  return (
    <aside className="md:h-screen md:overflow-y-scroll md:w-64 lg:w-96 p5">
      <h1 className="text-3xl text-center from-neutral-800  font-bold my-5">
        Mi Pedido
      </h1>

      {order.length === 0 ? (
        <p className="text-center my-10">El carrito está vacío</p>
      ) : (
        <div className="flex flex-col h-screen">
          {/* LISTA CON SCROLL */}
          <div className="flex-1 overflow-y-auto mt-5 space-y-3 px-2">
            {order.map((item) => (
              <ProductDetails key={item.id} item={item} />
            ))}
          </div>

          {/* TOTAL FIJO */}
          <div className="sticky bottom-0 rounded  bg-neutral-800 text-white p-5 shadow-lg border-t border-neutral-700">
            <p className="text-lg flex justify-around items-center">
              <span>Total a pagar</span>
              <span className="font-bold text-amber-400 text-2xl">
                {formatCurrency(total)}
              </span>
              <button>
                <ArrowLongRightIcon className="size-14 p-1 hover:border-gray-300 border border-transparent rounded" />
              </button>
            </p>
          </div>
        </div>
      )}
    </aside>
  );
}
