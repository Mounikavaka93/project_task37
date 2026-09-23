import PortfolioDashboard from '../components/portfolio/PortfolioDashboard'
import { useApp } from '../context/AppContext'
import { formatCurrency } from '../utils/format'
import PriceChange from '../components/ui/PriceChange'
import TickerLogo from '../components/ui/TickerLogo'

export default function Portfolio() {
  const { holdings, openTrade } = useApp()

  return (
    <div>
      <header className="border-b border-white/5 bg-ink">
        <div className="shell py-12">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-mint">Portfolio</p>
          <h1 className="mt-2 font-display text-4xl font-bold text-white">Holdings & performance</h1>
          <p className="mt-3 max-w-2xl text-soft">
            Paper positions with live-style marks, cost basis, and a twelve-month equity curve.
          </p>
        </div>
      </header>
      <PortfolioDashboard />
      <section className="shell pb-16">
        <h2 className="mb-4 font-display text-2xl font-bold text-white">Position detail</h2>
        <div className="overflow-x-auto rounded-3xl border border-line">
          <table className="min-w-[800px] w-full text-left">
            <thead className="bg-ink text-xs uppercase tracking-wider text-soft">
              <tr>
                <th className="px-4 py-3 font-medium">Name</th>
                <th className="px-4 py-3 font-medium">Qty</th>
                <th className="px-4 py-3 font-medium">Avg cost</th>
                <th className="px-4 py-3 font-medium">Last</th>
                <th className="px-4 py-3 font-medium">Market value</th>
                <th className="px-4 py-3 font-medium">P/L</th>
                <th className="px-4 py-3 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {holdings.map((h) => (
                <tr key={h.symbol} className="border-t border-line bg-panel/30">
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-3">
                      <TickerLogo symbol={h.symbol} color={h.color} size="sm" />
                      <div>
                        <p className="font-semibold text-white">{h.symbol}</p>
                        <p className="text-xs text-soft">{h.name}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3 font-mono text-sm text-white">{h.qty}</td>
                  <td className="px-4 py-3 font-mono text-sm text-soft">{formatCurrency(h.avgCost)}</td>
                  <td className="px-4 py-3 font-mono text-sm text-white">{formatCurrency(h.price)}</td>
                  <td className="px-4 py-3 font-mono text-sm text-white">{formatCurrency(h.marketValue)}</td>
                  <td className="px-4 py-3">
                    <PriceChange percent={h.pnlPct} />
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex justify-end gap-2">
                      <button
                        type="button"
                        onClick={() => openTrade(h.symbol, 'buy')}
                        className="rounded-full bg-gain/15 px-3 py-1 text-xs font-semibold text-gain"
                      >
                        Buy
                      </button>
                      <button
                        type="button"
                        onClick={() => openTrade(h.symbol, 'sell')}
                        className="rounded-full bg-loss/15 px-3 py-1 text-xs font-semibold text-loss"
                      >
                        Sell
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}
