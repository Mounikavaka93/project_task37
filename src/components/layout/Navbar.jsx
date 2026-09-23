import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useApp } from '../../context/AppContext'
import Logo from '../ui/Logo'

const links = [
  { to: '/home', label: 'Home' },
  { to: '/markets', label: 'Markets' },
  { to: '/stocks', label: 'Stocks' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/watchlist', label: 'Watchlist' },
  { to: '/about', label: 'About' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { user, logout } = useApp()
  const navigate = useNavigate()

  const linkClass = ({ isActive }) =>
    `rounded-full px-3 py-1.5 text-sm font-medium transition ${
      isActive ? 'bg-white/10 text-white' : 'text-soft hover:text-white'
    }`

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-void/80 backdrop-blur-xl">
      <div className="shell flex h-16 items-center justify-between sm:h-[72px]">
        <Link to="/home" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <Logo className="h-9 w-9" />
          <span className="font-display text-lg font-bold tracking-tight text-white">Meridian</span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} className={linkClass}>
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          {user ? (
            <>
              <span className="max-w-[140px] truncate text-sm text-soft">{user.name}</span>
              <button
                type="button"
                onClick={logout}
                className="rounded-full border border-line px-4 py-2 text-sm font-semibold text-white transition hover:border-mint/40"
              >
                Log out
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="rounded-full px-4 py-2 text-sm font-semibold text-white transition hover:text-mint"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="rounded-full bg-mint px-4 py-2 text-sm font-semibold text-ink transition hover:bg-white"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>

        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-xl border border-line text-white lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/5 bg-ink lg:hidden">
          <nav className="shell flex flex-col gap-1 py-4">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `rounded-xl px-3 py-2.5 text-sm font-medium ${isActive ? 'bg-panel text-white' : 'text-soft'}`
                }
              >
                {l.label}
              </NavLink>
            ))}
            <div className="mt-3 flex gap-2">
              {user ? (
                <button
                  type="button"
                  onClick={() => {
                    logout()
                    setOpen(false)
                  }}
                  className="flex-1 rounded-xl border border-line py-2.5 text-sm font-semibold"
                >
                  Log out
                </button>
              ) : (
                <>
                  <button
                    type="button"
                    onClick={() => {
                      setOpen(false)
                      navigate('/login')
                    }}
                    className="flex-1 rounded-xl border border-line py-2.5 text-sm font-semibold"
                  >
                    Login
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setOpen(false)
                      navigate('/signup')
                    }}
                    className="flex-1 rounded-xl bg-mint py-2.5 text-sm font-semibold text-ink"
                  >
                    Sign Up
                  </button>
                </>
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
