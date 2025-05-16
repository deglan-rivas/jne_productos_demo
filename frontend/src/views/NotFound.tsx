import BackButton from "../components/BackButton";

const NotFound = () => {
  return (
    <div className="flex flex-col h-screen justify-center items-center bg-gray-100 text-center">
      <h1 className="text-9xl font-bold text-red-500 tracking-tight">404</h1>
      <p className="text-xl text-gray-600 mb-4">Página No Encontrada</p>
      <BackButton />
    </div>
  );
};

export default NotFound;