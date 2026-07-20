import { useTranslation } from 'react-i18next'
import { Github, Linkedin, Mail } from 'lucide-react'

const socials = [
  {
    label: 'GitHub',
    href: 'https://github.com',
    icon: Github,
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com',
    icon: Linkedin,
  },
  {
    label: 'Gmail',
    href: 'mailto:jodiechu1204@gmail.com',
    icon: Mail,
  },
]

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="border-t border-stone-200 bg-white px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8">
        <div className="flex flex-wrap items-center justify-center gap-4">
          {socials.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('mailto:') ? undefined : '_blank'}
              rel={href.startsWith('mailto:') ? undefined : 'noreferrer'}
              aria-label={label}
              className="group inline-flex items-center gap-2 rounded-full border border-stone-200 bg-stone-50 px-5 py-2.5 text-sm font-medium text-stone-700 transition-all duration-300 hover:scale-105 hover:border-teal-300 hover:bg-teal-50 hover:text-teal-700 hover:shadow-md"
            >
              <Icon size={18} className="transition-transform duration-300 group-hover:scale-110" />
              <span>{label}</span>
            </a>
          ))}
        </div>

        <div className="flex flex-col items-center justify-between gap-3 text-sm text-stone-500 sm:flex-row sm:gap-6">
          <p>{t('footer.copyright', { year: new Date().getFullYear() })}</p>
          <p className="text-stone-400">{t('footer.builtWith')}</p>
        </div>
      </div>
    </footer>
  )
}
