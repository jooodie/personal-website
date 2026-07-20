import { useTranslation } from 'react-i18next'

const projectKeys = [
  { key: 'smartRallyVision', tags: ['PyTorch', 'OpenCV', 'Python'] },
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
        {projectKeys.map((project) => (
          <article
            key={project.key}
            className="group rounded-2xl border border-stone-200 bg-white p-6 shadow-md shadow-stone-200/50 transition-all duration-300 hover:scale-105 hover:border-teal-200 hover:shadow-lg hover:shadow-teal-100/50"
          >
            <div className="mb-4 h-1 w-12 rounded-full bg-gradient-to-r from-teal-500 to-emerald-500 transition-all duration-300 group-hover:w-20" />
            <h3 className="font-display text-xl font-semibold text-stone-900 transition-colors duration-300 group-hover:text-teal-700">
              {t(`projects.items.${project.key}.title`)}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-stone-600">
              {t(`projects.items.${project.key}.description`)}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md border border-stone-200 bg-stone-50 px-2.5 py-1 text-xs text-stone-600"
                >
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
