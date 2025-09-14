//asesoramiento-victimas
import Link from "next/link";

export const metadata = {
  title: "Asesoramiento a Víctimas | ABESAT Abogados",
  description: "Apoyo integral a víctimas de accidentes de tráfico y sus familias en Granada",
};

export default function AsesoramientoVictimasPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-600 to-primary-800 dark:text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Asesoramiento a Víctimas</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Apoyo integral y acompañamiento legal durante todo el proceso
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-2/3">
              <h2 className="text-3xl font-bold mb-6">Acompañamiento Integral a Víctimas</h2>
              
              <div className="prose max-w-none">
                <p className="text-lg mb-4">
                  Ser víctima de un accidente de tráfico es una experiencia traumática que puede generar incertidumbre 
                  y angustia. En ABESAT Abogados no solo ofrecemos asesoramiento jurídico, sino un acompañamiento 
                  humano y profesional durante todo el proceso.
                </p>
                
                <h3 className="text-2xl font-semibold mt-8 mb-4">Nuestro apoyo incluye</h3>
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  {[
                    "Asesoramiento jurídico personalizado",
                    "Gestión integral del caso",
                    "Acompañamiento en reconocimientos médicos",
                    "Asistencia a vistas y juicios",
                    "Coordinación con peritos médicos",
                    "Apoyo psicológico a través de colaboradores",
                    "Atención a familiares de víctimas",
                    "Seguimiento post-indemnización"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start">
                      <span className="text-primary-600 mr-2">✓</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                
                <h3 className="text-2xl font-semibold mt-8 mb-4">Derechos de las víctimas</h3>
                <p className="mb-4">
                  Como víctima de accidente de tráfico, tiene derecho a:
                </p>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>Ser informado sobre el proceso</li>
                  <li>Recibir asistencia jurídica gratuita si cumple requisitos</li>
                  <li>Ser oído en el procedimiento</li>
                  <li>Recibir protección si hay intimidación</li>
                  <li>Ser indemnizado por todos los daños sufridos</li>
                </ul>
              </div>
            </div>
            
            <div className="lg:w-1/3">
              <div className="bg-gray-50 dark:bg-gray-700 p-8 rounded-lg shadow-md sticky top-8">
                <h3 className="text-xl font-semibold mb-4">¿Eres víctima de un accidente?</h3>
                <p className="mb-6">
                  No estás solo. Podemos ayudarte a recuperar tu vida después del accidente.
                </p>
                <Link 
                  href="/contacto" 
                  className="bg-transparent dark:border-white border-2 dark:text-white hover:bg-gray-300 hover:text-blue px-6 py-3 rounded-lg font-medium inline-block w-full text-center"
                >
                  Habla con Nosotros
                </Link>
                
                <div className="mt-8">
                  <h4 className="font-medium mb-3">Atención especial a:</h4>
                  <ul className="space-y-2 text-sm">
                    <li>✓ Víctimas con lesiones graves</li>
                    <li>✓ Familiares de fallecidos</li>
                    <li>✓ Personas en situación de vulnerabilidad</li>
                    <li>✓ Víctimas de delitos viales</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-16 bg-primary-700 dark:text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Recursos para Víctimas</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Asociaciones de Víctimas",
                link: "/contacto",
                description: "Organizaciones que ofrecen apoyo"
              },
              {
                title: "Ayudas Económicas",
                link: "/contacto",
                description: "Subvenciones y ayudas disponibles"
              },
              {
                title: "Apoyo Psicológico",
                link: "/contacto",
                description: "Profesionales especializados"
              },
              {
                title: "Preguntas Frecuentes",
                link: "/contacto",
                description: "Respuestas a dudas comunes"
              }
            ].map((resource, index) => (
              <Link 
                key={index} 
                href={resource.link}
                className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <h3 className="dark:text-white font-semibold mb-2">{resource.title}</h3>
                <p className="text-sm text-gray-500">{resource.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}