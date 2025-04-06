import { BlogPost } from '../../lib/blog';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import RecentPosts from '../../components/RecentPosts';
import type { Metadata } from 'next'

// Datos de ejemplo (en producción usarías un CMS o base de datos)
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

interface GenerateMetadataProps {
  params: { slug: string }
}

interface PageProps {
  params: { slug: string }
  searchParams?: Record<string, string | string[] | undefined>
}
export async function generateMetadata({ params }: GenerateMetadataProps): Promise<Metadata> {
  const post = blogPosts.find((post) => post.slug === params.slug);
  
  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      images: post.image ? [post.image] : undefined,
    },
  };
}

export default function BlogPostPage({ params }: PageProps) {
  const post = blogPosts.find((post) => post.slug === params.slug);

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
            <div className="relative h-64 md:h-96 mb-8 rounded-lg overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>
          )}

          <div className="prose dark:prose-invert max-w-none">
            {/* Aquí iría el contenido en formato Markdown o HTML */}
            <p>{post.content}</p>
            
            <h2>¿Necesitas ayuda con tu caso?</h2>
            <p>
              Si has sufrido un accidente de tráfico en Granada, nuestros abogados 
              especialistas pueden ayudarte a obtener la indemnización que mereces.
            </p>
            <a 
              href="/contacto" 
              className="bg-primary-600  hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600 text-white px-6 py-3 rounded-lg text-lg font-semibold inline-block transition-colors"
            >
              Contacta con nosotros
            </a>
          </div>
        </article>

        <RecentPosts currentSlug={post.slug} />
      </div>
    </main>
  );
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug
  }));
}
export type DynamicRouteProps = {
  params: { slug: string }
  searchParams?: Record<string, string | string[] | undefined>
}