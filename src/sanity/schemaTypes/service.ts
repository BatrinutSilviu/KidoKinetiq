import { defineField, defineType } from 'sanity'

export const serviceType = defineType({
  name: 'service',
  title: 'Serviciu',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Titlu', type: 'string', validation: (r) => r.required() }),
    defineField({
      name: 'category',
      title: 'Categorie',
      type: 'reference',
      to: [{ type: 'serviceCategory' }],
      validation: (r) => r.required(),
    }),
    defineField({ name: 'description', title: 'Descriere', type: 'text', rows: 4 }),
    defineField({ name: 'icon', title: 'Emoji / Iconiță', type: 'string' }),
    defineField({ name: 'price', title: 'Preț', type: 'string' }),
    defineField({ name: 'duration', title: 'Durată', type: 'string' }),
    defineField({ name: 'sessions', title: 'Număr ședințe', type: 'string' }),
    defineField({ name: 'observations', title: 'Observații', type: 'text', rows: 3 }),
    defineField({
      name: 'available',
      title: 'Disponibil',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'order',
      title: 'Ordine în categorie',
      description: 'Poziția acestui serviciu în cadrul categoriei sale.',
      type: 'number',
    }),
  ],
  orderings: [{ title: 'Ordine', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] }],
})
