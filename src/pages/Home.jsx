import WhyChooseUs from '../components/about/WhyChooseUs'
import Hero from '../components/hero/Hero'
import MarketOverview from '../components/market/MarketOverview'
import MarketTicker from '../components/market/MarketTicker'
import MarketNews from '../components/news/MarketNews'
import PortfolioDashboard from '../components/portfolio/PortfolioDashboard'
import StockSection from '../components/stocks/StockSection'
import TradingSection from '../components/trade/TradingSection'
import WatchlistGrid from '../components/watchlist/WatchlistGrid'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <>
      <Hero />
      <MarketTicker />
      <MarketOverview compact />
      <StockSection />
      <PortfolioDashboard preview />
      <WatchlistGrid preview />
      <TradingSection />
      <WhyChooseUs />
      <MarketNews limit={3} />
      <section className="shell pb-16">
        <div className="relative overflow-hidden rounded-[2rem] border border-mint/20 bg-gradient-to-br from-panel to-ink px-6 py-12 text-center sm:px-12">
          <div className="orb -left-10 top-0 h-40 w-40 bg-mint/20" />
          <h2 className="relative font-display text-3xl font-bold text-white sm:text-4xl">Ready when the market is</h2>
          <p className="relative mx-auto mt-3 max-w-xl text-soft">
            Open a demo workspace, build a watchlist, and place your first paper trade in minutes.
          </p>
          <Link
            to="/signup"
            className="relative mt-6 inline-flex rounded-full bg-mint px-6 py-3 text-sm font-semibold text-ink transition hover:bg-white"
          >
            Create your account
          </Link>
        </div>
      </section>
    </>
  )
}
