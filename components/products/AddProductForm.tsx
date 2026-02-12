import ProductForm from "./ProductForm";

export default function AddProductForm() {
  return (
    <div className="bg-white mt-10 px-5 py-10 rounded shadow-lg max-w-3xl mx-auto">
      <form className="space-y-5">
        <ProductForm />
        <input
          type="submit"
          name=""
          id=""
          className="bg-blue-600 hover:bg-blue-700 text-white w-full mt-5 p-3 uppercase font-bold cursor-pointer transition-colors"
          value={"Registrar Producto"}
        />
      </form>
    </div>
  );
}
