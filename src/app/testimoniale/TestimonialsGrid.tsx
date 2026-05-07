'use client'

import { useCallback, useEffect, useRef, useState } from 'react'

type Testimonial = {
  _id: string
  name: string
  text: string
  relation?: string
}

export default function TestimonialsGrid({ testimonials }: { testimonials: Testimonial[] }) {
  const [spotlit, setSpotlit] = useState<Set<string>>(new Set())
  const refs = useRef<(HTMLDivElement | null)[]>([])
  const rafRef = useRef<number | null>(null)

  const update = useCallback(() => {
    if (rafRef.current !== null) return
    rafRef.current = requestAnimationFrame(() => {
      rafRef.current = null
      const vh = window.innerHeight
      const next = new Set<string>()
      refs.current.forEach((el, i) => {
        if (!el) return
        const rect = el.getBoundingClientRect()
        const cardCenter = rect.top + rect.height / 2
        if (cardCenter > vh * 0.2 && cardCenter < vh * 0.8) {
          next.add(testimonials[i]._id)
        }
      })
      setSpotlit((prev) => {
        const same =
          prev.size === next.size && [...prev].every((id) => next.has(id))
        return same ? prev : next
      })
    })
  }, [testimonials])

  useEffect(() => {
    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update, { passive: true })
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current)
    }
  }, [update])

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {testimonials.map((t, i) => (
        <div
          key={t._id}
          ref={(el) => { refs.current[i] = el }}
          className={`bg-cream rounded-3xl p-8 flex flex-col gap-4 transition-all duration-500 ${
            spotlit.has(t._id)
              ? 'opacity-100 scale-100 shadow-lg'
              : 'opacity-30 scale-95'
          }`}
        >
          <p className="text-navy/70 text-sm leading-relaxed flex-1">„{t.text}"</p>
          <div className="border-t border-navy/10 pt-4">
            <p className="font-800 text-navy text-sm">{t.name}</p>
            {t.relation && <p className="text-navy/50 text-xs mt-0.5">{t.relation}</p>}
          </div>
        </div>
      ))}
    </div>
  )
}
