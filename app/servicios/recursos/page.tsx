import Link from "next/link";

export const metadata = {
  title: "Recursos y Reclamaciones | ABESAT Abogados",
  description: "Interposición de recursos cuando la indemnización ofrecida no es justa",
};

export default function RecursosPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Recursos y Reclamaciones</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Cuando la indemnización ofrecida no es justa, luchamos por sus derechos
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-2/3">
              <h2 className="text-3xl font-bold mb-6">Expertos en Recursos y Reclamaciones</h2>
              
              <div className="prose max-w-none">
                <p className="text-lg mb-4">
                  Las aseguradoras a menudo ofrecen indemnizaciones muy por debajo de lo que corresponde legalmente. 
                  En ABESAT Abogados analizamos su caso y, cuando la oferta no es justa, interponemos los recursos 
                  necesarios para que obtenga la compensación que merece.
                </p>
                
                <h3 className="text-2xl font-semibold mt-8 mb-4">Tipos de recursos que interponemos</h3>
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  {[
                    "Recursos contra ofertas insuficientes",
                    "Reclamaciones previas a la vía judicial",
                    "Demandas por responsabilidad civil",
                    "Recursos de reposición",
                    "Recursos de alzada",
                    "Recursos contencioso-administrativos",
                    "Recursos de apelación",
                    "Recursos de casación"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start">
                      <span className="text-primary-600 mr-2">✓</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                
                <h3 className="text-2xl font-semibold mt-8 mb-4">¿Cuándo interponer un recurso?</h3>
                <p className="mb-4">
                  Recomendamos recurrir cuando:
                </p>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>La oferta no cubre sus gastos médicos reales</li>
                  <li>No se valoran correctamente sus secuelas</li>
                  <li>Se aplica incorrectamente el baremo de indemnizaciones</li>
                  <li>La aseguradora rechaza su reclamación sin fundamento</li>
                  <li>Existe discrepancia en la valoración de daños materiales</li>
                </ul>
              </div>
            </div>
            
            <div className="lg:w-1/3">
              <div className="bg-gray-50 dark:bg-gray-700 p-8 rounded-lg shadow-md sticky top-8">
                <h3 className="text-xl font-semibold mb-4">¿Le ofrecieron una indemnización baja?</h3>
                <p className="mb-6">
                  Podemos analizar su caso gratuitamente y decirle si merece la pena recurrir.
                </p>
                <Link 
                  href="/contacto" 
                  className="bg-transparent border-white border-2 text-white hover:bg-gray-50 hover:text-blue px-6 py-3 rounded-lg font-medium inline-block w-full text-center"
                >
                  Evaluar Mi Caso
                </Link>
                
                <div className="mt-8">
                  <h4 className="font-medium mb-3">Plazos clave:</h4>
                  <ul className="space-y-2 text-sm">
                    <li>✓ 15 días para recurrir multas</li>
                    <li>✓ 20 días para reclamar ofertas</li>
                    <li>✓ 1 mes para reclamaciones previas</li>
                    <li>✓ 1 año para demanda civil</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Cases Section */}
      <section className="py-16 bg-primary-700 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Casos con Recursos Exitosos</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                case: "Aumento de indemnización de 15.000€ a 42.000€",
                description: "Tras recurrir oferta inicial por lesiones medulares"
              },
              {
                case: "Anulación de multa por defectos en atestado",
                description: "Recurso contencioso-administrativo exitoso"
              },
              {
                case: "Indemnización por daños psicológicos",
                description: "Recurso que reconoció perjuicios no valorados inicialmente"
              }
            ].map((item, index) => (
              <div key={index} className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                <p className="text-2xl font-bold mb-3">{item.case}</p>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}