"use client";

import { createProduct } from "@/actions/create-product-accion";
import { ProductSchema } from "@/src/schema";
import { useRouter } from "next/navigation";

import { toast } from "react-toastify";

export default function EditProductForm({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter()
  const handleSubmit = async (formData: FormData) => {
    const data = {
      name: formData.get("name"),
      price: formData.get("price"),
      categoryId: formData.get("categoryId"),
      image: formData.get("image"),
    };

    const result = ProductSchema.safeParse(data);

    // Validacion en el cliente
    if (!result.success) {
      result.error.issues.forEach((issue) => {
        toast.error(issue.message);
      });
      return;
    }

    // Lo manda a los actions (server) y retorna respuesta (error)
    const response = await createProduct(result.data);
    // En caso de error en el servidor
    if (response?.errors) {
      response.errors.forEach((issue) => {
        toast.error(issue.message);
      });
      return;
    }
    // En caso de success se agrega en el backend y se ejecuta 
    toast.success('Producto Creado correctamente')
    router.push('/admin/products')
  };

  return (
    <div className="bg-white mt-5 px-5 py-10 rounded-lg shadow-lg max-w-xl mx-auto">
      <form className="space-y-5" action={handleSubmit}>
        {children}
        <input
          type="submit"
          name=""
          id=""
          className="bg-blue-600 hover:bg-blue-700 text-white w-full mt-5 p-3 uppercase font-bold cursor-pointer transition-colors"
          value={"Guardar Cambios"}
        />
      </form>
    </div>
  );
}
