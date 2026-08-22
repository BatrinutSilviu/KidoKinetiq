import { defineField, defineType } from 'sanity'

export const serviceCategoryType = defineType({
  name: 'serviceCategory',
  title: 'Categorie servicii',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Titlu', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'order', title: 'Ordine afișare', type: 'number' }),
  ],
  orderings: [{ title: 'Ordine', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] }],
  preview: {
    select: { title: 'title', order: 'order' },
    prepare({ title, order }) {
      return { title, subtitle: order != null ? `Ordine: ${order}` : undefined }
    },
  },
})
