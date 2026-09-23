import { Link } from 'react-router-dom'
import { useApp } from '../../context/AppContext'
import { formatCurrency, formatPercent } from '../../utils/format'
import PriceChange from '../ui/PriceChange'
import SectionHeading from '../ui/SectionHeading'
import TickerLogo from '../ui/TickerLogo'
import PerformanceChart from './PerformanceChart'

export default function PortfolioDashboard({ preview = false }) {
  const { holdings, cash, portfolioValue, totalPnl, todayChange, invested, openTrade } = useApp()
  const list = preview ? holdings.slice(0, 4) : holdings
  const todayPct = portfolioValue ? (todayChange / (portfolioValue - todayChange || 1)) * 100 : 0
  const pnlPct = invested ? (totalPnl / invested) * 100 : 0

  return (
    <section className="shell py-14 lg:py-16">
      <SectionHeading
        eyebrow="Portfolio"
        title="Your investment dashboard"
        copy="Total value, profit and loss, and today’s move — with a twelve-month performance curve."
        to={preview ? '/portfolio' : undefined}
        linkLabel="Open dashboard"
      />

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {[
          { label: 'Total portfolio value', value: formatCurrency(portfolioValue), sub: `${formatCurrency(cash)} cash` },
          { label: 'Profit / Loss', value: formatCurrency(totalPnl), sub: formatPercent(pnlPct), tone: totalPnl >= 0 },
          { label: "Today's change", value: formatCurrency(todayChange), sub: formatPercent(todayPct), tone: todayChange >= 0 },
          { label: 'Holdings', value: String(holdings.length), sub: 'Active positions' },
        ].map((card) => (
          <div key={card.label} className="rounded-3xl border border-line bg-panel p-5">
            <p className="text-xs uppercase tracking-[0.16em] text-soft">{card.label}</p>
            <p
              className={`mt-3 font-display text-2xl font-bold ${
                card.tone === undefined ? 'text-white' : card.tone ? 'text-gain' : 'text-loss'
              }`}
            >
              {card.value}
            </p>
            <p className="mt-1 text-sm text-soft">{card.sub}</p>
          </div>
        ))}
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-5">
        <div className="rounded-3xl border border-line bg-panel p-5 lg:col-span-3">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="font-display text-lg font-bold text-white">Performance</h3>
            <span className="text-xs text-soft">Last 12 months</span>
          </div>
          <PerformanceChart />
        </div>

        <div className="rounded-3xl border border-line bg-panel p-5 lg:col-span-2">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="font-display text-lg font-bold text-white">Holdings</h3>
            {preview && (
              <Link to="/portfolio" className="text-xs font-semibold text-mint">
                See all
              </Link>
            )}
          </div>
          <div className="space-y-3">
            {list.length === 0 && <p className="text-sm text-soft">No positions yet. Buy a stock to get started.</p>}
            {list.map((h) => (
              <div key={h.symbol} className="flex items-center gap-3 rounded-2xl bg-void/50 p-3">
                <TickerLogo symbol={h.symbol} color={h.color} size="sm" />
                <div className="min-w-0 flex-1">
                  <p className="font-semibold text-white">{h.symbol}</p>
                  <p className="text-xs text-soft">{h.qty} sh · avg {formatCurrency(h.avgCost)}</p>
                </div>
                <div className="text-right">
                  <p className="font-mono text-sm text-white">{formatCurrency(h.marketValue)}</p>
                  <PriceChange percent={h.pnlPct} compact />
                </div>
              </div>
            ))}
          </div>
          {!preview && list.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {list.slice(0, 3).map((h) => (
                <button
                  key={`${h.symbol}-trade`}
                  type="button"
                  onClick={() => openTrade(h.symbol, 'buy')}
                  className="rounded-full border border-line px-3 py-1 text-xs text-soft hover:text-white"
                >
                  Trade {h.symbol}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
