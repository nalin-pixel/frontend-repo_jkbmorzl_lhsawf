import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [highContrast, setHighContrast] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem('high-contrast')
    if (stored === 'true') {
      setHighContrast(true)
      document.body.classList.add('contrast-high')
    }
  }, [])

  useEffect(() => {
    if (highContrast) {
      document.body.classList.add('contrast-high')
      localStorage.setItem('high-contrast', 'true')
    } else {
      document.body.classList.remove('contrast-high')
      localStorage.setItem('high-contrast', 'false')
    }
  }, [highContrast])

  const navLink = (
    href: string,
    label: string,
    onClick?: () => void
  ) => (
    <a
      key={href}
      href={href}
      onClick={() => {
        setOpen(false)
        onClick && onClick()
      }}
      className="px-3 py-2 text-sm font-medium text-white/90 hover:text-white transition-colors"
    >
      {label}
    </a>
  )

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-white/15 bg-white/20 backdrop-blur-2xl supports-[backdrop-filter]:bg-white/15 dark:border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
          <div className="flex items-center justify-between px-4 py-3">
            <a href="#top" className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-cyan-400/80 to-purple-500/80 border border-white/30 shadow" />
              <span className="text-white font-semibold tracking-wide">Maxim Studio</span>
            </a>

            <nav className="hidden md:flex items-center gap-1">
              {navLink('#work', 'Work')}
              {navLink('#services', 'Services')}
              {navLink('#process', 'Process')}
              {navLink('#about', 'About')}
              {navLink('#contact', 'Contact')}
            </nav>

            <div className="hidden md:flex items-center gap-3">
              <button
                onClick={() => setHighContrast((v) => !v)}
                aria-pressed={highContrast}
                className="text-xs px-3 py-2 rounded-lg border border-white/20 text-white/90 hover:text-white hover:border-white/40 transition-colors bg-white/10"
                title="Toggle high contrast mode"
              >
                {highContrast ? 'Standard' : 'High contrast'}
              </button>
              <a
                href="#contact"
                className="px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-400 to-purple-500 text-slate-900 font-semibold shadow hover:opacity-95 transition"
              >
                Let’s talk
              </a>
            </div>

            <button
              className="md:hidden inline-flex items-center justify-center p-2 rounded-lg text-white/90 hover:text-white hover:bg-white/10"
              onClick={() => setOpen((o) => !o)}
              aria-label="Toggle menu"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

          {open && (
            <div className="md:hidden px-4 pb-4">
              <div className="grid gap-2">
                {navLink('#work', 'Work')}
                {navLink('#services', 'Services')}
                {navLink('#process', 'Process')}
                {navLink('#about', 'About')}
                {navLink('#contact', 'Contact')}
                <div className="flex items-center gap-2 pt-2">
                  <button
                    onClick={() => setHighContrast((v) => !v)}
                    aria-pressed={highContrast}
                    className="text-xs px-3 py-2 rounded-lg border border-white/20 text-white/90 hover:text-white hover:border-white/40 transition-colors bg-white/10"
                    title="Toggle high contrast mode"
                  >
                    {highContrast ? 'Standard' : 'High contrast'}
                  </button>
                  <a
                    href="#contact"
                    className="flex-1 text-center px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-400 to-purple-500 text-slate-900 font-semibold shadow hover:opacity-95 transition"
                  >
                    Let’s talk
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
