import { client } from '@/sanity/lib/client'
import { patientAppointmentsByTokenQuery } from '@/sanity/lib/queries'
import PageHero from '@/components/PageHero'
import Link from 'next/link'

export const dynamic = 'force-dynamic'

export const metadata = {
  title: 'Programările tale — Kidokinetiq',
  robots: { index: false, follow: false },
}

type Appointment = {
  _id: string
  date: string
  duration?: string
  location?: string
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled'
  service?: { title?: string; icon?: string }
}

type PatientWithAppointments = {
  _id: string
  name: string
  appointments: Appointment[]
}

const statusLabels: Record<Appointment['status'], string> = {
  pending: 'Planificată',
  confirmed: 'Confirmată',
  completed: 'Finalizată',
  cancelled: 'Anulată',
}

const statusStyles: Record<Appointment['status'], string> = {
  pending: 'bg-purple-soft text-navy',
  confirmed: 'bg-teal text-navy',
  completed: 'bg-navy text-white',
  cancelled: 'bg-navy/10 text-navy/40',
}

function AppointmentCard({ appt }: { appt: Appointment }) {
  const date = new Date(appt.date)
  return (
    <div className="bg-white rounded-3xl p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center gap-4">
      <div className="flex items-center gap-4 flex-1">
        <span className="text-3xl shrink-0">{appt.service?.icon || '🗓️'}</span>
        <div>
          <p className="font-900 text-navy">
            {date.toLocaleDateString('ro-RO', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}
          </p>
          <p className="text-navy/50 text-sm">
            {date.toLocaleTimeString('ro-RO', { hour: '2-digit', minute: '2-digit' })}
            {appt.duration ? ` · ${appt.duration}` : ''}
            {appt.location ? ` · ${appt.location}` : ''}
          </p>
          {appt.service?.title && <p className="text-navy/70 text-sm font-700 mt-1">{appt.service.title}</p>}
        </div>
      </div>
      <span className={`self-start sm:self-center text-xs font-800 uppercase tracking-widest px-4 py-2 rounded-full ${statusStyles[appt.status]}`}>
        {statusLabels[appt.status]}
      </span>
    </div>
  )
}

function splitAppointments(appointments: Appointment[]) {
  const now = Date.now()
  const upcoming = appointments.filter((a) => new Date(a.date).getTime() >= now && a.status !== 'cancelled')
  const past = appointments
    .filter((a) => new Date(a.date).getTime() < now || a.status === 'cancelled')
    .slice()
    .reverse()
  return { upcoming, past }
}

export default async function MyAppointmentsPage({ params }: { params: Promise<{ token: string }> }) {
  const { token } = await params
  const patient = (await client
    .fetch(patientAppointmentsByTokenQuery, { accessToken: token })
    .catch(() => null)) as PatientWithAppointments | null

  if (!patient) {
    return (
      <>
        <PageHero badge="Zona pacientului" title="Link invalid" />
        <div className="max-w-2xl mx-auto px-6 py-16 text-center">
          <div className="bg-white rounded-3xl p-10 sm:p-14">
            <span className="text-6xl mb-6 block">🔗</span>
            <h2 className="text-2xl font-900 text-navy mb-3">Acest link nu este valid</h2>
            <p className="text-navy/50 mb-8">
              Verifică dacă ai accesat linkul complet primit de la noi, sau contactează-ne pentru un link nou.
            </p>
            <Link href="/contact" className="inline-block bg-teal text-navy font-900 px-8 py-3 rounded-full hover:brightness-110 transition-all">
              Contactează-ne →
            </Link>
          </div>
        </div>
      </>
    )
  }

  const { upcoming, past } = splitAppointments(patient.appointments)

  return (
    <>
      <PageHero badge="Zona pacientului" title={`Bine ai venit, ${patient.name.split(' ')[0]}`} subtitle="Aici poți vedea programările tale la Kidokinetiq." />

      <div className="max-w-3xl mx-auto px-6 py-16 space-y-12">
        <section>
          <h2 className="text-xl font-900 text-navy mb-5">Programări viitoare</h2>
          {upcoming.length > 0 ? (
            <div className="space-y-4">
              {upcoming.map((appt) => (
                <AppointmentCard key={appt._id} appt={appt} />
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-3xl p-10 text-center">
              <span className="text-5xl mb-4 block">📭</span>
              <p className="text-navy/50">Nu ai nicio programare viitoare momentan.</p>
            </div>
          )}
        </section>

        {past.length > 0 && (
          <section>
            <h2 className="text-xl font-900 text-navy mb-5">Istoric</h2>
            <div className="space-y-4">
              {past.map((appt) => (
                <AppointmentCard key={appt._id} appt={appt} />
              ))}
            </div>
          </section>
        )}
      </div>
    </>
  )
}
