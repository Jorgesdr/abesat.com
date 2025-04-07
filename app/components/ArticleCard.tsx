import { BlogPost } from '../lib/definitions';
import Link from 'next/link';
import Image from 'next/image';

export default function ArticleCard({ post }: { post: BlogPost }) {
  return (
    <article className="bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <Link href={`/blog/${post.slug}`}>
        <div className="relative h-48">
          {post.image && (
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
            />
          )}
        </div>
        <div className="p-6">
          <div className="flex flex-wrap gap-2 mb-3">
            {post.categories.map((category) => (
              <span 
                key={category} 
                className="bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-300 text-xs px-3 py-1 rounded-full"
              >
                {category}
              </span>
            ))}
          </div>
          <h2 className="text-xl font-bold mb-2 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
            {post.title}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">{post.description}</p>
          <time dateTime={post.date} className="text-sm text-gray-500 dark:text-gray-400">
            {new Date(post.date).toLocaleDateString('es-ES', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </time>
        </div>
      </Link>
    </article>
  );
}