import { profile } from '../data/resume'

const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-dark-50/80 py-16 backdrop-blur-xl">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-red-500/30 bg-gradient-to-br from-brand-deep/80 to-dark-100 font-bold text-brand-bright">
                RK
              </span>
              <span className="font-semibold text-white">{profile.name}</span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-zinc-500">
              Full Stack Developer crafting immersive, high-performance web experiences with React, Next.js, and Node.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-zinc-400">Navigation</h4>
            <ul className="mt-4 space-y-2 text-sm text-zinc-400">
              <li>
                <button type="button" onClick={() => go('about')} className="hover:text-brand-bright">
                  About
                </button>
              </li>
              <li>
                <button type="button" onClick={() => go('experience')} className="hover:text-brand-bright">
                  Experience
                </button>
              </li>
              <li>
                <button type="button" onClick={() => go('stack')} className="hover:text-brand-bright">
                  Stack
                </button>
              </li>
              <li>
                <button type="button" onClick={() => go('work')} className="hover:text-brand-bright">
                  Projects
                </button>
              </li>
              <li>
                <button type="button" onClick={() => go('contact')} className="hover:text-brand-bright">
                  Contact
                </button>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-zinc-400">Connect</h4>
            <p className="mt-4 text-sm text-zinc-400">
              <a href={`mailto:${profile.email}`} className="hover:text-brand-bright">
                {profile.email}
              </a>
            </p>
            <p className="mt-2 text-sm text-zinc-400">
              <a href={`tel:${profile.phone.replace(/\s/g, '')}`} className="hover:text-brand-bright">
                {profile.phone}
              </a>
            </p>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 text-xs text-zinc-600 sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
          <p>Designed with React & Tailwind</p>
        </div>
      </div>
    </footer>
  )
}
