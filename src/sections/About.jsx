import { motion } from 'framer-motion'
import { profile, stats, aboutIntro, expertiseAreas } from '../data/resume'

function ExpertiseCard({ title, description, tags, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ delay: index * 0.06, duration: 0.45 }}
      className="flex h-full flex-col rounded-2xl border border-red-500/20 bg-dark-50/60 p-6 shadow-card backdrop-blur-md transition hover:border-brand-bright/35 hover:shadow-glow-sm md:p-7"
    >
      <h3 className="text-base font-bold tracking-tight text-white md:text-lg">{title}</h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-400">{description}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[11px] font-medium text-zinc-300 md:text-xs"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.article>
  )
}

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl"
        >
          {profile.aboutTitle[0]}{' '}
          <span className="text-gradient-red">{profile.aboutTitle[1]}</span>
        </motion.h2>

        <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-strong glow-ring flex flex-col rounded-3xl p-8 md:p-10"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-bright">Introduction</p>
            <h3 className="mt-3 text-2xl font-bold text-white md:text-3xl">{aboutIntro.greeting}</h3>
            <p className="mt-4 leading-relaxed text-zinc-400">{aboutIntro.summary}</p>

            <div className="mt-10 grid grid-cols-1 gap-6 border-t border-white/10 pt-10 sm:grid-cols-3">
              {stats.map((s) => (
                <div key={s.label} className="text-center sm:text-left">
                  <p className="text-3xl font-bold text-brand-bright md:text-4xl">{s.value}</p>
                  <p className="mt-1 text-sm text-zinc-500">{s.label}</p>
                </div>
              ))}
            </div>

            <button
              type="button"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="mt-10 w-full rounded-xl bg-brand-bright py-3 text-sm font-semibold text-white shadow-glow transition hover:bg-red-500 sm:w-auto sm:px-8"
            >
              Contact Me
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="relative flex flex-col items-center lg:items-end"
          >
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-bright/25 blur-3xl md:h-80 md:w-80" aria-hidden />
            <div className="relative mx-auto max-w-[min(100%,20rem)] rounded-full border-4 border-black p-1 shadow-[0_0_48px_-6px_rgba(239,68,68,0.5)] ring-1 ring-white/10 sm:max-w-[22rem]">
              <img
                src="/profile-about.png"
                alt={`${profile.name} — portrait`}
                width={352}
                height={352}
                className="aspect-square w-full rounded-full bg-zinc-300 object-cover object-top"
              />
            </div>
            <div className="mt-8 w-full text-center lg:text-right">
              <p className="text-lg font-semibold text-white">{profile.name}</p>
              <p className="mt-1 text-sm text-brand-bright">Built with Passion</p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 md:mt-20"
        >
          <p className="text-center text-sm font-semibold uppercase tracking-[0.25em] text-zinc-500">Expertise</p>
          <h3 className="mt-2 text-center text-2xl font-bold text-white md:text-3xl">Technologies & skills</h3>
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {expertiseAreas.map((area, index) => (
              <ExpertiseCard key={area.title} {...area} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
