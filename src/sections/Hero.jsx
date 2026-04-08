import { motion } from 'framer-motion'
import { profile } from '../data/resume'
import CodeCard from '../components/CodeCard'

function SocialLink({ href, label, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-zinc-400 transition hover:border-brand-bright/50 hover:bg-brand-bright/10 hover:text-brand-bright"
    >
      {children}
    </a>
  )
}

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden pt-28 md:pt-32">
      <div className="pointer-events-none absolute inset-0 bg-gradient-radial-red" aria-hidden />
      <div className="pointer-events-none absolute -left-40 top-1/4 h-80 w-80 rounded-full bg-brand-deep/40 blur-[100px]" aria-hidden />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-brand-bright/15 blur-[120px]" aria-hidden />

      <div className="relative z-10 mx-auto grid max-w-6xl gap-12 px-5 pb-20 md:grid-cols-2 md:items-center md:gap-10 md:px-8 lg:gap-16">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
          <p className="mb-4 inline-block rounded-full border border-brand-bright/30 bg-brand-bright/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-brand-bright">
            {profile.heroTag}
          </p>
          <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
            {profile.heroHeadline[0]}{' '}
            <span className="text-gradient-red">{profile.heroHeadline[1]}</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-zinc-400 md:text-lg">{profile.heroSub}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <SocialLink href={profile.social.linkedin} label="LinkedIn">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.063 2.063 0 1.139-.925 2.065-2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </SocialLink>
            <SocialLink href={profile.social.github} label="GitHub">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </SocialLink>
            <SocialLink href={`mailto:${profile.email}`} label="Email">
              <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
              </svg>
            </SocialLink>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <button
              type="button"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="rounded-xl bg-brand-bright px-8 py-3.5 text-sm font-semibold text-white shadow-glow transition hover:bg-red-500"
            >
              Hire Me
            </button>
            <a
              href={profile.cvPath}
              download
              className="rounded-xl border border-white/20 px-8 py-3.5 text-sm font-semibold text-white transition hover:border-brand-bright/50 hover:bg-white/5"
            >
              Download CV
            </a>
          </div>
        </motion.div>

        <div className="relative md:pl-4">
          <CodeCard />
        </div>
      </div>
    </section>
  )
}
