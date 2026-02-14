"use client";

import { useState, useTransition } from "react";
import { deleteProduct } from "@/actions/delete-product-action";

type Props = {
  productId: number;
  productName: string;
};

export default function DeleteProductModal({ productId, productName }: Props) {
  const [open, setOpen] = useState(false);
  const [isPending, startTransition] = useTransition();

  const handleDelete = () => {
    startTransition(async () => {
      await deleteProduct(productId);
      setOpen(false);
    });
  };

  return (
    <>
    
      <button
        onClick={() => setOpen(true)}
        className="inline-flex items-center gap-1 p-2 rounded text-white font-bold bg-red-600 hover:bg-red-800 transition-colors"
      >
        Eliminar
      </button>

   
     {open && (
  <div className="fixed inset-0 z-50 flex items-center justify-center">
   
    <div
      className="absolute inset-0 bg-black/60 backdrop-blur-sm"
      onClick={() => setOpen(false)}
    />

 
    <div className="relative w-full max-w-lg mx-4 bg-white rounded-2xl shadow-2xl p-8">
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 text-center">
          Confirmar eliminación
        </h2>

        <p className="text-gray-600 text-center leading-relaxed">
          ¿Estás seguro de eliminar
          <span className="block mt-2 font-semibold text-gray-900">
            {productName}
          </span>
          ?
        </p>

        <div className="flex justify-center gap-4 pt-6">
          <button
            onClick={() => setOpen(false)}
            className="px-5 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition"
          >
            Cancelar
          </button>

          <button
            onClick={handleDelete}
            disabled={isPending}
            className="px-5 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700 transition disabled:opacity-50"
          >
            {isPending ? "Eliminando..." : "Confirmar"}
          </button>
        </div>
      </div>
    </div>
  </div>
)}

    </>
  );
}
