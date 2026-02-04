import { Product } from "@/src/generated/prisma/client";
import { formatCurrency } from "@/src/utils";

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="border shadow border-orange-300">
      <div className="p-5">
        <h3 className="text-2xl font-bold">{product.name}</h3>
        <p>{formatCurrency(product.price)}</p>
      </div>
    </div>
  );
}
