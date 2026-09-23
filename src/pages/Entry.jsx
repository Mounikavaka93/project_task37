import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLenis } from '../components/layout/SmoothScroll'
import { stocks } from '../data/marketData'
import { formatCurrency, formatPercent } from '../utils/format'
import Logo from '../components/ui/Logo'

const CANDLES = [
  { body: 38, wick: 18, up: true },
  { body: 22, wick: 12, up: false },
  { body: 46, wick: 16, up: true },
  { body: 28, wick: 20, up: true },
  { body: 18, wick: 10, up: false },
  { body: 52, wick: 14, up: true },
  { body: 34, wick: 22, up: false },
  { body: 41, wick: 12, up: true },
  { body: 16, wick: 8, up: false },
  { body: 48, wick: 18, up: true },
  { body: 26, wick: 14, up: false },
  { body: 58, wick: 16, up: true },
  { body: 30, wick: 10, up: true },
  { body: 20, wick: 16, up: false },
  { body: 44, wick: 12, up: true },
  { body: 36, wick: 20, up: false },
  { body: 62, wick: 14, up: true },
  { body: 24, wick: 9, up: false },
  { body: 40, wick: 15, up: true },
  { body: 33, wick: 11, up: true },
  { body: 19, wick: 13, up: false },
  { body: 50, wick: 17, up: true },
  { body: 29, wick: 10, up: false },
  { body: 55, wick: 14, up: true },
]

const BOOK = [
  { px: '228.52', sz: '1,240', side: 'ask' },
  { px: '228.49', sz: '860', side: 'ask' },
  { px: '228.47', sz: '2,110', side: 'ask' },
  { px: '228.44', sz: '640', side: 'bid' },
  { px: '228.41', sz: '1,580', side: 'bid' },
  { px: '228.38', sz: '920', side: 'bid' },
]

