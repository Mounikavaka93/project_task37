import { Mail, MapPin, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'
import Logo from '../ui/Logo'

const quick = [
  { to: '/', label: 'Intro' },
  { to: '/home', label: 'Home' },
  { to: '/markets', label: 'Markets' },
  { to: '/stocks', label: 'Stocks' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/watchlist', label: 'Watchlist' },
  { to: '/about', label: 'About' },
]

export default function Footer() {
  return (
    <footer className="w-full border-t border-white/5 bg-ink">
      <div className="shell grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link to="/home" className="inline-flex items-center gap-2.5">
            <Logo className="h-9 w-9" />
            <span className="font-display text-lg font-bold text-white">Meridian</span>
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-soft">
            A modern workspace for markets, portfolios, and disciplined investing. Quotes shown here are demo data.
          </p>
          <div className="mt-5 flex gap-2">
            {[
              {
                label: 'X',
                path: 'M4 4l7.2 9.3L4.4 20h2.2l5.4-5.8L16.8 20H22l-7.5-9.7L21.2 4h-2.2l-5 5.4L8.2 4H4zm3 1.6h1.8l9.1 11.8H16.2L7 5.6z',
              },
              {
                label: 'LinkedIn',
                path: 'M6.2 9.2H3.6V20h2.6V9.2zM4.9 4C4 4 3.3 4.7 3.3 5.6S4 7.2 4.9 7.2 6.5 6.5 6.5 5.6 5.8 4 4.9 4zM20.4 13.3c0-3.2-1.7-4.6-4-4.6-1.8 0-2.7 1-3.1 1.7h-.1V9.2H10.6c0 .8 0 10.8 0 10.8h2.6v-6c0-.3 0-.6.1-.9.3-.6.9-1.3 2-1.3 1.4 0 2 1.1 2 2.7V20h2.6v-6.7z',
              },
              {
                label: 'GitHub',
                path: 'M12 2.2c-5.4 0-9.8 4.4-9.8 9.8 0 4.3 2.8 8 6.7 9.3.5.1.7-.2.7-.5v-1.8c-2.7.6-3.3-1.2-3.3-1.2-.4-1.1-1.1-1.4-1.1-1.4-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.4 1.1 3 .8.1-.6.3-1.1.6-1.3-2.2-.2-4.5-1.1-4.5-4.9 0-1.1.4-2 1-2.7-.1-.2-.4-1.2.1-2.5 0 0 .8-.3 2.7 1a9.4 9.4 0 0 1 5 0c1.9-1.3 2.7-1 2.7-1 .5 1.3.2 2.3.1 2.5.6.7 1 1.6 1 2.7 0 3.8-2.3 4.6-4.5 4.9.4.3.7.9.7 1.8v2.6c0 .3.2.6.7.5 3.9-1.3 6.7-5 6.7-9.3 0-5.4-4.4-9.8-9.8-9.8z',
              },
            ].map(({ label, path }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="grid h-10 w-10 place-items-center rounded-full border border-line text-soft transition hover:border-mint/40 hover:text-mint"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
                  <path d={path} />
                </svg>
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-white">Quick links</h3>
          <ul className="mt-4 space-y-2">
            {quick.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-sm text-soft transition hover:text-mint">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-white">Contact</h3>
          <ul className="mt-4 space-y-3 text-sm text-soft">
            <li className="flex items-start gap-2">
              <Mail size={16} className="mt-0.5 text-mint" />
              hello@meridian.trade
            </li>
            <li className="flex items-start gap-2">
              <Phone size={16} className="mt-0.5 text-mint" />
              +1 (212) 555-0188
            </li>
            <li className="flex items-start gap-2">
              <MapPin size={16} className="mt-0.5 text-mint" />
              120 Broadway, New York, NY
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-white">Legal</h3>
          <ul className="mt-4 space-y-2">
            <li>
              <Link to="/privacy" className="text-sm text-soft transition hover:text-mint">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/terms" className="text-sm text-soft transition hover:text-mint">
                Terms & Conditions
              </Link>
            </li>
          </ul>
          <p className="mt-6 text-xs leading-relaxed text-soft/70">
            Market data is simulated for demonstration. Not investment advice.
          </p>
        </div>
      </div>
      <div className="border-t border-white/5 py-5 text-center text-xs text-soft">
        © {new Date().getFullYear()} Meridian Markets. All rights reserved.
      </div>
    </footer>
  )
}
