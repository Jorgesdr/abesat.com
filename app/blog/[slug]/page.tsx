import { BlogPost } from '../../lib/definitions';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import RecentPosts from '../../components/RecentPosts';
import { Metadata } from 'next';
import sanitizeHtml from 'sanitize-html';
import Link from 'next/link';

const blogPosts: BlogPost[] = [
  {
  slug: 'indemnizaciones-accidentes-trafico',
  title: 'Cómo calcular tu indemnización por accidente de tráfico',
  description: 'Guía completa para entender cómo se calculan las indemnizaciones en accidentes de circulación en Granada.',
  date: '2023-11-15',
  categories: ['Indemnizaciones', 'Accidentes'],
  image: '/images/blog/indemnizaciones.webp',
  content: `
    <div class="prose max-w-none">
      <h2>Introducción al sistema de indemnizaciones</h2>
      <p>El cálculo de indemnizaciones por accidentes de tráfico en España se rige por el <strong>Baremo de Tráfico</strong>, actualizado en 2021. Este sistema establece criterios objetivos para valorar lesiones, secuelas y daños materiales.</p>
      
      <h2>Factores que determinan tu indemnización</h2>
      <ul>
        <li><strong>Días de curación</strong>: Período desde el accidente hasta el alta médica</li>
        <li><strong>Secuelas permanentes</strong>: Daños físicos o psicológicos que persisten</li>
        <li><strong>Perjuicio estético</strong>: Cuando quedan cicatrices visibles</li>
        <li><strong>Daños materiales</strong>: Reparación del vehículo y otros bienes</li>
      </ul>

      <h2>Ejemplo práctico de cálculo</h2>
      <p>Para una víctima con 90 días de curación y una secuela permanente en la columna (5% de incapacidad):</p>
      <table class="min-w-full ">
        <thead>
          <tr>
            <th class="py-2 px-4 border-b">Concepto</th>
            <th class="py-2 px-4 border-b">Cálculo</th>
            <th class="py-2 px-4 border-b">Importe</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="py-2 px-4 border-b">Días de curación</td>
            <td class="py-2 px-4 border-b">31.58€ x 90 días</td>
            <td class="py-2 px-4 border-b">2,842.20€</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b">Secuela vertebral</td>
            <td class="py-2 px-4 border-b">5% de 50,000€</td>
            <td class="py-2 px-4 border-b">2,500.00€</td>
          </tr>
          <tr class="font-bold">
            <td class="py-2 px-4 border-b">Total</td>
            <td class="py-2 px-4 border-b"></td>
            <td class="py-2 px-4 border-b">5,342.20€</td>
          </tr>
        </tbody>
      </table>

      <h2>Consejos para maximizar tu indemnización</h2>
      <ol>
        <li>Acude siempre a un <strong>centro médico</strong> aunque no tengas síntomas inmediatos</li>
        <li>Conserva todos los <strong>justificantes médicos</strong> y facturas</li>
        <li>No aceptes la primera oferta de la aseguradora sin asesoramiento</li>
        <li>Considera un <strong>informe médico pericial</strong> independiente</li>
      </ol>

      <div class="dark:bg-gray-700  p-4 rounded-lg mt-6">
        <h3 class="text-lg font-semibold">¿Necesitas ayuda con tu reclamación?</h3>
        <p>En ABESAT analizamos tu caso gratuitamente y te asesoramos para obtener la máxima indemnización.</p>
        <a href="/contacto" class="inline-block mt-2 hover:text-blue hover:bg-white bg-transparent text-white border-2 px-4 py-2 rounded">Consulta Gratuita</a>
      </div>
    </div>
  `
},
  {
  slug: 'que-hacer-accidente',
  title: 'Qué hacer después de un accidente de tráfico: Guía paso a paso',
  description: 'Pasos esenciales que debes seguir inmediatamente después de sufrir un accidente de circulación.',
  date: '2023-10-28',
  categories: ['Consejos Legales'],
  image: '/images/blog/accidente.webp',
  content: `
    <div class="prose max-w-none">
      <h2>Primeros minutos tras el accidente</h2>
      <ol>
        <li><strong>Protege la zona</strong>: Enciende las luces de emergencia y coloca los triángulos</li>
        <li><strong>Comprueba heridos</strong>: Asiste a los afectados sin moverlos (excepto peligro inminente)</li>
        <li><strong>Llama al 112</strong>: Es obligatorio si hay heridos o daños graves</li>
      </ol>

      <h2>Documentación esencial que debes recoger</h2>
      <div class="grid md:grid-cols-2 gap-4 my-6">
        <div class="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
          <h3 class="font-semibold">Datos del otro conductor</h3>
          <ul class="list-disc pl-5 mt-2">
            <li>Nombre completo y DNI</li>
            <li>Nº póliza de seguro</li>
            <li>Matrícula del vehículo</li>
          </ul>
        </div>
        <div class="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
          <h3 class="font-semibold">Pruebas del accidente</h3>
          <ul class="list-disc pl-5 mt-2">
            <li>Fotos del lugar (mínimo 12 ángulos)</li>
            <li>Datos de testigos</li>
            <li>Copia del atestado policial</li>
          </ul>
        </div>
      </div>

      <h2>Errores que debes evitar</h2>
      <div class="border-l-4 border-red-500 pl-4 my-6">
        <ul class="space-y-3">
          <li><strong>No firmar documentos</strong> sin entenderlos completamente</li>
          <li><strong>No admitir culpa</strong> en el lugar del accidente</li>
          <li><strong>No rechazar asistencia médica</strong> aunque te sientas bien</li>
          <li><strong>No esperar demasiado</strong> para reclamar (plazo máximo 1 año)</li>
        </ul>
      </div>

      <h2>Pasos posteriores clave</h2>
      <ol start="4">
        <li><strong>Acude a un centro médico</strong> aunque no tengas síntomas</li>
        <li><strong>Notifica a tu aseguradora</strong> en las primeras 48 horas</li>
        <li><strong>Contacta con un abogado</strong> especializado en accidentes</li>
      </ol>

      <div class="p-4 rounded-lg mt-8">
        <a href="/contacto" class="inline-block mt-2 bg-transparent border-2 border-white hover:text-blue hover:bg-gray-100 px-4 py-2 rounded">Evaluar Mi Caso</a>      
      </div>
    </div>
  `
},
{
  slug: 'baremo-indemnizaciones-2023',
  title: 'Nuevo Baremo de Indemnizaciones 2023: ¿Qué ha cambiado?',
  description: 'Análisis completo de las modificaciones en el sistema de cálculo de indemnizaciones por accidentes.',
  date: '2023-09-10',
  categories: ['Indemnizaciones', 'Actualidad Legal'],
  image: '/images/blog/calculo.webp',
  content: `
    <div class="prose max-w-none">
      <h2>Principales cambios en el Baremo 2023</h2>
      <p>La última actualización del <strong>Baremo de Tráfico</strong> introduce modificaciones significativas en el cálculo de indemnizaciones:</p>
      
      <div class="overflow-x-auto">
        <table class="min-w-full ">
          <thead>
            <tr>
              <th class="py-3 px-4 border-b">Concepto</th>
              <th class="py-3 px-4 border-b">Baremo 2021</th>
              <th class="py-3 px-4 border-b">Baremo 2023</th>
              <th class="py-3 px-4 border-b">Variación</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="py-2 px-4 border-b">Día de curación básico</td>
              <td class="py-2 px-4 border-b">30.42€</td>
              <td class="py-2 px-4 border-b">31.58€</td>
              <td class="py-2 px-4 border-b text-green-600">+3.8%</td>
            </tr>
            <tr>
              <td class="py-2 px-4 border-b">Secuela vertebral (5%)</td>
              <td class="py-2 px-4 border-b">2,250€</td>
              <td class="py-2 px-4 border-b">2,500€</td>
              <td class="py-2 px-4 border-b text-green-600">+11.1%</td>
            </tr>
            <tr>
              <td class="py-2 px-4 border-b">Perjuicio estético facial</td>
              <td class="py-2 px-4 border-b">Hasta 30,000€</td>
              <td class="py-2 px-4 border-b">Hasta 36,000€</td>
              <td class="py-2 px-4 border-b text-green-600">+20%</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 class="mt-8">Novedades en lesiones psicológicas</h2>
      <p>Por primera vez se incluyen tablas específicas para valorar:</p>
      <ul>
        <li>Estrés postraumático</li>
        <li>Trastornos adaptativos</li>
        <li>Síndromes ansioso-depresivos</li>
      </ul>

      <div class=" p-4 rounded-lg my-6">
        <h3 class="text-lg font-semibold">¿Cómo afecta a tu caso?</h3>
        <p>Las nuevas tablas pueden incrementar tu indemnización entre un 5% y 25% dependiendo de las características de tu accidente.</p>
      </div>

      <h2>Casos prácticos comparativos</h2>
      <div class="grid md:grid-cols-2 gap-6">
        <div class="border p-4 rounded-lg">
          <h3 class="font-semibold">Caso 1: Fractura de fémur</h3>
          <p>120 días curación + 8% secuela</p>
          <div class="mt-2">
            <p>2021: <span class="line-through">14,520€</span></p>
            <p>2023: <span class="text-green-600 font-bold">16,240€</span></p>
          </div>
        </div>
        <div class="border p-4 rounded-lg">
          <h3 class="font-semibold">Caso 2: Lesión cervical</h3>
          <p>60 días curación + estrés postraumático</p>
          <div class="mt-2">
            <p>2021: <span class="line-through">3,850€</span></p>
            <p>2023: <span class="text-green-600 font-bold">5,200€</span></p>
          </div>
        </div>
      </div>

      <div class="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg mt-8">
        <h3 class="text-lg font-semibold">¿Tuviste un accidente antes de 2023?</h3>
        <p>Podrías beneficiarte de las nuevas tablas si tu caso aún está en proceso de reclamación.</p>
        <a href="/contacto" class="inline-block mt-2 bg-gray-800 text-white px-4 py-2 rounded">Evaluar Mi Caso</a>
      </div>
    </div>
  `
},
{
  slug: 'lesiones-whiplash',
  title: 'Lesiones por latigazo cervical: Mitos y realidades legales',
  description: 'Todo lo que necesitas saber sobre la reclamación de indemnizaciones por lesiones cervicales.',
  date: '2023-08-22',
  categories: ['Lesiones', 'Indemnizaciones'],
  image: '/images/blog/latigazo-cervical.webp',
  content: `
    <div class="prose max-w-none">
      <h2>¿Qué es el síndrome de latigazo cervical?</h2>
      <p>Conocido como <strong>whiplash</strong>, es una lesión común en accidentes traseros, caracterizada por:</p>
      <ul>
        <li>Dolor cervical y rigidez</li>
        <li>Mareos y cefaleas</li>
        <li>Limitación de movilidad</li>
        <li>En casos graves, vértigos y trastornos visuales</li>
      </ul>

      <div class="dark:bg-gray-700  p-4 rounded-lg my-6">
        <h3 class="text-lg font-semibold">Dato importante</h3>
        <p>El 45% de las lesiones en accidentes de tráfico en Granada son cervicales, según datos de la DGT.</p>
      </div>

      <h2>Cómo se valora legalmente</h2>
      <p>El Baremo de Tráfico establece estos criterios:</p>
      <div class="overflow-x-auto bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
        <table class="min-w-full bg-gray-50 dark:bg-gray-700">
          <thead>
            <tr>
              <th class="py-2 px-4 border-b">Gravedad</th>
              <th class="py-2 px-4 border-b">Días de curación</th>
              <th class="py-2 px-4 border-b">Indemnización base</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="py-2 px-4 border-b">Leve</td>
              <td class="py-2 px-4 border-b">7-15 días</td>
              <td class="py-2 px-4 border-b">350-750€</td>
            </tr>
            <tr>
              <td class="py-2 px-4 border-b">Moderado</td>
              <td class="py-2 px-4 border-b">16-30 días</td>
              <td class="py-2 px-4 border-b">900-1,500€</td>
            </tr>
            <tr>
              <td class="py-2 px-4 border-b">Grave</td>
              <td class="py-2 px-4 border-b">+30 días</td>
              <td class="py-2 px-4 border-b">1,800€ + 31.58€/día</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 class="mt-8">Problemas comunes en la reclamación</h2>
      <div class="border-l-4 border-red-500 pl-4 mt-6 mb-6">
        <ul class="space-y-3">
          <li><strong>Descredito médico</strong>: Las aseguradoras suelen cuestionar estas lesiones</li>
          <li><strong>Pruebas insuficientes</strong>: Es crucial realizar pruebas de movilidad cervical</li>
          <li><strong>Alta médica prematura</strong>: No aceptes el alta hasta la recuperación total</li>
        </ul>
      </div>

      <h2>Consejos para tu reclamación</h2>
      <ol>
        <li>Realiza un <strong>informe biomecánico</strong> que relacione el impacto con tus lesiones</li>
        <li>Documenta <strong>todos los síntomas</strong>, incluso los que aparecen días después</li>
        <li>Acude a <strong>rehabilitación</strong> y guarda todos los informes</li>
        <li>Considera una <strong>valoración por médico forense</strong> independiente</li>
      </ol>

      <div class="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg mt-8 border-1 border-white">
        <h3 class="text-lg font-semibold">¿Te han ofrecido una indemnización baja por tu lesión cervical?</h3>
        <p>El 68% de las ofertas iniciales por whiplash son inferiores a lo establecido en el baremo.</p>
        <a href="/contacto" class="inline-block mt-2 bg-transparent border-2 border-white hover:text-blue hover:bg-gray-100 px-4 py-2 rounded">Revisar Mi Oferta</a>
      </div>
    </div>
  `
},
{
  slug: 'defensa-penal-accidentes',
  title: 'Responsabilidad penal en accidentes de tráfico: Lo que debes saber',
  description: 'Guía sobre las consecuencias penales que pueden derivarse de un accidente de circulación.',
  date: '2023-07-05',
  categories: ['Defensa Penal', 'Consejos Legales'],
  image: '/images/blog/responsabilidad-penal.webp',
  content: `
    <div class="max-w-none">
      <h2>¿Cuándo un accidente tiene consecuencias penales?</h2>
      <p>No todos los accidentes derivan en responsabilidad penal. Estos son los casos más comunes:</p>
      <ul>
        <li><strong>Conducción bajo influencia de alcohol/drogas</strong> (más de 0.60 mg/l en aire)</li>
        <li><strong>Exceso de velocidad</strong> (más del 50% sobre límite permitido)</li>
        <li><strong>Homicidio o lesiones imprudentes</strong></li>
        <li><strong>Omisión del deber de socorro</strong></li>
      </ul>

      <div class=" p-4 rounded-lg my-6">
        <h3 class="text-lg font-semibold">Dato alarmante</h3>
        <p>El 23% de los conductores implicados en accidentes graves en Granada dan positivo en alcohol o drogas (DGT 2022).</p>
      </div>

      <h2>Posibles consecuencias penales</h2>
      <div class="overflow-x-auto">
        <table class="min-w-full ">
          <thead>
            <tr>
              <th class="py-2 px-4 border-b">Infracción</th>
              <th class="py-2 px-4 border-b">Penalidad</th>
              <th class="py-2 px-4 border-b">Multa</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="py-2 px-4 border-b">Alcoholemia (0.60-1.2 mg/l)</td>
              <td class="py-2 px-4 border-b">3-6 meses prisión</td>
              <td class="py-2 px-4 border-b">Hasta 1,000€</td>
            </tr>
            <tr>
              <td class="py-2 px-4 border-b">Exceso velocidad (+50%)</td>
              <td class="py-2 px-4 border-b">3-6 meses prisión</td>
              <td class="py-2 px-4 border-b">Hasta 600€</td>
            </tr>
            <tr>
              <td class="py-2 px-4 border-b">Lesiones imprudentes</td>
              <td class="py-2 px-4 border-b">6 meses-2 años</td>
              <td class="py-2 px-4 border-b">Hasta 2,000€</td>
            </tr>
            <tr>
              <td class="py-2 px-4 border-b">Omisión de socorro</td>
              <td class="py-2 px-4 border-b">6 meses-4 años</td>
              <td class="py-2 px-4 border-b">Hasta 3,000€</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 class="mt-8">Estrategias de defensa penal</h2>
      <div class="grid md:grid-cols-2 gap-6">
        <div class="border p-4 rounded-lg">
          <h3 class="font-semibold">Antes del juicio</h3>
          <ul class="list-disc pl-5 mt-2">
            <li>Impugnación de pruebas de alcoholemia</li>
            <li>Recursos contra el atestado</li>
            <li>Acuerdos con el Ministerio Fiscal</li>
          </ul>
        </div>
        <div class="border p-4 rounded-lg">
          <h3 class="font-semibold">Durante el juicio</h3>
          <ul class="list-disc pl-5 mt-2">
            <li>Prueba de circunstancias atenuantes</li>
            <li>Testigos de descargo</li>
            <li>Informes periciales técnicos</li>
          </ul>
        </div>
      </div>

      <h2>Consejos si enfrentas cargos penales</h2>
      <ol>
        <li><strong>No declares sin abogado</strong>: Tienes derecho a asistencia letrada</li>
        <li><strong>Recopila pruebas favorables</strong>: Fotografías, testigos, etc.</li>
        <li><strong>Considera el conformidad</strong>: Puede reducir la pena hasta 1/3</li>
        <li><strong>Actúa rápido</strong>: Los plazos procesales son cortos</li>
      </ol>

      <div class="bg-gray-800 text-white p-4 rounded-lg mt-8">
        <h3 class="text-lg font-semibold">¿Estás siendo investigado por un accidente?</h3>
        <p>La primera 48 horas son cruciales para tu defensa. Contacta con un abogado penalista inmediatamente.</p>
        <a href="tel:+34696369030" class="inline-flex items-center mt-2 bg-transparent border-2 border-white hover:text-blue hover:bg-gray-100 px-4 py-2 rounded font-medium">
          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
          </svg>
          Llamar Urgencia
        </a>
      </div>
    </div>
  `
}
];

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
  
};



