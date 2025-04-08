import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Reclamación de Indemnizaciones | ABESAT Abogados",
  description: "Especialistas en reclamación de indemnizaciones por accidentes de tráfico en Granada",
};

export default function IndemnizacionesPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-600 to-primary-800 dark:text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Reclamación de Indemnizaciones</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Obtenga la compensación justa por sus daños personales y materiales
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-2/3">
              <h2 className="text-3xl font-bold mb-6">Expertos en Reclamaciones por Accidentes</h2>
              
              <div className="prose max-w-none">
                <p className="text-lg mb-4">
                  En ABESAT Abogados somos especialistas en reclamación de indemnizaciones por accidentes de tráfico. 
                  Nuestro equipo jurídico cuenta con amplia experiencia en la valoración y reclamación de todos los 
                  conceptos indemnizatorios reconocidos por la ley.
                </p>
                
                <h3 className="text-2xl font-semibold mt-8 mb-4">¿Qué podemos reclamar por usted?</h3>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>Daños personales (lesiones temporales y permanentes)</li>
                  <li>Secuelas y perjuicios estéticos</li>
                  <li>Incapacidad temporal y permanente</li>
                  <li>Daños materiales (vehículo y otros bienes)</li>
                  <li>Lucro cesante y perjuicio patrimonial</li>
                  <li>Gastos médicos y farmacéuticos</li>
                  <li>Asistencia sanitaria futura</li>
                </ul>
                
                <h3 className="text-2xl font-semibold mt-8 mb-4">Nuestro método de trabajo</h3>
                <p className="mb-4">
                  Realizamos un estudio exhaustivo de su caso, valorando todos los aspectos médicos, jurídicos y económicos 
                  para conseguir la máxima indemnización posible.
                </p>
              </div>
            </div>
            
            <div className="lg:w-1/3">
              <div className="bg-gray-50 dark:bg-gray-700 p-8 rounded-lg shadow-md sticky top-8">
                <h3 className="text-xl font-semibold mb-4">¿Necesita asesoramiento?</h3>
                <p className="mb-6">
                  Ofrecemos una primera consulta gratuita para valorar su caso sin compromiso.
                </p>
                <Link 
                  href="/contacto" 
                  className="bg-transparent dark:border-white border-2 dark:text-white hover:bg-gray-300 hover:text-blue px-6 py-3 rounded-lg font-medium inline-block w-full text-center"
                >
                  Contactar Ahora
                </Link>
                
                <div className="mt-8">
                  <h4 className="font-medium mb-3">También podría interesarle:</h4>
                  <ul className="space-y-2">
                    <li><Link href="/servicios/lesiones" className="text-primary-600 hover:underline">Lesiones y Daños Corporales</Link></li>
                    <li><Link href="/servicios/recursos" className="text-primary-600 hover:underline">Recursos y Reclamaciones</Link></li>
                    <li><Link href="/servicios/accidentes-trafico-granada" className="text-primary-600 hover:underline">Accidentes de Tráfico en Granada</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-700">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Preguntas Frecuentes</h2>
          
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "¿Cuánto tiempo tengo para reclamar una indemnización?",
                answer: "El plazo general es de 1 año desde el accidente, pero recomendamos iniciar el proceso lo antes posible."
              },
              {
                question: "¿Cómo se calcula el importe de la indemnización?",
                answer: "Se valora según baremos legales que consideran la gravedad de las lesiones, días de curación y secuelas."
              },
              {
                question: "¿Tengo que pagar si no gano el caso?",
                answer: "Trabajamos a éxito, solo cobramos honorarios si conseguimos su indemnización."
              }
            ].map((item, index) => (
              <div key={index} className="border-b border-gray-200 pb-6">
                <h3 className="text-xl font-semibold mb-2">{item.question}</h3>
                <p className="text-gray-500">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}