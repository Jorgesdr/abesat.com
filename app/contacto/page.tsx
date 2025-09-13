import { FaPhone, FaMapMarkerAlt, FaEnvelope, FaClock } from "react-icons/fa"
import FormContact from "../components/FormContact"

export const metadata = {
  title: "Contacto - ABESAT Abogados Accidentes Tráfico Granada",
  description:
    "Contacta con nuestros abogados especialistas en accidentes de tráfico en Granada. Consulta gratuita.",
}

export default function ContactoPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-600 to-primary-800  py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl dark:text-white md:text-5xl font-bold mb-6">
            Contacta con Nosotros
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Estamos aquí para ayudarte. Rellena el formulario o contáctanos
            directamente.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-8">
                Información de Contacto
              </h2>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary-100 dark:bg-primary-900 p-3 rounded-full mr-4">
                    <FaPhone className="text-primary-600 dark:text-primary-400 text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Teléfono</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      <a href="tel:+34696369030" className="hover:underline">
                        696 36 90 30
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary-100 dark:bg-primary-900 p-3 rounded-full mr-4">
                    <FaMapMarkerAlt className="text-primary-600 dark:text-primary-400 text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Dirección</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Plaza del Campillo número 5, 4 J
                    </p>
                    <p className="text-gray-600 dark:text-gray-300">
                      18002 Granada
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary-100 dark:bg-primary-900 p-3 rounded-full mr-4">
                    <FaEnvelope className="text-primary-600 dark:text-primary-400 text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Email</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      <a
                        className="hover:underline"
                        href="mailto:miguelangel@abesat.com"
                      >
                        miguelangel@abesat.com
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary-100 dark:bg-primary-900 p-3 rounded-full mr-4">
                    <FaClock className="text-primary-600 dark:text-primary-400 text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Horario</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Lunes a Viernes: 9:00 - 14:00, 17:00 - 21:00
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md  ">
              <h2 className="text-3xl font-bold mb-8">
                Formulario de Contacto
              </h2>
              <FormContact />
            </div>
          </div>
        </div>
      </section>

      {/* Mapa */}
      <section className="bg-gray-50 dark:bg-gray-900 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Nuestra Ubicación
          </h2>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3178.347316710631!2d-3.59794510000006!3d37.17248319999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x…%3A0x…!2sPlaza%20del%20Campillo%205%2C%204º%20J%2C%2018009%20Granada!5e0!3m2!1ses!2ses!4v1620000000000!5m2!1ses!2ses&markers=color:red%7C37.1724832,-3.5979451"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              className="dark:grayscale dark:opacity-80"
              title="Ubicación de ABESAT en Plaza del Campillo número 5, 4 J, Granada"
            ></iframe>
          </div>
          <div className="mt-4 text-center">
            <p className="text-lg font-medium">
              Plaza del Campillo número 5, 4 J
            </p>
            <p className="text-gray-600 dark:text-gray-400">18002 Granada</p>
            <a
              href="https://www.google.com/maps/place/Pl.+del+Campillo,+5,+Centro,+18009+Granada/@37.1726511,-3.6005512,17z/data=!3m1!4b1!4m6!3m5!1s0xd71fcbc236e9d49:0xb61363df48f4e64b!8m2!3d37.1726469!4d-3.5979763!16s%2Fg%2F11rgg7wbxn?entry=ttu&g_ep=EgoyMDI1MDkxMC4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-600 dark:text-primary-400 hover:underline mt-2 inline-block"
            >
              Ver en Google Maps
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
