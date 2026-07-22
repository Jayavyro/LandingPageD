import { useEffect, useState, type CSSProperties } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import {
  HERO_CASH_CARD,
  HERO_CONTINUUM_CAPTION,
  HERO_CONTINUUM_NODES,
  HERO_MOTION_CARD,
  HERO_PRINCIPAL_CARD,
  HERO_PULSE_CARD,
} from '../../constants/heroOperating'

const EASE = [0.22, 1, 0.36, 1] as const

const glassCard =
  'rounded-2xl border border-white/10 bg-white/[0.07] p-3.5 shadow-[0_16px_40px_-24px_rgba(0,0,0,0.9)] backdrop-blur-xl transition-opacity duration-200'

function HeroOperatingStage() {
  const prefersReducedMotion = useReducedMotion()
  const [activeRow, setActiveRow] = useState(0)
  const [hovered, setHovered] = useState<string | null>(null)

  useEffect(() => {
    if (prefersReducedMotion) return
    const id = window.setInterval(() => {
      setActiveRow((prev) => (prev + 1) % HERO_MOTION_CARD.rows.length)
    }, 2800)
    return () => window.clearInterval(id)
  }, [prefersReducedMotion])

  const cardMotion = (delay: number) =>
    prefersReducedMotion
      ? {}
      : {
          initial: { opacity: 0, y: 14 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.5, delay, ease: EASE },
        }

  const dim = (id: string) =>
    hovered && hovered !== id ? 'opacity-55' : 'opacity-100'

  return (
    <div
      className="relative mx-auto w-full max-w-[34rem] lg:[perspective:1400px]"
      aria-hidden="true"
    >
      <div className="pointer-events-none absolute -inset-8 -z-10">
        <div className="absolute top-1/4 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-blue-500/25 blur-3xl" />
        <div className="absolute right-0 bottom-8 h-40 w-40 rounded-full bg-amber-400/15 blur-3xl" />
      </div>

      <motion.div
        className="relative min-h-[22rem] origin-center overflow-visible rounded-[1.75rem] border border-white/10 bg-[#0a0f1c]/[0.92] p-4 shadow-[0_40px_120px_-40px_rgba(0,0,0,0.85)] backdrop-blur-2xl sm:min-h-[26rem] lg:min-h-[28rem] lg:[transform:rotateX(6deg)_rotateY(-8deg)]"
        initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: EASE }}
      >
        <div
          className="pointer-events-none absolute inset-0 rounded-[1.75rem] opacity-40"
          style={
            {
              backgroundImage:
                'linear-gradient(rgb(255 255 255 / 0.04) 1px, transparent 1px), linear-gradient(90deg, rgb(255 255 255 / 0.04) 1px, transparent 1px)',
              backgroundSize: '2.25rem 2.25rem',
              maskImage:
                'radial-gradient(ellipse 70% 60% at 50% 40%, #000 20%, transparent 75%)',
            } as CSSProperties
          }
        />

        <div className="relative z-10 px-1 pt-5 pb-4 sm:px-3 sm:pt-6 lg:pb-28">
          <p className="mb-5 text-center font-mono text-[0.625rem] font-medium tracking-[0.16em] text-white/45 uppercase">
            {HERO_CONTINUUM_CAPTION}
          </p>

          <div className="relative mx-auto flex max-w-md items-start justify-between gap-1">
            <svg
              className="pointer-events-none absolute top-[0.95rem] left-[8%] h-2 w-[84%] overflow-visible"
              viewBox="0 0 100 8"
              preserveAspectRatio="none"
            >
              <motion.path
                d="M0 4 H100"
                fill="none"
                stroke="rgba(59,130,246,0.35)"
                strokeWidth="1.5"
                initial={prefersReducedMotion ? false : { pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.1, delay: 0.25, ease: EASE }}
              />
              {!prefersReducedMotion ? (
                <>
                  <motion.circle
                    r="2.2"
                    fill="#60a5fa"
                    animate={{ cx: [0, 100] }}
                    transition={{ duration: 6, repeat: Infinity, ease: 'linear', delay: 1 }}
                    cy="4"
                  />
                  <motion.circle
                    r="1.6"
                    fill="#fbbf24"
                    animate={{ cx: [0, 100] }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: 'linear',
                      delay: 3.2,
                    }}
                    cy="4"
                  />
                </>
              ) : null}
            </svg>

            {HERO_CONTINUUM_NODES.map((node, index) => (
              <motion.div
                key={node.id}
                className="relative z-10 flex w-14 flex-col items-center gap-2 sm:w-16"
                initial={prefersReducedMotion ? false : { opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.08, ease: EASE }}
              >
                <motion.span
                  className="flex h-[1.35rem] w-[1.35rem] items-center justify-center rounded-full border border-blue-400/50 bg-blue-500/20 shadow-[0_0_16px_rgba(59,130,246,0.45)]"
                  animate={
                    prefersReducedMotion
                      ? undefined
                      : {
                          boxShadow: [
                            '0 0 12px rgba(59,130,246,0.35)',
                            '0 0 20px rgba(59,130,246,0.65)',
                            '0 0 12px rgba(59,130,246,0.35)',
                          ],
                        }
                  }
                  transition={{ duration: 3.6, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-300" />
                </motion.span>
                <span className="text-[0.6875rem] font-semibold tracking-[-0.02em] text-white/90">
                  {node.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="relative z-20 mt-2 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:mt-0 lg:contents">
          <motion.div
            className={`${glassCard} ${dim('pulse')} lg:absolute lg:top-5 lg:-left-3 lg:w-[12.5rem]`}
            onMouseEnter={() => setHovered('pulse')}
            onMouseLeave={() => setHovered(null)}
            {...cardMotion(0.35)}
            whileHover={prefersReducedMotion ? undefined : { y: -4 }}
          >
            <p className="font-mono text-[0.5625rem] font-semibold tracking-[0.14em] text-blue-300/90">
              {HERO_PULSE_CARD.eyebrow}
            </p>
            <div className="mt-2 flex items-end gap-2">
              <p className="text-[1.75rem] leading-none font-semibold tracking-[-0.04em] text-white">
                {HERO_PULSE_CARD.value}
              </p>
              <div className="mb-1 h-1.5 flex-1 overflow-hidden rounded-full bg-white/10">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-blue-400 to-blue-500"
                  initial={prefersReducedMotion ? false : { width: '0%' }}
                  animate={{ width: '68%' }}
                  transition={{ duration: 1.1, delay: 0.7, ease: EASE }}
                />
              </div>
            </div>
            <p className="mt-1.5 text-[0.75rem] font-medium text-white/75">
              {HERO_PULSE_CARD.label}
            </p>
            <p className="mt-2 text-[0.6875rem] leading-snug text-white/45">
              {HERO_PULSE_CARD.foot}
            </p>
          </motion.div>

          <motion.div
            className={`${glassCard} ${dim('motion')} lg:absolute lg:top-24 lg:-right-2 lg:w-[13.5rem]`}
            onMouseEnter={() => setHovered('motion')}
            onMouseLeave={() => setHovered(null)}
            {...cardMotion(0.42)}
            whileHover={prefersReducedMotion ? undefined : { y: -4 }}
          >
            <p className="font-mono text-[0.5625rem] font-semibold tracking-[0.14em] text-blue-300/90">
              {HERO_MOTION_CARD.eyebrow}
            </p>
            <ul className="mt-2.5 space-y-2">
              {HERO_MOTION_CARD.rows.map((row, index) => {
                const isActive = index === activeRow
                return (
                  <li
                    key={row.id}
                    className={`flex items-center justify-between gap-2 rounded-lg px-2 py-1.5 transition-colors duration-300 ${
                      isActive ? 'bg-white/10' : 'bg-transparent'
                    }`}
                  >
                    <span
                      className={`truncate text-[0.6875rem] font-medium ${
                        isActive ? 'text-white' : 'text-white/50'
                      }`}
                    >
                      {row.project}
                    </span>
                    <span
                      className={`shrink-0 text-[0.625rem] font-semibold ${
                        isActive ? 'text-emerald-300' : 'text-white/35'
                      }`}
                    >
                      {row.status}
                    </span>
                  </li>
                )
              })}
            </ul>
            <p className="mt-2.5 text-[0.6875rem] leading-snug text-white/45">
              {HERO_MOTION_CARD.foot}
            </p>
          </motion.div>

          <motion.div
            className={`${glassCard} ${dim('cash')} lg:absolute lg:bottom-28 lg:left-4 lg:w-[13rem]`}
            onMouseEnter={() => setHovered('cash')}
            onMouseLeave={() => setHovered(null)}
            {...cardMotion(0.5)}
            whileHover={prefersReducedMotion ? undefined : { y: -4 }}
          >
            <p className="font-mono text-[0.5625rem] font-semibold tracking-[0.14em] text-amber-300/90">
              {HERO_CASH_CARD.eyebrow}
            </p>
            <p className="mt-2 text-[1.05rem] font-semibold tracking-[-0.03em] text-white">
              {HERO_CASH_CARD.value}
            </p>
            <p className="mt-1 text-[0.75rem] font-medium text-white/70">
              {HERO_CASH_CARD.label}
            </p>
            <p className="mt-2 text-[0.6875rem] leading-snug text-amber-200/70">
              {HERO_CASH_CARD.foot}
            </p>
          </motion.div>

          <motion.div
            className={`${glassCard} ${dim('principal')} lg:absolute lg:right-2 lg:-bottom-2 lg:w-[14.5rem]`}
            onMouseEnter={() => setHovered('principal')}
            onMouseLeave={() => setHovered(null)}
            {...cardMotion(0.58)}
            whileHover={prefersReducedMotion ? undefined : { y: -4 }}
          >
            <p className="font-mono text-[0.5625rem] font-semibold tracking-[0.14em] text-blue-300/90">
              {HERO_PRINCIPAL_CARD.eyebrow}
            </p>
            <p className="mt-2 text-[0.95rem] font-semibold tracking-[-0.03em] text-white">
              {HERO_PRINCIPAL_CARD.title}
            </p>
            <p className="mt-1.5 text-[0.6875rem] leading-snug text-white/55">
              {HERO_PRINCIPAL_CARD.body}
            </p>
            <p className="mt-2.5 text-[0.75rem] font-semibold tracking-[-0.02em] text-blue-200">
              {HERO_PRINCIPAL_CARD.micro}
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

export default HeroOperatingStage
