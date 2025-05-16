import React from "react";
import { Link } from "react-router-dom";
import { deleteProduct } from "../api";
import type { BaseProduct } from "../interfaces";
import { toast } from "react-toastify";

interface Props {
  product: BaseProduct;
  setProducts: React.Dispatch<React.SetStateAction<BaseProduct[]>>;
}

const ProductCard: React.FC<Props> = ({ product, setProducts }) => {
  const handleDelete = async (id: string) => {
    if (window.confirm("¿Estás seguro de que deseas eliminar este producto?")) {
      try {
        await deleteProduct(id);  // Llamada a la API para eliminar el producto
        setProducts((prevProducts) => prevProducts.filter((p) => p.id !== id));  // Actualiza el estado local
        // window.location.reload();  // Recarga la página para mostrar la lista actualizada
        toast.success("Producto eliminado correctamente");
      } catch (error) {
        console.error("Error al eliminar el producto:", error);
      }
    }
  };

  return (
    <div className="bg-white rounded-md shadow-md p-6">
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{product.nombre}</h3>
      <p className="text-gray-600 mb-1">Precio Base: <span className="font-medium">{product.precio_base}€</span></p>
      <p className="text-gray-600 mb-1">Precio Final: <span className="font-medium">{product.precio_final}€</span></p>
      <p className="text-gray-600 mb-3">
        Disponibilidad: <span className={product.disponible ? "text-green-500 font-semibold bg-green-100 px-2 py-1 rounded-md" : "text-red-500 font-semibold bg-red-100 px-2 py-1 rounded-md"}>
          {product.disponible 
            ? "Disponible" 
            : "No Disponible"}
        </span>
      </p>

      <div className="mt-4 space-x-2">
        {/* Botón para ver detalles del producto */}
        <Link to={`/productos/${product.id}`} className="inline-block">
          <button className="px-4 py-2 rounded-md bg-blue-500 text-white font-semibold hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 transition duration-200 hover:cursor-pointer">
            Ver Detalles
          </button>
        </Link>

        {/* Botón para editar el producto */}
        <Link to={`/productos/editar/${product.id}`} className="inline-block">
          <button className="px-4 py-2 rounded-md bg-yellow-400 text-gray-800 font-semibold hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-1 transition duration-200 hover:cursor-pointer">
            Editar
          </button>
        </Link>

        {/* Botón para eliminar el producto */}
        <button
          onClick={() => handleDelete(product.id)}
          className="px-4 py-2 rounded-md bg-red-500 text-white font-semibold hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-1 transition duration-200 hover:cursor-pointer">
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
