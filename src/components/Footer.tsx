import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-navy text-white mt-20 rounded-t-[2.5rem]">
      <div className="max-w-6xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <p className="text-2xl font-900 text-white mb-1">Kidokinetiq</p>
          <p className="text-xs font-700 text-teal uppercase tracking-widest mb-4">Pași Mici. Victorii Mari.</p>
          <p className="text-white/60 text-sm leading-relaxed">
            Recuperare și profilaxie pediatrică și perinatală — terapii motrice, acvatice și complementare în confortul propriului cămin
          </p>
        </div>

        <div>
          <h4 className="font-800 text-white mb-4">Navigare</h4>
          <ul className="space-y-2 text-sm">
            {[
              { href: '/despre', label: 'Despre noi' },
              { href: '/servicii', label: 'Servicii' },
              { href: '/blog', label: 'Blog' },
              { href: '/testimoniale', label: 'Testimoniale' },
              { href: '/contact', label: 'Contact' },
            ].map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-white/70 hover:text-teal transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-800 text-white mb-4">Contact</h4>
          <div className="space-y-2 text-sm text-white/70">
            <p>📧 arianaphysio@gmail.com</p>
            <p>📞 0756 878 820</p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 text-center py-5 text-xs text-white/40">
        © {new Date().getFullYear()} Kidokinetiq — Cu dragoste pentru copii
        <span className="block mt-1 text-white/80 font-600">Dezvoltat de Bătrînuț Silviu</span>
      </div>
    </footer>
  )
}