export default function Entry() {
  const navigate = useNavigate()
  const lenis = useLenis()
  const [phase, setPhase] = useState(0)
  const tape = useMemo(() => [...stocks, ...stocks], [])

  useEffect(() => {
    const timers = [
      window.setTimeout(() => setPhase(1), 700),
      window.setTimeout(() => setPhase(2), 1800),
      window.setTimeout(() => setPhase(3), 3200),
    ]
    return () => timers.forEach(clearTimeout)
  }, [])

  useEffect(() => {
    document.documentElement.classList.add('overflow-hidden')
    lenis?.stop()
    return () => {
      document.documentElement.classList.remove('overflow-hidden')
      lenis?.start()
    }
  }, [lenis])

  const enter = () => navigate('/home')

  return (
    <div className="relative h-svh w-full overflow-hidden bg-void text-white">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-60" />
      <div className="orb -left-24 top-10 h-80 w-80 bg-mint/20" />
      <div className="orb -right-16 bottom-10 h-72 w-72 bg-gold/10" />
      <div className="scanline" />

      <div className="absolute inset-x-0 top-0 flex overflow-hidden border-b border-white/5 bg-ink/70 py-2.5">
        <div className="animate-ticker flex w-max gap-8 pr-8">
          {tape.map((s, i) => (
            <div key={`${s.symbol}-${i}`} className="flex items-center gap-2 whitespace-nowrap font-mono text-xs">
              <span className="text-soft">{s.symbol}</span>
              <span>{formatCurrency(s.price)}</span>
              <span className={s.changePercent >= 0 ? 'text-gain' : 'text-loss'}>{formatPercent(s.changePercent)}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute top-14 bottom-14 left-0 hidden w-[200px] border-r border-white/5 bg-ink/40 p-3 lg:block">
        <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-soft">Order book</p>
        <div className="space-y-1.5">
          {BOOK.map((row, i) => (
            <motion.div
              key={row.px}
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + i * 0.08 }}
              className="flex items-center justify-between font-mono text-[11px]"
            >
              <span className={row.side === 'bid' ? 'text-gain' : 'text-loss'}>{row.px}</span>
              <span className="text-soft">{row.sz}</span>
            </motion.div>
          ))}
        </div>
        <div className="mt-4 overflow-hidden rounded-xl border border-line">
          {BOOK.map((row) => (
            <div key={`bar-${row.px}`} className="h-2.5 bg-void">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: row.side === 'bid' ? '72%' : '54%' }}
                transition={{ duration: 1.1, delay: 0.8 }}
                className={`h-full ${row.side === 'bid' ? 'bg-gain/25' : 'bg-loss/25'}`}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="absolute top-14 right-0 bottom-14 hidden w-[220px] overflow-hidden border-l border-white/5 bg-ink/40 p-3 lg:block">
        <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-soft">Time & sales</p>
        <div className="h-full overflow-hidden">
          <div className="animate-tape space-y-2">
            {[...stocks, ...stocks, ...stocks].map((s, i) => (
              <div key={`${s.symbol}-ts-${i}`} className="flex items-center justify-between font-mono text-[11px]">
                <span className="text-soft">{s.symbol}</span>
                <span className={s.changePercent >= 0 ? 'text-gain' : 'text-loss'}>{formatCurrency(s.price)}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 flex h-36 items-end justify-center gap-1.5 px-4 pb-3 sm:gap-2 md:h-40">
        {CANDLES.map((c, i) => (
          <div key={i} className="flex h-full w-2 flex-col items-center justify-end sm:w-2.5">
            <div
              className={`w-px ${c.up ? 'bg-gain/50' : 'bg-loss/50'}`}
              style={{ height: c.wick }}
            />
            <div
              className={`animate-candle w-full rounded-[2px] ${c.up ? 'bg-gain' : 'bg-loss'}`}
              style={{ height: c.body, animationDelay: `${0.15 + i * 0.05}s` }}
            />
            <div
              className={`w-px ${c.up ? 'bg-gain/50' : 'bg-loss/50'}`}
              style={{ height: Math.max(6, c.wick / 2) }}
            />
          </div>
        ))}
      </div>

      {[
        { t: 'AAPL +0.81%', x: '18%', y: '28%', d: '0s' },
        { t: 'NVDA +2.81%', x: '72%', y: '32%', d: '1.2s' },
        { t: 'TSLA +2.78%', x: '24%', y: '58%', d: '2s' },
        { t: 'MSFT +0.48%', x: '68%', y: '62%', d: '0.6s' },
      ].map((p) => (
        <span
          key={p.t}
          className="pointer-events-none absolute hidden font-mono text-xs text-mint/80 sm:block"
          style={{ left: p.x, top: p.y, animation: `price-float 5.5s ease-in-out ${p.d} infinite` }}
        >
          {p.t}
        </span>
      ))}

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-5 text-center">
        <motion.div
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <span className="absolute inset-0 rounded-2xl border border-mint/30" style={{ animation: 'ring-out 2.4s ease-out infinite' }} />
          <Logo className="h-16 w-16 sm:h-[72px] sm:w-[72px]" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35 }}
          className="mt-5 text-[11px] font-semibold uppercase tracking-[0.28em] text-mint"
        >
          {phase < 2 ? 'Connecting to markets' : phase < 3 ? 'Session live' : 'Ready to trade'}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mt-3 font-display text-5xl font-extrabold tracking-tight sm:text-7xl"
        >
          MERIDIAN
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: phase >= 1 ? 1 : 0, y: phase >= 1 ? 0 : 12 }}
          className="mt-3 max-w-md text-sm text-soft sm:text-base"
        >
          Precision execution. Live-style quotes. A trading floor in your browser.
        </motion.p>

        <div className="mt-7 h-1 w-48 overflow-hidden rounded-full bg-line sm:w-64">
          <motion.div
            className="h-full bg-mint"
            initial={{ width: '0%' }}
            animate={{ width: phase >= 3 ? '100%' : phase >= 2 ? '72%' : phase >= 1 ? '38%' : '12%' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: phase >= 2 ? 1 : 0, y: phase >= 2 ? 0 : 10 }}
          className="mt-8 flex flex-col items-center gap-3 sm:flex-row"
        >
          <button
            type="button"
            onClick={enter}
            className="shimmer-btn inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-semibold text-ink"
          >
            Enter platform
            <ArrowRight size={16} />
          </button>
          <button
            type="button"
            onClick={enter}
            className="text-sm text-soft transition hover:text-white"
          >
            Skip intro
          </button>
        </motion.div>
      </div>
    </div>
  )
}
