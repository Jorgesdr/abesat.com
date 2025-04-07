import Link from "next/link";
import { FaceFrownIcon } from "@heroicons/react/24/outline";

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <FaceFrownIcon className="h-16 w-16 mx-auto text-gray-400 mb-4" />
      <h1 className="text-4xl font-bold mb-4">404 - Página no encontrada</h1>
      <p className="text-lg mb-8">Lo sentimos, la página que buscas no existe.</p>
      <Link href="/" className="bg-transparent border-2 border-white hover:text-blue hover:bg-gray-100 px-4 py-2 rounded-lg transition-colors">
        Volver a la página de inicio
      </Link>
    </div>
  );
}