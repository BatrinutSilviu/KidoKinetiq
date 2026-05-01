import { client } from '@/sanity/lib/client'
import { postsQuery } from '@/sanity/lib/queries'
import BlogCard from '@/components/BlogCard'
import PageHero from '@/components/PageHero'

export const revalidate = 60

export const metadata = {
  title: 'Blog — KidoKinetiq',
  description: 'Articole despre kinetoterapie pediatrică, sfaturi pentru părinți și noutăți.',
}

export default async function BlogPage() {
  const posts = await client.fetch(postsQuery).catch(() => [])

  return (
    <>
      <PageHero
        badge="Resurse"
        title="Blog"
        subtitle="Articole, sfaturi și noutăți despre kinetoterapie pediatrică — pentru părinți și specialiști."
      />

      <div className="max-w-6xl mx-auto px-6 py-16">
        {posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
            {posts.map((post: any) => <BlogCard key={post._id} post={post} />)}
          </div>
        ) : (
          <div className="bg-white rounded-3xl p-20 text-center">
            <span className="text-6xl mb-6 block">✍️</span>
            <h2 className="text-2xl font-900 text-navy mb-3">Niciun articol publicat încă</h2>
            <p className="text-navy/50">
              Adaugă primul articol din Sanity Studio la{' '}
              <code className="bg-teal-soft px-2 py-0.5 rounded-lg text-sm font-700">/studio</code>.
            </p>
          </div>
        )}
      </div>
    </>
  )
}
