// Si quiero utilizar zustand necesito hacer componentes de cliente
"use client";

import { useStore } from "@/src/store/store";
import ProductDetails from "./ProductDetails";
import { useMemo } from "react";
import { formatCurrency } from "@/src/utils";
import { createOrder } from "@/actions/create-order";
import { OrderShema } from "@/src/schema";
import { toast } from "react-toastify";

export default function OrderSummary() {
  const order = useStore((state) => state.order);
  const total = useMemo(
    () => order.reduce((total, item) => total + item.quantity * item.price, 0),
    [order],
  );
  const handleCreateOrder = (formData: FormData) => {
    //  De esta forma se toman los valores de un form
    // formData.get('name')
    const data = {
      name: formData.get("name"),
    };

    const result = OrderShema.safeParse(data)
    if(!result.success){
      result.error.issues.forEach((issue)=>{
        toast.error(issue.message)
      })
    }
    return
    createOrder()
  };
  return (
    <aside className="md:h-screen md:overflow-y-scroll md:w-64 lg:w-96 p5">
      <h1 className="text-3xl text-center from-neutral-800  font-bold my-5">
        Mi Pedido
      </h1>

      {order.length === 0 ? (
        <p className="text-center my-10">Agrega Articulos</p>
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
              <span>Total a pagar: </span>
              <span className="font-bold text-amber-400 text-2xl">
                {formatCurrency(total)}
              </span>
            </p>
            <form action={handleCreateOrder} className="w-full mt-10 space-y-5">
              <input
                type="text"
                placeholder="Tu Nombre"
                className="bg-white rounded p-2 w-full text-black"
                name="name"
              />
              <input
                type="submit"
                className="py-2 font-bold rounded uppercase text-white shadow transition-colors hover:shadow-white bg-black w-full text-cener cursor-pointer"
                value="Confirmar Pedido"
              />
            </form>
          </div>
        </div>
      )}
    </aside>
  );
}
