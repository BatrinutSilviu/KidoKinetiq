import Link from 'next/link'
import { client } from '@/sanity/lib/client'
import { servicesQuery, testimonialsQuery, postsQuery } from '@/sanity/lib/queries'
import BlogCard from '@/components/BlogCard'
import { HeroShapes, DarkShapes, PageHeaderShapes } from '@/components/Shapes'

export const revalidate = 60

export default async function HomePage() {
  const [services, testimonials, posts] = await Promise.all([
    client.fetch(servicesQuery).catch(() => []),
    client.fetch(testimonialsQuery).catch(() => []),
    client.fetch(postsQuery).catch(() => []),
  ])

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-cream py-16 sm:py-28 px-6">
        <HeroShapes />

        <div className="relative max-w-3xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-900 text-navy leading-[1.1] mb-8">
            Echilibru pentru copil.<br />
            Echilibru pentru{' '}
            <span className="relative inline-block">
              <span className="relative z-10">mamă.</span>
              <span className="absolute bottom-1 left-0 w-full h-3 bg-teal opacity-50 rounded-full -z-0" />
            </span>
          </h1>

          <p className="text-navy/60 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            Recuperare și profilaxie pediatrică și perinatală — terapii motrice, acvatice și complementare în confortul propriului cămin.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-navy text-white font-800 px-8 py-4 rounded-full hover:bg-navy-light transition-colors text-base"
            >
              Programează o consultație
            </Link>
            <Link
              href="/servicii"
              className="border-2 border-navy text-navy font-800 px-8 py-4 rounded-full hover:bg-navy hover:text-white transition-colors text-base"
            >
              Vezi serviciile
            </Link>
          </div>
        </div>
      </section>

      {/* Services preview */}
      <section className="relative overflow-hidden bg-teal-soft rounded-t-[2.5rem] py-14 sm:py-20 px-6">
        <PageHeaderShapes />
        <div className="relative max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-block bg-teal text-navy font-700 text-xs px-4 py-1.5 rounded-full uppercase tracking-widest mb-4">
              Ce oferim
            </span>
            <h2 className="text-4xl font-900 text-navy">Serviciile noastre</h2>
          </div>

          {services.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
              {services.slice(0, 6).map((s: any) => (
                <div
                  key={s._id}
                  className="bg-white rounded-3xl p-7 hover:-translate-y-1 hover:shadow-lg transition-all duration-200"
                >
                  {s.icon && <span className="text-4xl mb-4 block">{s.icon}</span>}
                  <h3 className="font-800 text-navy text-lg mb-2">{s.title}</h3>
                  {s.description && <p className="text-navy/60 text-sm leading-relaxed">{s.description}</p>}
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                { icon: '🏃', title: 'Kinetoterapie 0–21 ani' },
                { icon: '🏊', title: 'Hidrokinetoterapie Pediatrică' },
                { icon: '💧', title: 'Terapie Acvatică T.S.A.' },
                { icon: '🤰', title: 'Gimnastică Prenatală & Postnatală' },
                { icon: '👶', title: 'Masaj Bebe & Baby Aqua Gym' },
                { icon: '🧠', title: 'Bandajare Neuromusculară' },
              ].map((s) => (
                <div key={s.title} className="bg-white rounded-3xl p-7 hover:-translate-y-1 hover:shadow-lg transition-all duration-200">
                  <span className="text-4xl mb-4 block">{s.icon}</span>
                  <h3 className="font-800 text-navy text-lg">{s.title}</h3>
                </div>
              ))}
            </div>
          )}

          <div className="text-center mt-12">
            <Link
              href="/servicii"
              className="inline-block border-2 border-navy text-navy font-800 px-8 py-3 rounded-full hover:bg-navy hover:text-white transition-colors"
            >
              Toate serviciile →
            </Link>
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="bg-cream py-14 sm:py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-block bg-purple-soft text-navy font-700 text-xs px-4 py-1.5 rounded-full uppercase tracking-widest mb-4">
              De ce noi
            </span>
            <h2 className="text-4xl font-900 text-navy">Abordarea noastră</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: '🎮', title: 'Combinăm terapia cu joacă', desc: 'Folosim joaca drept punte către progres, astfel încât terapia să fie o experiență în care copilul se simte bine.' },
              { icon: '🔬', title: 'Bazat pe dovezi', desc: 'Metodele noastre sunt fundamentate în cercetare clinică actuală și validate internațional.' },
              { icon: '💛', title: 'Centrat pe familie', desc: 'Implicăm părinții activ în terapie — succesul continuă și acasă.' },
            ].map((v) => (
              <div key={v.title} className="bg-white rounded-3xl p-8 text-center hover:-translate-y-1 hover:shadow-lg transition-all duration-200">
                <span className="text-5xl mb-5 block">{v.icon}</span>
                <h3 className="font-800 text-navy text-xl mb-3">{v.title}</h3>
                <p className="text-navy/60 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      {testimonials.length > 0 && (
        <section className="bg-purple-soft rounded-t-[2.5rem] py-20 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <span className="inline-block bg-purple text-white font-700 text-xs px-4 py-1.5 rounded-full uppercase tracking-widest mb-4">
                Testimoniale
              </span>
              <h2 className="text-4xl font-900 text-navy">Ce spun părinții</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
              {testimonials.slice(0, 3).map((t: any) => (
                <div key={t._id} className="bg-white rounded-3xl p-7">
                  <div className="text-purple text-4xl font-900 leading-none mb-3">&ldquo;</div>
                  <p className="text-navy/70 mb-5 leading-relaxed text-sm">{t.text}</p>
                  <div>
                    <p className="font-800 text-navy">{t.name}</p>
                    {t.relation && <p className="text-navy/50 text-xs">{t.relation}</p>}
                  </div>
                  {t.rating && (
                    <div className="text-teal text-sm mt-3">{'★'.repeat(t.rating)}{'☆'.repeat(5 - t.rating)}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Blog preview */}
      {posts.length > 0 && (
        <section className="bg-cream py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <span className="inline-block bg-teal-soft text-navy font-700 text-xs px-4 py-1.5 rounded-full uppercase tracking-widest mb-4">
                Blog
              </span>
              <h2 className="text-4xl font-900 text-navy">Ultimele articole</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
              {posts.slice(0, 3).map((post: any) => (
                <BlogCard key={post._id} post={post} />
              ))}
            </div>
            <div className="text-center mt-10">
              <Link href="/blog" className="text-navy font-800 hover:text-teal transition-colors">
                Toate articolele →
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="relative overflow-hidden bg-navy rounded-t-[2.5rem] py-14 sm:py-20 px-6">
        <DarkShapes />
        <div className="relative max-w-2xl mx-auto text-center">
          <span className="text-5xl mb-6 block">🌟</span>
          <h2 className="text-4xl font-900 text-white mb-5">Începe recuperarea astăzi</h2>
          <p className="text-white/70 mb-10 text-lg leading-relaxed">
            Contactează-ne pentru o evaluare inițială și un plan de terapie personalizat.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-teal text-navy font-900 px-10 py-4 rounded-full hover:brightness-110 transition-all text-base"
          >
            Contactează-ne
          </Link>
        </div>
      </section>
    </>
  )
}
