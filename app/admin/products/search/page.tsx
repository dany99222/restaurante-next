import ProductSearchForm from "@/components/products/ProductSearchForm";
import ProductTable from "@/components/products/ProductsTable";
import Heading from "@/components/ui/Heading";
import prisma from "@/src/lib/prisma";

async function searchProducts(searchTerm: string) {
  const products = await prisma.product.findMany({
    where: {
      name: {
        contains: searchTerm,
        mode: "insensitive",
      },
    },
    include: {
      category: true,
    },
  });
  return products;
}

export default async function SearchPage({
  searchParams,
}: {
  searchParams: { search: string };
}) {
  const products = await searchProducts(searchParams.search);
  return (
    <>
      <Heading>
        Resultados de busqueda{" "}
        <span className="text-4xl uppercase text-emerald-500">
          {searchParams.search}
        </span>{" "}
      </Heading>
      <div className="flex flex-col lg:flex-row lg:justify-around gap-5 lg:gap-0">
        <ProductSearchForm />
      </div>
      {products.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-gray-600 text-lg">
            No se encontraron productos
            {searchParams.search && (
              <span className="block font-semibold text-gray-900 mt-2">
                 {`"${searchParams.search}"`} 
              </span>
            )}
          </p>
          <p className="text-gray-500 mt-4 text-sm">
            Intenta buscando con otras palabras clave
          </p>
        </div>
      ) : (
        <ProductTable products={products} />
      )}
    </>
  );
}
