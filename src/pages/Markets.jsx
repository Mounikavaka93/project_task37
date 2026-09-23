import MarketOverview from '../components/market/MarketOverview'
import MarketTicker from '../components/market/MarketTicker'
import { indices } from '../data/marketData'

export default function Markets() {
  return (
    <div>
      <header className="border-b border-white/5 bg-ink">
        <div className="shell py-12">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-mint">Markets</p>
          <h1 className="mt-2 font-display text-4xl font-bold text-white">Global market overview</h1>
          <p className="mt-3 max-w-2xl text-soft">
            Session status, last prices, and direction for the major indices we track. All figures are sample data for
            this demo.
          </p>
        </div>
      </header>
      <MarketTicker />
      <MarketOverview />
      <section className="shell pb-16">
        <div className="overflow-x-auto rounded-3xl border border-line">
          <table className="min-w-[640px] w-full text-left">
            <thead className="bg-ink text-xs uppercase tracking-wider text-soft">
              <tr>
                <th className="px-4 py-3 font-medium">Index</th>
                <th className="px-4 py-3 font-medium">Region</th>
                <th className="px-4 py-3 font-medium">Last</th>
                <th className="px-4 py-3 font-medium">Change</th>
                <th className="px-4 py-3 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {indices.map((idx) => (
                <tr key={idx.symbol} className="border-t border-line bg-panel/30">
                  <td className="px-4 py-3">
                    <p className="font-semibold text-white">{idx.name}</p>
                    <p className="font-mono text-xs text-soft">{idx.symbol}</p>
                  </td>
                  <td className="px-4 py-3 text-sm text-soft">{idx.region}</td>
                  <td className="px-4 py-3 font-mono text-white">{idx.price.toLocaleString()}</td>
                  <td className={`px-4 py-3 font-mono text-sm ${idx.changePercent >= 0 ? 'text-gain' : 'text-loss'}`}>
                    {idx.changePercent >= 0 ? '+' : ''}
                    {idx.changePercent.toFixed(2)}%
                  </td>
                  <td className="px-4 py-3 text-sm text-soft">{idx.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}
