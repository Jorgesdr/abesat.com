

import { FaPhone, FaMapMarkerAlt, FaEnvelope, FaClock } from 'react-icons/fa';
import { createContact } from '../lib/actions';

export const metadata = {
  title: "Contacto - ABESAT Abogados Accidentes Tráfico Granada",
  description: "Contacta con nuestros abogados especialistas en accidentes de tráfico en Granada. Consulta gratuita.",
};

export default function ContactoPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contacta con Nosotros</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Estamos aquí para ayudarte. Rellena el formulario o contáctanos directamente.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-8">Información de Contacto</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary-100 dark:bg-primary-900 p-3 rounded-full mr-4">
                    <FaPhone className="text-primary-600 dark:text-primary-400 text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Teléfono</h3>
                    <p className="text-gray-600 dark:text-gray-300"><a href="tel:+34696369030" className="hover:underline">696 36 90 30</a></p>                    
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary-100 dark:bg-primary-900 p-3 rounded-full mr-4">
                    <FaMapMarkerAlt className="text-primary-600 dark:text-primary-400 text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Dirección</h3>
                    <p className="text-gray-600 dark:text-gray-300">Calle Recogidas, nº8 4ºB,Centro</p>
                    <p className="text-gray-600 dark:text-gray-300">18002 Granada</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary-100 dark:bg-primary-900 p-3 rounded-full mr-4">
                    <FaEnvelope className="text-primary-600 dark:text-primary-400 text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Email</h3>
                    <p className="text-gray-600 dark:text-gray-300"><a className="hover:underline" href="mailto:miguelangel@abesat.com">miguelangel@abesat.com</a></p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary-100 dark:bg-primary-900 p-3 rounded-full mr-4">
                    <FaClock className="text-primary-600 dark:text-primary-400 text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Horario</h3>
                    <p className="text-gray-600 dark:text-gray-300">Lunes a Viernes: 9:00 - 14:00, 17:00 - 21:00</p>                    
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-8">Formulario de Contacto</h2>
              
              <form action={createContact} className="space-y-6">
                <div>
                  <label htmlFor="nombre" className="block text-gray-700 dark:text-gray-300 mb-2">Nombre completo *</label>
                  <input 
                    type="text" 
                    id="nombre" 
                    name="nombre" 
                    required 
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-gray-700"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 mb-2">Email *</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    required 
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-gray-700"
                  />
                </div>

                <div>
                  <label htmlFor="telefono" className="block text-gray-700 dark:text-gray-300 mb-2">Teléfono *</label>
                  <input 
                    type="tel" 
                    id="telefono" 
                    name="telefono" 
                    required 
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-gray-700"
                  />
                </div>

                <div>
                  <label htmlFor="asunto" className="block text-gray-700 dark:text-gray-300 mb-2">Asunto *</label>
                  <select 
                    id="asunto" 
                    name="asunto" 
                    required 
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-gray-700"
                  >
                    <option value="">Seleccione un asunto</option>
                    <option value="accidente">Accidente de tráfico</option>
                    <option value="indemnizacion">Reclamación de indemnización</option>
                    <option value="consulta">Consulta legal</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="mensaje" className="block text-gray-700 dark:text-gray-300 mb-2">Mensaje *</label>
                  <textarea 
                    id="mensaje" 
                    name="mensaje" 
                    rows={5} 
                    required 
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-gray-700"
                  ></textarea>
                </div>

                <div className="flex items-center">
                  <input 
                    type="checkbox" 
                    id="privacidad" 
                    name="privacidad" 
                    required 
                    className="mr-2"
                  />
                  <label htmlFor="privacidad" className="text-gray-700 dark:text-gray-300 text-sm">
                    He leído y acepto la <a href="/politica-privacidad" className="text-primary-600 dark:text-primary-400 hover:underline">Política de Privacidad</a> *
                  </label>
                </div>

                <button 
                  type="submit" 
                  className="bg-primary-600 border-white border-2 hover:bg-gray-100 hover:cursor-pointer hover:text-blue dark:bg-primary-500 dark:hover:bg-primary-600 text-white px-6 py-3 rounded-lg text-lg font-semibold w-full transition-colors"
                >
                  Enviar Mensaje
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Mapa */}
       <section className="bg-gray-100 dark:bg-gray-900 py-12">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold mb-8 text-center">Nuestra Ubicación</h2>
    <div className="rounded-lg overflow-hidden shadow-lg">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3178.347316710631!2d-3.598545924270271!3d37.17739277209651!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd71fcb0a5e47c31%3A0x6a2b5d3b3e3a3b1d!2sCalle%20Recogidas%2C%208%2C%2018001%20Granada!5e0!3m2!1ses!2ses!4v1620000000000!5m2!1ses!2ses&markers=color:red%7C37.1773928,-3.595971"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        className="dark:grayscale dark:opacity-80"
        title="Ubicación de ABESAT en Calle Recogidas, 8, Granada"
      ></iframe>
    </div>
    <div className="mt-4 text-center">
      <p className="text-lg font-medium">Calle Recogidas, Nº8</p>
      <p className="text-gray-600 dark:text-gray-400">18002 Granada</p>
      <a 
        href="https://www.google.com/maps/place/Calle+Recogidas,+8,+18001+Granada/@37.1773928,-3.5985459,17z/data=!3m1!4b1!4m6!3m5!1s0xd71fcb0a5e47c31:0x6a2b5d3b3e3a3b1d!8m2!3d37.1773928!4d-3.595971!16s%2Fg%2F11c1fl3k9f?entry=ttu"
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
  );
}