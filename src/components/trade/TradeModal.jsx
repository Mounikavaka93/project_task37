import { useState } from 'react'
import { useApp } from '../../context/AppContext'
import { getStock } from '../../data/marketData'
import { formatCurrency } from '../../utils/format'
import Modal from '../ui/Modal'
import TickerLogo from '../ui/TickerLogo'
import PriceChange from '../ui/PriceChange'

function TradeForm({ stock, initialSide, cash, heldQty, onClose, onSubmit }) {
  const [side, setSide] = useState(initialSide)
  const [qty, setQty] = useState(1)
  const [price, setPrice] = useState(stock.price)
  const [confirming, setConfirming] = useState(false)
  const notional = Number(qty || 0) * Number(price || 0)

  const submit = (e) => {
    e.preventDefault()
    if (!confirming) {
      setConfirming(true)
      return
    }
    onSubmit({ symbol: stock.symbol, side, qty, price })
  }

  return (
    <Modal open onClose={onClose} title={confirming ? 'Confirm order' : 'Place order'}>
      <div className="mb-5 flex items-center gap-3 rounded-2xl bg-void/60 p-3">
        <TickerLogo symbol={stock.symbol} color={stock.color} />
        <div className="flex-1">
          <p className="font-semibold text-white">{stock.name}</p>
          <p className="font-mono text-sm text-soft">{stock.symbol}</p>
        </div>
        <div className="text-right">
          <p className="font-mono text-white">{formatCurrency(stock.price)}</p>
          <PriceChange percent={stock.changePercent} compact />
        </div>
      </div>

      <form onSubmit={submit} className="space-y-4">
        <div className="grid grid-cols-2 gap-2 rounded-2xl bg-void/50 p-1">
          {['buy', 'sell'].map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => {
                setSide(s)
                setConfirming(false)
              }}
              className={`rounded-xl py-2 text-sm font-semibold capitalize transition ${
                side === s
                  ? s === 'buy'
                    ? 'bg-gain text-ink'
                    : 'bg-loss text-white'
                  : 'text-soft hover:text-white'
              }`}
            >
              {s}
            </button>
          ))}
        </div>

        <label className="block text-sm text-soft">
          Quantity
          <input
            type="number"
            min="1"
            step="1"
            value={qty}
            onChange={(e) => {
              setQty(e.target.value)
              setConfirming(false)
            }}
            className="mt-1.5 w-full rounded-2xl border border-line bg-panel px-4 py-3 font-mono text-white outline-none focus:border-mint/50"
          />
        </label>

        <label className="block text-sm text-soft">
          Limit price
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={price}
            onChange={(e) => {
              setPrice(e.target.value)
              setConfirming(false)
            }}
            className="mt-1.5 w-full rounded-2xl border border-line bg-panel px-4 py-3 font-mono text-white outline-none focus:border-mint/50"
          />
        </label>

        <div className="rounded-2xl border border-line bg-ink/60 p-4 text-sm">
          <p className="mb-2 font-semibold text-white">Order summary</p>
          <div className="space-y-1.5 text-soft">
            <div className="flex justify-between">
              <span>Side</span>
              <span className="capitalize text-white">{side}</span>
            </div>
            <div className="flex justify-between">
              <span>Shares</span>
              <span className="font-mono text-white">{qty || 0}</span>
            </div>
            <div className="flex justify-between">
              <span>Est. total</span>
              <span className="font-mono text-white">{formatCurrency(notional)}</span>
            </div>
            <div className="flex justify-between">
              <span>{side === 'buy' ? 'Buying power' : 'Shares held'}</span>
              <span className="font-mono text-white">
                {side === 'buy' ? formatCurrency(cash) : heldQty}
              </span>
            </div>
          </div>
        </div>

        {confirming && (
          <p className="rounded-2xl bg-gold/10 px-4 py-3 text-sm text-gold">
            Review the ticket, then confirm to submit this {side} order for {stock.symbol}.
          </p>
        )}

        <div className="flex gap-2 pt-1">
          <button
            type="button"
            onClick={onClose}
            className="flex-1 rounded-full border border-line py-3 text-sm font-semibold text-white"
          >
            Cancel
          </button>
          <button
            type="submit"
            className={`flex-1 rounded-full py-3 text-sm font-semibold ${
              side === 'buy' ? 'bg-gain text-ink' : 'bg-loss text-white'
            }`}
          >
            {confirming ? `Confirm ${side}` : `${side === 'buy' ? 'Buy' : 'Sell'} ${stock.symbol}`}
          </button>
        </div>
      </form>
    </Modal>
  )
}

export default function TradeModal() {
  const { trade, closeTrade, executeTrade, cash, holdings } = useApp()
  const stock = trade ? getStock(trade.symbol) : null
  if (!trade || !stock) return null

  const heldQty = holdings.find((h) => h.symbol === trade.symbol)?.qty ?? 0

  return (
    <TradeForm
      key={`${trade.symbol}-${trade.side}`}
      stock={stock}
      initialSide={trade.side}
      cash={cash}
      heldQty={heldQty}
      onClose={closeTrade}
      onSubmit={executeTrade}
    />
  )
}
