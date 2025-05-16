import { Link } from "react-router-dom";

export default function BackButton() {
  return (
    <Link
        to="/"
        className="inline-block px-6 py-3 rounded-md bg-indigo-600 text-white font-semibold shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
        Volver a la página principal
    </Link>
  );
}