import {z} from 'zod'

export const OrderShema = z.object({
    name: z.string().min(1, "Tu nombre Es Oblogatorio")
})