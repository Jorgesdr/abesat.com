import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">ABESAT</h3>
            <p className="text-gray-300">
              Especialistas en accidentes de tráfico en Granada. Garantizamos la
              máxima indemnización para nuestros clientes.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  href="/servicios"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Servicios
                </Link>
              </li>
              <li>
                <Link
                  href="/nosotros"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Sobre nosotros
                </Link>
              </li>
              <li>
                <Link
                  href="/contacto"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Contacto
                </Link>
              </li>
              <li>
                <Link
                  href="/politica-privacidad"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Política de Privacidad
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <address className="not-italic text-gray-300">
              <p>Plaza del Campillo número 5, 4 J </p>
              <p>18002 Granada</p>
              <p className="mt-2">
                Tel:{" "}
                <a href="tel:+34696369030" className="hover:underline">
                  696 36 90 30
                </a>
              </p>
              <p>
                Email:{" "}
                <a
                  className="hover:underline"
                  href="mailto:miguelangel@abesat.com"
                >
                  miguelangel@abesat.com
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} ABESAT - Abogados Accidentes de
            Tráfico Granada. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}