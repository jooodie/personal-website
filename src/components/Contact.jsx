import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Mail, Send } from 'lucide-react'
import { supabase } from '../lib/supabaseClient'

export default function Contact() {
  const { t } = useTranslation()
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      const { error } = await supabase.from('contacts').insert([
        {
          name: form.name,
          email: form.email,
          message: form.message,
        },
      ])

      if (error) throw error

      alert(t('contact.success'))
      setForm({ name: '', email: '', message: '' })
    } catch (err) {
      console.error(err)
      alert(err?.message || t('contact.error'))
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
      <div className="mb-12">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-teal-700">
          {t('contact.label')}
        </p>
        <h2 className="mt-3 font-display text-3xl font-bold text-stone-900 sm:text-4xl">
          {t('contact.title')}
        </h2>
        <p className="mt-4 max-w-2xl text-stone-600">
          {t('contact.description')}
        </p>
      </div>

      <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <form
          onSubmit={handleSubmit}
          className="space-y-5 rounded-2xl border border-stone-200 bg-white p-6 shadow-sm sm:p-8"
        >
          <div>
            <label htmlFor="name" className="mb-2 block text-sm text-stone-700">
              {t('contact.name')}
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              disabled={loading}
              value={form.name}
              onChange={handleChange}
              className="w-full rounded-xl border border-stone-200 bg-stone-50 px-4 py-3 text-stone-900 outline-none transition-all duration-300 placeholder:text-stone-400 focus:border-teal-400 focus:bg-white focus:ring-2 focus:ring-teal-100 disabled:opacity-60"
              placeholder={t('contact.namePlaceholder')}
            />
          </div>

          <div>
            <label htmlFor="email" className="mb-2 block text-sm text-stone-700">
              {t('contact.email')}
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              disabled={loading}
              value={form.email}
              onChange={handleChange}
              className="w-full rounded-xl border border-stone-200 bg-stone-50 px-4 py-3 text-stone-900 outline-none transition-all duration-300 placeholder:text-stone-400 focus:border-teal-400 focus:bg-white focus:ring-2 focus:ring-teal-100 disabled:opacity-60"
              placeholder={t('contact.emailPlaceholder')}
            />
          </div>

          <div>
            <label htmlFor="message" className="mb-2 block text-sm text-stone-700">
              {t('contact.message')}
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              disabled={loading}
              value={form.message}
              onChange={handleChange}
              className="w-full resize-none rounded-xl border border-stone-200 bg-stone-50 px-4 py-3 text-stone-900 outline-none transition-all duration-300 placeholder:text-stone-400 focus:border-teal-400 focus:bg-white focus:ring-2 focus:ring-teal-100 disabled:opacity-60"
              placeholder={t('contact.messagePlaceholder')}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-teal-600 to-emerald-600 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-teal-200/60 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:scale-100 sm:w-auto"
          >
            <Send size={16} />
            {loading ? t('contact.sending') : t('contact.submit')}
          </button>
        </form>

        <div className="flex flex-col justify-center gap-6">
          <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
            <h3 className="font-display text-lg font-semibold text-stone-900">
              {t('contact.directEmailTitle')}
            </h3>
            <p className="mt-2 text-sm text-stone-600">
              {t('contact.directEmailDesc')}
            </p>
            <a
              href="mailto:jodiechu1204@gmail.com"
              className="mt-6 inline-flex items-center gap-2 rounded-xl border border-teal-200 bg-teal-50 px-5 py-3 text-sm font-medium text-teal-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-teal-300 hover:bg-teal-100 hover:shadow-md"
            >
              <Mail size={18} />
              jodiechu1204@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
