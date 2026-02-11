import Link from "next/link";

type ProductsPaginationProps = {
  page: number;
  totalPages: number;
};

export default function ProductsPagination({
  page,
  totalPages,
}: ProductsPaginationProps) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav className="flex justify-center py-10 gap-2">
      {page > 1 && (
        <Link
          className="bg-white rounded px-4 py-2 text-sm hover:bg-gray-50 border transition-all text-gray-600 ring-1 ring-inset ring-gray-300 focus:outline-none"
          href={`/admin/products?page=${page - 1}`}
        >
          &laquo;
        </Link>
      )}

      {pages.map((currentPage) => (
        <Link
          key={currentPage}
          href={`/admin/products?page=${currentPage}`}
          className={`${
            currentPage === page 
              ? "bg-blue-600 text-white font-bold" 
              : "bg-white text-gray-900 hover:bg-gray-50"
          } px-4 py-2 text-sm ring-1 ring-inset ring-gray-300 rounded transition-all focus:outline-none`}
        >
          {currentPage}
        </Link>
      ))}

      {page < totalPages && (
        <Link
          className="bg-white rounded px-4 hover:bg-gray-50 border transition-all py-2 text-sm text-gray-600 ring-1 ring-inset ring-gray-300 focus:outline-none"
          href={`/admin/products?page=${page + 1}`}
        >
          &raquo;
        </Link>
      )}
    </nav>
  );
}