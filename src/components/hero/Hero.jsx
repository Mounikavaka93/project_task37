import { motion } from 'framer-motion'
import { ArrowRight, PlayCircle, ShieldCheck } from 'lucide-react'
import { Link } from 'react-router-dom'
import { stocks } from '../../data/marketData'
import { formatCurrency } from '../../utils/format'
import PriceChange from '../ui/PriceChange'

export default function Hero() {
  const featured = stocks.slice(0, 3)

  return (
    <section className="relative w-full overflow-hidden">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-70" />
      <div className="orb -left-24 top-10 h-72 w-72 bg-mint/15" />
      <div className="orb right-[-80px] top-40 h-80 w-80 bg-gold/10" />
      <div className="orb bottom-0 left-1/3 h-56 w-56 bg-sky-500/10" />
      <div className="scanline" />

      <div className="shell relative grid items-center gap-10 py-14 sm:py-16 lg:grid-cols-2 lg:gap-12 lg:py-20">
        <motion.div
          initial={{ opacity: 0, x: -28 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-mint/20 bg-mint/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-mint">
            <span className="h-1.5 w-1.5 rounded-full bg-mint" style={{ animation: 'pulse-dot 1.6s ease-in-out infinite' }} />
            Live demo markets
          </div>
          <h1 className="font-display text-[2.15rem] leading-[1.1] font-extrabold tracking-tight text-white sm:text-5xl lg:text-[3.4rem]">
            Trade the world’s markets with{' '}
            <span className="bg-gradient-to-r from-mint to-gold bg-clip-text text-transparent">precision</span>
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-soft sm:text-lg">
            A professional workspace for indices, equities, and portfolios. Watch the tape, size your orders, and track
            performance — all in one refined interface.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/signup"
              className="shimmer-btn inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-ink"
            >
              Start investing
              <ArrowRight size={16} />
            </Link>
            <Link
              to="/markets"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-line px-6 py-3 text-sm font-semibold text-white transition hover:border-mint/40 hover:bg-white/5"
            >
              <PlayCircle size={16} className="text-mint" />
              Explore markets
            </Link>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-soft">
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck size={14} className="text-mint" /> Bank-grade security
            </span>
            <span>$0 commission demo</span>
            <span>Real-time style quotes</span>
          </div>
        </motion.div>

        <motion.div
          className="relative"
          initial={{ opacity: 0, x: 28 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.75, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
        >
          <svg className="absolute -top-6 left-6 hidden h-40 w-64 text-mint/40 sm:block" viewBox="0 0 260 140" fill="none">
            <path className="hero-line" d="M8 110 C40 100, 50 40, 90 48 C120 54, 130 92, 160 70 C190 48, 200 20, 250 16" stroke="currentColor" strokeWidth="2" />
          </svg>

          <div className="relative w-full space-y-3">
            <motion.div
              className="glass animate-glow rounded-3xl p-5 shadow-2xl"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <p className="text-xs uppercase tracking-[0.16em] text-soft">Session pulse</p>
              <p className="mt-2 font-display text-3xl font-bold text-white">S&P 500</p>
              <div className="mt-1 flex items-end justify-between">
                <p className="font-mono text-2xl text-white" style={{ animation: 'count-glow 3s ease-in-out infinite' }}>
                  5,728.42
                </p>
                <PriceChange percent={0.32} value={18.26} />
              </div>
              <div className="mt-5 grid grid-cols-3 gap-2 text-center">
                {[
                  ['Open', '5,710.20'],
                  ['High', '5,736.88'],
                  ['Vol', '2.1B'],
                ].map(([k, v]) => (
                  <div key={k} className="rounded-2xl bg-void/50 px-2 py-3">
                    <p className="text-[10px] uppercase tracking-wider text-soft">{k}</p>
                    <p className="mt-1 font-mono text-xs text-white sm:text-sm">{v}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <div className="grid grid-cols-3 gap-2">
              {featured.map((s, i) => (
                <motion.div
                  key={s.symbol}
                  className="glass rounded-2xl p-3"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35 + i * 0.1 }}
                  whileHover={{ y: -4, borderColor: 'rgba(62,240,197,0.35)' }}
                >
                  <p className="font-mono text-xs text-soft">{s.symbol}</p>
                  <p className="mt-1 font-mono text-sm text-white">{formatCurrency(s.price)}</p>
                  <PriceChange percent={s.changePercent} compact />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
