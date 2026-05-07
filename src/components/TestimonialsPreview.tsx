'use client'

import { useEffect, useState } from 'react'

type Testimonial = {
  _id: string
  name: string
  text: string
  relation?: string
  rating?: number
}

export default function TestimonialsPreview({ testimonials }: { testimonials: Testimonial[] }) {
  const [picked, setPicked] = useState<Testimonial[]>([])

  useEffect(() => {
    const pool = testimonials.filter((t) => t.text.length <= 200)
    const shuffled = [...pool].sort(() => Math.random() - 0.5)
    setPicked(shuffled.slice(0, 3))
  }, [testimonials])

  if (picked.length === 0) return null

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {picked.map((t) => (
        <div key={t._id} className="bg-white rounded-3xl p-7 hover:-translate-y-1 hover:shadow-lg transition-all duration-200">
          <div className="text-purple text-4xl font-900 leading-none mb-3">&ldquo;</div>
          <p className="text-navy/70 mb-5 leading-relaxed text-sm">{t.text}</p>
          <div>
            <p className="font-800 text-navy">{t.name}</p>
            {t.relation && <p className="text-navy/50 text-xs">{t.relation}</p>}
          </div>
        </div>
      ))}
    </div>
  )
}
