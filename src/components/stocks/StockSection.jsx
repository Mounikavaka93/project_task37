import { stocks } from '../../data/marketData'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'
import StockCard from './StockCard'

export default function StockSection() {
  return (
    <section className="shell py-10 lg:py-12">
      <Reveal>
      <SectionHeading
        eyebrow="Equities"
        title="Popular & trending stocks"
        copy="A curated tape of names moving the session — tap through to size a buy or sell."
        to="/stocks"
        linkLabel="Browse all stocks"
      />
      </Reveal>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stocks.slice(0, 8).map((stock) => (
          <StockCard key={stock.symbol} stock={stock} />
        ))}
      </div>
    </section>
  )
}
