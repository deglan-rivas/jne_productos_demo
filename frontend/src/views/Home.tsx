import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchProducts } from "../api";
import ProductCard from "../components/ProductCard";
import type { BaseProduct } from "../interfaces";

const Home = () => {
  const [products, setProducts] = useState<BaseProduct[]>([]);

  useEffect(() => {
    const getProducts = async () => {
      const response = await fetchProducts();
      setProducts(response);
    };
    getProducts();
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-semibold text-gray-800 mb-4 text-center">Lista de Productos</h1>
      <div className="flex justify-center items-center mb-4">
        <Link
          to="/productos/nuevo"
          className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-1 transition duration-200 mx-auto"
        >
          Agregar Nuevo Producto
        </Link>
      </div>
      {
        products.length === 0 ? (
          <div className="text-center text-gray-500 py-8">
            ↖️ Agregue un producto para comenzar ↖️
          </div>
        ) : (
          <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} setProducts={setProducts} />
            ))}
          </div>
        )
      }
    </div>
  );
};

export default Home;
