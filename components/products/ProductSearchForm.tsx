export default function ProductSearchForm() {
  return (
    <form className="flex items-center gap-2">
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
