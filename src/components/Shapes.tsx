export function HeroShapes() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">

      {/* ── TOP RIGHT ── */}
      <div className="absolute -top-24 -right-24 w-[420px] h-[420px] rounded-full border-[10px] border-teal opacity-50" />
      <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-teal opacity-35" />
      <div className="absolute top-16 right-20 w-16 h-16 rounded-full border-[5px] border-teal opacity-65" />
      <div className="absolute top-8 right-52 w-8 h-8 rounded-full bg-teal opacity-70" />
      <div className="absolute top-36 right-10 w-6 h-6 bg-teal opacity-60 rotate-45" />
      <div className="absolute -top-6 right-72 w-12 h-12 border-[4px] border-purple opacity-55 rotate-45" />
      <div className="absolute top-48 right-44 w-5 h-5 rounded-full bg-purple opacity-65" />

      {/* ── TOP LEFT ── */}
      <div
        className="absolute -top-16 -left-16 w-72 h-72 bg-purple opacity-35"
        style={{ borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' }}
      />
      <div className="absolute top-6 left-6 w-20 h-20 rounded-full border-[6px] border-purple opacity-55" />
      <div className="absolute top-28 left-28 w-10 h-10 bg-purple opacity-45 rotate-45" />
      <div className="absolute top-10 left-48 w-7 h-7 rounded-full bg-teal opacity-65" />
      <div className="absolute top-48 left-12 w-5 h-5 rounded-full border-[3px] border-navy opacity-50" />
      <div className="absolute top-20 left-64 w-4 h-4 bg-navy opacity-30 rotate-45" />

      {/* ── BOTTOM RIGHT ── */}
      <div className="absolute -bottom-16 -right-16 w-56 h-56 rounded-full border-[8px] border-purple opacity-45" />
      <div className="absolute bottom-8 right-8 w-14 h-14 bg-purple opacity-40 rotate-45" />
      <div className="absolute bottom-24 right-24 w-10 h-10 rounded-full border-[4px] border-teal opacity-60" />
      <div className="absolute bottom-4 right-40 w-6 h-6 rounded-full bg-teal opacity-65" />
      <div className="absolute bottom-36 right-6 w-4 h-4 rounded-full bg-navy opacity-40" />

      {/* ── BOTTOM LEFT ── */}
      <div
        className="absolute -bottom-20 -left-20 w-80 h-80 bg-teal opacity-25"
        style={{ borderRadius: '40% 60% 70% 30% / 40% 50% 60% 50%' }}
      />
      <div className="absolute bottom-10 left-10 w-16 h-16 rounded-full border-[5px] border-teal opacity-55" />
      <div className="absolute bottom-28 left-32 w-8 h-8 bg-teal opacity-50 rotate-45" />
      <div className="absolute bottom-6 left-52 w-6 h-6 rounded-full bg-purple opacity-60" />
      <div className="absolute bottom-44 left-6 w-4 h-4 border-[3px] border-purple opacity-55 rotate-45" />

      {/* ── CENTER SCATTER ── */}
      <div className="absolute top-1/2 left-6 w-6 h-6 rounded-full bg-purple opacity-50" />
      <div className="absolute top-1/3 right-8 w-4 h-4 bg-teal opacity-55 rotate-45" />
      <div className="absolute top-2/3 left-1/3 w-5 h-5 rounded-full border-[3px] border-navy opacity-40" />
      <div className="absolute top-1/4 left-1/2 w-4 h-4 rounded-full bg-teal opacity-45" />
      <div className="absolute top-3/4 right-1/3 w-5 h-5 bg-purple opacity-45 rotate-45" />
      <div className="absolute top-1/2 right-1/4 w-3 h-3 rounded-full bg-navy opacity-30" />

      {/* ── ATMOSPHERE RINGS ── */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full border-2 border-purple opacity-[0.10]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border-2 border-teal opacity-[0.12]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] rounded-full border border-navy opacity-[0.08]" />
    </div>
  )
}

