import { defineField, defineType } from 'sanity'

export const testimonialType = defineType({
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Nume', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'relation', title: 'Relație (ex: Mama lui Andrei)', type: 'string' }),
    defineField({ name: 'text', title: 'Mesaj', type: 'text', rows: 4, validation: (r) => r.required() }),
    defineField({
      name: 'rating',
      title: 'Rating (1-5)',
      type: 'number',
      validation: (r) => r.min(1).max(5),
    }),
  ],
  preview: {
    select: { title: 'name', subtitle: 'relation' },
  },
})
