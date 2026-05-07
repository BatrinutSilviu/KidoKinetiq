import { client } from '@/sanity/lib/client'
import { teamQuery } from '@/sanity/lib/queries'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'
import PageHero from '@/components/PageHero'
import Link from 'next/link'

export const revalidate = 60

export const metadata = {
  title: 'Despre noi — Kidokinetiq',
  description: 'Aflați despre echipa Kidokinetiq și misiunea noastră.',
}

export default async function AboutPage() {
  const team = await client.fetch(teamQuery).catch(() => [])

  return (
    <>
      <PageHero
        badge="Povestea noastră"
        title="Despre Kidokinetiq"
        subtitle="Credem că fiecare etapă a vieții merită îngrijire specializată — kinetoterapie pediatrică, terapie perinatală și terapie acvatică, pentru copii, gravide și mame, în confortul propriului cămin."
      />

      {/* Story section */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-900 text-navy mb-5">Cine suntem</h2>
            <div className="space-y-4 text-navy/65 leading-relaxed">
              <p>
                Kidokinetiq a pornit dintr-o nevoie reală — aceea de a completa parcursul
                terapeutic cu servicii de recuperare la domiciliu. Alături de centrele de
                specialitate, recuperarea acasă joacă un rol esențial: oferă continuitate,
                confort și un mediu familiar în care copilul și mama progresează mai natural.
              </p>
              <p>
                Lucrăm atât pe uscat, cât și în apă — prin terapii acvatice adaptate — și
                acoperim cazuri din domeniile: obstetrică și perinatologie, neuropediatrie,
                neuropsihiatrie pediatrică și ortopedie pediatrică. Atât recuperarea, cât și
                prevenția joacă un rol esențial — intervenția timpurie și programele profilactice
                pot face diferența pe termen lung.
              </p>
              <p>
                Fiecare program este construit individual, în colaborare strânsă cu familia,
                pentru rezultate care se păstrează pe termen lung.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { number: '7+', label: 'Ani experiență' },
              { number: '500+', label: 'Copii și mămici care ne-au trecut pragul' },
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

{team.length > 0 && (
            <div className="flex flex-wrap justify-center gap-8">
              {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
              {team.map((member: any) => (
                <div key={member._id} className="bg-cream rounded-3xl p-8 text-center hover:-translate-y-1 hover:shadow-lg transition-all duration-200 w-72 flex flex-col">
                  <div className="relative w-28 h-28 mx-auto mb-5 rounded-full overflow-hidden bg-teal-soft">
                    {member.photo ? (
                      <Image src={urlFor(member.photo).width(256).height(256).url()} alt={member.name} fill className="object-cover" />
                    ) : member.gender === 'female' ? (
                      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        {/* Hair — taller ellipse behind head */}
                        <ellipse cx="50" cy="27" rx="18" ry="21" fill="#e07aaa"/>
                        {/* Head */}
                        <circle cx="50" cy="30" r="14" fill="#f0a0c8"/>
                        {/* Neck */}
                        <rect x="45" y="43" width="10" height="6" rx="3" fill="#f0a0c8"/>
                        {/* Dress — flares out toward bottom */}
                        <path d="M37 49 L21 93 L79 93 L63 49 Q57 54 50 54 Q43 54 37 49Z" fill="#f0a0c8"/>
                      </svg>
                    ) : (
                      <span className="absolute inset-0 flex items-center justify-center text-5xl">👤</span>
                    )}
                  </div>
                  <h3 className="font-900 text-navy text-xl mb-1">{member.name}</h3>
                  {member.role && (
                    <div className="flex flex-wrap justify-center gap-2 mb-3">
                      {(Array.isArray(member.role) ? member.role : [member.role]).map((r: string) => (
                        <span key={r} className="inline-block bg-teal-soft text-navy font-700 text-xs px-3 py-1 rounded-full">
                          {r}
                        </span>
                      ))}
                    </div>
                  )}
                  {member.bio && <p className="text-navy/60 text-sm leading-relaxed">{member.bio}</p>}
                  {member.experienta && (
                    <div className="border-t border-navy/10 mt-4 pt-4">
                      <p className="text-navy/50 text-xs font-700 uppercase tracking-widest mb-1">Experiență</p>
                      <p className="text-navy font-900">{member.experienta}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy rounded-t-[2.5rem] py-16 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-900 text-white mb-4">Hai să ne cunoaștem</h2>
          <p className="text-white/60 mb-8 leading-relaxed">Programează o consultație inițială și află cum putem ajuta copilul tău.</p>
          <Link href="/contact" className="inline-block bg-teal text-navy font-900 px-10 py-4 rounded-full hover:brightness-110 transition-all">
            Programează acum →
          </Link>
        </div>
      </section>
    </>
  )
}
