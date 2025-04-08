import Link from "next/link";

export const metadata = {
  title: "Lesiones por Accidentes | ABESAT Abogados",
  description: "Defensa legal especializada en lesiones por accidentes de tráfico en Granada",
};

export default function LesionesPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-600 to-primary-800 dark:text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Lesiones por Accidentes</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Defendemos sus derechos cuando sufre lesiones por accidente de tráfico
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-2/3">
              <h2 className="text-3xl font-bold mb-6">Especialistas en Lesiones por Accidentes</h2>
              
              <div className="prose max-w-none">
                <p className="text-lg mb-4">
                  Las lesiones derivadas de accidentes de tráfico pueden tener consecuencias físicas, psicológicas y económicas 
                  importantes. En ABESAT Abogados nos especializamos en la valoración médico-legal de las lesiones para garantizar 
                  que reciba la compensación justa por sus daños.
                </p>
                
                <h3 className="text-2xl font-semibold mt-8 mb-4">Tipos de lesiones que atendemos</h3>
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  {[
                    "Fracturas y traumatismos",
                    "Lesiones medulares",
                    "Traumatismos craneoencefálicos",
                    "Lesiones internas",
                    "Quemaduras graves",
                    "Lesiones psicológicas",
                    "Secuelas permanentes",
                    "Incapacidades temporales"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start">
                      <span className="text-primary-600 mr-2">✓</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                
                <h3 className="text-2xl font-semibold mt-8 mb-4">Proceso de valoración de lesiones</h3>
                <p className="mb-4">
                  Realizamos un exhaustivo análisis médico-jurídico que incluye:
                </p>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>Revisión de informes médicos</li>
                  <li>Valoración de días de curación</li>
                  <li>Análisis de secuelas permanentes</li>
                  <li>Perjuicio estético si lo hubiera</li>
                  <li>Impacto en su calidad de vida</li>
                </ul>
              </div>
            </div>
            
            <div className="lg:w-1/3">
              <div className="bg-gray-50 dark:bg-gray-700 p-8 rounded-lg shadow-md sticky top-8">
                <h3 className="text-xl font-semibold mb-4">¿Sufrió lesiones en un accidente?</h3>
                <p className="mb-6">
                  No deje que afecten su futuro. Podemos ayudarle a obtener la compensación que merece.
                </p>
                <Link 
                  href="/contacto" 
                  className="bg-transparent dark:border-white border-2 dark:text-white hover:bg-gray-300 hover:text-blue px-6 py-3 rounded-lg font-medium inline-block w-full text-center"
                >
                  Consulta Gratuita
                </Link>
                
                <div className="mt-8">
                  <h4 className="font-medium mb-3">Documentación necesaria:</h4>
                  <ul className="space-y-2 text-sm">
                    <li>✓ Parte médico de urgencias</li>
                    <li>✓ Informes de alta médica</li>
                    <li>✓ Facturas de gastos médicos</li>
                    <li>✓ Parte de accidente</li>
                    <li>✓ Fotografías de las lesiones</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-primary-700 dark:text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Casos de Éxito</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote: "Gracias a ABESAT conseguí una indemnización justa por mis lesiones tras el accidente.",
                author: "Javier M. - Granada"
              },
              {
                quote: "Profesionales que realmente se preocupan por sus clientes. Recomendable 100%.",
                author: "María L. - Albolote"
              },
              {
                quote: "Me guiaron en todo el proceso y lograron aumentar significativamente la oferta inicial de la aseguradora.",
                author: "Antonio R. - Armilla"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md">
                <p className="dark:text-white italic mb-4">"{testimonial.quote}"</p>
                <p className="font-medium">— {testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}