// Abrimos la conexion a la bd 
import prisma from "@/src/lib/prisma"

async function getCategories() {
  return await prisma.category.findMany()
}


export default async function OrderSidebar() {
  //Hacemos la consulta de lo que nos queremos traer
    const categories = await getCategories()
  
    console.log(categories);

  return (
   <aside className="md:w-72 md:h-screen bg-white">
        OrderSideBar
        {categories.map((cat)=>(
          <p key={cat.id}>{cat.name}</p>
        ))}
        </aside>
  );
}
