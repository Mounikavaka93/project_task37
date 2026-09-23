import { Plus } from 'lucide-react'
import { useState } from 'react'
import { useApp } from '../../context/AppContext'
import { stocks } from '../../data/marketData'
import SectionHeading from '../ui/SectionHeading'
import StockCard from '../stocks/StockCard'

export default function WatchlistGrid({ preview = false }) {
  const { watchlistStocks, toggleWatchlist, watchlist } = useApp()
  const [pick, setPick] = useState('')
  const available = stocks.filter((s) => !watchlist.includes(s.symbol))
  const shown = preview ? watchlistStocks.slice(0, 4) : watchlistStocks

  const add = () => {
    if (!pick) return
    toggleWatchlist(pick)
    setPick('')
  }

  return (
    <section className="shell py-10 lg:py-12">
      <SectionHeading
        eyebrow="Watchlist"
        title="Names you are tracking"
        copy="Pin the tape that matters. Add or remove names instantly — cards stay live with price and change."
        to={preview ? '/watchlist' : undefined}
      />

      {!preview && (
        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center">
          <select
            value={pick}
            onChange={(e) => setPick(e.target.value)}
            className="w-full rounded-2xl border border-line bg-panel px-4 py-3 text-sm text-white outline-none focus:border-mint/50 sm:max-w-xs"
          >
            <option value="">Add a stock…</option>
            {available.map((s) => (
              <option key={s.symbol} value={s.symbol}>
                {s.symbol} — {s.name}
              </option>
            ))}
          </select>
          <button
            type="button"
            onClick={add}
            className="inline-flex items-center justify-center gap-2 rounded-2xl bg-mint px-5 py-3 text-sm font-semibold text-ink transition hover:bg-white"
          >
            <Plus size={16} />
            Add to watchlist
          </button>
        </div>
      )}

      {shown.length === 0 ? (
        <div className="rounded-3xl border border-dashed border-line px-6 py-16 text-center text-soft">
          Your watchlist is empty. Add a name to start tracking.
        </div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {shown.map((stock) => (
            <StockCard key={stock.symbol} stock={stock} />
          ))}
        </div>
      )}
    </section>
  )
}
