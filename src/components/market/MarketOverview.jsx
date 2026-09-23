import { motion } from 'framer-motion'
import { indices } from '../../data/marketData'
import { formatNumber } from '../../utils/format'
import PriceChange from '../ui/PriceChange'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'
import Sparkline from '../ui/Sparkline'

export default function MarketOverview({ compact = false }) {
  const list = compact ? indices.slice(0, 4) : indices

  return (
    <section className="shell py-14 lg:py-16">
      <Reveal>
        <SectionHeading
          eyebrow="Market overview"
          title="Major indices at a glance"
          copy="Track the world’s leading benchmarks with live-style prices, session status, and direction."
          to={compact ? '/markets' : undefined}
        />
      </Reveal>
      <div className={`grid gap-4 sm:grid-cols-2 ${compact ? 'xl:grid-cols-4' : 'xl:grid-cols-3'}`}>
        {list.map((idx, i) => {
          const up = idx.changePercent >= 0
          return (
            <motion.article
              key={idx.symbol}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.06, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6, borderColor: 'rgba(62,240,197,0.35)' }}
              className="group rounded-3xl border border-line bg-panel p-5"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="font-mono text-xs text-soft">{idx.symbol}</p>
                  <h3 className="mt-1 font-display text-lg font-bold text-white">{idx.name}</h3>
                  <p className="text-xs text-soft">{idx.region}</p>
                </div>
                <span
                  className={`rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide ${
                    idx.status === 'Open' ? 'bg-gain/15 text-gain' : 'bg-white/10 text-soft'
                  }`}
                >
                  {idx.status}
                </span>
              </div>
              <div className="mt-5 flex items-end justify-between gap-3">
                <div>
                  <p className="font-mono text-2xl font-semibold text-white">{formatNumber(idx.price)}</p>
                  <div className="mt-1">
                    <PriceChange percent={idx.changePercent} value={idx.change} />
                  </div>
                </div>
                <Sparkline data={idx.spark} up={up} className="h-12 w-28 opacity-90 transition group-hover:opacity-100" />
              </div>
            </motion.article>
          )
        })}
      </div>
    </section>
  )
}
