import { motion, useReducedMotion } from 'framer-motion'
import { techStack } from '../data/resume'

function iconUrl(slug) {
  return `https://cdn.simpleicons.org/${slug}/ef4444`
}

function TechPill({ item }) {
  return (
    <div className="glass flex shrink-0 items-center gap-3 rounded-full border border-white/10 px-4 py-2.5 pr-5 shadow-sm transition hover:border-brand-bright/30 hover:shadow-glow-sm">
      <img
        src={iconUrl(item.icon)}
        alt=""
        width={22}
        height={22}
        className="h-5 w-5 shrink-0 opacity-90"
        loading="lazy"
      />
      <span className="text-sm font-medium text-zinc-200">{item.name}</span>
    </div>
  )
}

export default function TechStack() {
  const reduceMotion = useReducedMotion()
  const mid = Math.ceil(techStack.length / 2)
  const row1 = techStack.slice(0, mid)
  const row2 = techStack.slice(mid)

  if (reduceMotion) {
    return (
      <section id="stack" className="scroll-mt-24 py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl"
          >
            The <span className="text-gradient-red">Tech Stack</span>
          </motion.h2>

          <div className="mt-14 space-y-4 md:space-y-5">
            {[row1, row2].map((row, rowIndex) => (
              <div
                key={rowIndex}
                className="flex flex-wrap justify-center gap-3 md:gap-4"
              >
                {row.map((item) => (
                  <TechPill key={item.name} item={item} />
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="stack" className="scroll-mt-24 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl"
        >
          The <span className="text-gradient-red">Tech Stack</span>
        </motion.h2>

        <div className="mt-14 space-y-4 md:space-y-5">
          <div className="overflow-hidden py-0.5">
            <div className="tech-marquee-track tech-marquee-right">
              {[...row1, ...row1].map((item, i) => (
                <TechPill key={`r1-${item.name}-${i}`} item={item} />
              ))}
            </div>
          </div>
          <div className="overflow-hidden py-0.5">
            <div className="tech-marquee-track tech-marquee-left">
              {[...row2, ...row2].map((item, i) => (
                <TechPill key={`r2-${item.name}-${i}`} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
