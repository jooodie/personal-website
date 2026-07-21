import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { ArrowUpRight } from 'lucide-react'

const projectKeys = [
  {
    key: 'badmintonDefenseAnalysis',
    tags: [
      'Python',
      'MediaPipe',
      'Computer Vision',
      'PyQt',
      'Biomechanical Modeling',
    ],
    href: '/project/badminton-defense-analysis',
  },
  { key: 'algoMatchDashboard', tags: ['React', 'Tailwind', 'Docker'] },
  { key: 'pressuredDecisionLab', tags: ['Git', 'React', 'PyTorch'] },
]

export default function Projects() {
  const { t } = useTranslation()

  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
      <div className="mb-12">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-teal-700">
          {t('projects.label')}
        </p>
        <h2 className="mt-3 font-display text-3xl font-bold text-stone-900 sm:text-4xl">
          {t('projects.title')}
        </h2>
        <p className="mt-4 max-w-2xl text-stone-600">{t('projects.description')}</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projectKeys.map((project) => {
          const content = (
            <>
              <div className="mb-4 h-1 w-12 rounded-full bg-gradient-to-r from-teal-500 to-emerald-500 transition-all duration-300 group-hover:w-20" />
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-display text-xl font-semibold text-stone-900">
                  {t(`projects.items.${project.key}.title`)}
                </h3>
                {project.href && (
                  <ArrowUpRight
                    size={18}
                    className="mt-1 shrink-0 text-stone-400"
                  />
                )}
              </div>
              <p className="mt-3 text-sm leading-relaxed text-stone-600">
                {t(`projects.items.${project.key}.description`)}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="soft-card px-2.5 py-1 text-xs text-slate-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </>
          )

          const cardClass =
            'soft-card group p-6'

          if (project.href) {
            return (
              <Link
                key={project.key}
                to={project.href}
                className={`${cardClass} block`}
              >
                {content}
              </Link>
            )
          }

          return (
            <article key={project.key} className={cardClass}>
              {content}
            </article>
          )
        })}
      </div>
    </section>
  )
}
