'use client'

import Link from 'next/link'
import Image from 'next/image'

const navLinks = [
  { href: '/', label: 'Acasă' },
  { href: '/despre', label: 'Despre' },
  { href: '/servicii', label: 'Servicii' },
  { href: '/blog', label: 'Blog' },
  { href: '/testimoniale', label: 'Testimoniale' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 shadow-md">
      {/* Gradient accent line */}
      <div className="h-1.5 w-full bg-gradient-to-r from-purple via-teal to-navy" />

      {/* Logo + tagline row */}
      <div className="bg-white px-6 py-3 flex items-center justify-center">
        <Link href="/" className="flex flex-col items-center group">
          <Image
            src="/logo.png"
            alt="Kidokinetiq"
            width={110}
            height={110}
            className="group-hover:scale-105 transition-transform duration-200 drop-shadow-sm"
            priority
          />
          <span className="-mt-3 text-[13px] font-900 text-navy/60 uppercase tracking-[0.22em]">
            Pași Mici · Victorii Mari
          </span>
        </Link>
      </div>

      {/* Desktop nav */}
      <nav className="bg-navy hidden md:block">
        <div className="flex items-center justify-center gap-2 h-13 px-6">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-white/80 hover:text-white font-700 text-base px-5 py-2.5 rounded-lg hover:bg-white/10 transition-all"
            >
              {l.label}
            </Link>
          ))}
          <span className="w-px h-5 bg-white/20 mx-2" />
          <Link
            href="/contact"
            className="bg-teal text-navy font-900 px-6 py-2 rounded-full hover:brightness-110 transition-all text-base whitespace-nowrap"
          >
            Programare →
          </Link>
        </div>
      </nav>

      {/* Mobile nav — full-width evenly spaced tabs */}
      <nav className="md:hidden bg-navy">
        <div className="flex items-center justify-around px-2 py-2">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-white/80 hover:text-white font-700 text-sm px-2 py-2 rounded-lg hover:bg-white/10 transition-all text-center"
            >
              {l.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  )
}
