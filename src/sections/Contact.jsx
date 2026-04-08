import { useState } from 'react'
import { motion } from 'framer-motion'
import { profile } from '../data/resume'

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = `Portfolio inquiry from ${name || 'visitor'}`
    const body = message || ''
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
      `From: ${name}\nEmail: ${email}\n\n${body}`,
    )}`
  }

  return (
    <section id="contact" className="scroll-mt-24 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl"
        >
          Let&apos;s <span className="text-gradient-red">Connect</span>
        </motion.h2>
        <p className="mx-auto mt-4 max-w-xl text-center text-zinc-400">
          Have a project in mind or want to say hello? I&apos;m open to discussing opportunities and creative ideas.
        </p>

        <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-strong glow-ring rounded-3xl p-8 md:p-10"
          >
            <h3 className="text-lg font-semibold text-white">Send a Message</h3>
            <p className="mt-1 text-sm text-zinc-500">I&apos;ll get back to you within 24 hours.</p>
            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <div>
                <label htmlFor="name" className="sr-only">
                  Your name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-xl border border-white/10 bg-dark-100/80 px-4 py-3 text-sm text-white placeholder:text-zinc-600 focus:border-brand-bright/50 focus:outline-none focus:ring-1 focus:ring-brand-bright/40"
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">
                  Your email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-xl border border-white/10 bg-dark-100/80 px-4 py-3 text-sm text-white placeholder:text-zinc-600 focus:border-brand-bright/50 focus:outline-none focus:ring-1 focus:ring-brand-bright/40"
                />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Your Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full resize-none rounded-xl border border-white/10 bg-dark-100/80 px-4 py-3 text-sm text-white placeholder:text-zinc-600 focus:border-brand-bright/50 focus:outline-none focus:ring-1 focus:ring-brand-bright/40"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-xl bg-brand-bright py-3.5 text-sm font-semibold text-white shadow-glow transition hover:bg-red-500"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="flex flex-col justify-center space-y-10"
          >
            <div>
              <h3 className="text-lg font-semibold text-white">Direct Contact</h3>
              <ul className="mt-6 space-y-5">
                <li className="flex items-start gap-4">
                  <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-brand-bright/30 bg-brand-bright/10 text-brand-bright">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                    </svg>
                  </span>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">Email</p>
                    <a href={`mailto:${profile.email}`} className="text-white hover:text-brand-bright">
                      {profile.email}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-brand-bright/30 bg-brand-bright/10 text-brand-bright">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.608-1.288.608H17.25c-4.556 0-8.25-3.694-8.25-8.25V9.75c0-.519.232-1.006.608-1.288l1.293-.97c.363-.271.527-.734.417-1.173L7.636 2.45A1.125 1.125 0 0 0 6.545 1.5H5.25A2.25 2.25 0 0 0 3 3.75v.75Z" />
                    </svg>
                  </span>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">Phone</p>
                    <a href={`tel:${profile.phone.replace(/\s/g, '')}`} className="text-white hover:text-brand-bright">
                      {profile.phone}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-brand-bright/30 bg-brand-bright/10 text-brand-bright">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.125-7.5 11.25-7.5 11.25S4.5 17.625 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                    </svg>
                  </span>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">Location</p>
                    <p className="text-white">{profile.location}</p>
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white">Social Presence</h3>
              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  href={profile.social.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-zinc-400 transition hover:border-brand-bright/40 hover:text-brand-bright"
                  aria-label="GitHub"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                </a>
                <a
                  href={profile.social.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-zinc-400 transition hover:border-brand-bright/40 hover:text-brand-bright"
                  aria-label="LinkedIn"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.063 2.063 0 1.139-.925 2.065-2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
