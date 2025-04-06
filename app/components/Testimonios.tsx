export default function Testimonios() {
  const testimonios = [
    {
      nombre: "María G.",
      localidad: "Granada",
      texto: "Tras mi accidente de coche, ABESAT logró una indemnización que superó todas mis expectativas. Profesionales y cercanos en todo momento.",
      rating: 5
    },
    {
      nombre: "Antonio L.",
      localidad: "Armilla",
      texto: "Excelente trato y resultados. Como víctima de un atropello, no podría haber elegido mejor equipo de abogados en Granada.",
      rating: 5
    },
    {
      nombre: "Sofía M.",
      localidad: "Maracena",
      texto: "Recomiendo totalmente a estos abogados especialistas en accidentes. Resolvieron mi caso rápidamente y con la máxima profesionalidad.",
      rating: 5
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-800">
          Lo Que Dicen Nuestros Clientes
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonios.map((testimonio, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md">
              <div className="flex mb-4">
                {[...Array(testimonio.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-500 text-xl">★</span>
                ))}
              </div>
              <p className="text-gray-600 italic mb-4">&#34;{testimonio.texto}&#34;</p>
              <p className="font-semibold text-blue-800">{testimonio.nombre}</p>
              <p className="text-gray-500 text-sm">{testimonio.localidad}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}