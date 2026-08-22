import PageHero from '@/components/PageHero'
import Link from 'next/link'

export const metadata = {
  title: 'Programările tale — Kidokinetiq',
  robots: { index: false, follow: false },
}

export default function MyAppointmentsLandingPage() {
  return (
    <>
      <PageHero badge="Zona pacientului" title="Programările tale" />
      <div className="max-w-2xl mx-auto px-6 py-16 text-center">
        <div className="bg-white rounded-3xl p-10 sm:p-14">
          <span className="text-6xl mb-6 block">📨</span>
          <h2 className="text-2xl font-900 text-navy mb-3">Ai nevoie de linkul tău personal</h2>
          <p className="text-navy/50 mb-8">
            Ți-am trimis un link personal prin care poți vedea programările tale. Dacă nu îl găsești, contactează-ne și îți trimitem unul nou.
          </p>
          <Link href="/contact" className="inline-block bg-teal text-navy font-900 px-8 py-3 rounded-full hover:brightness-110 transition-all">
            Contactează-ne →
          </Link>
        </div>
      </div>
    </>
  )
}
