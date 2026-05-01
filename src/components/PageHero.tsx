import { PageHeaderShapes } from './Shapes'

type Props = {
  badge: string
  title: string
  subtitle?: string
}

export default function PageHero({ badge, title, subtitle }: Props) {
  return (
    <section className="relative overflow-hidden bg-cream py-16 px-6">
      <PageHeaderShapes />
      <div className="relative max-w-3xl mx-auto text-center">
        <span className="inline-block bg-teal text-navy font-800 text-xs px-5 py-2 rounded-full uppercase tracking-widest mb-5">
          {badge}
        </span>
        <h1 className="text-5xl md:text-6xl font-900 text-navy mb-5 leading-tight">{title}</h1>
        {subtitle && (
          <p className="text-navy/60 text-lg max-w-xl mx-auto leading-relaxed">{subtitle}</p>
        )}
      </div>
    </section>
  )
}
