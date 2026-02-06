"use server"

import prisma from "@/src/lib/prisma"
import { OrderShema } from "@/src/schema"

export async function createOrder(data: unknown) {
    const result = OrderShema.safeParse(data)

    // En caso de que haya error en el servidor 
   if(!result.success){
    return {
        errors: result.error.issues
    }
   }

//    En caso de que sean correctos los datos 
   try {
    await prisma.order.create({
        data:{
            name: result.data.name,
            total: result.data.total,
            orderProducts: { 
                create: result.data.order.map(product =>({
                    productId: product.id,
                    quantity: product.quantity
                }))
            }
        }
    })
   } catch (error) {
    console.log(error)
   }
}