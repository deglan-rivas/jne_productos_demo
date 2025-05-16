import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createProduct } from "../api";
import { ClothesSize, ProductType, type NewProductForm } from "../interfaces";
import { toast } from "react-toastify";

const ProductForm = () => {
  const navigate = useNavigate();

  const [product, setProduct] = useState<NewProductForm>({
    nombre: "",
    tipo: ProductType.CLOTHES,
    precio_base: 0,
    stock: 0,
    talla: ClothesSize.S,
    en_rebaja: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value
    }));
  };

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;
    setProduct(prevProduct => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!product.nombre.trim()) {
      toast.error("El nombre del producto no puede estar vacío.");
      return;
    }

    if (product.precio_base <= 0) {
      toast.error("El precio base debe ser mayor que cero.");
      return;
    }

    if (product.stock < 0) {
      toast.error("El stock no puede ser negativo.");
      return;
    }

    if (product.tipo === ProductType.ELECTRONIC && !product.garantia_meses ) {
      toast.error("La garantía no puede estar vacía.");
      return;
    }

    if (product.tipo === ProductType.ELECTRONIC && product.garantia_meses < 6 ) {
      toast.error("La garantía debe ser de al menos 6 meses.");
      return;
    }

    if (product.tipo === ProductType.ELECTRONIC && !product.fecha_fabricacion) {
      toast.error("La fecha de fabricación es obligatoria.");
      return;
    }

    if (product.tipo === ProductType.FOOD && !product.fecha_caducidad) {
      toast.error("La fecha de caducidad es obligatoria.");
      return;
    }

    try {
      await createProduct(product);
      navigate("/");
      toast.success("Producto creado con éxito.");
    } catch (error) {
      console.error("Error al crear el producto:", error);
    }
  };

  return (
    <div className="container mx-auto p-6 bg-white rounded-md shadow-md">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="nombre" className="block text-gray-700 text-sm font-bold mb-2">Nombre:</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={product.nombre}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div>
          <label htmlFor="tipo" className="block text-gray-700 text-sm font-bold mb-2">Tipo:</label>
          <select
            id="tipo"
            name="tipo"
            value={product.tipo}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="ropa">Ropa</option>
            <option value="electronico">Electrónico</option>
            <option value="alimento">Alimento</option>
          </select>
        </div>

        <div>
          <label htmlFor="precio_base" className="block text-gray-700 text-sm font-bold mb-2">Precio Base:</label>
          <input
            type="number"
            step={10}
            id="precio_base"
            name="precio_base"
            value={product.precio_base}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div>
          <label htmlFor="stock" className="block text-gray-700 text-sm font-bold mb-2">Stock:</label>
          <input
            type="number"
            step={2}
            id="stock"
            name="stock"
            value={product.stock}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        {product.tipo === ProductType.CLOTHES && (
          <>
            <div>
              <label htmlFor="talla" className="block text-gray-700 text-sm font-bold mb-2">Talla:</label>
              <select
                id="talla"
                name="talla"
                value={product.talla}
                onChange={handleSelectChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="" disabled>Seleccionar Talla</option>
                <option value={ClothesSize.S}>{ClothesSize.S}</option>
                <option value={ClothesSize.M}>{ClothesSize.M}</option>
                <option value={ClothesSize.L}>{ClothesSize.L}</option>
                <option value={ClothesSize.XL}>{ClothesSize.XL}</option>
              </select>
            </div>
            <div className="flex items-center">
              <label htmlFor="en_rebaja" className="block text-gray-700 text-sm font-bold mr-2">En Rebaja:</label>
              <input
                type="checkbox"
                id="en_rebaja"
                name="en_rebaja"
                checked={product.en_rebaja}
                onChange={(e) => setProduct({ ...product, en_rebaja: e.target.checked })}
                className="form-checkbox h-5 w-5 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
            </div>
          </>
        )}

        {product.tipo === ProductType.ELECTRONIC && (
          <>
            <div>
              <label htmlFor="garantia_meses" className="block text-gray-700 text-sm font-bold mb-2">Garantía (meses):</label>
              <input
                type="number"
                step={2}
                id="garantia_meses"
                name="garantia_meses"
                value={product.garantia_meses}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div>
              <label htmlFor="fecha_fabricacion" className="block text-gray-700 text-sm font-bold mb-2">Fecha de Fabricación:</label>
              <input
                type="date"
                id="fecha_fabricacion"
                name="fecha_fabricacion"
                value={product.fecha_fabricacion}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
          </>
        )}

        {product.tipo === ProductType.FOOD && (
          <div>
            <label htmlFor="fecha_caducidad" className="block text-gray-700 text-sm font-bold mb-2">Fecha de Caducidad:</label>
            <input
              type="date"
              id="fecha_caducidad"
              name="fecha_caducidad"
              value={product.fecha_caducidad}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
        )}

        <button
          type="submit"
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:cursor-pointer"
        >
          Crear Producto
        </button>
      </form>
    </div>
  );
};

export default ProductForm;