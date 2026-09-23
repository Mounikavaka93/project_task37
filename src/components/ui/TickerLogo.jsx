export default function TickerLogo({ symbol, color = '#3ef0c5', size = 'md' }) {
  const dim = size === 'sm' ? 'h-8 w-8 text-[10px]' : size === 'lg' ? 'h-14 w-14 text-base' : 'h-11 w-11 text-xs'
  return (
    <div
      className={`grid shrink-0 place-items-center rounded-xl font-display font-bold text-white ${dim}`}
      style={{ background: `linear-gradient(145deg, ${color}, #0c1222 140%)` }}
    >
      {symbol.slice(0, 2)}
    </div>
  )
}
