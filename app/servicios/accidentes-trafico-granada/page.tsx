/* //accidentes-trafico-granada

import Link from "next/link"
import Head from "next/head"

export const metadata = {
  title:
    "Abogados Accidentes de Tráfico en Granada ⚖️ Especialistas en Lesiones Graves | ABESAT",
  description:
    "ABESAT Abogados: expertos en ACCIDENTES de TRÁFICO en Granada. Especialistas en LESIONES GRAVES e INDEMNIZACIONES. Primera consulta GRATIS ✅ Más de 15 años de experiencia.",
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
          url: "https://abesat.es/servicios/accidentes-trafico-granada",
          telephone: "+34 696 36 90 30",
          priceRange: "€€",
          areaServed: {
            "@type": "City",
            name: "Granada",
          },
          knowsAbout: [
            "Accidentes de tráfico",
            "Lesiones graves en accidentes",
            "Indemnizaciones por accidente",
          ],
        }),
      }}
    />
  </Head>

  return (
    <main>
      <section className="relative bg-gradient-to-r from-primary-600 to-primary-800 dark:text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Abogados de Accidentes de Tráfico en Granada – Especialistas en
            Lesiones Graves
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            ⭐ Asesoramiento legal experto en accidentes de tráfico en Granada.
            Especialistas en reclamaciones de indemnización para{" "}
            <strong>lesiones graves</strong>. Atención 24h y primera consulta
            gratuita.
          </p>
          <p className="text-lg mt-4 font-semibold">
            ¿Deseas calcular tu indemnización?{" "}
            <Link href="/calculadora-indemnizacion" className="underline">
              Usa nuestra calculadora gratis
            </Link>
          </p>
        </div>
      </section>

      // Content Section 
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-2/3 bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
              <h2 className="text-3xl font-bold mb-6">
                Abogados Expertos en Accidentes de Tráfico en Granada
              </h2>

              <div className="prose max-w-none">
                <p className="text-lg mb-4">
                  En ABESAT Abogados somos{" "}
                  <strong>abogados de tráfico en Granada</strong> con extensa
                  experiencia en la defensa de víctimas de accidentes de
                  circulación. Nuestro objetivo: que recibas la reparación justa
                  por tus daños físicos, materiales y perjuicios sufridos.
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

            <div className="lg:w-1/3">
              <div className="bg-gray-50 dark:bg-gray-700 p-8 rounded-lg shadow-md sticky top-8">
                <h3 className="text-xl font-semibold mb-4">
                  ¿Necesita asesoramiento?
                </h3>

                // NUEVO CTA 
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

                // Resto del contenido... 
              </div>
            </div>
          </div>
        </div>
      </section>

      // Stats Section 
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
     
    </main>
  )
}
 */

// pages/servicios/accidentes-trafico-granada.jsx  (o el archivo que uses en Next.js)

import Link from "next/link"
import Head from "next/head"

export const metadata = {
  title:
    "Abogados Accidentes de Tráfico en Granada ⚖️ Especialistas en Lesiones Graves | ABESAT",
  description:
    "ABESAT Abogados: expertos en ACCIDENTES de TRÁFICO en Granada. Especialistas en LESIONES GRAVES e INDEMNIZACIONES. Primera consulta GRATIS ✅ Más de 15 años de experiencia.",
}

