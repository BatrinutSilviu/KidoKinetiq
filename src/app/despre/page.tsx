import { client } from '@/sanity/lib/client'
import { teamQuery } from '@/sanity/lib/queries'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'
import PageHero from '@/components/PageHero'
import Link from 'next/link'

export const revalidate = 60

export const metadata = {
  title: 'Despre noi — KidoKinetiq',
  description: 'Aflați despre echipa KidoKinetiq și misiunea noastră.',
}

export default async function AboutPage() {
  const team = await client.fetch(teamQuery).catch(() => [])

  return (
    <>
      <PageHero
        badge="Povestea noastră"
        title="Despre KidoKinetiq"
        subtitle="Credem că fiecare copil are potențialul de a progresa. Misiunea noastră este să-i oferim instrumentele, sprijinul și mediul potrivit."
      />

      {/* Story section */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-900 text-navy mb-5">Cine suntem</h2>
            <div className="space-y-4 text-navy/65 leading-relaxed">
              <p>
                KidoKinetiq este o clinică de kinetoterapie pediatrică specializată în recuperarea
                copiilor cu afecțiuni neurologice, ortopedice și de dezvoltare.
              </p>
              <p>
                Echipa noastră combină expertiza clinică cu o abordare caldă și jucăușă — pentru că
                un copil care se simte în siguranță și se distrează progresează de două ori mai repede.
              </p>
              <p>
                Lucrăm îndeaproape cu familia, oferind nu doar terapie în cabinet, ci și ghidaj pentru
                continuarea exercițiilor acasă.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { number: '10+', label: 'Ani experiență' },
              { number: '500+', label: 'Copii tratați' },
              { number: '12', label: 'Servicii oferite' },
              { number: '100%', label: 'Dedicare' },
            ].map((stat) => (
              <div key={stat.label} className="bg-cream rounded-3xl p-6 text-center hover:-translate-y-1 transition-transform duration-200">
                <div className="text-4xl font-900 text-teal mb-1">{stat.number}</div>
                <div className="text-navy/60 text-sm font-700">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-teal-soft py-16 px-6 rounded-t-[2.5rem]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-900 text-navy text-center mb-12">Valorile noastre</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: '🎮', title: 'Terapie prin joacă', desc: 'Integrăm jocul în fiecare ședință — un copil fericit progresează mai repede.' },
              { icon: '🔬', title: 'Bazat pe dovezi', desc: 'Metodele noastre sunt fundamentate în cercetare clinică actuală și validare internațională.' },
              { icon: '👨‍👩‍👧', title: 'Centrat pe familie', desc: 'Implicăm părinții activ în terapie — succesul continuă și acasă.' },
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

      {/* Team */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-900 text-navy mb-3">Echipa noastră</h2>
            <p className="text-navy/55">Oamenii dedicați din spatele fiecărei ședințe de terapie</p>
          </div>

          {team.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
              {team.map((member: any) => (
                <div key={member._id} className="bg-cream rounded-3xl p-8 text-center hover:-translate-y-1 hover:shadow-lg transition-all duration-200">
                  <div className="relative w-28 h-28 mx-auto mb-5 rounded-full overflow-hidden bg-teal-soft">
                    {member.photo ? (
                      <Image src={urlFor(member.photo).width(256).height(256).url()} alt={member.name} fill className="object-cover" />
                    ) : (
                      <span className="absolute inset-0 flex items-center justify-center text-5xl">👤</span>
                    )}
                  </div>
                  <h3 className="font-900 text-navy text-xl mb-1">{member.name}</h3>
                  {member.role && (
                    <span className="inline-block bg-teal-soft text-navy font-700 text-xs px-3 py-1 rounded-full mb-3">
                      {member.role}
                    </span>
                  )}
                  {member.bio && <p className="text-navy/60 text-sm leading-relaxed">{member.bio}</p>}
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-cream rounded-3xl p-14 text-center">
              <span className="text-5xl mb-4 block">👷</span>
              <p className="text-navy/50 font-700">Adaugă membrii echipei din Sanity Studio.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy rounded-t-[2.5rem] py-16 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-900 text-white mb-4">Hai să ne cunoaștem</h2>
          <p className="text-white/60 mb-8 leading-relaxed">Programează o consultație inițială gratuită și află cum putem ajuta copilul tău.</p>
          <Link href="/contact" className="inline-block bg-teal text-navy font-900 px-10 py-4 rounded-full hover:brightness-110 transition-all">
            Programează acum →
          </Link>
        </div>
      </section>
    </>
  )
}
