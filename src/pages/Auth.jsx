import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useApp } from '../context/AppContext'
import Logo from '../components/ui/Logo'

export default function Auth({ mode = 'login' }) {
  const isLogin = mode === 'login'
  const { login, signup } = useApp()
  const navigate = useNavigate()
  const [form, setForm] = useState({ name: '', email: '', password: '' })
  const [error, setError] = useState('')

  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const submit = (e) => {
    e.preventDefault()
    if (!form.email || !form.password || (!isLogin && !form.name)) {
      setError('Please complete all fields.')
      return
    }
    if (form.password.length < 6) {
      setError('Password should be at least 6 characters.')
      return
    }
    const name = form.name || form.email.split('@')[0]
    if (isLogin) login({ name, email: form.email })
    else signup({ name: form.name, email: form.email })
    navigate('/portfolio')
  }

  return (
    <div className="grid min-h-[calc(100svh-72px)] lg:grid-cols-2">
      <div className="relative hidden overflow-hidden bg-ink lg:block">
        <div className="absolute inset-0 grid-bg opacity-50" />
        <div className="orb left-10 top-16 h-64 w-64 bg-mint/20" />
        <div className="relative flex h-full flex-col justify-between p-12">
          <Link to="/home" className="inline-flex items-center gap-2">
            <Logo />
            <span className="font-display text-xl font-bold text-white">Meridian</span>
          </Link>
          <div>
            <h2 className="font-display text-4xl font-bold text-white">Markets, mapped to a single desk.</h2>
            <p className="mt-4 max-w-md text-soft">
              Sign in to review holdings, manage your watchlist, and place paper trades with a professional ticket.
            </p>
          </div>
          <p className="text-xs text-soft">Demo authentication only — nothing is stored on a server.</p>
        </div>
      </div>

      <div className="flex items-center justify-center px-4 py-16">
        <form onSubmit={submit} className="w-full max-w-md rounded-3xl border border-line bg-panel p-7">
          <h1 className="font-display text-3xl font-bold text-white">{isLogin ? 'Welcome back' : 'Create your account'}</h1>
          <p className="mt-2 text-sm text-soft">
            {isLogin ? 'Log in to your Meridian workspace.' : 'Open a demo account in seconds.'}
          </p>

          {!isLogin && (
            <label className="mt-6 block text-sm text-soft">
              Full name
              <input
                name="name"
                value={form.name}
                onChange={onChange}
                className="mt-1.5 w-full rounded-2xl border border-line bg-ink px-4 py-3 text-white outline-none focus:border-mint/50"
              />
            </label>
          )}
          <label className="mt-4 block text-sm text-soft">
            Email
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={onChange}
              className="mt-1.5 w-full rounded-2xl border border-line bg-ink px-4 py-3 text-white outline-none focus:border-mint/50"
            />
          </label>
          <label className="mt-4 block text-sm text-soft">
            Password
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={onChange}
              className="mt-1.5 w-full rounded-2xl border border-line bg-ink px-4 py-3 text-white outline-none focus:border-mint/50"
            />
          </label>
          {error && <p className="mt-3 text-sm text-loss">{error}</p>}
          <button type="submit" className="mt-6 w-full rounded-full bg-mint py-3 text-sm font-semibold text-ink hover:bg-white">
            {isLogin ? 'Login' : 'Sign Up'}
          </button>
          <p className="mt-4 text-center text-sm text-soft">
            {isLogin ? (
              <>
                New here?{' '}
                <Link to="/signup" className="text-mint">
                  Sign Up
                </Link>
              </>
            ) : (
              <>
                Already have an account?{' '}
                <Link to="/login" className="text-mint">
                  Login
                </Link>
              </>
            )}
          </p>
        </form>
      </div>
    </div>
  )
}
