import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { href: '#about', label: '關於我' },
  { href: '#projects', label: '專案' },
  { href: '#contact', label: '聯絡我' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

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

        <ul className="hidden items-center gap-8 md:flex">
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
          aria-label={open ? '關閉選單' : '開啟選單'}
          aria-expanded={open}
          className="rounded-lg border border-stone-200 p-2 text-stone-700 transition-colors duration-300 hover:border-teal-300 hover:text-teal-700 md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
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