export default function AccidentesTraficoPage() {
  return (
    <>
      <Head>
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
              url: "https://abesat.es/servicios/accidentes-trafico-granada",
              telephone: "+34 696 36 90 30",
              priceRange: "€€",
              areaServed: {
                "@type": "City",
                name: "Granada",
              },
              knowsAbout: [
                "Accidentes de tráfico",
                "Lesiones graves en accidentes",
                "Indemnizaciones por accidente",
              ],
            }),
          }}
        />
      </Head>

      <main>
        {/* Hero / cabecera */}
        <section className="relative bg-gradient-to-r from-primary-600 to-primary-800 dark:text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Abogados de Accidentes de Tráfico en Granada – Especialistas en
              Lesiones Graves
            </h1>
            <p className="text-xl max-w-3xl mx-auto">
              ⭐ Asesoramiento legal experto en accidentes de tráfico en
              Granada. Especialistas en reclamaciones de indemnización para{" "}
              <strong>lesiones graves</strong>. Atención 24h y primera consulta
              gratuita.
            </p>
            <p className="text-lg mt-4 font-semibold">
              ¿Deseas calcular tu indemnización?{" "}
              <Link href="/calculadora-indemnizacion" className="underline">
                Usa nuestra calculadora gratis
              </Link>
            </p>
          </div>
        </section>

        {/* Contenido principal */}
        <section className="py-16 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-12">
              {/* Columna de contenido */}
              <div className="lg:w-2/3 bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                <h2 className="text-3xl font-bold mb-6">
                  Abogados Expertos en Accidentes de Tráfico en Granada
                </h2>
                <div className="prose max-w-none">
                  <p className="text-lg mb-4">
                    En ABESAT Abogados somos{" "}
                    <strong>abogados de tráfico en Granada</strong> con extensa
                    experiencia en la defensa de víctimas de accidentes de
                    circulación. Nuestro objetivo: que recibas la reparación
                    justa por tus daños físicos, materiales y perjuicios
                    sufridos.
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

                  {/* Nuevo bloque de Lesiones Graves */}
                  <h3 className="text-2xl font-semibold mt-8 mb-4">
                    Lesiones Graves en Accidentes de Tráfico
                  </h3>
                  <p className="mb-4">
                    En ABESAT Abogados contamos con amplia experiencia en la
                    reclamación de
                    <strong> indemnizaciones por lesiones graves </strong>{" "}
                    derivadas de accidentes de tráfico en Granada. Atendemos
                    casos como:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li>Traumatismos craneoencefálicos (TCE)</li>
                    <li>Lesiones medulares</li>
                    <li>Amputaciones y secuelas permanentes</li>
                    <li>Incapacidad laboral derivada del accidente</li>
                  </ul>
                  <p className="mt-4 mb-8">
                    Nuestro objetivo es que obtengas la{" "}
                    <strong>máxima compensación económica</strong> posible para
                    cubrir tratamientos médicos, rehabilitación, dolor,
                    sufrimiento y pérdidas económicas derivadas del accidente.
                  </p>

                  <h3 className="text-2xl font-semibold mt-8 mb-4">
                    Cómo reclamamos tu indemnización
                  </h3>
                  <p className="mb-4">
                    Realizamos un estudio integral que incluye:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-8">
                    <li>Revisión médica y pericial de tus lesiones</li>
                    <li>Cálculo personalizado de los daños</li>
                    <li>Negociación directa con aseguradoras</li>
                    <li>
                      Asunción del procedimiento judicial si no se alcanza
                      acuerdo
                    </li>
                  </ul>

                  <h3 className="text-2xl font-semibold mt-8 mb-4">
                    Casos de éxito en Granada
                  </h3>
                  <p className="mb-4">
                    Hemos ayudado a numerosas víctimas en Granada a obtener
                    indemnizaciones justas en casos de lesiones graves. Podemos
                    compartir ejemplos de sentencias favorables (respetando la
                    confidencialidad) para que veas cómo trabajamos en tu
                    ciudad.
                  </p>

                  <h3 className="text-2xl font-semibold mt-8 mb-4">
                    Preguntas frecuentes (FAQ)
                  </h3>
                  <div className="mb-4">
                    <strong>¿Cuánto tiempo tengo para reclamar?</strong>
                    <p>
                      Normalmente tienes un plazo de 6 meses desde que ocurrió
                      el accidente para iniciar trámite de reclamación. Pero
                      depende de los casos.
                    </p>
                  </div>
                  <div className="mb-4">
                    <strong>¿Qué puedo reclamar?</strong>
                    <p>
                      Daños físicos, materiales, perjuicios económicos y
                      morales, tratamientos médicos, futuras secuelas, etc.
                    </p>
                  </div>
                  <div className="mb-4">
                    <strong>¿Necesito abogado? ¿Vale la pena?</strong>
                    <p>
                      Para lesiones graves, es casi imprescindible contar con un
                      abogado especializado para maximizar tu indemnización.
                    </p>
                  </div>

                  {/* Aquí podrías insertar la sección de calculadora si la tienes */}
                  {/* <div id="calculadora"> … </div> */}
                </div>{" "}
                {/* fin .prose */}
              </div>{" "}
              {/* fin contenido */}
              {/* Columna lateral / CTA */}
              <div className="lg:w-1/3">
                <div className="bg-gray-50 dark:bg-gray-700 p-8 rounded-lg shadow-md sticky top-8">
                  <h3 className="text-xl font-semibold mb-4">
                    ¿Necesitas asesoramiento urgente?
                  </h3>

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
                        Indemnizaciones por lesiones graves
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/servicios/defensa-penal"
                        className="text-primary-600 hover:underline"
                      >
                        Defensa penal en casos complejos
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>{" "}
            {/* fin flex contenedor */}
          </div>
        </section>

        {/* Stats / resultados */}
        <section className="py-16 bg-primary-700 dark:text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Nuestros Resultados en Granada
            </h2>

            <div className="grid md:grid-cols-3 gap-8 text-center">
              {[
                { value: "95 %", label: "Casos exitosos" },
                { value: "+500", label: "Clientes atendidos" },
                { value: "100 %", label: "Compromiso con nuestros clientes" },
              ].map((stat, index) => (
                <div key={index} className="p-6">
                  <p className="text-5xl font-bold mb-3">{stat.value}</p>
                  <p className="text-xl">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
