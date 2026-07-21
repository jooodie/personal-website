import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { ArrowLeft, Car, Mail, Phone } from 'lucide-react'

export default function AboutBio() {
  const { t, i18n } = useTranslation()
  const isZh = i18n.language.startsWith('zh')

  const toggleLanguage = () => {
    i18n.changeLanguage(isZh ? 'en' : 'zh')
  }

  const careerTargets = t('aboutBio.careerTargets', { returnObjects: true })
  const traits = t('aboutBio.traits', { returnObjects: true })
  const skills = t('aboutBio.skills', { returnObjects: true })
  const education = t('aboutBio.education', { returnObjects: true })
  const aiItems = t('aboutBio.roles.ai.items', { returnObjects: true })
  const bdItems = t('aboutBio.roles.bd.items', { returnObjects: true })

  return (
    <div className="min-h-screen bg-[#f7f5f1] text-stone-800">
      <div className="border-b border-stone-200/80 bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link to="/#about" className="soft-btn px-4 py-2 text-sm">
            <ArrowLeft size={16} />
            <span>{t('aboutBio.backHome')}</span>
          </Link>
          <div className="flex items-center gap-3">
            <p className="hidden text-xs font-medium uppercase tracking-[0.18em] text-stone-400 sm:block">
              {t('aboutBio.pageLabel')}
            </p>
            <button
              type="button"
              onClick={toggleLanguage}
              aria-label={isZh ? t('nav.switchToEn') : t('nav.switchToZh')}
              className="soft-btn gap-1 px-3 py-1.5 text-xs"
            >
              <span className={!isZh ? 'text-teal-700' : 'text-stone-400'}>EN</span>
              <span className="text-stone-300">/</span>
              <span className={isZh ? 'text-teal-700' : 'text-stone-400'}>中文</span>
            </button>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6 py-10 sm:py-14">
        <div className="grid grid-cols-1 overflow-hidden rounded-2xl border border-slate-900/[0.08] shadow-[0_10px_30px_-5px_rgba(0,0,0,0.03),0_0_30px_rgba(51,65,85,0.08)] md:grid-cols-[280px_1fr]">
          {/* Left sidebar */}
          <aside className="bg-[#004AAD] p-6 text-white/70">
            <div className="flex flex-col items-center">
              {/* 放置大頭照 */}
              <div className="rounded-2xl border border-white/25 p-1">
                <img
                  src="/images/01.jpg"
                  alt={t('aboutBio.photoAlt')}
                  className="h-48 w-36 rounded-2xl object-cover sm:h-52 sm:w-40"
                />
              </div>

              <span className="mt-4 block text-center text-[22px] font-bold text-white">
                {t('aboutBio.name')}
              </span>

              <p className="mt-1 text-center text-base text-white/55">
                {t('aboutBio.meta')}
              </p>
            </div>

            <div className="mt-6 space-y-3">
              <a
                href={`tel:${t('aboutBio.contact.phoneTel')}`}
                className="flex items-start gap-3 text-base text-white/85"
              >
                <Phone size={16} className="mt-0.5 shrink-0 text-white" />
                <span className="whitespace-pre-line leading-relaxed">
                  {t('aboutBio.contact.phone')}
                </span>
              </a>
              <a
                href={`mailto:${t('aboutBio.contact.email')}`}
                className="flex items-start gap-3 text-base text-white/85"
              >
                <Mail size={16} className="mt-0.5 shrink-0 text-white" />
                <span className="break-all leading-relaxed">
                  {t('aboutBio.contact.email')}
                </span>
              </a>
              <div className="flex items-start gap-3 text-base text-white/85">
                <Car size={16} className="mt-0.5 shrink-0 text-white" />
                <div>
                  <p className="mb-0.5 text-sm font-semibold uppercase tracking-wider text-white/55">
                    {t('aboutBio.contact.licenseLabel')}
                  </p>
                  <p className="leading-relaxed">{t('aboutBio.contact.license')}</p>
                </div>
              </div>
            </div>

            <p className="mb-3 mt-8 text-base font-semibold tracking-wider text-white/55">
              {t('aboutBio.careerLabel')}
            </p>
            {Array.isArray(careerTargets) &&
              careerTargets.map((item) => (
                <div
                  key={item}
                  className="mb-2 w-full rounded-lg border border-white/20 bg-white/10 px-4 py-2 text-left text-base text-white/90"
                >
                  {item}
                </div>
              ))}

            <p className="mb-3 mt-8 text-lg font-semibold tracking-wider text-white/55">
              {t('aboutBio.skillsLabel')}
            </p>
            <ul className="space-y-2">
              {Array.isArray(skills) &&
                skills.map((skill) => (
                  <li
                    key={skill}
                    className="relative list-none pl-3.5 text-lg leading-relaxed text-white/90 before:absolute before:left-0 before:content-['•'] before:text-white"
                  >
                    {skill}
                  </li>
                ))}
            </ul>
          </aside>

          {/* Right main content */}
          <div className="space-y-10 bg-white p-8 md:p-12">
            <section>
              <h2 className="mb-4 text-[22px] font-bold tracking-wide text-[#004AAD]">
                {t('aboutBio.traitsLabel')}
              </h2>
              <div className="flex flex-wrap gap-2">
                {Array.isArray(traits) &&
                  traits.map((trait) => (
                    <span
                      key={trait}
                      className="inline-block rounded-full border border-[#004AAD]/35 bg-white px-3 py-1 text-base font-medium text-[#004AAD] shadow-sm"
                    >
                      {trait}
                    </span>
                  ))}
              </div>
            </section>

            <section>
              <h2 className="mb-6 text-[22px] font-bold tracking-wide text-[#004AAD]">
                {t('aboutBio.educationTitle')}
              </h2>
              <div className="relative space-y-8 border-l-2 border-slate-200 pl-6">
                {Array.isArray(education) &&
                  education.map((item) => (
                    <div key={item.school} className="relative">
                      <span className="absolute -left-[31px] top-1 h-3 w-3 rounded-full border-2 border-[#004AAD] bg-white" />
                      <span className="mb-1 block text-lg font-medium text-slate-400">
                        {item.period}
                      </span>
                      <p className="text-lg font-bold text-slate-800">{item.school}</p>
                      <span className="mt-0.5 block text-base text-slate-500">
                        {item.detail}
                      </span>
                    </div>
                  ))}
              </div>
            </section>

            <section>
              <h2 className="mb-6 text-[22px] font-bold tracking-wide text-[#004AAD]">
                {t('aboutBio.experienceTitle')}
              </h2>
              <p className="mb-6 rounded-xl border border-slate-100 bg-slate-50 p-4 text-lg leading-relaxed text-slate-600">
                {t('aboutBio.experienceSummary')}
              </p>

              <h3 className="mt-4 flex flex-wrap items-center gap-2 text-[20px] font-bold text-[#004AAD]">
                <span>{t('aboutBio.roles.ai.title')}</span>
                <Link
                  to="/project/badminton-defense-analysis"
                  className="inline-block rounded-full border border-slate-200 bg-white px-1.5 py-0.5 text-[13px] font-medium text-[#004AAD] shadow-sm"
                >
                  Project Report
                </Link>
              </h3>
              <ul className="mt-3">
                {Array.isArray(aiItems) &&
                  aiItems.map((item) => (
                    <li
                      key={item}
                      className="relative mb-2 list-none pl-4 text-lg leading-relaxed text-slate-600 before:absolute before:left-0 before:content-['•'] before:text-[#004AAD]"
                    >
                      {item}
                    </li>
                  ))}
              </ul>

              <h3 className="mt-6 block text-[20px] font-bold text-[#004AAD]">
                {t('aboutBio.roles.bd.title')}
              </h3>
              <ul className="mt-3">
                {Array.isArray(bdItems) &&
                  bdItems.map((item) => (
                    <li
                      key={item}
                      className="relative mb-2 list-none pl-4 text-lg leading-relaxed text-slate-600 before:absolute before:left-0 before:content-['•'] before:text-[#004AAD]"
                    >
                      {item}
                    </li>
                  ))}
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
