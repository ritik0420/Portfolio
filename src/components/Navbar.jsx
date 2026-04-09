import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const links = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'work', label: 'Work' },
  { id: 'stack', label: 'Stack' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const go = (id) => {
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.header
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'border-b border-white/10 bg-dark/80 py-3 shadow-card backdrop-blur-xl' : 'bg-transparent py-5'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 md:px-8">
        <button type="button" onClick={() => go('home')} className="flex items-center gap-2" aria-label="Home">
          
          <span className="hidden text-lg font-semibold tracking-tight sm:block">Ritik Kaintura</span>
        </button>
        <nav className="hidden items-center gap-4 lg:gap-7 xl:gap-8 md:flex">
          {links.map(({ id, label }) => (
            <button
              key={id}
              type="button"
              onClick={() => go(id)}
              className="text-[11px] font-semibold uppercase tracking-wide text-zinc-300 transition-colors hover:text-white lg:text-xs"
            >
              {label}
            </button>
          ))}
        </nav>
        <button
          type="button"
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
          aria-expanded={open}
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className={`h-0.5 w-6 rounded bg-white transition ${open ? 'translate-y-[5px] rotate-45' : ''}`} />
          <span className={`h-0.5 w-6 rounded bg-white transition ${open ? '-translate-y-[5px] -rotate-45' : ''}`} />
        </button>
      </div>
      {open ? (
        <div className="border-t border-white/10 bg-dark/95 px-5 py-4 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-1">
            {links.map(({ id, label }) => (
              <button
                key={id}
                type="button"
                onClick={() => go(id)}
                className="rounded-lg py-3 text-left text-sm font-medium uppercase tracking-wide text-zinc-200"
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      ) : null}
    </motion.header>
  )
}
