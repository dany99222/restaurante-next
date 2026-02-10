import { completedOrder } from "@/actions/complete-order-action";
import { OrderWhitProducts } from "@/src/types";
import { formatCurrency } from "@/src/utils";
import Image from "next/image";

type OrderCardProps = {
  order: OrderWhitProducts;
};

export default function OrderCard({ order }: OrderCardProps) {
// Si el componente es de cliente el action se crea a parte 
// Si el componente es de servidor se puede crear la funcion en su mismo archivo, aun asi se especifica en la funcion la directiva "use server", tambien se puede crear en un archivo externo



  return (
    <section
      aria-labelledby="summary-heading"
      className="mt-16 rounded-xl bg-white border border-gray-200 shadow-md px-6 py-6 sm:p-8 lg:mt-0 space-y-5"
    >
      <p className="text-2xl font-semibold text-gray-900">
        Cliente: <span className="text-orange-500">{order.name}</span>
      </p>

      <p className="text-lg font-semibold text-gray-800">
        Productos Ordenados:
      </p>

      <dl className="mt-4 space-y-4">
        {order.orderProducts.map((product) => (
          <div
            key={product.id}
            className="grid grid-cols-[auto_auto_1fr_auto] items-center gap-4 border-t border-gray-300 pt-4"
          >
            <dt className="text-sm font-medium text-gray-600">
              <span className="inline-flex items-center justify-center rounded-full bg-gray-100 px-2 py-1 text-xs font-semibold text-gray-700">
                x{product.quantity}
              </span>
            </dt>

            <dd className="text-xs font-bold text-gray-700 whitespace-nowrap">
              {formatCurrency(product.product.price)}
            </dd>

            <dd className="text-sm font-medium text-gray-900">
              {product.product.name}
            </dd>

            <div className="relative size-16">
              <Image
                className="rounded-sm object-cover"
                fill
                src={`/products/${product.product.image}.jpg`}
                alt={`Imagen sobre ${product.product.name}`}
              />
            </div>
          </div>
        ))}

        <div className="flex items-center justify-between border-t border-gray-200 pt-4">
          <dt className="text-base font-medium text-gray-700">
            Total a Pagar:
          </dt>
          <dd className="text-lg font-bold text-indigo-600">
            {formatCurrency(order.total)}
          </dd>
        </div>
      </dl>

      <form action={completedOrder}>
        {/* Input para mandar el id de la orden  */}
        <input type="hidden" value={order.id} name="order_id" />
        <input
          type="submit"
          className="w-full mt-6 rounded-lg bg-blue-600 p-3 text-sm font-bold uppercase text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 cursor-pointer"
          value=" Orden Completada"
        />
      </form>
    </section>
  );
}
