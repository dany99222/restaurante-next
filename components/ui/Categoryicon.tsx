"use client";
import { Category } from "@/src/generated/prisma/client";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

type CategoryiconProps = {
  category: Category;
};

export default function Categoryicon({ category }: CategoryiconProps) {
  const params = useParams<{ category: string }>();

  return (
    <div
      className={`${category.slug === params.category ? "bg-blue-600 text-white" : "bg-slate-200"} flex items-center gap-5 w-full p-3 shadow  hover:bg-blue-400 transition-colors`}
    >
      <div className="relative size-16 ">
        <Image
          src={`/icon_${category.slug}.svg`}
          alt={`Imagen de la categoria: ${category.name}`}
          fill
          priority
        />
      </div>
      <Link
        href={`/order/${category.slug}`}
        className="text-xl font-bold  p-2 w-full rounded"
      >
        {category.name}
      </Link>
    </div>
  );
}
