import WhyChooseUs from '../components/about/WhyChooseUs'
import MarketNews from '../components/news/MarketNews'
import { Link } from 'react-router-dom'

export default function About() {
  return (
    <div>
      <header className="relative overflow-hidden border-b border-white/5 bg-ink">
        <div className="pointer-events-none absolute inset-0 grid-bg opacity-40" />
        <div className="shell relative py-14">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-mint">About</p>
          <h1 className="mt-2 max-w-3xl font-display text-4xl font-bold text-white sm:text-5xl">
            A trading platform designed for clarity
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-soft">
            Meridian is a frontend demonstration of a modern brokerage workspace. We combined a dark fintech palette,
            reusable components, and interactive demo data so you can explore markets, portfolios, and order tickets
            without a backend.
          </p>
        </div>
      </header>
      <WhyChooseUs />
      <section className="shell grid gap-4 py-8 md:grid-cols-3">
        {[
          ['12+', 'Global indices tracked'],
          ['50ms', 'Quote refresh target'],
          ['24/5', 'Desk-style coverage'],
        ].map(([stat, label]) => (
          <div key={label} className="rounded-3xl border border-line bg-panel p-6 text-center">
            <p className="font-display text-3xl font-bold text-mint">{stat}</p>
            <p className="mt-2 text-sm text-soft">{label}</p>
          </div>
        ))}
      </section>
      <MarketNews limit={3} />
      <div className="shell pb-16 text-center">
        <Link to="/signup" className="inline-flex rounded-full bg-mint px-6 py-3 text-sm font-semibold text-ink">
          Join Meridian
        </Link>
      </div>
    </div>
  )
}
