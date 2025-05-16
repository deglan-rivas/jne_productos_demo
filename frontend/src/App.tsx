import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import ProductDetails from "./views/ProductDetails";
import NotFound from "./views/NotFound";
import NewProduct from "./views/NewProduct";
import EditProduct from "./views/EditProduct";

const App = () => {
  return (
    <Router>
      {/* add layout to routes */}
      <Routes>
        {/* Página principal con la lista de productos */}
        <Route path="/" element={<Home />} />

        {/* Ruta para ver los detalles de un producto */}
        <Route path="/productos/:id" element={<ProductDetails />} />

        {/* Ruta para agregar un nuevo producto */}
        <Route path="/productos/nuevo" element={<NewProduct />} />

        {/* Ruta para editar un producto */}
        <Route path="/productos/editar/:id" element={<EditProduct />} />

        {/* Ruta para cuando la URL no exista */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
