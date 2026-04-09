import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { projects, profile } from '../data/resume'

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(1)

  const totalSlides = projects.length
  const activeProject = projects[currentIndex]

  const handleNext = () => {
    setDirection(1)
    setCurrentIndex((prev) => (prev + 1) % totalSlides)
  }

  const handlePrev = () => {
    setDirection(-1)
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides)
  }

  const handleJump = (index) => {
    setDirection(index > currentIndex ? 1 : -1)
    setCurrentIndex(index)
  }

  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? '18%' : '-18%',
      opacity: 0,
      scale: 1.02,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (dir) => ({
      x: dir > 0 ? '-18%' : '18%',
      opacity: 0,
      scale: 0.98,
    }),
  }

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

        <div className="mt-14">
          {/* Mobile: horizontal scroll + snap */}
          <div
            className="projects-scroll-strip md:hidden -mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain scroll-smooth px-5 pb-1 [-webkit-overflow-scrolling:touch] [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          >
            {projects.map((project, index) => (
              <article
                key={project.title}
                className="w-[min(85vw,20rem)] shrink-0 snap-center snap-always overflow-hidden rounded-3xl border border-white/20 bg-white/[0.04] shadow-[0_20px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl"
              >
                <div className="relative h-[200px] overflow-hidden">
                  <img src={project.image} alt={project.title} className="h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
                  <div className="absolute bottom-3 left-3 rounded-full border border-white/20 bg-white/10 px-2.5 py-0.5 text-xs text-zinc-100 backdrop-blur-md">
                    {index + 1} / {totalSlides}
                  </div>
                </div>
                <div className="flex flex-col bg-white/[0.02] p-5">
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  <p className="mt-2 line-clamp-4 text-sm leading-relaxed text-zinc-300">{project.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="rounded-full border border-white/15 bg-white/[0.04] px-2.5 py-1 text-xs text-zinc-200">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-5 flex flex-col gap-2.5 sm:flex-row">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex flex-1 items-center justify-center rounded-xl bg-brand-bright px-4 py-2.5 text-center text-sm font-semibold text-white transition hover:bg-red-500"
                    >
                      Live Demo
                    </a>
                    <a
                      href={project.source}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex flex-1 items-center justify-center rounded-xl border border-white/15 px-4 py-2.5 text-center text-sm font-semibold text-zinc-200 transition hover:border-brand-bright/40 hover:bg-white/5"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="relative hidden overflow-hidden rounded-3xl border border-white/20 bg-white/[0.04] shadow-[0_20px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl md:block">
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.08] via-transparent to-transparent" />
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.article
                key={activeProject.title}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.55, ease: [0.22, 0.61, 0.36, 1] }}
                className="grid md:grid-cols-2"
              >
                <div className="relative h-[260px] overflow-hidden sm:h-[320px] md:h-[420px]">
                  <img src={activeProject.image} alt={activeProject.title} className="h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent md:bg-gradient-to-r" />
                  <div className="absolute bottom-4 left-4 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs text-zinc-100 backdrop-blur-md">
                    {currentIndex + 1} / {totalSlides}
                  </div>
                </div>

                <div className="flex flex-col bg-white/[0.02] p-6 md:h-[420px] md:p-8">
                  <h3 className="text-2xl font-bold text-white">{activeProject.title}</h3>
                  <p className="mt-3 flex-1 leading-relaxed text-zinc-300">{activeProject.description}</p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {activeProject.tags.map((tag) => (
                      <span key={tag} className="rounded-full border border-white/15 bg-white/[0.04] px-2.5 py-1 text-xs text-zinc-200">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-7 flex flex-wrap gap-3">
                    <a
                      href={activeProject.url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex flex-1 items-center justify-center rounded-xl bg-brand-bright px-4 py-2.5 text-center text-sm font-semibold text-white transition hover:bg-red-500 sm:flex-none"
                    >
                      Live Demo
                    </a>
                    <a
                      href={activeProject.source}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex flex-1 items-center justify-center rounded-xl border border-white/15 px-4 py-2.5 text-center text-sm font-semibold text-zinc-200 transition hover:border-brand-bright/40 hover:bg-white/5 sm:flex-none"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </motion.article>
            </AnimatePresence>

            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous project"
              className="absolute left-3 top-1/2 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-white/10 text-lg text-white backdrop-blur-md transition hover:border-brand-bright/60 hover:bg-white/15 hover:text-brand-bright"
            >
              &#10094;
            </button>
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next project"
              className="absolute right-3 top-1/2 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-white/10 text-lg text-white backdrop-blur-md transition hover:border-brand-bright/60 hover:bg-white/15 hover:text-brand-bright"
            >
              &#10095;
            </button>
          </div>

          <div className="mt-5 hidden items-center justify-center gap-2 md:flex">
            {projects.map((project, index) => (
              <button
                key={project.title}
                type="button"
                onClick={() => handleJump(index)}
                aria-label={`Go to ${project.title}`}
                className={`h-2.5 rounded-full border border-white/20 transition ${index === currentIndex ? 'w-8 bg-brand-bright' : 'w-2.5 bg-white/20 hover:bg-white/40'}`}
              />
            ))}
          </div>
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