function SafeHTML({ html }: { html: string }) {
  const cleanHtml = sanitizeHtml(html, {
    allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img']),
    allowedAttributes: {
      '*': ['class'],
      a: ['href', 'target', 'rel'],
      img: ['src', 'alt', 'width', 'height', 'class']
    }
  });

  return <div dangerouslySetInnerHTML={{ __html: cleanHtml }} />;
}

export default async function BlogPostPage({ params}:PageProps
) {
  const { slug } =await params;
  
  // Buscamos el post
  const post = blogPosts.find((post) => post.slug === slug);

  if (!post) {
    return notFound();
  }

  return (
    <main className="py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <article className="mb-12">
          <header className="mb-8">
            <div className="flex flex-wrap gap-2 mb-4">
              {post.categories.map((category) => (
                <span 
                  key={category} 
                  className="bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-300 text-xs px-3 py-1 rounded-full"
                >
                  {category}
                </span>
              ))}
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>
            <time 
              dateTime={post.date} 
              className="text-gray-500 dark:text-gray-400"
            >
              {new Date(post.date).toLocaleDateString('es-ES', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </time>
          </header>

          {post.image && (
            <div className="relative h-64 md:h-96 mb-8 rounded-lg overflow-hidden shadow-md">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}

          <div className="[&>div]:max-w-none [&>div>h2]:text-2xl [&>div>h2]:font-bold [&>div>h2]:mt-8 [&>div>h2]:mb-4 
                        [&>div>h3]:text-xl [&>div>h3]:font-semibold [&>div>h3]:mt-6 [&>div>h3]:mb-3
                        [&>div>p]:mb-4 [&>div>p]:leading-relaxed
                        [&>div>ul]:list-disc [&>div>ul]:pl-6 [&>div>ul]:mb-4 [&>div>ul>li]:mb-2
                        [&>div>ol]:list-decimal [&>div>ol]:pl-6 [&>div>ol]:mb-4 [&>div>ol>li]:mb-2
                        [&>div>table]:w-full [&>div>table]:my-6 [&>div>table]:border-collapse
                        [&>div>table>thead>tr]:bg-gray-100 [&>div>table>thead>tr]:dark:bg-gray-700
                        [&>div>table>th]:p-3 [&>div>table>th]:text-left [&>div>table>th]:border-b [&>div>table>th]:border-gray-200
                        [&>div>table>td]:p-3 [&>div>table>td]:border-b [&>div>table>td]:border-gray-200
                        [&>div>div]:my-6 [&>div>div]:p-4 [&>div>div]:rounded-lg [&>div>div]:shadow-sm
                        [&>div>div.dark:bg-gray-700 ]:dark:bg-gray-700  [&>div>div.dark:bg-gray-700 ]:dark:bg-blue-900/20
                        [&>div>div.bg-amber-50]:bg-amber-50 [&>div>div.bg-amber-50]:dark:bg-amber-900/20
                        [&>div>div.bg-purple-50]:bg-purple-50 [&>div>div.bg-purple-50]:dark:bg-purple-900/20
                        [&>div>div.bg-green-50]:bg-green-50 [&>div>div.bg-green-50]:dark:bg-green-900/20
                        [&>div>div.bg-red-50]:bg-red-50 [&>div>div.bg-red-50]:dark:bg-red-900/20
                        [&>div>div.bg-gray-50]:bg-gray-50 dark:bg-gray-700 [&>div>div.bg-gray-50]:dark:bg-gray-700/50
                        [&>div>div.bg-gray-800]:bg-gray-800 [&>div>div.bg-gray-800]:text-white
                        [&>div>a]:text-primary-600 [&>div>a]:dark:text-primary-400 [&>div>a]:hover:underline
                        [&>div>.inline-block]:mt-4">
            <SafeHTML html={post.content} />
          </div>
          <Link 
              href="/blog" 
              className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:underline"
            >
              ← Volver al blog
            </Link>
        </article>
          {/*
            <RecentPosts currentSlug={post.slug} />
          */}
      </div>
    </main>
  );
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug
  }));
}