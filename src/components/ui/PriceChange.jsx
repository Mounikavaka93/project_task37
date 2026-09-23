import { TrendingDown, TrendingUp } from 'lucide-react'
import { formatPercent } from '../../utils/format'

export default function PriceChange({ value, percent, compact = false }) {
  const up = Number(percent ?? value) >= 0
  const cls = up ? 'text-gain' : 'text-loss'
  const Icon = up ? TrendingUp : TrendingDown

  return (
    <span className={`inline-flex items-center gap-1 font-mono text-sm ${cls}`}>
      <Icon size={14} strokeWidth={2.4} />
      {percent !== undefined && <span>{formatPercent(percent)}</span>}
      {value !== undefined && percent !== undefined && !compact && (
        <span className="text-soft/80">({up ? '+' : ''}{Number(value).toFixed(2)})</span>
      )}
      {value !== undefined && percent === undefined && (
        <span>{up ? '+' : ''}{Number(value).toFixed(2)}</span>
      )}
    </span>
  )
}
