"use client";
import useSWR from "swr";

import { OrderWhitProducts } from "@/src/types";
import LatestOrderItem from "@/components/order/LatestOrderItem";

export default function OrdersPage() {
  const url = "/orders/api";
  const fetcher = () =>
    fetch(url)
      .then((res) => res.json())
      .then((data) => data);
  const { data, isLoading } = useSWR<OrderWhitProducts[]>(url, fetcher, {
    refreshInterval: 60000,
    revalidateOnFocus: false,
  });
  if (isLoading)
    return (
      <div className="h-screen flex items-center justify-center">
        <p className="text-5xl text-neutral-600 font-bold">Cargando ...</p>
      </div>
    );
  if (data)
    return (
      <div className="min-h-screen bg-gray-50 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header con badge */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              {data.length}{" "}
              {data.length === 1 ? "Orden Lista" : "Órdenes Listas"}
            </div>

            <h1 className="text-5xl font-black text-gray-900">
              Órdenes Completadas
            </h1>
          </div>

          {/* Grid de órdenes */}
          {data.length ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {data.map((order) => (
                <LatestOrderItem key={order.id} order={order} />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-20 bg-white rounded-2xl shadow-sm border border-gray-200">
              <div className="text-6xl mb-4">📋</div>
              <p className="text-gray-600 text-xl font-semibold mb-2">
                No hay órdenes listas
              </p>
              <p className="text-gray-400 text-sm">
                Las órdenes completadas aparecerán aquí
              </p>
            </div>
          )}
        </div>
      </div>
    );
}
