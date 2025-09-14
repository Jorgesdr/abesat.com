//accidentes-trafico-granada

import Link from "next/link"
import Head from "next/head"

const oldmetadata = {
  title: "Accidentes de Tráfico en Granada | ABESAT Abogados",
  description:
    "Abogados especialistas en accidentes de tráfico en Granada. Asistencia legal inmediata.",
}

const oldmetadata1 = {
  title: "Abogados Tráfico Granada -  Especialistas en Accidentes | ABESAT",
  description:
    "¿Buscas abogados de tráfico en Granada? En ABESAT Abogados te ayudamos con accidentes, indemnizaciones y defensa penal. Consulta gratuita.",
}

export const metadata = {
  title:
    "Abogado Accidente Tráfico Granada ✅ Especialista en Indemnizaciones | ABESAT",
  description:
    "¿Buscas ABOGADOS de tráfico en GRANADA? ⭐ Especialistas en ACCIDENTES e INDEMNIZACIONES. Consulta GRATUITa. +500 casos resueltos. ¡Te ayudamos!",
}

export default function AccidentesTraficoPage() {
  ;<Head>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LegalService",
          name: "ABESAT Abogados",
          image: "https://abesat.com/images/abesatico.webp",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Plaza del Campillo número 5, 4 J",
            addressLocality: "Granada",
            addressRegion: "GR",
            postalCode: "18009",
            addressCountry: "ES",
          },
          url: "https://abesat.com/accidentes-trafico-granada",
          telephone: "+34 696 36 90 30",
          priceRange: "€€",
        }),
      }}
    />
  </Head>
  return (
    <main>
      {/* Hero Section */}
      {/* <section className="relative bg-gradient-to-r from-primary-600 to-primary-800 dark:text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Abogados de Tráfico en Granada - Expertos en Accidentes
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Asistencia legal especializada para víctimas de accidentes de
            circulación
          </p>
        </div>
      </section> */}
      <section className="relative bg-gradient-to-r from-primary-600 to-primary-800 dark:text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Abogados Especialistas en Accidentes de Tráfico en Granada
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            ⭐ Abogados EXPERTOS en reclamación de INDEMNIZACIONES por accidente
            de tráfico en Granada. Asistencia 24h. Más de 15 años de
            experiencia.
          </p>
          {/* Añade este párrafo adicional */}
          <p className="text-lg mt-4 font-semibold">
            ¿Necesitas calcular tu indemnización?{" "}
            <Link href="#calculadora" className="underline">
              Usa nuestra calculadora gratis
            </Link>
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-2/3 bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
              <h2 className="text-3xl font-bold mb-6">
                Abogados Expertos en Accidentes de Tráfico
              </h2>

              <div className="prose max-w-none">
                <p className="text-lg mb-4">
                  En ABESAT Abogados somos{" "}
                  <strong>abogados de tráfico en Granada</strong> con amplia
                  experiencia en accidentes de circulación. Ofrecemos asesoría
                  legal especializada desde el primer momento.
                </p>

                <h3 className="text-2xl font-semibold mt-8 mb-4">
                  Tipos de accidentes que atendemos
                </h3>
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  {[
                    "Colisiones frontales y laterales",
                    "Alcances traseros",
                    "Atropellos a peatones",
                    "Accidentes en motocicleta",
                    "Siniestros con ciclistas",
                    "Accidentes múltiples",
                    "Salidas de vía",
                    "Accidentes con vehículos pesados",
                  ].map((item, index) => (
                    <div key={index} className="flex items-start">
                      <span className="text-primary-600 mr-2">✓</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <h3 className="text-2xl font-semibold mt-8 mb-4">
                  ¿Qué hacer después de un accidente?
                </h3>
                <ol className="list-decimal pl-6 mb-6 space-y-3">
                  <li>Garantice su seguridad y la de los demás</li>
                  <li>Llame a emergencias si hay heridos</li>
                  <li>No admita culpa ni discuta en el lugar</li>
                  <li>Recabe datos de testigos y partes</li>
                  <li>Tome fotografías del lugar</li>
                  <li>Acuda a un centro médico aunque no tenga síntomas</li>
                  <li>Contacte con un abogado especializado</li>
                </ol>
              </div>
            </div>

            {/* <div className="lg:w-1/3">
              <div className="bg-gray-50 dark:bg-gray-700 p-8 rounded-lg shadow-md sticky top-8">
                <h3 className="text-xl font-semibold mb-4">
                  Asistencia Inmediata{" "}
                </h3>
                <p className="mb-6">
                  En caso de accidente grave, podemos atenderle lo mas rápido
                  posible.
                </p>
                <Link
                  href="/contacto"
                  className="bg-transparent dark:border-white border-2 dark:text-white hover:bg-gray-300 hover:text-blue px-6 py-3 rounded-lg font-medium inline-block w-full text-center"
                >
                  Contactar Ahora
                </Link>

                <div className="mt-8">
                  <h4 className="font-medium mb-3">Servicios relacionados:</h4>
                  <ul className="space-y-2">
                    <li>
                      <Link
                        href="/servicios/indemnizaciones"
                        className="text-primary-600 hover:underline"
                      >
                        Reclamación de Indemnizaciones
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/servicios/lesiones"
                        className="text-primary-600 hover:underline"
                      >
                        Lesiones por Accidentes
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/servicios/defensa-penal"
                        className="text-primary-600 hover:underline"
                      >
                        Defensa en Casos Penales
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="mt-8">
                  <h4 className="font-medium mb-3">También buscan:</h4>
                  <ul className="space-y-2 list-disc pl-4 text-sm">
                    <li>
                      <Link
                        href="/servicios/asesoramiento-victimas"
                        className="hover:underline"
                      >
                        Abogados especialistas en tráfico Granada
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/servicios/indemnizaciones"
                        className="hover:underline"
                      >
                        Reclamación por accidente de tráfico Granada
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/servicios/lesiones"
                        className="hover:underline"
                      >
                        Abogados para siniestros viales Granada
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div> */}
            <div className="lg:w-1/3">
              <div className="bg-gray-50 dark:bg-gray-700 p-8 rounded-lg shadow-md sticky top-8">
                <h3 className="text-xl font-semibold mb-4">
                  ¿Necesita asesoramiento?
                </h3>

                {/* NUEVO CTA */}
                <div className="space-y-3 mb-6">
                  <Link
                    href="/contacto"
                    className="bg-primary-600 text-white px-4 py-3 rounded-lg font-medium inline-block w-full text-center hover:bg-primary-700"
                  >
                    📞 Consulta Gratuita
                  </Link>
                  <Link
                    href="/calculadora-indemnizacion"
                    className="bg-transparent border-2 border-primary-600 text-primary-600 px-4 py-3 rounded-lg font-medium inline-block w-full text-center hover:bg-primary-50"
                  >
                    🧮 Calcular Indemnización
                  </Link>
                </div>

                {/* Resto del contenido... */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary-700 dark:text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Nuestros Resultados
          </h2>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              { value: "95%", label: "Casos exitosos" },
              { value: "+500", label: "Clientes atendidos" },
              { value: "100%", label: "Compromiso con nuestros clientes" },
            ].map((stat, index) => (
              <div key={index} className="p-6">
                <p className="text-5xl font-bold mb-3">{stat.value}</p>
                <p className="text-xl">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/*  <section>
        <div className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold mb-6 text-center">¿Por qué elegirnos?</h2>
          <p className="text-lg text-center max-w-2xl mx-auto mb-8">
            En ABESAT Abogados, nos comprometemos a ofrecerte la mejor asistencia legal. Nuestro equipo de abogados especializados en accidentes de tráfico en Granada está aquí para ayudarte a obtener la indemnización que mereces.
          </p>
          <Link 
            href="/contacto" 
            className="bg-primary-600 text-white px-6 py-3 rounded-lg font-medium inline-block text-center"
          >
            Solicita tu consulta gratuita
          </Link>
        </div>
      </section> */}
    </main>
  )
}
