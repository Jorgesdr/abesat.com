// app/calculadora-indemnizacion/page.tsx

import Link from "next/link"
import Head from "next/head"

import Calculator from "../components/Calculator"

export const metadata = {
  title: "Calculadora Indemnización Accidente Tráfico | ABESAT",
  description:
    "Calcula GRATIS tu indemnización por accidente de tráfico. Herramienta online para saber cuánto te corresponde según el baremo legal actual.",
}

export default function CalculadoraIndemnizacionPage() {
  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "Calculadora de Indemnización por Accidente de Tráfico",
              description:
                "Calcula gratuitamente tu indemnización por accidente de tráfico según el baremo legal vigente",
              applicationCategory: "LegalApplication",
              operatingSystem: "Any",
              permissions: "browser",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "EUR",
              },
            }),
          }}
        />
      </Head>

      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-primary-600 to-primary-800 dark:text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Calculadora de Indemnización por Accidente
            </h1>
            <p className="text-xl max-w-3xl mx-auto">
              Calcula GRATIS cuánto te corresponde por ley según el baremo de
              accidentes de tráfico
            </p>
          </div>
        </section>

        {/* Calculadora Section */}
        <section className=" py-16 bg-white dark:bg-gray-800">
          <Calculator />
        </section>

        {/* CTA Section */}
        <section className="mt-12 p-6 bg-primary-50 rounded-lg text-center ">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">
              ¿Necesitas una valoración exacta?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Nuestros abogados especialistas en indemnizaciones analizarán tu
              caso gratuitamente
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contacto"
                className="bg-transparent border-2 border-primary-600 text-primary-600 px-4 py-3 rounded-lg font-medium inline-block w-full text-center hover:bg-primary-50"
              >
                📞 Consulta Gratuita
              </Link>
              <Link
                href="/servicios/indemnizaciones"
                className="bg-transparent border-2 border-primary-600 text-primary-600 px-4 py-3 rounded-lg font-medium inline-block w-full text-center hover:bg-primary-50"
              >
                ℹ️ Más Información
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gray-50 dark:bg-gray-700">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Preguntas Frecuentes
            </h2>

            <div className="max-w-3xl mx-auto space-y-6">
              {[
                {
                  question: "¿Es realmente gratuita la calculadora?",
                  answer:
                    "Sí, nuestra calculadora es completamente gratuita. No requiere registro ni compromiso.",
                },
                {
                  question: "¿Qué baremo legal utiliza esta calculadora?",
                  answer:
                    "Utilizamos el baremo de tráfico vigente aprobado por ley, actualizado con los últimos cambios.",
                },
                {
                  question:
                    "¿La estimación incluye todos los conceptos indemnizatorios?",
                  answer:
                    "Incluye los conceptos principales (daños personales, perjuicios básicos), pero para una valoración completa necesitamos analizar documentación médica adicional.",
                },
                {
                  question: "¿Cómo puedo obtener un cálculo exacto?",
                  answer:
                    "Contacta con nosotros para una consulta gratuita. Analizaremos tus informes médicos y te daremos una valoración exacta sin compromiso.",
                },
              ].map((item, index) => (
                <div key={index} className="border-b border-gray-200 pb-6">
                  <h3 className="text-xl font-semibold mb-2">
                    {item.question}
                  </h3>
                  <p className="text-gray-500">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
