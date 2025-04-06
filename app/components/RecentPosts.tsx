import { BlogPost } from '../lib/blog'; // Asegúrate de que la ruta sea correcta
import Link from 'next/link';

const blogPosts: BlogPost[] = [
  // ... mismos posts que antes
];

export default function RecentPosts({ currentSlug }: { currentSlug: string }) {
  const recentPosts = blogPosts.filter(post => post.slug !== currentSlug).slice(0, 3);
  
  return (
    <section className="mt-16">
      <h2 className="text-2xl font-bold mb-6">Artículos recientes</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {recentPosts.map((post) => (
          <div key={post.slug} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:shadow-md transition-shadow">
            <Link href={`/blog/${post.slug}`}>
              <h3 className="text-lg font-semibold mb-2 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                {post.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">{post.description}</p>
              <time 
                dateTime={post.date} 
                className="text-xs text-gray-500 dark:text-gray-400"
              >
                {new Date(post.date).toLocaleDateString('es-ES', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric'
                })}
              </time>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}