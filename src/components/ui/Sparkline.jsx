export default function Sparkline({ data = [], up = true, className = 'h-10 w-28' }) {
  if (!data.length) return null
  const min = Math.min(...data)
  const max = Math.max(...data)
  const span = max - min || 1
  const w = 112
  const h = 40
  const step = w / (data.length - 1)
  const points = data
    .map((v, i) => `${i * step},${h - ((v - min) / span) * (h - 6) - 3}`)
    .join(' ')

  return (
    <svg viewBox={`0 0 ${w} ${h}`} className={className} aria-hidden="true">
      <polyline
        fill="none"
        stroke={up ? '#27e0a3' : '#ff5d7d'}
        strokeWidth="2"
        strokeLinejoin="round"
        strokeLinecap="round"
        points={points}
      />
    </svg>
  )
}
