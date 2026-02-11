"use client";
import { SearchShema } from "@/src/schema";
import {  useRouter } from "next/navigation";
import { toast } from "react-toastify";

export default function ProductSearchForm() {

    const router = useRouter()

  const handleSearchForm = (formData: FormData) => {
    const data = {
      search: formData.get("search"),
    };
    const result = SearchShema.safeParse(data);
    
    if (!result.success) {
      result.error.issues.forEach((issue) => {
        toast.error(issue.message);
      });
      return;
    }
    router.push(`/admin/products/search?search=${result.data.search}`);
  };

  return (
    <form action={handleSearchForm} className="flex items-center gap-2">
      <input
        className="p-3 placeholder-gray-400 w-ful rounded-sm "
        type="text"
        placeholder="Buscar Producto"
        name="search"
      />
      <input
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 transition-colors rounded p-2 uppercase text-white cursor-pointer"
        value={"Buscar"}
      />
    </form>
  );
}
