import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { ArrowUpRight } from 'lucide-react'

const techStack = ['React', 'Tailwind', 'Docker', 'PyTorch', 'Git']

export default function About() {
  const { t } = useTranslation()

  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24">
      <div className="mb-12 animate-fade-in">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-teal-700">
          {t('about.label')}
        </p>
        <h2 className="mt-3 font-display text-3xl font-bold text-stone-900 sm:text-4xl">
          {t('about.title')}
        </h2>
      </div>

      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="space-y-5 text-base leading-relaxed text-stone-600 sm:text-lg">
          <p>{t('about.p1')}</p>
          <p>{t('about.p2')}</p>
          <p>{t('about.p3')}</p>
        </div>

        <div>
          <p className="mb-5 text-sm font-medium text-stone-500">{t('about.techWall')}</p>
          <div className="flex flex-wrap gap-3">
            {techStack.map((tech, index) => (
              <span
                key={tech}
                style={{ animationDelay: `${index * 80}ms` }}
                className="soft-card animate-slide-up px-4 py-2.5 text-sm font-medium text-slate-700"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="soft-card mt-8 p-6">
            <p className="text-sm leading-relaxed text-slate-600">{t('about.quote')}</p>
          </div>

          <div className="mt-5 flex justify-end">
            <Link
              to="/about"
              className="soft-btn !bg-teal-50 px-3.5 py-2 text-xs tracking-wide !text-teal-800"
            >
              {t('about.viewFullBio')}
              <ArrowUpRight size={13} strokeWidth={2.25} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
