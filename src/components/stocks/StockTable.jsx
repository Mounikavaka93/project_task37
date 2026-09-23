import { Bookmark, BookmarkCheck } from 'lucide-react'
import { useApp } from '../../context/AppContext'
import { formatCompact, formatCurrency } from '../../utils/format'
import PriceChange from '../ui/PriceChange'
import Sparkline from '../ui/Sparkline'
import TickerLogo from '../ui/TickerLogo'

export default function StockTable({ rows }) {
  const { isWatched, toggleWatchlist, openTrade } = useApp()

  return (
    <div className="overflow-x-auto rounded-3xl border border-line">
      <table className="min-w-[780px] w-full text-left">
        <thead className="bg-ink text-xs uppercase tracking-wider text-soft">
          <tr>
            <th className="px-4 py-3 font-medium">Asset</th>
            <th className="px-4 py-3 font-medium">Price</th>
            <th className="px-4 py-3 font-medium">Change</th>
            <th className="px-4 py-3 font-medium">Chart</th>
            <th className="px-4 py-3 font-medium">Volume</th>
            <th className="px-4 py-3 font-medium">Mkt cap</th>
            <th className="px-4 py-3 font-medium text-right">Trade</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((s) => {
            const watched = isWatched(s.symbol)
            return (
              <tr key={s.symbol} className="border-t border-line bg-panel/40 transition hover:bg-panel">
                <td className="px-4 py-3">
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => toggleWatchlist(s.symbol)}
                      className={watched ? 'text-gold' : 'text-soft hover:text-white'}
                      aria-label="Toggle watchlist"
                    >
                      {watched ? <BookmarkCheck size={16} /> : <Bookmark size={16} />}
                    </button>
                    <TickerLogo symbol={s.symbol} color={s.color} size="sm" />
                    <div>
                      <p className="font-semibold text-white">{s.symbol}</p>
                      <p className="text-xs text-soft">{s.name}</p>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-3 font-mono text-sm text-white">{formatCurrency(s.price)}</td>
                <td className="px-4 py-3">
                  <PriceChange percent={s.changePercent} />
                </td>
                <td className="px-4 py-3">
                  <Sparkline data={s.spark} up={s.changePercent >= 0} className="h-8 w-24" />
                </td>
                <td className="px-4 py-3 font-mono text-sm text-soft">{formatCompact(s.volume)}</td>
                <td className="px-4 py-3 font-mono text-sm text-soft">{formatCompact(s.marketCap)}</td>
                <td className="px-4 py-3">
                  <div className="flex justify-end gap-2">
                    <button
                      type="button"
                      onClick={() => openTrade(s.symbol, 'buy')}
                      className="rounded-full bg-gain/15 px-3 py-1 text-xs font-semibold text-gain hover:bg-gain hover:text-ink"
                    >
                      Buy
                    </button>
                    <button
                      type="button"
                      onClick={() => openTrade(s.symbol, 'sell')}
                      className="rounded-full bg-loss/15 px-3 py-1 text-xs font-semibold text-loss hover:bg-loss hover:text-white"
                    >
                      Sell
                    </button>
                  </div>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
