import { defineField, defineType } from 'sanity'

export const teamMemberType = defineType({
  name: 'teamMember',
  title: 'Membru Echipă',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Nume', type: 'string', validation: (r) => r.required() }),
    defineField({
      name: 'role',
      title: 'Funcție',
      type: 'array',
      of: [{ type: 'string' }],
      options: { layout: 'tags' },
    }),
    defineField({ name: 'bio', title: 'Biografie', type: 'text', rows: 4 }),
    defineField({ name: 'photo', title: 'Fotografie', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'experienta', title: 'Experiență (ex: 2019 – prezent)', type: 'string' }),
    defineField({
      name: 'gender',
      title: 'Gen',
      type: 'string',
      options: { list: [{ title: 'Masculin', value: 'male' }, { title: 'Feminin', value: 'female' }], layout: 'radio' },
    }),
    defineField({ name: 'order', title: 'Ordine afișare', type: 'number' }),
  ],
  orderings: [{ title: 'Ordine', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] }],
  preview: {
    select: { title: 'name', subtitle: 'role', media: 'photo' },
  },
})
