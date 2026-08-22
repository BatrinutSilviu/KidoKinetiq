import { defineField, defineType } from 'sanity'

export const appointmentType = defineType({
  name: 'appointment',
  title: 'Programare',
  type: 'document',
  fields: [
    defineField({
      name: 'patient',
      title: 'Pacient',
      type: 'reference',
      to: [{ type: 'patient' }],
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'service',
      title: 'Serviciu',
      type: 'reference',
      to: [{ type: 'service' }],
    }),
    defineField({ name: 'date', title: 'Data și ora', type: 'datetime', validation: (r) => r.required() }),
    defineField({ name: 'duration', title: 'Durată (ex: 45 min)', type: 'string' }),
    defineField({
      name: 'location',
      title: 'Locație',
      type: 'string',
      options: { list: [{ title: 'Arad', value: 'Arad' }, { title: 'Timișoara', value: 'Timișoara' }] },
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: 'Planificată', value: 'pending' },
          { title: 'Confirmată', value: 'confirmed' },
          { title: 'Finalizată', value: 'completed' },
          { title: 'Anulată', value: 'cancelled' },
        ],
        layout: 'radio',
      },
      initialValue: 'confirmed',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'notes',
      title: 'Note interne',
      description: 'Vizibile doar pentru terapeut, nu apar pentru pacient.',
      type: 'text',
      rows: 4,
    }),
  ],
  orderings: [
    { title: 'Data (crescător)', name: 'dateAsc', by: [{ field: 'date', direction: 'asc' }] },
    { title: 'Data (descrescător)', name: 'dateDesc', by: [{ field: 'date', direction: 'desc' }] },
  ],
  preview: {
    select: { title: 'patient.name', date: 'date', status: 'status' },
    prepare({ title, date, status }) {
      const statusLabel: Record<string, string> = {
        pending: 'Planificată',
        confirmed: 'Confirmată',
        completed: 'Finalizată',
        cancelled: 'Anulată',
      }
      return {
        title: title || 'Fără pacient',
        subtitle: [date ? new Date(date).toLocaleString('ro-RO') : null, statusLabel[status]].filter(Boolean).join(' · '),
      }
    },
  },
})
