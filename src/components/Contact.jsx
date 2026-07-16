import { useState } from 'react'
import { Mail, Send } from 'lucide-react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
      <div className="mb-12">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-teal-700">
          Contact
        </p>
        <h2 className="mt-3 font-display text-3xl font-bold text-stone-900 sm:text-4xl">
          聯絡我
        </h2>
        <p className="mt-4 max-w-2xl text-stone-600">
          有合作、職缺或想聊聊 AI 與運動科學？歡迎直接來信或填寫表單。
        </p>
      </div>

      <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <form
          onSubmit={handleSubmit}
          className="space-y-5 rounded-2xl border border-stone-200 bg-white p-6 shadow-sm sm:p-8"
        >
          <div>
            <label htmlFor="name" className="mb-2 block text-sm text-stone-700">
              姓名
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={form.name}
              onChange={handleChange}
              className="w-full rounded-xl border border-stone-200 bg-stone-50 px-4 py-3 text-stone-900 outline-none transition-all duration-300 placeholder:text-stone-400 focus:border-teal-400 focus:bg-white focus:ring-2 focus:ring-teal-100"
              placeholder="您的名字"
            />
          </div>

          <div>
            <label htmlFor="email" className="mb-2 block text-sm text-stone-700">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={form.email}
              onChange={handleChange}
              className="w-full rounded-xl border border-stone-200 bg-stone-50 px-4 py-3 text-stone-900 outline-none transition-all duration-300 placeholder:text-stone-400 focus:border-teal-400 focus:bg-white focus:ring-2 focus:ring-teal-100"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label htmlFor="message" className="mb-2 block text-sm text-stone-700">
              訊息
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              value={form.message}
              onChange={handleChange}
              className="w-full resize-none rounded-xl border border-stone-200 bg-stone-50 px-4 py-3 text-stone-900 outline-none transition-all duration-300 placeholder:text-stone-400 focus:border-teal-400 focus:bg-white focus:ring-2 focus:ring-teal-100"
              placeholder="想聊些什麼？"
            />
          </div>

          <button
            type="submit"
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-teal-600 to-emerald-600 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-teal-200/60 sm:w-auto"
          >
            <Send size={16} />
            送出訊息
          </button>

          {submitted && (
            <p className="animate-fade-in text-sm text-emerald-700">
              感謝你的訊息！（前端示意，尚未串接後端）
            </p>
          )}
        </form>

        <div className="flex flex-col justify-center gap-6">
          <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
            <h3 className="font-display text-lg font-semibold text-stone-900">
              直接 Email 聯絡
            </h3>
            <p className="mt-2 text-sm text-stone-600">
              偏好直接溝通？點擊下方按鈕開啟郵件客戶端。
            </p>
            <a
              href="mailto:yungling.chu@example.com"
              className="mt-6 inline-flex items-center gap-2 rounded-xl border border-teal-200 bg-teal-50 px-5 py-3 text-sm font-medium text-teal-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-teal-300 hover:bg-teal-100 hover:shadow-md"
            >
              <Mail size={18} />
              yungling.chu@example.com
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
