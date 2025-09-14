"use client"
import Link from "next/link"
import { useState } from "react"

export default function Calculator() {
  const [diasCuracion, setDiasCuracion] = useState("")
  const [tipoSecuela, setTipoSecuela] = useState("")
  const [gastosMedicos, setGastosMedicos] = useState("")
  const [resultado, setResultado] = useState<number | null>(null)

  const calcularIndemnizacion = () => {
    // Validar datos
    if (!diasCuracion || !tipoSecuela) {
      alert(
        "Por favor, complete los campos obligatorios (días de curación y tipo de secuela)"
      )
      return
    }

    const dias = parseInt(diasCuracion)
    const gastos = gastosMedicos ? parseInt(gastosMedicos) : 0

    // Cálculo según baremo aproximado (valores orientativos)
    let indemnizacion = 0

    // Base por días de curación (aproximadamente 30€/día para los primeros 30 días)
    indemnizacion += Math.min(dias, 30) * 30

    // Días restantes a menor tasa
    if (dias > 30) {
      indemnizacion += (dias - 30) * 20
    }

    // Añadir por secuelas
    switch (tipoSecuela) {
      case "leve":
        indemnizacion += 1000 // Secuelas leves
        break
      case "moderada":
        indemnizacion += 5000 // Secuelas moderadas
        break
      case "grave":
        indemnizacion += 15000 // Secuelas graves
        break
      default:
        // No añadir nada para "no secuelas"
        break
    }

    // Añadir gastos médicos
    indemnizacion += gastos

    setResultado(indemnizacion)
  }

  const resetearCalculadora = () => {
    setDiasCuracion("")
    setTipoSecuela("")
    setGastosMedicos("")
    setResultado(null)
  }
  return (
    <div className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg  mb-8">
          <h2 className="text-2xl font-bold mb-4">
            Calcula tu indemnización en 3 pasos
          </h2>
          <p className=" mb-6">
            Completa los siguientes datos para obtener una estimación de tu
            indemnización según el baremo legal vigente.
          </p>

          {/* Formulario de Calculadora */}
          <form className="space-y-6">
            {/* Días de curación */}
            <div>
              <label className="block text-lg font-medium mb-2">
                1. Días de curación (tiempo de recuperación)
              </label>
              <input
                type="number"
                min="1"
                max="365"
                value={diasCuracion}
                onChange={(e) => setDiasCuracion(e.target.value)}
                placeholder="Ej: 30 días"
                className="dark:bg-gray-800 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <p className="text-sm  mt-1">
                Número de días que has estado en tratamiento médico
              </p>
            </div>

            {/* Secuelas */}
            <div>
              <label className="block text-lg font-medium mb-2">
                2. ¿Tienes secuelas permanentes?
              </label>
              <select
                value={tipoSecuela}
                onChange={(e) => setTipoSecuela(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg dark:bg-gray-800 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                <option value="">Selecciona una opción</option>
                <option value="no">No tengo secuelas</option>
                <option value="leve">Secuelas leves (hasta 5%)</option>
                <option value="moderada">Secuelas moderadas (5-15%)</option>
                <option value="grave">Secuelas graves (más de 15%)</option>
              </select>
            </div>

            {/* Gastos médicos */}
            <div>
              <label className="block text-lg font-medium mb-2">
                3. Gastos médicos y farmacéuticos (aproximadamente)
              </label>
              <input
                value={gastosMedicos}
                onChange={(e) => setGastosMedicos(e.target.value)}
                type="number"
                min="0"
                placeholder="Ej: 500 €"
                className="dark:bg-gray-800 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>

            {/* Botón de calcular */}
            <button
              onClick={calcularIndemnizacion}
              type="button"
              className="bg-transparent border-2 border-primary-600 text-primary-600 px-4 py-3 rounded-lg font-medium inline-block w-full text-center hover:bg-primary-50 cursor-pointer"
            >
              🧮 Calcular Mi Indemnización
            </button>
          </form>
        </div>

        {/* Resultado (inicialmente oculto) */}
        {resultado !== null && (
          <div className=" py-16 bg-white dark:bg-gray-800 border border-green-200 rounded-lg p-6 mb-8">
            <h3 className="text-2xl font-bold text-green-800 mb-4">
              Resultado estimado
            </h3>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-700 mb-2">
                {resultado.toLocaleString("es-ES")} €
              </div>
              <p className="text-green-600 mb-4">
                Estimación basada en el baremo legal vigente
              </p>

              <div className=" p-4 rounded-lg mt-4 text-left">
                <h4 className="font-semibold mb-2">Desglose aproximado:</h4>
                <ul className="text-sm space-y-1">
                  <li>• Días de curación: {diasCuracion} días</li>
                  <li>
                    • Secuelas:{" "}
                    {tipoSecuela === "no"
                      ? "No"
                      : tipoSecuela === "leve"
                      ? "Leves"
                      : tipoSecuela === "moderada"
                      ? "Moderadas"
                      : "Graves"}
                  </li>
                  {gastosMedicos && (
                    <li>
                      • Gastos médicos:{" "}
                      {parseInt(gastosMedicos).toLocaleString("es-ES")} €
                    </li>
                  )}
                </ul>
              </div>

              <p className="text-sm text-green-700 mt-4">
                Esta es una estimación orientativa. Para un cálculo exacto,
                contacta con nuestros abogados especialistas.
              </p>

              <button
                onClick={resetearCalculadora}
                className="mt-4 text-primary-600 hover:text-primary-800 font-medium"
              >
                ↺ Realizar otro cálculo
              </button>
            </div>
            <div className="mt-8 container mx-auto px-4 text-center">
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
              </div>
            </div>
          </div>
        )}

        {/* Información importante */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="text-xl font-bold text-blue-800 mb-4">
            📋 Información importante
          </h3>
          <ul className="space-y-3 text-blue-700">
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              Esta calculadora proporciona una estimación orientativa basada en
              el baremo de tráfico
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              La indemnización real puede variar según las circunstancias
              específicas de tu caso
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              Los cálculos incluyen daños personales, pero no daños materiales
              del vehículo
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              Para una valoración exacta, necesitamos revisar tus informes
              médicos completos
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
