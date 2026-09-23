import { indices } from '../../data/marketData'
import { formatNumber, formatPercent } from '../../utils/format'

export default function MarketTicker() {
  const items = [...indices, ...indices]

  return (
    <div className="w-full border-y border-white/5 bg-ink/80">
      <div className="overflow-hidden py-3">
        <div className="animate-ticker flex w-max gap-10 pr-10">
          {items.map((idx, i) => {
            const up = idx.changePercent >= 0
            return (
              <div key={`${idx.symbol}-${i}`} className="flex items-center gap-3 whitespace-nowrap">
                <span className="font-mono text-xs text-soft">{idx.symbol}</span>
                <span className="text-sm font-semibold text-white">{idx.name}</span>
                <span className="font-mono text-sm text-white">{formatNumber(idx.price)}</span>
                <span className={`font-mono text-xs ${up ? 'text-gain' : 'text-loss'}`}>
                  {formatPercent(idx.changePercent)}
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
