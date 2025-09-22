"use client"
import { useState } from "react"
import baremo from "../../data/baremo2025.json" // JSON con tabla completa

type ResultadoDesglose = {
  temporales: number
  intervenciones: number
  secuelas: number
  gastoEmergente: number
  lucroCesante: number
  complementos: number
  subtotal: number
  factorActualizacion: number
  total: number
}

export default function Calculator() {
  const [edad, setEdad] = useState<number>(35)
  const [diasBasico, setDiasBasico] = useState<number>(0)
  const [diasModerado, setDiasModerado] = useState<number>(0)
  const [diasGrave, setDiasGrave] = useState<number>(0)
  const [diasMuyGrave, setDiasMuyGrave] = useState<number>(0)
  const [intervenciones, setIntervenciones] = useState<number>(0)
  const [puntosSecuela, setPuntosSecuela] = useState<number>(0)
  const [gastosActuales, setGastosActuales] = useState<number>(0)
  const [gastosFuturos, setGastosFuturos] = useState<number>(0)
  const [ingresosAnuales, setIngresosAnuales] = useState<number>(0)
  const [diasIncapacidad, setDiasIncapacidad] = useState<number>(0)
  const [fechaAccidente, setFechaAccidente] = useState<string>(
    new Date().toISOString().slice(0, 10)
  )
  const [fechaDeterminacion, setFechaDeterminacion] = useState<string>(
    new Date().toISOString().slice(0, 10)
  )
  const [resultado, setResultado] = useState<ResultadoDesglose | null>(null)

  // Función para buscar valor de puntos según edad en el JSON de baremo
  function buscarValorPuntosEdad(edad: number, puntos: number) {
    const edades: number[] = (baremo as any).tabla_puntos_por_edad.edades
    const puntosCols: number[] = (baremo as any).tabla_puntos_por_edad.puntos
    const matriz: number[][] = (baremo as any).tabla_puntos_por_edad.matriz

    // Buscar fila más próxima según edad
    let filaIndex = 0
    for (let i = 0; i < edades.length; i++) {
      if (edad <= edades[i]) {
        filaIndex = i
        break
      }
      filaIndex = Math.min(i, matriz.length - 1)
    }

    // Buscar columna exacta o aproximar
    const maxPuntosCol = puntosCols[puntosCols.length - 1]
    if (puntos <= maxPuntosCol) {
      const colIndex = puntosCols.indexOf(puntos)
      if (colIndex >= 0 && matriz[filaIndex] && matriz[filaIndex][colIndex]) {
        return matriz[filaIndex][colIndex]
      }
    }

    // Aproximación proporcional
    const ultimaCol = matriz[filaIndex][matriz[filaIndex].length - 1]
    const factor = puntos / matriz[filaIndex].length
    return Math.round(ultimaCol * factor)
  }

  const calcularIndemnizacion = () => {
    // 1. Lesiones temporales
    const tarifa = (baremo as any).dias
    const temporales =
      diasBasico * tarifa.basico +
      diasModerado * tarifa.moderado +
      diasGrave * tarifa.grave +
      diasMuyGrave * tarifa.muy_grave

    // 2. Intervenciones
    const intMin = (baremo as any).intervenciones.min
    const intMax = (baremo as any).intervenciones.max
    const intervencionesTotal = intervenciones * ((intMin + intMax) / 2)

    // 3. Secuelas
    const valorSecuelas = buscarValorPuntosEdad(edad, puntosSecuela)

    // 4. Daño emergente
    const gastoEmergente = gastosActuales + gastosFuturos

    // 5. Lucro cesante
    const lucroPorDias = (ingresosAnuales / 365) * diasIncapacidad

    // 6. Complementos
    let complementos = 0
    const umbrales = (baremo as any).umbrales
    if (puntosSecuela >= umbrales.puntaje_estetico) {
      complementos += 12192.76
    }
    if (puntosSecuela >= umbrales.puntaje_psicofisico_indicador) {
      complementos += 24385.53
    }

    const subtotal =
      temporales +
      intervencionesTotal +
      valorSecuelas +
      gastoEmergente +
      lucroPorDias +
      complementos

    // 7. Factor de actualización (Art. 40)
    const fa = (baremo as any).actualizacion["2025"] || 1
    const yearDet = new Date(fechaDeterminacion).getFullYear()
    const yearAcc = new Date(fechaAccidente).getFullYear()
    let factor = yearDet >= 2025 && yearAcc <= 2025 ? fa : 1

    const total = Math.round(subtotal * factor)

    setResultado({
      temporales: Math.round(temporales),
      intervenciones: Math.round(intervencionesTotal),
      secuelas: Math.round(valorSecuelas),
      gastoEmergente: Math.round(gastoEmergente),
      lucroCesante: Math.round(lucroPorDias),
      complementos: Math.round(complementos),
      subtotal: Math.round(subtotal),
      factorActualizacion: factor,
      total,
    })
  }

  const reset = () => {
    setEdad(35)
    setDiasBasico(0)
    setDiasModerado(0)
    setDiasGrave(0)
    setDiasMuyGrave(0)
    setIntervenciones(0)
    setPuntosSecuela(0)
    setGastosActuales(0)
    setGastosFuturos(0)
    setIngresosAnuales(0)
    setDiasIncapacidad(0)
    setResultado(null)
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Calculadora Baremo 2025</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="fechaAccidente" className="block font-medium mb-1">
            Fecha del accidente
          </label>
          <input
            type="date"
            value={fechaAccidente}
            onChange={(e) => setFechaAccidente(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label
            htmlFor="fechaDeterminacion"
            className="block font-medium mb-1"
          >
            Fecha de determinación
          </label>
          <input
            type="date"
            value={fechaDeterminacion}
            onChange={(e) => setFechaDeterminacion(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label htmlFor="edad" className="block font-medium mb-1">
            Edad
          </label>
          <input
            type="number"
            value={edad}
            onChange={(e) => setEdad(parseInt(e.target.value || "0"))}
            placeholder="Edad"
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label htmlFor="diasBasico" className="block font-medium mb-1">
            Días con perjuicio básico
          </label>
          <input
            type="number"
            value={diasBasico}
            onChange={(e) => setDiasBasico(parseInt(e.target.value || "0"))}
            placeholder="Días perjuicio básico"
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label htmlFor="diasModerado" className="block font-medium mb-1">
            Días con perjuicio moderado
          </label>
          <input
            type="number"
            value={diasModerado}
            onChange={(e) => setDiasModerado(parseInt(e.target.value || "0"))}
            placeholder="Días perjuicio moderado"
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label htmlFor="diasGrave" className="block font-medium mb-1">
            Días con perjuicio grave
          </label>
          <input
            type="number"
            value={diasGrave}
            onChange={(e) => setDiasGrave(parseInt(e.target.value || "0"))}
            placeholder="Días perjuicio grave"
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label htmlFor="diasMuyGrave" className="block font-medium mb-1">
            Días con perjuicio muy grave
          </label>
          <input
            type="number"
            value={diasMuyGrave}
            onChange={(e) => setDiasMuyGrave(parseInt(e.target.value || "0"))}
            placeholder="Días perjuicio muy grave"
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label htmlFor="intervenciones" className="block font-medium mb-1">
            Número de intervenciones quirúrgicas
          </label>
          <input
            type="number"
            value={intervenciones}
            onChange={(e) => setIntervenciones(parseInt(e.target.value || "0"))}
            placeholder="Intervenciones"
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label htmlFor="puntosSecuela" className="block font-medium mb-1">
            Puntos de secuela
          </label>
          <input
            type="number"
            value={puntosSecuela}
            onChange={(e) => setPuntosSecuela(parseInt(e.target.value || "0"))}
            placeholder="Puntos de secuela"
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label htmlFor="gastosActuales" className="block font-medium mb-1">
            Gastos actuales (€)
          </label>
          <input
            type="number"
            value={gastosActuales}
            onChange={(e) =>
              setGastosActuales(parseFloat(e.target.value || "0"))
            }
            placeholder="Gastos actuales (€)"
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label htmlFor="gastosFuturos" className="block font-medium mb-1">
            Gastos futuros (€)
          </label>
          <input
            type="number"
            value={gastosFuturos}
            onChange={(e) =>
              setGastosFuturos(parseFloat(e.target.value || "0"))
            }
            placeholder="Gastos futuros (€)"
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label htmlFor="ingresosAnuales" className="block font-medium mb-1">
            Ingresos anuales (€) (lucro cesante)
          </label>
          <input
            type="number"
            value={ingresosAnuales}
            onChange={(e) =>
              setIngresosAnuales(parseFloat(e.target.value || "0"))
            }
            placeholder="Ingresos anuales (€)"
            className="w-full p-2 border rounded"
          />
        </div>

        <div>
          <label htmlFor="diasIncapacidad" className="block font-medium mb-1">
            Días de incapacidad laboral
          </label>
          <input
            type="number"
            value={diasIncapacidad}
            onChange={(e) =>
              setDiasIncapacidad(parseInt(e.target.value || "0"))
            }
            placeholder="Días de incapacidad"
            className="w-full p-2 border rounded"
          />
        </div>
      </div>

      <div className="mt-6 flex gap-3">
        <button
          onClick={calcularIndemnizacion}
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
          Calcular Indemnización
        </button>
        <button onClick={reset} className="px-4 py-2 border rounded">
          Reiniciar
        </button>
      </div>

      {resultado && (
        <div className="mt-6 p-4  border rounded">
          <h2 className="text-xl font-semibold mb-3">Resultado estimado</h2>
          <ul className="space-y-2">
            <li>
              • Lesiones temporales:{" "}
              {resultado.temporales.toLocaleString("es-ES")} €
            </li>
            <li>
              • Intervenciones quirúrgicas:{" "}
              {resultado.intervenciones.toLocaleString("es-ES")} €
            </li>
            <li>• Secuelas: {resultado.secuelas.toLocaleString("es-ES")} €</li>
            <li>
              • Daño emergente (gastos):{" "}
              {resultado.gastoEmergente.toLocaleString("es-ES")} €
            </li>
            <li>
              • Lucro cesante: {resultado.lucroCesante.toLocaleString("es-ES")}{" "}
              €
            </li>
            <li>
              • Complementos: {resultado.complementos.toLocaleString("es-ES")} €
            </li>
            <li className="font-bold">
              Subtotal: {resultado.subtotal.toLocaleString("es-ES")} €
            </li>
            <li>• Factor de actualización: {resultado.factorActualizacion}</li>
            <li className="text-2xl font-bold text-green-700">
              Total estimado: {resultado.total.toLocaleString("es-ES")} €
            </li>
          </ul>
        </div>
      )}
    </div>
  )
}
