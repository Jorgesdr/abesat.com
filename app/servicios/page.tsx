import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Servicios - ABESAT Abogados Accidentes Tráfico Granada",
  description: "Servicios especializados en accidentes de tráfico en Granada. Indemnizaciones, defensa legal y asesoramiento personalizado.",
};

export default function ServiciosPage() {
  const servicios = [
    {
      title: "Reclamación de Indemnizaciones",
      description: "Gestionamos tu reclamación para obtener la máxima compensación por daños personales y materiales.",
      icon: "💰",
      link: "/servicios/indemnizaciones",
    },
    {
      title: "Accidentes de Tráfico",
      description: "Asesoramiento legal especializado en todo tipo de accidentes de circulación en Granada.",
      icon: "🚗",
      link: "/servicios/accidentes-trafico",
    },
    {
      title: "Lesiones y Daños Corporales",
      description: "Defensa de tus derechos cuando sufres lesiones por accidente de tráfico.",
      icon: "🏥",
      link: "/servicios/lesiones",
    },
    {
      title: "Defensa en Procedimientos Penales",
      description: "Asistencia legal en casos con responsabilidad penal derivada de accidentes.",
      icon: "⚖️",
      link: "/servicios/defensa-penal",
    },
    {
      title: "Recursos y Reclamaciones",
      description: "Interponemos recursos cuando la indemnización ofrecida no es justa.",
      icon: "📄",
      link: "/servicios/recursos",
    },
    {
      title: "Asesoramiento a Víctimas",
      description: "Apoyo integral a víctimas de accidentes de tráfico y sus familias.",
      icon: "🤝",
      link: "/servicios/asesoramiento-victimas",
    },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Nuestros Servicios</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Especialistas en derecho de tráfico y accidentes en Granada. Ofrecemos soluciones legales personalizadas para cada caso.
          </p>
        </div>
      </section>

      {/* Listado de Servicios */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicios.map((servicio, index) => (
              <div 
                key={index} 
                className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-4">{servicio.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{servicio.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{servicio.description}</p>
                <Link 
                  href={servicio.link}
                  className="text-primary-600 dark:text-primary-400 hover:underline font-medium"
                >
                  Más información →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proceso de Trabajo */}
      <section className="py-16 bg-gray-100 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Nuestro Proceso de Trabajo</h2>
          
          <div className="relative">
            <div className="hidden lg:block absolute left-1/2 top-0 h-full w-1 bg-primary-500 transform -translate-x-1/2"></div>
            
            <div className="space-y-12 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8">
              {[
                {
                  title: "1. Evaluación del Caso",
                  description: "Analizamos tu situación en una primera consulta gratuita.",
                  icon: "📋",
                },
                {
                  title: "2. Recopilación de Pruebas",
                  description: "Recogemos toda la documentación necesaria para tu reclamación.",
                  icon: "🔍",
                },
                {
                  title: "3. Negociación con Aseguradoras",
                  description: "Nos encargamos de negociar con las compañías por ti.",
                  icon: "💬",
                },
                {
                  title: "4. Reclamación Judicial si es Necesario",
                  description: "Si no hay acuerdo, llevamos tu caso a los tribunales.",
                  icon: "⚖️",
                },
                {
                  title: "5. Cobro de Indemnización",
                  description: "Te ayudamos a recibir el importe íntegro de tu compensación.",
                  icon: "💰",
                },
                {
                  title: "6. Seguimiento Post-Indemnización",
                  description: "Seguimos disponibles para cualquier consulta posterior.",
                  icon: "🔄",
                },
              ].map((paso, index) => (
                <div 
                  key={index} 
                  className={`relative ${index % 2 === 0 ? 'lg:text-right lg:pr-8' : 'lg:text-left lg:pl-8 lg:mt-32'}`}
                >
                  <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
                    <div className="text-3xl mb-3">{paso.icon}</div>
                    <h3 className="text-xl font-semibold mb-2">{paso.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{paso.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary-600 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">¿Necesitas un abogado especializado en accidentes?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Contacta con nosotros para una consulta gratuita y sin compromiso.
          </p>
          <Link 
            href="/contacto" 
            className="bg-white text-primary-600 hover:bg-gray-100 px-8 py-3 rounded-lg text-lg font-semibold inline-block transition-colors"
          >
            Contactar Ahora
          </Link>
        </div>
      </section>
    </main>
  );
}