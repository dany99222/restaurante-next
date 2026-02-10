import { z } from "zod";

export const OrderShema = z.object({
  name: z.string().min(1, "Tu nombre Es Oblogatorio"),
  total: z.number().min(1, "Hay errores en la orden"),
  order: z.array(
    z.object({
      id: z.number(),
      name: z.string(),
      price: z.number(),
      quantity: z.number(),
      subtotal: z.number(),
    }),
  ),
});

// Validamos el id 
// Transformamos el id a entero 
// Verificamos que el valor sea mayor a 0 
export const OrderIdSchema = z.object({
  orderId: z
    .string()
    .transform((value) => parseInt(value))
    .refine((value) => value > 0, { message: "Hay Errores" }),
});
