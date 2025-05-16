import ProductForm from "../components/ProductForm";
import BackButton from "../components/BackButton";

const NewProduct = () => {
  return (
    <div className="container mx-auto p-6">
      <div className="flex flex-col gap-4 justify-around items-center mb-6"> 
        <h1 className="text-2xl font-semibold text-gray-800">Nuevo Producto</h1>
        <BackButton />
      </div>

      <ProductForm />
    </div>
  );
};

export default NewProduct;