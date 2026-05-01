import { client } from '@/sanity/lib/client'
import { postBySlugQuery, postsQuery } from '@/sanity/lib/queries'
import { urlFor } from '@/sanity/lib/image'
import { PortableText } from '@portabletext/react'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

export const revalidate = 60

export async function generateStaticParams() {
  const posts = await client.fetch(postsQuery).catch(() => [])
  return posts.map((p: { slug: { current: string } }) => ({ slug: p.slug.current }))
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = await client.fetch(postBySlugQuery, { slug }).catch(() => null)
  if (!post) return notFound()

  return (
    <article className="max-w-3xl mx-auto px-6 py-16">
      <Link href="/blog" className="inline-flex items-center gap-2 text-navy font-700 hover:text-teal transition-colors mb-10">
        ← Înapoi la blog
      </Link>

      {post.categories && post.categories.length > 0 && (
        <div className="flex gap-2 flex-wrap mb-4">
          {post.categories.map((c: string) => (
            <span key={c} className="bg-purple-soft text-navy font-700 text-xs px-3 py-1 rounded-full">
              {c}
            </span>
          ))}
        </div>
      )}

      <h1 className="text-4xl font-900 text-navy mb-4 leading-tight">{post.title}</h1>

      <time className="text-navy/40 text-sm font-600 block mb-10">
        {new Date(post.publishedAt).toLocaleDateString('ro-RO', { year: 'numeric', month: 'long', day: 'numeric' })}
      </time>

      {post.mainImage && (
        <div className="relative w-full h-72 md:h-96 rounded-3xl overflow-hidden mb-12">
          <Image src={urlFor(post.mainImage).width(900).height(500).url()} alt={post.title} fill className="object-cover" />
        </div>
      )}

      <div className="prose prose-lg max-w-none prose-headings:font-900 prose-headings:text-navy prose-p:text-navy/70 prose-a:text-teal">
        <PortableText value={post.body} />
      </div>
    </article>
  )
}
