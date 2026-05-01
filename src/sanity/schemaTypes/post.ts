import { defineField, defineType } from 'sanity'

export const postType = defineType({
  name: 'post',
  title: 'Articol Blog',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Titlu', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' }, validation: (r) => r.required() }),
    defineField({ name: 'publishedAt', title: 'Data publicării', type: 'datetime', validation: (r) => r.required() }),
    defineField({ name: 'mainImage', title: 'Imagine principală', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'excerpt', title: 'Rezumat', type: 'text', rows: 3 }),
    defineField({
      name: 'body',
      title: 'Conținut',
      type: 'array',
      of: [
        { type: 'block' },
        { type: 'image', options: { hotspot: true } },
      ],
    }),
    defineField({
      name: 'categories',
      title: 'Categorii',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'Kinetoterapie', value: 'kinetoterapie' },
          { title: 'Hidrokinetoterapie', value: 'hidrokinetoterapie' },
          { title: 'Terapie Acvatică', value: 'terapie-acvatica' },
          { title: 'Noutăți', value: 'noutati' },
        ],
      },
    }),
  ],
  preview: {
    select: { title: 'title', media: 'mainImage', subtitle: 'publishedAt' },
  },
})
