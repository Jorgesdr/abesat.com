import Link from "next/link";

export const metadata = {
  title: "Defensa Penal en Accidentes | ABESAT Abogados",
  description: "Defensa legal especializada en procedimientos penales derivados de accidentes de tráfico",
};

export default function DefensaPenalPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-600 to-primary-800 dark:text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Defensa en Procedimientos Penales</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Asistencia legal especializada cuando un accidente tiene consecuencias penales
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-2/3">
              <h2 className="text-3xl font-bold mb-6">Defensa Penal Especializada</h2>
              
              <div className="prose max-w-none">
                <p className="text-lg mb-4">
                  Cuando un accidente de tráfico tiene consecuencias penales, es fundamental contar con un abogado especializado 
                  que conozca tanto el derecho penal como la legislación de tráfico. En ABESAT Abogados ofrecemos defensa jurídica 
                  integral en estos casos complejos.
                </p>
                
                <h3 className="text-2xl font-semibold mt-8 mb-4">Situaciones que atendemos</h3>
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  {[
                    "Delitos contra la seguridad vial",
                    "Homicidio imprudente",
                    "Lesiones imprudentes",
                    "Omisión del deber de socorro",
                    "Conducción bajo influencia de alcohol/drogas",
                    "Conducción temeraria",
                    "Negativa a realizar pruebas de alcoholemia",
                    "Conducción sin permiso"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start">
                      <span className="text-primary-600 mr-2">✓</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                
                <h3 className="text-2xl font-semibold mt-8 mb-4">Nuestra estrategia de defensa</h3>
                <ol className="list-decimal pl-6 mb-6 space-y-3">
                  <li>Análisis exhaustivo de las pruebas</li>
                  <li>Estudio de posibles defectos en la instrucción</li>
                  <li>Negociación con el Ministerio Fiscal</li>
                  <li>Propuesta de conformidad cuando sea conveniente</li>
                  <li>Defensa en juicio oral si es necesario</li>
                  <li>Recursos ante sentencias desfavorables</li>
                </ol>
              </div>
            </div>
            
            <div className="lg:w-1/3">
              <div className="bg-gray-50 dark:bg-gray-700 p-8 rounded-lg shadow-md sticky top-8">
                <h3 className="text-xl font-semibold mb-4">¿Tiene un procedimiento penal?</h3>
                <p className="mb-6">
                  La pronta intervención de un abogado penalista puede marcar la diferencia en su caso.
                </p>
                <Link 
                  href="/contacto" 
                  className="bg-transparent dark:border-white border-2 dark:text-white hover:bg-gray-300 hover:text-blue px-6 py-3 rounded-lg font-medium inline-block w-full text-center"
                >
                  Defensa Inmediata
                </Link>
                
                <div className="mt-8">
                  <h4 className="font-medium mb-3">Plazos importantes:</h4>
                  <ul className="space-y-2 text-sm">
                    <li>✓ 10 días para presentar escritos</li>
                    <li>✓ 15 días para recurrir multas</li>
                    <li>✓ Plazos variables según procedimiento</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-primary-700 dark:text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Fases del Procedimiento Penal</h2>
          
          <div className="relative">
            <div className="hidden lg:block absolute left-1/2 top-0 h-full w-1 bg-primary-500 transform -translate-x-1/2"></div>
            
            <div className="space-y-12 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8">
              {[
                {
                  title: "1. Denuncia o Atestado",
                  description: "Inicio del procedimiento tras el accidente",
                },
                {
                  title: "2. Diligencias Previas",
                  description: "Investigación por parte de la policía/juzgado",
                },
                {
                  title: "3. Imputación",
                  description: "Comunicación formal de los cargos",
                },
                {
                  title: "4. Instrucción",
                  description: "Recopilación de pruebas y declaraciones",
                },
                {
                  title: "5. Juicio Oral",
                  description: "Celebración del juicio si no hay conformidad",
                },
                {
                  title: "6. Sentencia",
                  description: "Resolución judicial del caso",
                }
              ].map((paso, index) => (
                <div 
                  key={index} 
                  className={`relative ${index % 2 === 0 ? 'lg:text-right lg:pr-8' : 'lg:text-left lg:pl-8 lg:mt-20'}`}
                >
                  <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md">
                    <div className={`absolute top-6 w-8 h-8 rounded-full bg-gray-700 dark:text-white 
        flex items-center justify-center font-bold ${index % 2 === 0 ? 
          'lg:-right-4 lg:left-auto -left-4' 
          : 
          'lg:-left-4 lg:right-auto -left-4'}
        `}>
                      {index + 1}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{paso.title}</h3>
                    <p className="dark:text-white">{paso.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}