export function PageHeaderShapes() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Top right */}
      <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full border-[8px] border-teal opacity-45" />
      <div className="absolute top-4 right-4 w-20 h-20 rounded-full bg-teal opacity-35" />
      <div className="absolute top-16 right-24 w-10 h-10 border-[4px] border-teal opacity-60 rotate-45" />
      <div className="absolute top-2 right-48 w-6 h-6 rounded-full bg-purple opacity-60" />
      <div className="absolute top-32 right-8 w-5 h-5 bg-teal opacity-55 rotate-45" />

      {/* Top left */}
      <div
        className="absolute -top-12 -left-12 w-52 h-52 bg-purple opacity-30"
        style={{ borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' }}
      />
      <div className="absolute top-6 left-6 w-14 h-14 rounded-full border-[5px] border-purple opacity-50" />
      <div className="absolute top-24 left-24 w-8 h-8 bg-purple opacity-45 rotate-45" />
      <div className="absolute top-8 left-44 w-5 h-5 rounded-full bg-teal opacity-60" />
      <div className="absolute top-36 left-8 w-4 h-4 rounded-full border-[2px] border-navy opacity-45" />

      {/* Bottom */}
      <div className="absolute -bottom-8 right-1/4 w-40 h-40 rounded-full border-[5px] border-navy opacity-20" />
      <div className="absolute bottom-4 left-1/4 w-7 h-7 rounded-full bg-purple opacity-45" />
      <div className="absolute bottom-2 right-16 w-5 h-5 bg-teal opacity-50 rotate-45" />
      <div className="absolute bottom-10 left-8 w-4 h-4 rounded-full bg-teal opacity-50" />

      {/* Atmosphere */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border-2 border-purple opacity-[0.08]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full border border-teal opacity-[0.10]" />
    </div>
  )
}

export function DarkShapes() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Top right */}
      <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full border-[8px] border-teal opacity-30" />
      <div className="absolute top-6 right-6 w-20 h-20 rounded-full bg-teal opacity-25" />
      <div className="absolute top-20 right-28 w-10 h-10 border-[4px] border-teal opacity-45 rotate-45" />
      <div className="absolute top-4 right-52 w-6 h-6 rounded-full bg-purple opacity-40" />
      <div className="absolute top-36 right-10 w-5 h-5 bg-teal opacity-40 rotate-45" />

      {/* Top left */}
      <div
        className="absolute -top-14 -left-14 w-60 h-60 bg-purple opacity-25"
        style={{ borderRadius: '40% 60% 70% 30% / 40% 50% 60% 50%' }}
      />
      <div className="absolute top-8 left-8 w-16 h-16 rounded-full border-[5px] border-purple opacity-35" />
      <div className="absolute top-28 left-28 w-8 h-8 bg-purple opacity-35 rotate-45" />
      <div className="absolute top-6 left-44 w-5 h-5 rounded-full bg-teal opacity-45" />
      <div className="absolute top-40 left-10 w-4 h-4 border-[2px] border-white opacity-20 rotate-45" />

      {/* Bottom */}
      <div className="absolute -bottom-10 right-1/4 w-48 h-48 rounded-full border-[6px] border-teal opacity-22" />
      <div className="absolute bottom-8 left-8 w-12 h-12 rounded-full bg-white opacity-10" />
      <div className="absolute bottom-4 right-12 w-6 h-6 bg-white opacity-12 rotate-45" />
      <div className="absolute bottom-20 left-1/3 w-6 h-6 border-[3px] border-teal opacity-30 rotate-45" />
      <div className="absolute bottom-6 right-1/3 w-4 h-4 rounded-full bg-purple opacity-35" />

      {/* Scatter */}
      <div className="absolute top-1/2 left-6 w-5 h-5 rounded-full bg-teal opacity-30" />
      <div className="absolute top-1/3 right-1/4 w-4 h-4 bg-white opacity-10 rotate-45" />
      <div className="absolute top-2/3 left-1/4 w-4 h-4 rounded-full bg-purple opacity-30" />

      {/* Atmosphere */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full border-2 border-teal opacity-[0.09]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-purple opacity-[0.10]" />
    </div>
  )
}
