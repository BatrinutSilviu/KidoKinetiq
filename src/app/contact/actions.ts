'use server'

import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendContactEmail(_prevState: unknown, formData: FormData) {
  const name = formData.get('name') as string
  const surname = formData.get('surname') as string
  const email = formData.get('email') as string
  const phone = formData.get('phone') as string
  const message = formData.get('message') as string

  try {
    await resend.emails.send({
      from: 'Kidokinetiq Contact <onboarding@resend.dev>',
      to: 'kidokinetiq.contact@gmail.com',
      subject: `Mesaj nou de la ${name} ${surname}`,
      text: `Nume: ${name} ${surname}\nEmail: ${email}\nTelefon: ${phone || 'N/A'}\n\nMesaj:\n${message}`,
    })
    return { success: true }
  } catch {
    return { success: false }
  }
}
