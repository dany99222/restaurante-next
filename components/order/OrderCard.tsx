import { OrderWhitProducts } from "@/src/types";

type OrderCardProps ={
    order: OrderWhitProducts
}

export default function OrderCard({ order }: OrderCardProps) {
  return (
    <section
      aria-labelledby="summary-heading"
      className="mt-16 rounded-xl bg-white border border-gray-200 shadow-md px-6 py-6 sm:p-8 lg:mt-0 space-y-5"
    >
      <p className="text-2xl font-semibold text-gray-900">Cliente: <span className="text-orange-500">{order.name}</span></p>

      <p className="text-lg font-semibold text-gray-800">
        Productos Ordenados:
      </p>

      <dl className="mt-4 space-y-4">
        <div className="flex items-center justify-between border-t border-gray-200 pt-4">
          <dt className="text-base font-medium text-gray-700">
            Total a Pagar:
          </dt>
          <dd className="text-lg font-bold text-indigo-600">{}</dd>
        </div>
      </dl>

      <form>
        <input
          type="submit"
          className="w-full mt-6 rounded-lg bg-blue-600 p-3 text-sm font-bold uppercase text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 cursor-pointer"
          value=" Orden Completada"
        />
      </form>
    </section>
  );
}
