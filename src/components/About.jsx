import { useTranslation } from 'react-i18next'

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
                className="animate-slide-up rounded-xl border border-stone-200 bg-white px-4 py-2.5 text-sm font-medium text-stone-700 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-teal-300 hover:text-teal-700 hover:shadow-md"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-stone-200 bg-amber-50/40 p-6">
            <p className="text-sm leading-relaxed text-stone-600">{t('about.quote')}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
