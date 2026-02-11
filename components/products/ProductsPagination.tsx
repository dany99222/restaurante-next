import Link from "next/link";

type ProductsPaginationProps = {
  page: number;
  totalPages: number;
};

export default function ProductsPagination({
  page,
  totalPages,
}: ProductsPaginationProps) {
  return (
    <nav className="flex justify-center py-10">
      {page > 1 && (
        <Link
          className="bg-white rounded px-4 py-2 text-sm hover:border-gray-500 border transition-all text-gray-600 ring-1 ring-inset ring-gray-300 focus:z-20 focus:outline-offset-9"
          href={`/admin/products?page=${page - 1}`}
        >
          &laquo;
        </Link>
      )}

      {page < totalPages && (
        <Link
          className="bg-white rounded px-4 hover:border-gray-500 border transition-all py-2 text-sm text-gray-600 ring-1 ring-inset ring-gray-300 focus:z-20 focus:outline-offset-9"
          href={`/admin/products?page=${page + 1}`}
        >
          &raquo;
        </Link>
      )}
    </nav>
  );
}
