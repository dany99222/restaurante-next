import EditProductForm from "@/components/products/EditProductForm"
import ProductForm from "@/components/products/ProductForm"
import Heading from "@/components/ui/Heading"
import prisma from "@/src/lib/prisma"
import { notFound } from "next/navigation"


async function getProductById(id:number) {
    const product = await prisma.product.findUnique({
       where:{
        id: id
       } 
    })
    return product
}

export default async function EditProductsPage({params} : {params: {id: string}}) {

    const product = await getProductById(+params.id)
// Si no hay producto redireccionamos 
    if(!product){
        notFound()
    }
    console.log(product)

  return (
    <>
    <Heading>Editar {product.name}</Heading>
    <EditProductForm>
        <ProductForm product={product} />
    </EditProductForm>
    </>
  )
}
