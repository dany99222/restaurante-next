import Heading from "@/components/ui/Heading";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4">
      <div className="text-center space-y-6 max-w-md">
        <div className="space-y-3">
          <div className="text-6xl">🔍</div>
          <Heading>Producto No Encontrado</Heading>
          <p className="text-gray-500">
            El producto que buscas no existe o fue eliminado
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/admin/products"
            className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
          >
            Volver a Productos
          </Link>
          <Link
            href="/admin/products/new"
            className="px-6 py-3 border-2 border-gray-300 text-gray-700 font-medium rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-colors"
          >
            Crear Producto
          </Link>
        </div>
      </div>
    </div>
  );
}
