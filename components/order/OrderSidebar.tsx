// Abrimos la conexion a la bd
import prisma from "@/src/lib/prisma";
import Categoryicon from "../ui/Categoryicon";
import Logo from "../ui/Logo";

async function getCategories() {
  return await prisma.category.findMany();
}

export default async function OrderSidebar() {
  //Hacemos la consulta de lo que nos queremos traer
  const categories = await getCategories();

  console.log(categories);

  return (
    <aside className="md:w-72 md:h-screen bg-gray-100">
      <Logo />
      <nav className="mt-10 flex flex-col gap-4">
        {categories.map((category) => (
          <Categoryicon key={category.id} category={category} />
          // <p key={cat.id}>{cat.name}</p> 
        ))}
      </nav>
    </aside>
  );
}
