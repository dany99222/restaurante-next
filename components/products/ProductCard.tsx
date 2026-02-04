import { Product } from "@/src/generated/prisma/client";
import { formatCurrency } from "@/src/utils";
import Image from "next/image";

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div
      className="rounded-xl border border-neutral-200 bg-white shadow-sm 
                transition-all duration-200 
                hover:shadow-lg hover:bg-neutral-200"
    >
      <div className="overflow-hidden rounded-xl group">
        <Image
          width={400}
          height={500}
          src={`/products/${product.image}.jpg`}
          alt={`Imagen platillo ${product.name}`}
          quality={75}
          className="transition-transform duration-300 ease-out group-hover:scale-105"
        />
      </div>
      <div className="p-5 space-y-1">
        <h3 className="text-lg font-semibold text-neutral-900">
          {product.name}
        </h3>
        <p className="text-neutral-700 font-medium">
          {formatCurrency(product.price)}
        </p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white w-full mt-5 p-3 uppercase font-bold cursor-pointer rounded-sm">
          Agregar
        </button>
      </div>
    </div>
  );
}
