// app/nosotros/page.tsx
import Image from 'next/image';
import Link from 'next/link';
import { FaCarCrash, FaBalanceScale, FaMedal, FaUsers, FaHandshake } from 'react-icons/fa';

export default function NosotrosPage() {
    const valores =[{
                icon: <FaBalanceScale className="text-4xl text-blue-900 mb-4" />,
                title: "Especialización",
                text: "Exclusivamente dedicados a accidentes de tráfico para ofrecer el mejor servicio"
              },
              {
                icon: <FaHandshake className="text-4xl text-blue-900 mb-4" />,
                title: "Transparencia",
                text: "Información clara desde el primer momento, sin sorpresas ni letra pequeña"
              },
              {
                icon: <FaUsers className="text-4xl text-blue-900 mb-4" />,
                title: "Enfoque humano",
                text: "Trato personalizado, entendiendo las necesidades de cada cliente"
              },
              {
                icon: <FaCarCrash className="text-4xl text-blue-900 mb-4" />,
                title: "Experiencia",
                text: "Más de dos décadas resolviendo casos complejos con éxito"
              },
              {
                icon: <FaMedal className="text-4xl text-blue-900 mb-4" />,
                title: "Excelencia",
                text: "Compromiso con los más altos estándares profesionales"
              }

    ]
  return (
    <main>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-600 to-primary-800 dark:text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Sobre ABESAT Abogados</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Más de 20 años de experiencia especializada en la defensa de víctimas de accidentes de tráfico
          </p>
        </div>
      </section>

      {/* Nuestra Historia */}
      <section className="py-16 container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <Image
              src="/images/abogado-accidente-trafico-granada-1024x684-67f0551302fcc.webp" // Reemplaza con tu imagen
              alt="Historia de ABESAT"
              width={600}
              height={400}
              className="rounded-lg shadow-xl"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Nuestra Historia</h2>
            <p className="text-lg mb-4">
              Fundado en 2003, ABESAT nació con el propósito de ofrecer asesoramiento jurídico especializado a víctimas de accidentes de tráfico.
            </p>
            <p className="text-lg mb-4">
              Desde entonces, hemos crecido hasta convertirnos en un referente nacional en la materia, combinando experiencia jurídica con un trato cercano y personalizado.
            </p>
            <p className="text-lg">
              Nuestro compromiso con la excelencia nos ha permitido ayudar a miles de clientes a obtener la compensación que merecen.
            </p>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Nuestros Valores</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {valores.map((item, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipo */}
      <section className="py-16 bg-gray-100 dark:bg-gray-900">
        <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Nuestro Equipo</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              name: "Miguel Angel",
              role: "Fundador y Abogado Director",
              bio: "Especialista en Derecho de Daños con más de 25 años de experiencia en reclamaciones por accidentes."
            },
          ].map((member, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-blue-200 relative">
                {/* Imagen del equipo - reemplaza con tus imágenes */}
                <Image
                  src={`/img/equipo-${index+1}.jpg`}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 p-6">
                <h3 className="text-xl font-bold  mb-4">{member.name}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-3">{member.role}</p>
                <p>{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white dark:bg-gray-800 dark:text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">¿Necesitas ayuda con un accidente de tráfico?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Nuestro equipo de expertos está listo para asesorarte y guiarte en cada paso del proceso.
          </p>
          <Link href="/contacto"  className="bg-transparent dark:border-white border-2 hover:bg-gray-300 hover:text-blue px-8 py-3 rounded-lg text-lg font-semibold inline-block transition-colors">
            Contacta con nosotros
          </Link>
        </div>
      </section>
      <section>
        <hr />
      </section>
    </main>
  );
}