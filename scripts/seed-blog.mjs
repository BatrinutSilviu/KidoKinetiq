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
  console.error('   Generează un token cu rol "Editor" din:')
  console.error('   https://www.sanity.io/manage/project/bi1797d4/api#tokens')
  console.error('\n   Rulează cu:')
  console.error('   SANITY_WRITE_TOKEN=xxx node scripts/seed-blog.mjs\n')
  process.exit(1)
}

const posts = [
  {
    _type: 'post',
    title: '5 semne că bebelușul tău ar putea beneficia de kinetoterapie',
    slug: { _type: 'slug', current: '5-semne-kinetoterapie-bebelus' },
    publishedAt: '2026-04-10T09:00:00Z',
    excerpt: 'Dezvoltarea motorie a bebelușului urmează un tipar bine definit. Iată semnele timpurii la care părinții ar trebui să fie atenți și când este momentul să ceară sfatul unui kinetoterapeut.',
    categories: ['kinetoterapie'],
    body: [
      { _type: 'block', _key: 'b1', style: 'normal', children: [{ _type: 'span', _key: 's1', text: 'Dezvoltarea motorie a unui copil urmează un tipar destul de predictibil — dar fiecare copil are ritmul lui. Totuși, există semnale clare care indică faptul că un specialist ar putea face o diferență majoră.' }] },
      { _type: 'block', _key: 'b2', style: 'h2', children: [{ _type: 'span', _key: 's2', text: '1. Nu ține capul ridicat la 4 luni' }] },
      { _type: 'block', _key: 'b3', style: 'normal', children: [{ _type: 'span', _key: 's3', text: 'La 3–4 luni, bebelușii ar trebui să poată ține capul ridicat în timp ce stau pe burtă. Dacă observi că gâtul rămâne flasc sau că bebelușul evită poziția pe burtă, merită o evaluare.' }] },
      { _type: 'block', _key: 'b4', style: 'h2', children: [{ _type: 'span', _key: 's4', text: '2. Asimetrie în mișcări' }] },
      { _type: 'block', _key: 'b5', style: 'normal', children: [{ _type: 'span', _key: 's5', text: 'Dacă bebelușul tinde să folosească predominant o mână sau un picior, sau întoarce capul doar într-o direcție, poate fi un semn de tensiune musculară asimetrică sau torticolis. Kinetoterapia poate corecta aceste pattern-uri devreme, înainte să devină obiceiuri.' }] },
      { _type: 'block', _key: 'b6', style: 'h2', children: [{ _type: 'span', _key: 's6', text: '3. Întârzieri în etapele motorii' }] },
      { _type: 'block', _key: 'b7', style: 'normal', children: [{ _type: 'span', _key: 's7', text: 'Dacă la 9 luni copilul nu stă în șezut fără sprijin, sau la 12 luni nu se ridică în picioare ținându-se de mobilă, nu așteptați. O evaluare timpurie poate identifica dacă este o simplă variație sau o întârziere care necesită intervenție.' }] },
      { _type: 'block', _key: 'b8', style: 'h2', children: [{ _type: 'span', _key: 's8', text: '4. Mers pe vârfuri persistent' }] },
      { _type: 'block', _key: 'b9', style: 'normal', children: [{ _type: 'span', _key: 's9', text: 'Mulți copii trec printr-o perioadă în care merg pe vârfuri — e normal până pe la 2 ani. Dacă persistă după această vârstă, poate indica scurtarea tendonului lui Ahile sau pattern-uri neurologice care se adresează bine prin kinetoterapie.' }] },
      { _type: 'block', _key: 'b10', style: 'h2', children: [{ _type: 'span', _key: 's10', text: '5. Tonus muscular scăzut sau crescut' }] },
      { _type: 'block', _key: 'b11', style: 'normal', children: [{ _type: 'span', _key: 's11', text: 'Un copil „floppy" (hipotonie) sau unul cu mușchi foarte rigizi (hipertonie) beneficiază enorm de kinetoterapie specializată. Cu cât intervenția este mai timpurie, cu atât rezultatele sunt mai bune.' }] },
      { _type: 'block', _key: 'b12', style: 'normal', children: [{ _type: 'span', _key: 's12', text: 'Dacă recunoști oricare dintre aceste semne, nu ezita să ne contactezi pentru o evaluare inițială gratuită. Suntem aici să te ajutăm să înțelegi nevoile copilului tău.' }] },
    ],
  },
  {
    _type: 'post',
    title: 'Hidrokinetoterapia pediatrică — de ce apa face minuni',
    slug: { _type: 'slug', current: 'hidrokinetoterapie-pediatrica-beneficii' },
    publishedAt: '2026-04-18T09:00:00Z',
    excerpt: 'Apa reduce gravitația, relaxează mușchii și transformă exercițiile dificile în joacă. Descoperă de ce hidrokinetoterapia este una dintre cele mai eficiente metode de recuperare pentru copiii cu afecțiuni neurologice.',
    categories: ['hidrokinetoterapie'],
    body: [
      { _type: 'block', _key: 'b1', style: 'normal', children: [{ _type: 'span', _key: 's1', text: 'Există ceva magic în legătura dintre copii și apă. Dar dincolo de magie, există știință solidă care explică de ce hidrokinetoterapia este una dintre cele mai puternice unelte din kinetoterapia pediatrică.' }] },
      { _type: 'block', _key: 'b2', style: 'h2', children: [{ _type: 'span', _key: 's2', text: 'Ce este hidrokinetoterapia?' }] },
      { _type: 'block', _key: 'b3', style: 'normal', children: [{ _type: 'span', _key: 's3', text: 'Hidrokinetoterapia (sau terapia acvatică) înseamnă kinetoterapie efectuată în apă caldă, cu asistența unui terapeut specializat. Nu este înot terapeutic — este un program structurat de exerciții, adaptat fiecărui copil, care folosește proprietățile fizice ale apei ca instrument terapeutic.' }] },
      { _type: 'block', _key: 'b4', style: 'h2', children: [{ _type: 'span', _key: 's4', text: 'De ce apa ajută mai mult decât sala?' }] },
      { _type: 'block', _key: 'b5', style: 'normal', children: [{ _type: 'span', _key: 's5', text: 'Flotabilitatea apei reduce efectiv greutatea corporală cu 60–90%, în funcție de adâncimea de imersie. Asta înseamnă că un copil care nu poate sta în picioare pe uscat poate face pași în apă — și asta este o victorie imensă, atât fizică cât și emoțională.' }] },
      { _type: 'block', _key: 'b6', style: 'normal', children: [{ _type: 'span', _key: 's6', text: 'Rezistența apei tonifică mușchii fără impact pe articulații. Temperatura caldă (34–36°C) relaxează spasmele musculare și scade tonusul crescut — un beneficiu crucial pentru copiii cu paralizie cerebrală sau hipertonie.' }] },
      { _type: 'block', _key: 'b7', style: 'h2', children: [{ _type: 'span', _key: 's7', text: 'Pentru cine este recomandată?' }] },
      { _type: 'block', _key: 'b8', style: 'normal', children: [{ _type: 'span', _key: 's8', text: 'Hidrokinetoterapia pediatrică este recomandată pentru copiii cu: paralizie cerebrală, întârzieri în dezvoltarea motorie, hipotonie sau hipertonie musculară, tulburări din spectrul autist (T.S.A.), spina bifida, recuperare post-traumatică.' }] },
      { _type: 'block', _key: 'b9', style: 'h2', children: [{ _type: 'span', _key: 's9', text: 'Dar teama de apă?' }] },
      { _type: 'block', _key: 'b10', style: 'normal', children: [{ _type: 'span', _key: 's10', text: 'Este una dintre cele mai frecvente întrebări pe care le primim. Răspunsul: lucrăm cu fiecare copil în ritmul lui. Prima ședință este adesea doar de familiarizare cu apa — fără presiune, fără obiective motorii. Construim încrederea mai întâi.' }] },
      { _type: 'block', _key: 'b11', style: 'normal', children: [{ _type: 'span', _key: 's11', text: 'Dacă ești curios dacă hidrokinetoterapia este potrivită pentru copilul tău, contactează-ne. Facem o evaluare inițială și îți explicăm exact ce ar presupune un program personalizat.' }] },
    ],
  },
  {
    _type: 'post',
    title: 'Reflexele arhaice — fundația dezvoltării neurologice a copilului',
    slug: { _type: 'slug', current: 'reflexe-arhaice-dezvoltare-neurologica' },
    publishedAt: '2026-04-25T09:00:00Z',
    excerpt: 'Ai auzit de reflexul Moro sau reflexul tonic asimetric al gâtului? Aceste reflexe primitive sunt prezente la naștere și ar trebui să dispară în primul an de viață. Când nu o fac, pot afecta atenția, postura și chiar scrisul copilului.',
    categories: ['kinetoterapie'],
    body: [
      { _type: 'block', _key: 'b1', style: 'normal', children: [{ _type: 'span', _key: 's1', text: 'Reflexele arhaice (sau primitive) sunt răspunsuri motorii automate cu care se nasc toți copiii. Sunt controlate de trunchiul cerebral și au un rol esențial în primele luni de viață — ajută la naștere, la hrănire, la protecție. Dar ar trebui să se "integreze" (să dispară) în primul an de viață, pe măsură ce cortexul cerebral preia controlul.' }] },
      { _type: 'block', _key: 'b2', style: 'h2', children: [{ _type: 'span', _key: 's2', text: 'Ce se întâmplă când reflexele nu se integrează?' }] },
      { _type: 'block', _key: 'b3', style: 'normal', children: [{ _type: 'span', _key: 's3', text: 'Când reflexele arhaice persistă activ după vârsta la care ar trebui să fie integrate, ele pot interfera cu dezvoltarea abilităților mai complexe. Un copil cu reflexe neintegrate poate părea stângaci, poate avea dificultăți de atenție, poate scrie greu sau poate fi hipersensibil la stimuli senzoriali.' }] },
      { _type: 'block', _key: 'b4', style: 'h2', children: [{ _type: 'span', _key: 's4', text: 'Reflexe frecvent neintegrate' }] },
      { _type: 'block', _key: 'b5', style: 'normal', children: [{ _type: 'span', _key: 's5', text: 'Reflexul Moro (reflexul de tresărire): dacă persistă, copilul poate fi hipersensibil la sunete și lumini, poate avea dificultăți de reglare emoțională și anxietate. Reflexul tonic asimetric al gâtului (RTAG): când capul se întoarce, brațul și piciorul de aceeași parte se extind automat. Dacă nu se integrează, poate afecta scrisul și coordonarea. Reflexul tonic labirintic: influențează postura și echilibrul. Copiii cu acest reflex activ pot merge pe vârfuri sau pot avea o postură rigidă.' }] },
      { _type: 'block', _key: 'b6', style: 'h2', children: [{ _type: 'span', _key: 's6', text: 'Cum ajută kinetoterapia?' }] },
      { _type: 'block', _key: 'b7', style: 'normal', children: [{ _type: 'span', _key: 's7', text: 'Programul de integrare a reflexelor arhaice constă în mișcări specifice, repetate zilnic, care „reprogramează" sistemul nervos. Nu este dureros, nu este obositor — sunt exerciții simple, adesea similare cu cele pe care le-ar face un bebeluș în dezvoltare normală. Rezultatele pot fi remarcabile: îmbunătățiri în concentrare, coordonare, scriere, echilibru și reglare emoțională.' }] },
      { _type: 'block', _key: 'b8', style: 'normal', children: [{ _type: 'span', _key: 's8', text: 'La KidoKinetiq evaluăm prezența reflexelor arhaice ca parte din evaluarea inițială. Dacă copilul tău are dificultăți inexplicabile la școală sau în mișcare, un reflex neintegrat poate fi răspunsul.' }] },
    ],
  },
  {
    _type: 'post',
    title: 'Masajul bebelușului — mai mult decât relaxare',
    slug: { _type: 'slug', current: 'masaj-bebelus-beneficii' },
    publishedAt: '2026-05-01T09:00:00Z',
    excerpt: 'Masajul bebelușului nu este un moft — este o practică terapeutică susținută de cercetare, cu beneficii dovedite pentru sistemul nervos, digestiv și imunitar. Iată ce trebuie să știi ca părinte.',
    categories: ['kinetoterapie'],
    body: [
      { _type: 'block', _key: 'b1', style: 'normal', children: [{ _type: 'span', _key: 's1', text: 'Atingerea este primul limbaj al unui nou-născut. Înainte să vadă clar, înainte să audă distinct — simte. Și masajul sistematic al bebelușului folosește tocmai această cale pentru a aduce beneficii profunde, dovedite științific.' }] },
      { _type: 'block', _key: 'b2', style: 'h2', children: [{ _type: 'span', _key: 's2', text: 'Ce spune cercetarea' }] },
      { _type: 'block', _key: 'b3', style: 'normal', children: [{ _type: 'span', _key: 's3', text: 'Studiile arată că bebelușii care primesc masaj regulat au: greutate corporală crescută mai rapid (mai ales bebelușii prematuri), somn mai profund și mai lung, mai puține episoade de colici, sistem imunitar mai bun, nivel mai scăzut de cortizol (hormonul stresului).' }] },
      { _type: 'block', _key: 'b4', style: 'h2', children: [{ _type: 'span', _key: 's4', text: 'Beneficii pentru sistemul nervos' }] },
      { _type: 'block', _key: 'b5', style: 'normal', children: [{ _type: 'span', _key: 's5', text: 'Masajul stimulează mielinizarea — procesul prin care fibrele nervoase se „izolează" pentru a transmite impulsuri mai rapid. Cu alte cuvinte, masajul contribuie literalmente la maturizarea creierului bebelușului. De aceea este recomandat cu precădere în cazul copiilor prematuri sau a celor cu întârzieri neurologice.' }] },
      { _type: 'block', _key: 'b6', style: 'h2', children: [{ _type: 'span', _key: 's6', text: 'Masaj terapeutic vs. masaj de acasă' }] },
      { _type: 'block', _key: 'b7', style: 'normal', children: [{ _type: 'span', _key: 's7', text: 'Există o diferență importantă între masajul pe care îl faci tu acasă bebelușului (minunat pentru legătură și relaxare) și masajul terapeutic efectuat de un kinetoterapeut specializat. Cel din urmă urmează protocoale specifice, adresează probleme concrete (tonus muscular, colici, torticolis) și include exerciții de gimnastică adaptate vârstei.' }] },
      { _type: 'block', _key: 'b8', style: 'h2', children: [{ _type: 'span', _key: 's8', text: 'Când să începi?' }] },
      { _type: 'block', _key: 'b9', style: 'normal', children: [{ _type: 'span', _key: 's9', text: 'Masajul bebelușului poate începe de la 2–3 săptămâni după naștere (pentru bebelușii la termen sănătoși). Nu este niciodată prea devreme — și nici prea târziu. Oferim și cursuri pentru părinți, unde înveți tehnicile corecte pentru a continua acasă.' }] },
      { _type: 'block', _key: 'b10', style: 'normal', children: [{ _type: 'span', _key: 's10', text: 'Contactează-ne pentru a afla mai multe despre programele noastre de masaj și gimnastică pentru bebeluși.' }] },
    ],
  },
]

async function seedBlog() {
  console.log(`\n🌱 Se adaugă ${posts.length} articole în Sanity...\n`)

  for (const post of posts) {
    try {
      const result = await client.create(post)
      console.log(`✅  "${post.title}"`)
      console.log(`    ID: ${result._id}\n`)
    } catch (err) {
      console.error(`❌  Eroare la "${post.title}":`, err.message)
    }
  }

  console.log('🎉  Gata! Deschide /studio pentru a vedea articolele.')
}

seedBlog()
