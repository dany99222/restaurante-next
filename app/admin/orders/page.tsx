
import OrderCard from "@/components/order/OrderCard";
import Heading from "@/components/ui/Heading";
import prisma from "@/src/lib/prisma";
import { revalidatePath } from "next/cache";
import React from "react";


async function getProducts() {
  const orders = await prisma.order.findMany({
    where: {
      status: false,
    },
    include: {
      orderProducts: {
        include: {
          product: true,
        },
      },
    },
  });
  return orders;
}

export default async function OrdersPage() {
  const orders = await getProducts();

  //Actualizacion de la cache
  const refreshOrders = async () => {
    "use server";
   
    revalidatePath("/admin/orders");
  };

  return (
    <>
      <Heading>Admistra Ordenes</Heading>
      <form action={refreshOrders}>
        <input
          className="inline-flex max-w-60 items-center gap-2 px-4 py-2 bg-blue-600 rounded text-white hover:bg-blue-700 transition-colors"
          type="submit"
          value={"Actualizar Ordenes"}
        />
      </form>

      {orders.length ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-5 mt-5">
          {orders.map((order) => (
            <OrderCard key={order.id} order={order} />
          ))}
        </div>
      ) : (
        <p className="text-center">No Existen Ordenes Pendientes</p>
      )}
    </>
  );
}
