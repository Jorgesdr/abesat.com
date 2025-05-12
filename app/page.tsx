import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Abogados Accidentes Tráfico Granada | ABESAT Abogados",
  description: "Abogados especialistas en accidentes de tráfico en Granada. Reclamaciones, indemnizaciones y defensa penal. Consulta gratuita.",
};

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-background-blues relative py-20 ">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">           
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Abogados Accidentes Tráfico Granada - Expertos en Indemnizaciones
            </h1>
            <p className="text-xl mb-8">
                En ABESAT Abogados somos especialistas en accidentes de tráfico en Granada. Luchamos por tus derechos con un equipo experto en reclamaciones e indemnizaciones. Confía en abogados de accidentes tráfico Granada con más de 15 años de experiencia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/contacto" 
                className="bg-transparent dark:border-white border-2 dark:text-white hover:bg-gray-300 hover:text-blue px-6 py-3 rounded-lg font-medium inline-block w-full text-center"
              >
                Consulta Gratuita
              </Link>
              <Link 
                href="/servicios" 
                className="bg-transparent dark:border-white border-2 dark:text-white hover:bg-gray-300 hover:text-blue px-6 py-3 rounded-lg font-medium inline-block w-full text-center"
              >
                Nuestros Servicios
              </Link>
              
            </div>
            
          </div>
          <div className="md:w-1/2 flex justify-center px-4">
            <div className="relative w-full h-64 md:h-96">
              <Image 
                src="/images/556-1-67f0550d519e2.webp" 
                alt="Abogados accidentes tráfico Granada" 
                fill
                className="rounded-lg object-cover shadow-xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section className="py-16 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Servicios de Abogados para Accidentes de Tráfico en Granada</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Accidentes de Tráfico</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Reclamación de indemnizaciones por daños personales y materiales en accidentes de coche, moto o atropellos.
              </p>
              <Link href="/servicios/accidentes-trafico-granada" className="text-primary-600 dark:text-primary-400 hover:underline">
                Más información →
              </Link>
            </div>
            
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Lesiones Graves</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Defensa legal para víctimas con lesiones graves, incapacidades permanentes o grandes invalideces.
              </p>
              <Link href="/servicios/lesiones" className="text-primary-600 dark:text-primary-400 hover:underline">
                Más información →
              </Link>
            </div>
            
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Defensa Penal</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Asistencia legal en procedimientos penales derivados de accidentes con víctimas o daños.
              </p>
              <Link href="/servicios/defensa-penal" className="text-primary-600 dark:text-primary-400 hover:underline">
                Más información →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Por qué elegirnos */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">¿Por qué elegir ABESAT?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <div className="bg-primary-100 dark:bg-primary-900 p-2 rounded-full mr-4">
                    <svg className="h-6 w-6 text-primary-600 dark:text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Especialistas en Granada</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Conocemos a la perfección los juzgados y compañías de seguros de Granada.
                    </p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <div className="bg-primary-100 dark:bg-primary-900 p-2 rounded-full mr-4">
                    <svg className="h-6 w-6 text-primary-600 dark:text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Indemnización Máxima</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Luchamos por conseguir la mayor compensación posible por tu accidente.
                    </p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <div className="bg-primary-100 dark:bg-primary-900 p-2 rounded-full mr-4">
                    <svg className="h-6 w-6 text-primary-600 dark:text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Sin adelantar gastos</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Trabajamos a porcentaje, solo cobramos si ganamos tu caso.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="relative h-64 md:h-96">
              <Image 
                src="/images/abogado-accidente-trafico-granada-67f0551156d6d.webp" 
                alt="Abogados accidentes tráfico Granada" 
                fill
                className="rounded-lg object-cover shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary-600 text-gray-600 dark:text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">¿Buscas abogados accidentes tráfico Granada?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            
              Contacta ahora con nuestro equipo de abogados especializados en accidentes de tráfico en Granada. Te ayudamos a reclamar la indemnización que te corresponde.
          </p>
          <Link 
            href="/contacto" 
            className="bg-transparent text-gray-600 dark:text-white border-2 border-gray hover:text-gray hover:bg-gray-300 dark:border-white hover:text-blue  px-8 py-3 rounded-lg text-lg font-semibold inline-block transition-colors"
          >
            Contactar Ahora
          </Link>
        </div>
      </section>
      
    </>
  );
}