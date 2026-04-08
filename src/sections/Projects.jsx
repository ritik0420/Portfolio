import { motion } from 'framer-motion'
import { projects, profile } from '../data/resume'

export default function Projects() {
  return (
    <section id="work" className="scroll-mt-24 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Featured <span className="text-gradient-red">Creations</span>
          </h2>
          <p className="mt-4 text-zinc-400">
            High-impact builds focused on scalability, performance, and clean user experience — MERN, Next.js, and modern
            deploys.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: i * 0.06 }}
              className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-dark-50/50 shadow-card backdrop-blur-sm transition hover:border-red-500/25 hover:shadow-glow"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img src={p.image} alt="" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent opacity-60" />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg font-bold text-white">{p.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-400">{p.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="rounded-full bg-white/5 px-2.5 py-0.5 text-xs text-zinc-400">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex flex-1 items-center justify-center rounded-xl bg-brand-bright px-4 py-2.5 text-center text-sm font-semibold text-white transition hover:bg-red-500 sm:flex-none"
                  >
                    Live Demo
                  </a>
                  <a
                    href={p.source}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex flex-1 items-center justify-center rounded-xl border border-white/15 px-4 py-2.5 text-center text-sm font-semibold text-zinc-200 transition hover:border-brand-bright/40 hover:bg-white/5 sm:flex-none"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <a
            href={profile.social.github}
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-brand-bright/40 bg-brand-deep/30 px-8 py-3 text-sm font-semibold text-brand-bright transition hover:bg-brand-bright hover:text-white"
          >
            View All Projects
          </a>
        </div>
      </div>
    </section>
  )
}
