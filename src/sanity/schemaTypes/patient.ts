import { defineField, defineType } from 'sanity'

export const patientType = defineType({
  name: 'patient',
  title: 'Pacient',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Nume', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'phone', title: 'Telefon', type: 'string' }),
    defineField({ name: 'email', title: 'Email', type: 'string' }),
    defineField({
      name: 'accessToken',
      title: 'Link personal (token)',
      type: 'string',
      readOnly: true,
      initialValue: () => crypto.randomUUID(),
      description: 'Generat automat. Trimite-l pacientului ca link: /programarile-mele/<token> — acolo își poate vedea programările.',
    }),
    defineField({ name: 'notes', title: 'Note interne', description: 'Vizibile doar pentru terapeut, nu apar pentru pacient.', type: 'text', rows: 4 }),
  ],
  preview: {
    select: { title: 'name', subtitle: 'phone' },
  },
})
