import prisma from "@/src/lib/prisma";
//  Muestra datos en caché inmediatamente (stale)

//  Hace una petición al servidor en segundo plano

// Actualiza la UI cuando llegan los datos nuevos
export async function GET() {
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
  return Response.json(orders);
}
