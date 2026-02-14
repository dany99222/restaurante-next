"use server";

import prisma from "@/src/lib/prisma";
import { revalidatePath } from "next/cache";

export async function deleteProduct(productId: number) {
  await prisma.product.delete({
    where: { id: productId },
  });

  revalidatePath("/admin/products");
}
