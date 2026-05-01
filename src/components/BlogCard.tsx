import Link from 'next/link'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'

type Post = {
  _id: string
  title: string
  slug: { current: string }
  publishedAt: string
  excerpt?: string
  mainImage?: { asset: { _ref: string } }
  categories?: string[]
}

export default function BlogCard({ post }: { post: Post }) {
  return (
    <Link
      href={`/blog/${post.slug.current}`}
      className="group bg-white rounded-3xl overflow-hidden hover:-translate-y-1 hover:shadow-lg transition-all duration-200 flex flex-col"
    >
      {post.mainImage ? (
        <div className="relative h-48 overflow-hidden">
          <Image
            src={urlFor(post.mainImage).width(600).height(400).url()}
            alt={post.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      ) : (
        <div className="h-48 bg-teal-soft flex items-center justify-center text-5xl">📝</div>
      )}

      <div className="p-6 flex flex-col flex-1">
        {post.categories && post.categories.length > 0 && (
          <span className="inline-block bg-purple-soft text-navy font-700 text-xs px-3 py-1 rounded-full mb-3 self-start">
            {post.categories[0]}
          </span>
        )}
        <h3 className="font-800 text-navy text-lg leading-snug mb-2 group-hover:text-teal transition-colors">
          {post.title}
        </h3>
        {post.excerpt && (
          <p className="text-navy/60 text-sm leading-relaxed flex-1">{post.excerpt}</p>
        )}
        <time className="text-xs text-navy/40 mt-4 block font-600">
          {new Date(post.publishedAt).toLocaleDateString('ro-RO', { year: 'numeric', month: 'long', day: 'numeric' })}
        </time>
      </div>
    </Link>
  )
}
