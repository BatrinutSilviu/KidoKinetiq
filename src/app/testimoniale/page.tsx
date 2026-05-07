import { client } from '@/sanity/lib/client'
import { testimonialsQuery } from '@/sanity/lib/queries'
import PageHero from '@/components/PageHero'
import TestimonialsGrid from './TestimonialsGrid'

export const revalidate = 60

export const metadata = {
  title: 'Testimoniale — Kidokinetiq',
  description: 'Ce spun familiile despre experiența lor cu Kidokinetiq.',
}

export default async function TestimonialsPage() {
  const testimonials = await client.fetch(testimonialsQuery).catch(() => [])

  return (
    <>
      <PageHero
        badge="Familiile noastre"
        title="Testimoniale"
        subtitle="Ce spun părinții și copiii despre experiența lor cu Kidokinetiq."
      />

      <section className="bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto">
          {testimonials.length === 0 ? (
            <p className="text-center text-navy/50">Nu există testimoniale momentan.</p>
          ) : (
            <TestimonialsGrid testimonials={testimonials} />
          )}
        </div>
      </section>
    </>
  )
}
