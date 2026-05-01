import { createClient } from '@sanity/client'

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'bi1797d4',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  token: process.env.SANITY_WRITE_TOKEN,
  useCdn: false,
})

if (!process.env.SANITY_WRITE_TOKEN) {
  console.error('❌  Lipsește SANITY_WRITE_TOKEN.')
  console.error('   SANITY_WRITE_TOKEN=xxx node scripts/seed-services.mjs\n')
  process.exit(1)
}

const services = [
  // ── RECUPERARE PEDIATRICĂ ──────────────────────────────────────────
  {
    _type: 'service',
    category: 'Recuperare Pediatrică',
    icon: '🔍',
    title: 'Evaluare Kinetoterapeutică Inițială',
    duration: '30–40 min',
    price: '170 lei',
    available: true,
    order: 1,
    description: 'Examinare complexă a dezvoltării motorii, posturii, tonusului și reflexelor. Evaluarea completează diagnosticul medical, fără a-l înlocui. În cazurile patologice este necesară scrisoarea medicului specialist.',
  },
  {
    _type: 'service',
    category: 'Recuperare Pediatrică',
    icon: '📊',
    title: 'Evaluare Kinetoterapeutică Periodică',
    duration: '30–40 min',
    price: '100 lei',
    available: true,
    order: 2,
    description: 'Analiza evoluției și ajustarea planului de intervenție pe baza progresului copilului.',
  },
  {
    _type: 'service',
    category: 'Recuperare Pediatrică',
    icon: '🏃',
    title: 'Kinetoterapie',
    duration: '30 / 50 / 80 min',
    price: '120 / 170 / 220 lei',
    available: true,
    order: 3,
    description: 'Intervenție terapeutică personalizată pentru copii cu întârzieri motorii, dezechilibre posturale, hipotonie sau hipertonie. Include exerciții funcționale, corective și de mobilitate, cu plan individualizat și progres monitorizat.',
  },
  {
    _type: 'service',
    category: 'Recuperare Pediatrică',
    icon: '🧠',
    title: 'Terapie Oro-Facială / Integrare Reflexe Primitive',
    duration: '40 min',
    price: '140 lei',
    available: true,
    order: 4,
    description: 'Intervenție specializată ce urmărește optimizarea funcțiilor oro-faciale (supt, masticație, deglutiție, respirație, expresivitate) și reorganizarea reflexelor primitive care influențează dezvoltarea motorie, posturală și autoreglarea.',
  },
  {
    _type: 'service',
    category: 'Recuperare Pediatrică',
    icon: '🩹',
    title: 'Bandajare Medicală Neuromusculară',
    duration: 'variabil',
    price: '40 lei / zonă',
    available: true,
    order: 5,
    description: 'Aplicare de tape terapeutic pentru susținerea corecțiilor posturale, tonusului și reducerea tensiunilor musculare.',
  },
  {
    _type: 'service',
    category: 'Recuperare Pediatrică',
    icon: '🏊',
    title: 'Hidrokinetoterapie',
    duration: '40 min',
    price: '125 lei',
    available: false,
    order: 6,
    description: 'Terapie în apă, adaptată nevoilor fiecărui copil, care stimulează mobilitatea, tonusul și coordonarea, reducând presiunea asupra articulațiilor și facilitând dezvoltarea motorie într-un mediu sigur și plăcut.',
  },

  // ── PREVENȚIE PEDIATRICĂ ───────────────────────────────────────────
  {
    _type: 'service',
    category: 'Prevenție Pediatrică',
    icon: '👶',
    title: 'Masaj Bebeluși',
    duration: '15–20 min',
    price: '90 lei',
    available: true,
    order: 7,
    description: 'Masaj blând, adaptat vârstei, care sprijină relaxarea, reglarea tonusului muscular, digestia și somnul. Contribuie la stimularea senzorială și dezvoltarea armonioasă a bebelușului (sub 1 an).',
  },
  {
    _type: 'service',
    category: 'Prevenție Pediatrică',
    icon: '🤸',
    title: 'Masaj & Gimnastică Bebeluși',
    duration: '30 min',
    price: '120 lei',
    available: true,
    order: 8,
    description: 'Program combinat care include masaj terapeutic și exerciții motrice ușoare pentru bebeluși 0–12 luni. Susține dezvoltarea neuromotorie, tonusul muscular, coordonarea mișcărilor și prevenirea asimetriilor.',
  },
  {
    _type: 'service',
    category: 'Prevenție Pediatrică',
    icon: '⚖️',
    title: 'Echilibru și Mișcare',
    duration: '40 min',
    price: '150 lei',
    available: true,
    order: 9,
    description: 'Program motric care dezvoltă echilibrul, coordonarea și controlul corporal prin activități motrice distractive și adaptate vârstei (1–6 ani). Include exerciții funcționale, trasee motrice și jocuri orientate spre dezvoltarea posturală.',
  },
  {
    _type: 'service',
    category: 'Prevenție Pediatrică',
    icon: '🐠',
    title: 'Baby Aqua Gym',
    duration: '30 min',
    price: '100 lei',
    available: false,
    order: 10,
    description: 'O experiență acvatică delicată și jucăușă pentru bebeluși până la 1,5 ani. Mișcarea în apă stimulează echilibrul, coordonarea, respirația și încrederea în propriul corp.',
  },

  // ── MĂMICI ȘI VIITOARE MĂMICI ─────────────────────────────────────
  {
    _type: 'service',
    category: 'Mămici și Viitoare Mămici',
    icon: '🤰',
    title: 'Gimnastică Prenatală',
    duration: '45 min',
    price: '170 lei',
    available: true,
    order: 11,
    description: 'Un program blând și atent adaptat schimbărilor din sarcină, care menține mobilitatea, susține postura și pregătește corpul pentru momentul nașterii. Exercițiile încurajează respirația corectă și echilibrul.',
  },
  {
    _type: 'service',
    category: 'Mămici și Viitoare Mămici',
    icon: '🧘',
    title: 'Gimnastică Postnatală',
    duration: '45 min',
    price: '170 lei',
    available: true,
    order: 12,
    description: 'Un proces de revenire graduală, sigură și empatică. Exercițiile sunt orientate spre refacerea tonusului, realinierea posturală și fortificarea musculaturii profunde, pentru a sprijini recuperarea armonioasă după naștere.',
  },
  {
    _type: 'service',
    category: 'Mămici și Viitoare Mămici',
    icon: '💦',
    title: 'Gimnastică Acvatică Prenatală',
    duration: '40 min',
    price: '125 lei',
    available: false,
    order: 13,
    description: 'Mediul acvatic oferă ușurință, relaxare și libertate de mișcare, eliberând presiunea de pe articulații. Programul ajută la reducerea disconfortului, îmbunătățirea circulației și menținerea stării de bine pe tot parcursul sarcinii.',
  },
  {
    _type: 'service',
    category: 'Mămici și Viitoare Mămici',
    icon: '🌊',
    title: 'Gimnastică Acvatică Postnatală',
    duration: '40 min',
    price: '125 lei',
    available: false,
    order: 14,
    description: 'O abordare delicată și eficientă în apă, care permite corpului să se refacă fără suprasolicitare. Exercițiile sprijină redobândirea tonusului, a stabilității și a energiei, într-un ritm blând, potrivit perioadei postnatale.',
  },
]

async function seed() {
  console.log(`\n🌱 Se adaugă ${services.length} servicii în Sanity...\n`)
  for (const s of services) {
    try {
      const result = await client.create(s)
      const status = s.available === false ? '⚠️ ' : '✅ '
      console.log(`${status} [${s.category}] ${s.title} — ${s.price}`)
    } catch (err) {
      console.error(`❌  ${s.title}:`, err.message)
    }
  }
  console.log('\n🎉  Gata! Vizitează /servicii pentru a vedea rezultatul.')
}

seed()
