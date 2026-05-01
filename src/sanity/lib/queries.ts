import { groq } from 'next-sanity'

export const postsQuery = groq`*[_type == "post"] | order(publishedAt desc) {
  _id, title, slug, publishedAt, excerpt, mainImage, categories
}`

export const postBySlugQuery = groq`*[_type == "post" && slug.current == $slug][0] {
  _id, title, slug, publishedAt, mainImage, body, categories
}`

export const servicesQuery = groq`*[_type == "service"] | order(order asc) {
  _id, title, category, description, icon, price, duration, available
}`

export const teamQuery = groq`*[_type == "teamMember"] | order(order asc) {
  _id, name, role, bio, photo
}`

export const testimonialsQuery = groq`*[_type == "testimonial"] {
  _id, name, relation, text, rating
}`
