import { OrderItem } from "@/src/types";
import { formatCurrency } from "@/src/utils";
import { MinusIcon, PlusIcon, XCircleIcon } from "@heroicons/react/16/solid";
import { useStore } from "@/src/store/store";
import { useMemo } from "react";
import Image from "next/image";

type ProductDetailProps = {
  item: OrderItem;
};

const MIN_ITEMS = 1;
const MAX_ITEMS = 5;

export default function ProductDetails({ item }: ProductDetailProps) {
  const increaseQuantity = useStore((state) => state.inceaseQuantity);
  const decreaseQuantity = useStore((state) => state.decreaseQuantity);
  const removeItem = useStore((state) => state.removeItem);
  const disabledDecreaseButton = useMemo(
    () => item.quantity === MIN_ITEMS,
    [item],
  );
  const disabledIncreanseButton = useMemo(
    () => item.quantity === MAX_ITEMS,
    [item],
  );

  return (
    <div className="bg-gradient-to-br from-white to-gray-50 shadow-lg rounded-xl p-5 space-y-4 border border-gray-200 hover:shadow-2xl transition-shadow">
      {/* Contenedor principal: imagen y nombre/boton */}
      <div className="flex flex-col lg:flex-row items-center gap-4">
        {/* Imagen */}
        <div className="flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden">
          <Image
            src={`/products/${item.image}.jpg`}
            alt={`Platillo ${item.name}`}
            width={96}
            height={96}
            quality={75}
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Nombre y botón eliminar */}
        <div className="flex-1 flex justify-between items-start">
          <p className="text-xl font-semibold text-gray-800">{item.name}</p>
          <button
            type="button"
            onClick={() => removeItem(item.id)}
            className="text-red-500 hover:text-red-600 transition-colors"
          >
            <XCircleIcon className="h-8 w-8" />
          </button>
        </div>
      </div>
 {/* Precio */}
        <p className="text-2xl font-extrabold text-blue-600 text-center">
          {formatCurrency(item.price)} 
        </p>
      {/* Controles de cantidad */}
      <div className="flex gap-4 items-center w-fit bg-gray-100 rounded-lg px-4 py-2 shadow-inner">
        <button
          type="button"
          onClick={() => decreaseQuantity(item.id)}
          disabled={disabledDecreaseButton}
          className="disabled:opacity-40 p-1 hover:bg-gray-200 rounded transition"
        >
          <MinusIcon className="h-6 w-6 text-gray-700" />
        </button>

        <p className="text-lg font-bold text-gray-900">{item.quantity}</p>

        <button
          type="button"
          onClick={() => increaseQuantity(item.id)}
          disabled={disabledIncreanseButton}
          className="disabled:opacity-40 p-1 hover:bg-gray-200 rounded transition"
        >
          <PlusIcon className="h-6 w-6 text-gray-700" />
        </button>
      </div>

      {/* Subtotal */}
      <p className="text-lg font-bold text-gray-700">
        Subtotal:{" "}
        <span className="font-normal text-gray-600">
          {formatCurrency(item.subtotal)}
        </span>
      </p>
    </div>
  );
}
