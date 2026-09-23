import { useMemo, useState } from 'react'
import StockCard from '../components/stocks/StockCard'
import StockTable from '../components/stocks/StockTable'
import { sectors, stocks } from '../data/marketData'

export default function Stocks() {
  const [query, setQuery] = useState('')
  const [sector, setSector] = useState('All')
  const [view, setView] = useState('cards')

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return stocks.filter((s) => {
      const matchQ = !q || s.symbol.toLowerCase().includes(q) || s.name.toLowerCase().includes(q)
      const matchS = sector === 'All' || s.sector === sector
      return matchQ && matchS
    })
  }, [query, sector])

  return (
    <div className="shell py-12">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-mint">Equities</p>
      <h1 className="mt-2 font-display text-4xl font-bold text-white">Stock market</h1>
      <p className="mt-3 max-w-2xl text-soft">
        Search the universe, filter by sector, and trade from the card or the tape.
      </p>

      <div className="mt-8 flex flex-col gap-3 lg:flex-row lg:items-center">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search symbol or company…"
          className="w-full rounded-2xl border border-line bg-panel px-4 py-3 text-sm text-white outline-none focus:border-mint/50 lg:max-w-sm"
        />
        <div className="flex flex-1 flex-wrap gap-2">
          {sectors.map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => setSector(s)}
              className={`rounded-full px-3 py-1.5 text-xs font-semibold ${
                sector === s ? 'bg-mint text-ink' : 'border border-line text-soft hover:text-white'
              }`}
            >
              {s}
            </button>
          ))}
        </div>
        <div className="flex rounded-2xl border border-line p-1">
          {['cards', 'table'].map((v) => (
            <button
              key={v}
              type="button"
              onClick={() => setView(v)}
              className={`rounded-xl px-3 py-1.5 text-xs font-semibold capitalize ${
                view === v ? 'bg-panel text-white' : 'text-soft'
              }`}
            >
              {v}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-8">
        {filtered.length === 0 ? (
          <p className="rounded-3xl border border-dashed border-line py-16 text-center text-soft">No stocks match that filter.</p>
        ) : view === 'cards' ? (
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {filtered.map((s) => (
              <StockCard key={s.symbol} stock={s} />
            ))}
          </div>
        ) : (
          <StockTable rows={filtered} />
        )}
      </div>
    </div>
  )
}
