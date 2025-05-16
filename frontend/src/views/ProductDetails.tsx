import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchProductById } from "../api/index";
import type { Product } from "../interfaces";
import BackButton from "../components/BackButton";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    const getProduct = async () => {
      if (id) {
        const response = await fetchProductById(id);
        setProduct(response);
      }
    };
    getProduct();
  }, [id]);

  if (!product) {
    return <div className="container mx-auto p-6 text-center">Cargando...</div>;
  }

  return (
    <div className="flex flex-col h-screen justify-center items-center bg-gray-100">
    <div className="mx-auto py-6 px-12 bg-white rounded-md shadow-md">
      <h1 className="text-3xl font-semibold text-gray-800 mb-4">{product.nombre}</h1>

      <div className="mb-4">
        <p className="text-gray-600 mb-1">Stock: <span className="font-medium">{product.stock} unidad(es)</span></p>
        <p className="text-gray-600 mb-1">Tipo: <span className="font-medium">{product.tipo}</span></p>
        <p className="text-gray-600 mb-1">Precio Base: <span className="font-medium">{product.precio_base}€</span></p>
        <p className="text-gray-600 mb-1">Precio Final: <span className="font-medium">{product.precio_final}€</span></p>
        <p className="text-gray-600">
          Disponibilidad: <span className={product.disponible ? "text-green-500 font-semibold" : "text-red-500 font-semibold"}>
            {product.disponible ? "Disponible" : "No Disponible"}
          </span>
        </p>
      </div>

      <div className="mb-4">
        {product.tipo === "electronico" && (
          <>
            <p className="text-gray-600 mb-1">Garantía: <span className="font-medium">{product.garantia_meses} meses</span></p>
            <p className="text-gray-600">Fabricación: <span className="font-medium">{new Date(product.fecha_fabricacion).toLocaleDateString()}</span></p>
          </>
        )}
        {product.tipo === "alimento" && (
          <>
            <p className="text-gray-600">Caducidad: <span className="font-medium">{new Date(product.fecha_caducidad).toLocaleDateString()}</span></p>
          </>
        )}
        {product.tipo === "ropa" && (
          <>
            <p className="text-gray-600 mb-1">Talla: <span className="font-medium">{product.talla}</span></p>
            <p className="text-gray-600">¿Se encuentra en rebaja?: <span className="font-medium">{product.en_rebaja ? "Sí" : "No"}</span></p>
          </>
        )}
      </div>

      <BackButton />
    </div>
    </div>
  );
};

export default ProductDetails;