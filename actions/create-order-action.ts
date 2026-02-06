"use server"

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
    
   } catch (error) {
    console.log(error)
   }
}