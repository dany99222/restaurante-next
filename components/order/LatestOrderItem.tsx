import { OrderWhitProducts } from "@/src/types";
import { formatCurrency, getImagePath } from "@/src/utils";
import Image from "next/image";

type LatestOrderItemProps = {
  order: OrderWhitProducts;
};

export default function LatestOrderItem({ order }: LatestOrderItemProps) {
  return (
   <div className="bg-white shadow-md rounded-xl border border-gray-200 p-6 space-y-6">
  {/* Header */}
  <div className="pb-4 border-b border-gray-200">
    <p className="text-sm font-medium text-gray-500 mb-1">Cliente</p>
    <p className="text-2xl font-bold text-gray-900">{order.name}</p>
  </div>

  {/* Lista de productos */}
  <div>
    <p className="text-sm font-semibold text-gray-700 mb-3">
      Productos Ordenados ({order.orderProducts.length})
    </p>
    <ul className="space-y-3" role="list">
      {order.orderProducts.map((product) => (
        <li 
          key={product.id} 
          className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
        >
          {/* Imagen */}
          <div className="relative w-14 h-14 flex-shrink-0 bg-white rounded-md overflow-hidden border border-gray-200">
            <Image
              fill
              className="object-cover"
              src={getImagePath(product.product.image)}
              alt={product.product.name}
            />
          </div>

          {/* Info del producto */}
          <div className="flex-1 min-w-0">
            <p className="text-base font-medium text-gray-900 truncate">
              {product.product.name}
            </p>
            <p className="text-sm text-gray-500">
              {formatCurrency(product.product.price)} c/u
            </p>
          </div>

          {/* Cantidad */}
          <div className="flex-shrink-0">
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-700 text-sm font-bold">
              {product.quantity}
            </span>
          </div>
        </li>
      ))}
    </ul>
  </div>

  {/* Total (opcional) */}
  <div className="pt-4 border-t border-gray-200">
    <div className="flex items-center justify-between">
      <p className="text-base font-semibold text-gray-700">Total</p>
      <p className="text-2xl font-bold text-blue-600">
        {formatCurrency(order.total)}
      </p>
    </div>
  </div>
</div>
  );
}
