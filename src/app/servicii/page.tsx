import { client } from '@/sanity/lib/client'
import { servicesQuery } from '@/sanity/lib/queries'
import PageHero from '@/components/PageHero'
import Link from 'next/link'

export const revalidate = 60

export const metadata = {
  title: 'Servicii — Kidokinetiq',
  description: 'Kinetoterapie, hidrokinetoterapie, terapie acvatică și masaj pentru copii.',
}

type Service = {
  _id: string
  title: string
  category?: string
  description?: string
  icon?: string
  price?: string
  duration?: string
  sessions?: string
  observations?: string
  available?: boolean
}

const categoryColors: Record<string, string> = {
  'Recuperare Pediatrică': 'border-teal',
  'Prevenție Pediatrică': 'border-purple',
  'Mămici și Viitoare Mămici': 'border-navy',
}

const categoryBadgeColors: Record<string, string> = {
  'Recuperare Pediatrică': 'bg-teal-soft text-navy',
  'Prevenție Pediatrică': 'bg-purple-soft text-navy',
  'Mămici și Viitoare Mămici': 'bg-navy text-white',
}

export default async function ServicesPage() {
  const services: Service[] = await client.fetch(servicesQuery).catch(() => [])
  const categories = Array.from(new Set(services.map((s) => s.category).filter(Boolean))) as string[]

  return (
    <>
      <PageHero
        badge="Ce oferim"
        title="Serviciile noastre"
        subtitle="Kinetoterapie și recuperare pediatrică, prevenție și programe pentru mămici — adaptate nevoilor fiecărei familii."
      />

      <div className="max-w-6xl mx-auto px-6 py-16 space-y-16">
        {categories.map((cat) => {
          const catServices = services.filter((s) => s.category === cat)
          return (
            <div key={cat}>
              <div className="flex items-center gap-4 mb-8">
                <span className={`text-sm font-800 px-4 py-1.5 rounded-full ${categoryBadgeColors[cat] ?? 'bg-teal-soft text-navy'}`}>
                  {cat}
                </span>
                <div className="flex-1 h-0.5 bg-teal-soft rounded-full" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {catServices.map((s) => (
                  <div
                    key={s._id}
                    className={`relative bg-white rounded-3xl p-7 border-2 transition-all duration-200 flex flex-col
                      ${s.available === false
                        ? 'opacity-60 border-gray-200'
                        : `hover:-translate-y-1 hover:shadow-lg ${categoryColors[cat] ?? 'border-teal-soft'}`
                      }`}
                  >
                    {s.available === false && (
                      <span className="absolute top-4 right-4 bg-gray-100 text-gray-500 text-[10px] font-800 px-2.5 py-1 rounded-full uppercase tracking-wide">
                        Indisponibil
                      </span>
                    )}

                    {s.icon && <span className="text-4xl mb-4 block">{s.icon}</span>}
                    <h3 className="font-800 text-navy text-lg mb-2 leading-snug">{s.title}</h3>
                    {s.description && (
                      <p className="text-navy/60 text-sm leading-relaxed flex-1">{s.description}</p>
                    )}

                    {(s.price || s.duration || s.sessions) && (
                      <div className="flex items-center gap-2 mt-5 flex-nowrap overflow-x-auto">
                        {s.duration && (
                          <span className="bg-cream text-navy/60 text-xs font-700 px-3 py-1 rounded-full shrink-0 whitespace-nowrap">
                            ⏱ {s.duration}
                          </span>
                        )}
                        {s.sessions && (
                          <span className="bg-cream text-navy/60 text-xs font-700 px-3 py-1 rounded-full shrink-0 whitespace-nowrap">
                            {s.sessions}
                          </span>
                        )}
                        {s.price && (
                          <span className="bg-teal text-navy text-xs font-900 px-3 py-1 rounded-full shrink-0 whitespace-nowrap">
                            {s.price}
                          </span>
                        )}
                      </div>
                    )}

                    {s.observations && (
                      <div className="flex items-center gap-2 mt-2 flex-wrap">
                        <span className="bg-purple-soft text-navy/70 text-xs font-700 px-3 py-1 rounded-full">
                          {s.observations}
                        </span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )
        })}

        {/* General note */}
        <div className="flex items-start gap-3 bg-cream rounded-2xl p-5 text-sm text-navy/60">
          <span className="text-lg leading-none">ℹ️</span>
          <p>În cazul deplasărilor în afara municipiului Arad sau Timișoara se percepe taxă suplimentară de deplasare.</p>
        </div>

        {/* CTA strip */}
        <div className="bg-navy rounded-3xl p-7 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <h3 className="text-2xl font-900 text-white mb-1">Nu știi cu ce serviciu să începi?</h3>
            <p className="text-white/60">Contactează-ne și îți recomandăm programul potrivit pentru tine.</p>
          </div>
          <Link href="/contact" className="bg-teal text-navy font-900 px-8 py-3.5 rounded-full hover:brightness-110 transition-all whitespace-nowrap shrink-0">
            Programează o consultație →
          </Link>
        </div>
      </div>
    </>
  )
}
