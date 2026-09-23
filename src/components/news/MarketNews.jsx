import { motion } from 'framer-motion'
import { Calendar, Tag } from 'lucide-react'
import { useApp } from '../../context/AppContext'
import { newsArticles } from '../../data/marketData'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'

export default function MarketNews({ limit }) {
  const { setNewsItem } = useApp()
  const items = limit ? newsArticles.slice(0, limit) : newsArticles

  return (
    <section className="shell py-14 lg:py-16">
      <Reveal>
        <SectionHeading
          eyebrow="Intelligence"
          title="Latest market news"
          copy="A concise desk brief — tap Read more for the full note."
        />
      </Reveal>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {items.map((n, i) => (
          <motion.article
            key={n.id}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: i * 0.06, duration: 0.5 }}
            whileHover={{ y: -6, borderColor: 'rgba(62,240,197,0.35)' }}
            className="flex flex-col overflow-hidden rounded-3xl border border-line bg-panel"
          >
            <div className={`h-28 bg-gradient-to-br ${n.accent}`} />
            <div className="flex flex-1 flex-col p-5">
              <div className="flex flex-wrap items-center gap-3 text-xs text-soft">
                <span className="inline-flex items-center gap-1">
                  <Tag size={12} className="text-mint" /> {n.category}
                </span>
                <span className="inline-flex items-center gap-1">
                  <Calendar size={12} /> {n.date}
                </span>
              </div>
              <h3 className="mt-3 font-display text-lg font-bold leading-snug text-white">{n.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-soft">{n.excerpt}</p>
              <button
                type="button"
                onClick={() => setNewsItem(n)}
                className="mt-5 self-start text-sm font-semibold text-mint transition hover:text-white"
              >
                Read more →
              </button>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
