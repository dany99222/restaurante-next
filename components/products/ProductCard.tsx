import { Product } from "@/src/generated/prisma/client";
import { formatCurrency, getImagePath } from "@/src/utils";
import Image from "next/image";
import AddProductButton from "./AddProductButton";

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {

  const imagePath = getImagePath(product.image)


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
          src={imagePath}
          alt={`Imagen platillo ${product.name}`}
          quality={75}
          className="w-full h-full object-cover object-center transition-transform duration-300 ease-out group-hover:scale-105"
        />
      </div>

      <div className="p-5 space-y-1">
        <h3 className="text-lg font-semibold text-neutral-900">
          {product.name}
        </h3>
        <p className="text-neutral-700 font-medium">
          {formatCurrency(product.price)}
        </p>
        <AddProductButton product={product} />
      </div>
    </div>
  );
}
