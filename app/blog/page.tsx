import { BlogPost } from '../lib/blog';
import ArticleCard from '../components/ArticleCard';
import Link from 'next/link';

// Datos de ejemplo (luego puedes moverlos a un CMS o archivo JSON)
const blogPosts: BlogPost[] = [
  {
    slug: 'indemnizaciones-accidentes-trafico',
    title: 'Cómo calcular tu indemnización por accidente de tráfico',
    description: 'Guía completa para entender cómo se calculan las indemnizaciones en accidentes de circulación en Granada.',
    date: '2023-11-15',
    categories: ['Indemnizaciones', 'Accidentes'],
    content: '...',
    image: '/images/blog/indemnizaciones.jpg'
  },
  {
    slug: 'que-hacer-accidente',
    title: 'Qué hacer después de un accidente de tráfico: Guía paso a paso',
    description: 'Pasos esenciales que debes seguir inmediatamente después de sufrir un accidente de circulación.',
    date: '2023-10-28',
    categories: ['Consejos Legales'],
    content: '...',
    image: '/images/blog/pasos-accidente.jpg'
  }
];

export default function BlogPage() {
  return (
    <main className="py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Blog ABESAT</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Información legal actualizada sobre accidentes de tráfico y cómo defender tus derechos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post) => (
            <ArticleCard key={post.slug} post={post} />
          ))}
        </div>

        <div className="text-center">
          <Link 
            href="/contacto" 
            className="bg-primary-600 hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600 text-white px-6 py-3 rounded-lg text-lg font-semibold inline-block transition-colors"
          >
            ¿Necesitas asesoramiento personalizado?
          </Link>
        </div>
      </div>
    </main>
  );
}