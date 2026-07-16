const projects = [
  {
    title: 'Smart Rally Vision',
    description:
      '以電腦視覺分析羽球對打軌跡與節奏，協助訓練規劃與戰術回顧。',
    tags: ['PyTorch', 'OpenCV', 'Python'],
  },
  {
    title: 'AlgoMatch Dashboard',
    description:
      '即時監控模型訓練指標與資源使用，打造工程師友善的觀測介面。',
    tags: ['React', 'Tailwind', 'Docker'],
  },
  {
    title: 'Pressured Decision Lab',
    description:
      '模擬高壓決策場景的輕量實驗平台，探索抗壓策略對表現的影響。',
    tags: ['Git', 'React', 'PyTorch'],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
      <div className="mb-12">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-teal-700">
          Selected Projects
        </p>
        <h2 className="mt-3 font-display text-3xl font-bold text-stone-900 sm:text-4xl">
          精選專案
        </h2>
        <p className="mt-4 max-w-2xl text-stone-600">
          從競技思維到演算法實作——以下是我近期專注的三個方向。
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.title}
            className="group rounded-2xl border border-stone-200 bg-white p-6 shadow-md shadow-stone-200/50 transition-all duration-300 hover:scale-105 hover:border-teal-200 hover:shadow-lg hover:shadow-teal-100/50"
          >
            <div className="mb-4 h-1 w-12 rounded-full bg-gradient-to-r from-teal-500 to-emerald-500 transition-all duration-300 group-hover:w-20" />
            <h3 className="font-display text-xl font-semibold text-stone-900 transition-colors duration-300 group-hover:text-teal-700">
              {project.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-stone-600">
              {project.description}
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
