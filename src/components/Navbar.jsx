import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const { t, i18n } = useTranslation()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const isZh = i18n.language.startsWith('zh')

  const links = [
    { href: '#about', label: t('nav.about') },
    { href: '#projects', label: t('nav.projects') },
    { href: '#contact', label: t('nav.contact') },
  ]

  const toggleLanguage = () => {
    i18n.changeLanguage(isZh ? 'en' : 'zh')
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-stone-200/80 bg-white/80 backdrop-blur-md shadow-sm shadow-stone-200/50'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#home"
          className="font-display text-lg font-semibold tracking-tight text-stone-900 transition-colors duration-300 hover:text-teal-700"
        >
          YL<span className="text-gradient">.Chu</span>
        </a>

        <div className="hidden items-center gap-6 md:flex">
          <ul className="flex items-center gap-8">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-stone-600 transition-colors duration-300 hover:text-teal-700"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <button
            type="button"
            onClick={toggleLanguage}
            aria-label={isZh ? t('nav.switchToEn') : t('nav.switchToZh')}
            className="inline-flex items-center gap-1 rounded-full border border-stone-200 bg-white/80 px-3 py-1.5 text-xs font-medium shadow-sm transition-all duration-300 hover:border-teal-300 hover:shadow-md"
          >
            <span
              className={`transition-colors duration-300 ${
                !isZh ? 'text-teal-700' : 'text-stone-400'
              }`}
            >
              EN
            </span>
            <span className="text-stone-300">/</span>
            <span
              className={`transition-colors duration-300 ${
                isZh ? 'text-teal-700' : 'text-stone-400'
              }`}
            >
              中文
            </span>
          </button>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <button
            type="button"
            onClick={toggleLanguage}
            aria-label={isZh ? t('nav.switchToEn') : t('nav.switchToZh')}
            className="inline-flex items-center gap-1 rounded-full border border-stone-200 bg-white/80 px-2.5 py-1 text-xs font-medium shadow-sm transition-all duration-300 hover:border-teal-300"
          >
            <span className={!isZh ? 'text-teal-700' : 'text-stone-400'}>EN</span>
            <span className="text-stone-300">/</span>
            <span className={isZh ? 'text-teal-700' : 'text-stone-400'}>中文</span>
          </button>

          <button
            type="button"
            aria-label={open ? t('nav.closeMenu') : t('nav.openMenu')}
            aria-expanded={open}
            className="rounded-lg border border-stone-200 p-2 text-stone-700 transition-colors duration-300 hover:border-teal-300 hover:text-teal-700"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      <div
        className={`fixed inset-x-0 top-[65px] origin-top border-b border-stone-200 bg-white/95 backdrop-blur-md transition-all duration-300 md:hidden ${
          open
            ? 'pointer-events-auto scale-y-100 opacity-100'
            : 'pointer-events-none scale-y-95 opacity-0'
        }`}
      >
        <ul className="flex flex-col gap-1 px-6 py-4">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-3 text-stone-700 transition-colors duration-300 hover:bg-stone-50 hover:text-teal-700"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}
