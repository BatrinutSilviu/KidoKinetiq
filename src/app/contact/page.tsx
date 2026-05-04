import PageHero from '@/components/PageHero'

export const metadata = {
  title: 'Contact — KidoKinetiq',
  description: 'Contactează-ne pentru o programare sau mai multe informații.',
}

export default function ContactPage() {
  return (
    <>
      <PageHero
        badge="Hai să vorbim"
        title="Contact"
        subtitle="Suntem bucuroși să răspundem întrebărilor tale și să programăm o evaluare pentru copilul tău."
      />

      <div className="max-w-5xl mx-auto px-6 py-16 space-y-10">

        {/* Quick info pills */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {[
            { icon: '📞', label: 'Telefon', value: '+40 700 000 000' },
            { icon: '📧', label: 'Email', value: 'contact@kidokinetiq.ro' },
            { icon: '📍', label: 'Adresă', value: 'Cluj-Napoca' },
            { icon: '🕐', label: 'Program', value: 'Luni–Sâmbătă' },
          ].map((item) => (
            <div key={item.label} className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-5 text-center hover:-translate-y-1 hover:shadow-md transition-all duration-200">
              <span className="text-2xl sm:text-3xl mb-2 block">{item.icon}</span>
              <p className="text-[10px] sm:text-xs font-700 text-navy/40 uppercase tracking-widest mb-1">{item.label}</p>
              <p className="font-800 text-navy text-xs sm:text-sm break-all">{item.value}</p>
            </div>
          ))}
        </div>

        {/* Form + next steps */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">

          {/* Form — wider */}
          <div className="md:col-span-3 bg-white rounded-3xl p-5 sm:p-8 md:p-10">
            <h2 className="text-2xl font-900 text-navy mb-1">Trimite un mesaj</h2>
            <p className="text-navy/50 text-sm mb-7">Îți răspundem în maxim 24 de ore.</p>

            <form className="space-y-4" action="mailto:contact@kidokinetiq.ro" method="POST" encType="text/plain">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-700 text-navy/60 uppercase tracking-widest mb-1.5">Nume</label>
                  <input
                    type="text" name="name" required placeholder="Ion"
                    className="w-full border-2 border-teal-soft rounded-2xl px-4 py-3 text-sm text-navy font-600 focus:outline-none focus:border-teal placeholder:text-navy/25 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-700 text-navy/60 uppercase tracking-widest mb-1.5">Prenume</label>
                  <input
                    type="text" name="surname" required placeholder="Popescu"
                    className="w-full border-2 border-teal-soft rounded-2xl px-4 py-3 text-sm text-navy font-600 focus:outline-none focus:border-teal placeholder:text-navy/25 transition-colors"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-700 text-navy/60 uppercase tracking-widest mb-1.5">Email</label>
                <input
                  type="email" name="email" required placeholder="ion@exemplu.ro"
                  className="w-full border-2 border-teal-soft rounded-2xl px-4 py-3 text-sm text-navy font-600 focus:outline-none focus:border-teal placeholder:text-navy/25 transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-700 text-navy/60 uppercase tracking-widest mb-1.5">Telefon</label>
                <input
                  type="tel" name="phone" placeholder="+40 700 000 000"
                  className="w-full border-2 border-teal-soft rounded-2xl px-4 py-3 text-sm text-navy font-600 focus:outline-none focus:border-teal placeholder:text-navy/25 transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-700 text-navy/60 uppercase tracking-widest mb-1.5">Mesaj</label>
                <textarea
                  name="message" rows={4} required
                  placeholder="Descrie situația copilului și ce servicii te interesează..."
                  className="w-full border-2 border-teal-soft rounded-2xl px-4 py-3 text-sm text-navy font-600 focus:outline-none focus:border-teal placeholder:text-navy/25 transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-navy text-white font-900 py-4 rounded-2xl hover:bg-navy-light transition-colors text-base"
              >
                Trimite mesajul 🚀
              </button>
            </form>
          </div>

          {/* Right side: what happens next + social */}
          <div className="md:col-span-2 flex flex-col gap-6">

            {/* Next steps */}
            <div className="bg-navy rounded-3xl p-8 flex-1">
              <h3 className="text-lg font-900 text-white mb-6">Ce urmează?</h3>
              <div className="space-y-5">
                {[
                  { step: '01', icon: '✉️', title: 'Trimiți mesajul', desc: 'Completezi formularul și ne descrii situația.' },
                  { step: '02', icon: '📞', title: 'Te contactăm', desc: 'Îți răspundem în maxim 24 de ore.' },
                  { step: '03', icon: '📋', title: 'Evaluare inițială', desc: 'Stabilim o ședință de evaluare gratuită.' },
                  { step: '04', icon: '🌈', title: 'Începem terapia', desc: 'Creăm un plan personalizat pentru copilul tău.' },
                ].map((s) => (
                  <div key={s.step} className="flex gap-4 items-start">
                    <span className="text-xl shrink-0 mt-0.5">{s.icon}</span>
                    <div>
                      <p className="font-800 text-white text-sm">{s.title}</p>
                      <p className="text-white/50 text-xs leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social */}
            <div className="bg-teal-soft rounded-3xl p-6">
              <p className="text-xs font-700 text-navy/50 uppercase tracking-widest mb-4">Urmărește-ne</p>
              <div className="flex gap-3">
                <a href="#" className="flex-1 bg-white text-navy font-800 text-sm py-2.5 rounded-2xl text-center hover:-translate-y-0.5 hover:shadow-md transition-all">
                  Facebook
                </a>
                <a href="#" className="flex-1 bg-white text-navy font-800 text-sm py-2.5 rounded-2xl text-center hover:-translate-y-0.5 hover:shadow-md transition-all">
                  Instagram
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}
