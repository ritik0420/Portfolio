import { motion, useReducedMotion } from 'framer-motion'
import { useCallback, useEffect, useId, useRef, useState } from 'react'
import { profile } from '../data/resume'

const PROMPT = 'ritik@portfolio:~$ '

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms))
}

export default function CodeCard() {
  const reduceMotion = useReducedMotion()
  const instanceId = useId()
  const cancelled = useRef(false)
  const [runId, setRunId] = useState(0)

  const [cmd1, setCmd1] = useState('')
  const [out1, setOut1] = useState('')
  const [cmd2, setCmd2] = useState('')
  const [codeLinesVisible, setCodeLinesVisible] = useState(0)

  const cmd1Full = `${PROMPT}echo $USER`
  const cmd2Full = `${PROMPT}cat developer.js`

  const replay = useCallback(() => {
    cancelled.current = true
    setCmd1('')
    setOut1('')
    setCmd2('')
    setCodeLinesVisible(0)
    setRunId((n) => n + 1)
  }, [])

  useEffect(() => {
    cancelled.current = false
    const TYPE = reduceMotion ? 0 : 22
    const TYPE_FAST = reduceMotion ? 0 : 14
    const BETWEEN = reduceMotion ? 0 : 280

    async function typeString(setter, text) {
      if (reduceMotion) {
        setter(text)
        return
      }
      for (let i = 1; i <= text.length; i++) {
        if (cancelled.current) return
        setter(text.slice(0, i))
        await sleep(TYPE)
      }
    }

    async function run() {
      await typeString(setCmd1, `${PROMPT}echo $USER`)
      if (cancelled.current) return
      await sleep(BETWEEN)
      await typeString(setOut1, profile.name)
      if (cancelled.current) return
      await sleep(BETWEEN)
      await typeString(setCmd2, `${PROMPT}cat developer.js`)
      if (cancelled.current) return
      await sleep(reduceMotion ? 0 : 320)

      const totalCodeLines = 9
      if (reduceMotion) {
        setCodeLinesVisible(totalCodeLines)
      } else {
        for (let i = 1; i <= totalCodeLines; i++) {
          if (cancelled.current) return
          setCodeLinesVisible(i)
          await sleep(TYPE_FAST)
        }
      }
    }

    run()
    return () => {
      cancelled.current = true
    }
  }, [runId, reduceMotion])

  return (
    <motion.div
      initial={{ opacity: 0, y: 28, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.65, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
      whileHover={
        reduceMotion
          ? undefined
          : {
              y: -6,
              transition: { type: 'spring', stiffness: 400, damping: 28 },
            }
      }
      className="group/card relative"
    >
      <motion.div
        className="pointer-events-none absolute -inset-4 rounded-3xl bg-brand-bright/20 blur-3xl"
        aria-hidden
        animate={
          reduceMotion
            ? undefined
            : {
                opacity: [0.35, 0.55, 0.35],
                scale: [1, 1.03, 1],
              }
        }
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div
        className="relative overflow-hidden rounded-2xl border border-red-500/25 bg-dark-100/90 shadow-glow backdrop-blur-xl transition-[box-shadow] duration-300 group-hover/card:border-red-500/40 group-hover/card:shadow-[0_0_50px_-8px_rgba(239,68,68,0.45)]"
        role="region"
        aria-label="Interactive terminal preview"
      >
        <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
          <div className="flex gap-2">
            <motion.span
              className="h-3 w-3 cursor-default rounded-full bg-red-500"
              whileHover={reduceMotion ? undefined : { scale: 1.2 }}
              title="Close"
            />
            <motion.span
              className="h-3 w-3 cursor-default rounded-full bg-amber-400"
              whileHover={reduceMotion ? undefined : { scale: 1.2 }}
              title="Minimize"
            />
            <motion.span
              className="h-3 w-3 cursor-default rounded-full bg-emerald-500"
              whileHover={reduceMotion ? undefined : { scale: 1.2 }}
              title="Maximize"
            />
          </div>
          <span className="ml-3 flex-1 truncate text-center font-mono text-xs text-zinc-500 sm:text-left">
            zsh — ritik@portfolio
          </span>
          <motion.button
            type="button"
            onClick={replay}
            className="rounded-md border border-white/10 bg-white/5 px-2 py-1 font-mono text-[10px] font-medium uppercase tracking-wider text-zinc-400 opacity-0 transition hover:border-brand-bright/40 hover:bg-brand-bright/10 hover:text-brand-bright focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-brand-bright/50 group-hover/card:opacity-100"
            whileTap={reduceMotion ? undefined : { scale: 0.96 }}
            aria-label="Replay terminal animation"
          >
            Run
          </motion.button>
        </div>

        <div className="p-5 font-mono text-[12px] leading-relaxed sm:text-[13px]">
          <TerminalLine hover>
            <span className="text-emerald-400/90">{cmd1}</span>
            {cmd1.length > 0 && cmd1.length < cmd1Full.length && <Cursor id={`${instanceId}-c1`} />}
          </TerminalLine>

          {out1.length > 0 && (
            <TerminalLine hover>
              <span className="text-sky-300/95">{out1}</span>
              {(out1.length < profile.name.length ||
                (out1.length === profile.name.length && cmd2.length === 0 && codeLinesVisible === 0)) && (
                <Cursor id={`${instanceId}-o1`} />
              )}
            </TerminalLine>
          )}

          {cmd2.length > 0 && (
            <TerminalLine hover>
              <span className="text-emerald-400/90">{cmd2}</span>
              {codeLinesVisible === 0 &&
                (cmd2.length < cmd2Full.length || cmd2 === cmd2Full) && (
                  <Cursor id={`${instanceId}-c2`} />
                )}
            </TerminalLine>
          )}

          {codeLinesVisible > 0 && (
            <pre className="mt-3 overflow-x-auto border-l-2 border-brand-bright/30 pl-3 transition-colors duration-300 group-hover/card:border-brand-bright/50 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
              <code className="block text-zinc-200">
                {codeLinesVisible >= 1 && (
                  <motion.div
                    initial={reduceMotion ? false : { opacity: 0, x: -6 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.25 }}
                    className="terminal-code-row"
                  >
                    <span className="text-violet-400">const</span> developer = {'{'}
                  </motion.div>
                )}
                {codeLinesVisible >= 2 && (
                  <motion.div
                    initial={reduceMotion ? false : { opacity: 0, x: -6 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="terminal-code-row"
                  >
                    {'  '}
                    <span className="text-sky-300">name</span>:{' '}
                    <span className="text-emerald-400">&apos;{profile.name}&apos;</span>,
                  </motion.div>
                )}
                {codeLinesVisible >= 3 && (
                  <motion.div
                    initial={reduceMotion ? false : { opacity: 0, x: -6 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="terminal-code-row"
                  >
                    {'  '}
                    <span className="text-sky-300">focus</span>:{' '}
                    <span className="text-emerald-400">&apos;Fullstack Mastery&apos;</span>,
                  </motion.div>
                )}
                {codeLinesVisible >= 4 && (
                  <motion.div
                    initial={reduceMotion ? false : { opacity: 0, x: -6 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="terminal-code-row"
                  >
                    {'  '}
                    <span className="text-sky-300">skills</span>: [
                    <span className="text-emerald-400">&apos;React&apos;</span>,{' '}
                    <span className="text-emerald-400">&apos;Node&apos;</span>,{' '}
                    <span className="text-emerald-400">&apos;MongoDB&apos;</span>],
                  </motion.div>
                )}
                {codeLinesVisible >= 5 && (
                  <motion.div
                    initial={reduceMotion ? false : { opacity: 0, x: -6 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="terminal-code-row"
                  >
                    {'  '}
                    <span className="text-sky-300">passionate</span>: <span className="text-amber-300">true</span>,
                  </motion.div>
                )}
                {codeLinesVisible >= 6 && (
                  <motion.div
                    initial={reduceMotion ? false : { opacity: 0, x: -6 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="terminal-code-row"
                  >
                    {'  '}
                    <span className="text-sky-300">motto</span>:{' '}
                    <span className="text-emerald-400">&quot;Build with Purpose&quot;</span>
                  </motion.div>
                )}
                {codeLinesVisible >= 7 && (
                  <motion.div
                    initial={reduceMotion ? false : { opacity: 0, x: -6 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="terminal-code-row"
                  >
                    {'}'};
                  </motion.div>
                )}
                {codeLinesVisible >= 8 && (
                  <motion.div
                    initial={reduceMotion ? false : { opacity: 0, x: -6 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="terminal-code-row"
                  >
                    <span className="text-violet-400">developer</span>
                    <span className="text-zinc-400">.</span>
                    <span className="text-amber-200">showcase</span>
                    <span className="text-zinc-400">()</span>;
                  </motion.div>
                )}
                {codeLinesVisible >= 9 && (
                  <motion.div
                    initial={reduceMotion ? false : { opacity: 0, x: -6 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="terminal-code-row mt-1 flex items-center gap-0.5"
                  >
                    <span className="text-emerald-400/90">{PROMPT}</span>
                    <span className="inline-block h-4 w-2 translate-y-0.5 bg-brand-bright terminal-cursor" aria-hidden />
                  </motion.div>
                )}
              </code>
            </pre>
          )}
        </div>

        {!reduceMotion && (
          <div
            className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover/card:opacity-100 terminal-card-shine"
            aria-hidden
          />
        )}
      </div>
    </motion.div>
  )
}

function TerminalLine({ children, hover }) {
  return (
    <div
      className={
        hover
          ? '-mx-1 rounded px-1 py-0.5 transition-colors duration-200 hover:bg-white/[0.06]'
          : ''
      }
    >
      {children}
    </div>
  )
}

function Cursor({ id }) {
  return (
    <span
      id={id}
      className="ml-px inline-block h-4 w-2 translate-y-0.5 bg-brand-bright align-middle terminal-cursor"
      aria-hidden
    />
  )
}
