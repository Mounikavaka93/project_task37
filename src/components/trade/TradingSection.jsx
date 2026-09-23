import { useState } from 'react'
import { useApp } from '../../context/AppContext'
import { stocks } from '../../data/marketData'
import { formatCurrency } from '../../utils/format'
import SectionHeading from '../ui/SectionHeading'
import TickerLogo from '../ui/TickerLogo'

export default function TradingSection() {
  const { executeTrade, cash, holdings } = useApp()
  const [symbol, setSymbol] = useState('AAPL')
  const [side, setSide] = useState('buy')
  const [qty, setQty] = useState(5)
  const [confirming, setConfirming] = useState(false)
  const stock = stocks.find((s) => s.symbol === symbol)
  const price = stock?.price ?? 0
  const notional = Number(qty || 0) * price
  const held = holdings.find((h) => h.symbol === symbol)?.qty ?? 0

  const submit = (e) => {
    e.preventDefault()
    if (!confirming) {
      setConfirming(true)
      return
    }
    const ok = executeTrade({ symbol, side, qty, price })
    if (ok) setConfirming(false)
  }

  return (
    <section className="shell py-10 lg:py-12">
      <SectionHeading
        eyebrow="Trade desk"
        title="Buy and sell with a clear ticket"
        copy="Set quantity, review the notional, and confirm. Demo fills update your portfolio instantly."
      />
      <div className="grid gap-6 lg:grid-cols-2">
        <form onSubmit={submit} className="rounded-3xl border border-line bg-panel p-5 sm:p-7">
          <div className="grid grid-cols-2 gap-2 rounded-2xl bg-void/60 p-1">
            {['buy', 'sell'].map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => {
                  setSide(s)
                  setConfirming(false)
                }}
                className={`rounded-xl py-2.5 text-sm font-semibold capitalize ${
                  side === s ? (s === 'buy' ? 'bg-gain text-ink' : 'bg-loss text-white') : 'text-soft'
                }`}
              >
                {s}
              </button>
            ))}
          </div>

          <label className="mt-5 block text-sm text-soft">
            Instrument
            <select
              value={symbol}
              onChange={(e) => {
                setSymbol(e.target.value)
                setConfirming(false)
              }}
              className="mt-1.5 w-full rounded-2xl border border-line bg-ink px-4 py-3 text-white outline-none"
            >
              {stocks.map((s) => (
                <option key={s.symbol} value={s.symbol}>
                  {s.symbol} — {s.name}
                </option>
              ))}
            </select>
          </label>

          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <label className="block text-sm text-soft">
              Quantity
              <input
                type="number"
                min="1"
                value={qty}
                onChange={(e) => {
                  setQty(e.target.value)
                  setConfirming(false)
                }}
                className="mt-1.5 w-full rounded-2xl border border-line bg-ink px-4 py-3 font-mono text-white outline-none"
              />
            </label>
            <label className="block text-sm text-soft">
              Price
              <input
                type="text"
                readOnly
                value={formatCurrency(price)}
                className="mt-1.5 w-full rounded-2xl border border-line bg-ink px-4 py-3 font-mono text-white"
              />
            </label>
          </div>

          {confirming && (
            <p className="mt-4 rounded-2xl bg-gold/10 px-4 py-3 text-sm text-gold">
              Confirm this {side} of {qty} {symbol} for {formatCurrency(notional)}.
            </p>
          )}

          <button
            type="submit"
            className={`mt-5 w-full rounded-full py-3 text-sm font-semibold ${
              side === 'buy' ? 'bg-gain text-ink' : 'bg-loss text-white'
            }`}
          >
            {confirming ? 'Confirm order' : `Review ${side} order`}
          </button>
        </form>

        <div className="rounded-3xl border border-line bg-ink p-5 sm:p-7">
          <div className="flex items-center gap-3">
            <TickerLogo symbol={stock.symbol} color={stock.color} size="lg" />
            <div>
              <p className="font-display text-xl font-bold text-white">{stock.name}</p>
              <p className="text-sm text-soft">{stock.sector} · last {formatCurrency(stock.price)}</p>
            </div>
          </div>
          <div className="mt-6 space-y-3 text-sm">
            {[
              ['Order side', side.toUpperCase()],
              ['Quantity', String(qty || 0)],
              ['Limit / last', formatCurrency(price)],
              ['Estimated total', formatCurrency(notional)],
              ['Buying power', formatCurrency(cash)],
              ['Shares held', String(held)],
              ['Day range', `${formatCurrency(stock.low)} – ${formatCurrency(stock.high)}`],
            ].map(([k, v]) => (
              <div key={k} className="flex items-center justify-between border-b border-white/5 py-2">
                <span className="text-soft">{k}</span>
                <span className="font-mono text-white">{v}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
