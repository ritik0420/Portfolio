import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { experience } from '../data/resume'

const sectionScrollOpts = { offset: ['start end', 'end start'] }

function JourneyCard({ job }) {
  return (
    <div className="glass rounded-2xl border border-red-500/20 p-6 shadow-card md:p-8">
      <p className="text-xs font-semibold uppercase tracking-wider text-brand-bright">{job.period}</p>
      <h3 className="mt-2 text-xl font-bold text-white">{job.role}</h3>
      <p className="mt-1 text-sm text-zinc-400">
        {job.company}
        {job.link ? (
          <>
            {' '}
            ·{' '}
            <a href={job.link} className="text-brand-bright hover:underline" target="_blank" rel="noreferrer">
              Website
            </a>
          </>
        ) : null}{' '}
        · {job.location}
      </p>
      <ul className="mt-4 list-inside list-disc space-y-2 text-sm text-zinc-400">
        {job.highlights.map((h) => (
          <li key={h.slice(0, 48)} className="marker:text-brand-bright">
            {h}
          </li>
        ))}
      </ul>
    </div>
  )
}

/** Per-row parallax: card moves on its own scroll span; alternates direction by column for depth. */
function JourneyRow({ job, index }) {
  const rowRef = useRef(null)
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: rowRef,
    offset: ['start 0.92', 'end 0.08'],
  })
  const isLeft = index % 2 === 0
  const range = isLeft ? [28, -20] : [32, -24]
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [range[0], 0, range[1]])

  return (
    <motion.li
      ref={rowRef}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ delay: index * 0.05 }}
      className="relative grid grid-cols-1 gap-0 md:grid-cols-2 md:gap-10"
    >
      <div className="absolute left-0 top-8 z-10 flex h-4 w-4 translate-x-[-1px] items-center justify-center rounded-full border-2 border-brand-bright bg-dark shadow-[0_0_20px_rgba(239,68,68,0.45)] md:left-1/2 md:-translate-x-1/2">
        <span className="h-2 w-2 rounded-full bg-brand-bright" />
      </div>

      {isLeft ? (
        <>
          <div className="pl-10 md:flex md:justify-end md:pr-6">
            <motion.div className="w-full max-w-lg" style={reduceMotion ? undefined : { y }}>
              <JourneyCard job={job} />
            </motion.div>
          </div>
          <div className="hidden md:block" aria-hidden />
        </>
      ) : (
        <>
          <div className="hidden md:block" aria-hidden />
          <div className="pl-10 md:pl-6">
            <motion.div className="max-w-lg" style={reduceMotion ? undefined : { y }}>
              <JourneyCard job={job} />
            </motion.div>
          </div>
        </>
      )}
    </motion.li>
  )
}

export default function Experience() {
  const sectionRef = useRef(null)
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: sectionRef, ...sectionScrollOpts })

  const headingY = useTransform(scrollYProgress, [0, 1], [36, -28])
  const lineY = useTransform(scrollYProgress, [0, 1], [18, -42])

  return (
    <section id="experience" ref={sectionRef} className="scroll-mt-20 py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-5 md:px-8">
        <motion.div className="text-center" style={reduceMotion ? undefined : { y: headingY }}>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl"
          >
            Professional <span className="text-gradient-red">Journey</span>
          </motion.h2>
        </motion.div>

        <div className="relative mt-16 md:mt-24">
          <motion.div
            className="pointer-events-none absolute left-[7px] top-2 bottom-0 w-px bg-gradient-to-b from-brand-bright via-brand-deep/80 to-transparent md:left-1/2 md:-translate-x-px"
            style={reduceMotion ? undefined : { y: lineY }}
            aria-hidden
          />

          <ul className="relative space-y-12 md:space-y-20">
            {experience.map((job, index) => (
              <JourneyRow key={`${job.company}-${job.period}`} job={job} index={index} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
