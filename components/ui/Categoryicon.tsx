import { Category } from "@/src/generated/prisma/client"


type CategoryiconProps ={
    category: Category
}


export default function Categoryicon({category}: CategoryiconProps) {
  return (
    <div>{category.name}</div>
  )
}
