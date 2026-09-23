import { motion } from 'framer-motion'
import { Bookmark, BookmarkCheck } from 'lucide-react'
import { useApp } from '../../context/AppContext'
import { formatCurrency } from '../../utils/format'
import PriceChange from '../ui/PriceChange'
import Sparkline from '../ui/Sparkline'
import TickerLogo from '../ui/TickerLogo'

export default function StockCard({ stock }) {
  const { isWatched, toggleWatchlist, openTrade } = useApp()
  const watched = isWatched(stock.symbol)
  const up = stock.changePercent >= 0

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{ y: -6, borderColor: 'rgba(62,240,197,0.35)' }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="group flex h-full flex-col rounded-3xl border border-line bg-panel p-5"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex min-w-0 items-center gap-3">
          <TickerLogo symbol={stock.symbol} color={stock.color} />
          <div className="min-w-0">
            <h3 className="font-semibold text-white">{stock.symbol}</h3>
            <p className="truncate text-xs text-soft">{stock.name}</p>
          </div>
        </div>
        <button
          type="button"
          onClick={() => toggleWatchlist(stock.symbol)}
          className={`grid h-9 w-9 shrink-0 place-items-center rounded-full border transition ${
            watched ? 'border-gold/40 text-gold' : 'border-line text-soft hover:text-white'
          }`}
          aria-label={watched ? 'Remove from watchlist' : 'Add to watchlist'}
        >
          {watched ? <BookmarkCheck size={16} /> : <Bookmark size={16} />}
        </button>
      </div>

      <div className="mt-5 flex items-end justify-between gap-3">
        <div>
          <p className="font-mono text-2xl font-semibold text-white">{formatCurrency(stock.price)}</p>
          <PriceChange percent={stock.changePercent} />
        </div>
        <Sparkline data={stock.spark} up={up} />
      </div>

      <p className="mt-4 text-xs uppercase tracking-wider text-soft">{stock.sector}</p>

      <div className="mt-auto flex gap-2 pt-5">
        <button
          type="button"
          onClick={() => openTrade(stock.symbol, 'buy')}
          className="flex-1 rounded-full bg-gain/15 py-2 text-sm font-semibold text-gain transition hover:bg-gain hover:text-ink"
        >
          Buy
        </button>
        <button
          type="button"
          onClick={() => openTrade(stock.symbol, 'sell')}
          className="flex-1 rounded-full bg-loss/15 py-2 text-sm font-semibold text-loss transition hover:bg-loss hover:text-white"
        >
          Sell
        </button>
      </div>
    </motion.article>
  )
}
