import WatchlistGrid from '../components/watchlist/WatchlistGrid'

export default function Watchlist() {
  return (
    <div>
      <header className="border-b border-white/5 bg-ink">
        <div className="shell py-12">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-mint">Watchlist</p>
          <h1 className="mt-2 font-display text-4xl font-bold text-white">Your live watchlist</h1>
          <p className="mt-3 max-w-2xl text-soft">
            Add names from the universe, remove them with one tap, and trade without leaving the card.
          </p>
        </div>
      </header>
      <WatchlistGrid />
    </div>
  )
}
