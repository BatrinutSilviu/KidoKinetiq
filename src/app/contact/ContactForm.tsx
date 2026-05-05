'use client'

import { useActionState } from 'react'
import { sendContactEmail } from './actions'

const initialState = { success: false }

export default function ContactForm() {
  const [state, formAction, pending] = useActionState(sendContactEmail, initialState)

  if (state.success) {
    return (
      <div className="bg-teal-soft rounded-3xl p-10 text-center">
        <p className="text-4xl mb-4">✅</p>
        <h3 className="font-900 text-navy text-xl mb-2">Mesaj trimis!</h3>
        <p className="text-navy/60 text-sm">Îți răspundem în maxim 24 de ore.</p>
      </div>
    )
  }

  return (
    <form className="space-y-4" action={formAction}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-700 text-navy/60 uppercase tracking-widest mb-1.5">Nume</label>
          <input
            type="text" name="name" required placeholder="Ion"
            className="w-full border-2 border-teal-soft rounded-2xl px-4 py-3 text-sm text-navy font-600 focus:outline-none focus:border-teal placeholder:text-navy/25 transition-colors"
          />
        </div>
        <div>
          <label className="block text-xs font-700 text-navy/60 uppercase tracking-widest mb-1.5">Prenume</label>
          <input
            type="text" name="surname" required placeholder="Popescu"
            className="w-full border-2 border-teal-soft rounded-2xl px-4 py-3 text-sm text-navy font-600 focus:outline-none focus:border-teal placeholder:text-navy/25 transition-colors"
          />
        </div>
      </div>
      <div>
        <label className="block text-xs font-700 text-navy/60 uppercase tracking-widest mb-1.5">Email</label>
        <input
          type="email" name="email" required placeholder="ion@exemplu.ro"
          className="w-full border-2 border-teal-soft rounded-2xl px-4 py-3 text-sm text-navy font-600 focus:outline-none focus:border-teal placeholder:text-navy/25 transition-colors"
        />
      </div>
      <div>
        <label className="block text-xs font-700 text-navy/60 uppercase tracking-widest mb-1.5">Telefon</label>
        <input
          type="tel" name="phone" placeholder="+40 700 000 000"
          className="w-full border-2 border-teal-soft rounded-2xl px-4 py-3 text-sm text-navy font-600 focus:outline-none focus:border-teal placeholder:text-navy/25 transition-colors"
        />
      </div>
      <div>
        <label className="block text-xs font-700 text-navy/60 uppercase tracking-widest mb-1.5">Mesaj</label>
        <textarea
          name="message" rows={4} required
          placeholder="Descrie situația copilului și ce servicii te interesează..."
          className="w-full border-2 border-teal-soft rounded-2xl px-4 py-3 text-sm text-navy font-600 focus:outline-none focus:border-teal placeholder:text-navy/25 transition-colors resize-none"
        />
      </div>
      {state.success === false && (state as { success: boolean; error?: boolean }).error && (
        <p className="text-red-500 text-sm">A apărut o eroare. Încearcă din nou.</p>
      )}
      <button
        type="submit"
        disabled={pending}
        className="w-full bg-navy text-white font-900 py-4 rounded-2xl hover:bg-navy-light transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {pending ? 'Se trimite...' : 'Trimite mesajul →'}
      </button>
    </form>
  )
}
