import { createContext, useContext, useMemo, useState } from 'react'
import { getStock, initialHoldings, stocks } from '../data/marketData'

const AppContext = createContext(null)

const loadUser = () => {
  try {
    const raw = sessionStorage.getItem('meridian-user')
    return raw ? JSON.parse(raw) : null
  } catch {
    return null
  }
}

export function AppProvider({ children }) {
  const [user, setUser] = useState(loadUser)
  const [watchlist, setWatchlist] = useState(['NVDA', 'AAPL', 'TSLA', 'AMZN'])
  const [holdings, setHoldings] = useState(initialHoldings)
  const [cash, setCash] = useState(24850)
  const [toasts, setToasts] = useState([])
  const [trade, setTrade] = useState(null)
  const [newsItem, setNewsItem] = useState(null)

  const pushToast = (message, tone = 'mint') => {
    const id = Date.now() + Math.random()
    setToasts((prev) => [...prev, { id, message, tone }])
    window.setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id))
    }, 3200)
  }

  const login = ({ name, email }) => {
    const next = { name, email }
    setUser(next)
    sessionStorage.setItem('meridian-user', JSON.stringify(next))
    pushToast(`Welcome back, ${name.split(' ')[0]}.`)
  }

  const signup = ({ name, email }) => {
    const next = { name, email }
    setUser(next)
    sessionStorage.setItem('meridian-user', JSON.stringify(next))
    pushToast(`Account created. Welcome to Meridian, ${name.split(' ')[0]}.`)
  }

  const logout = () => {
    setUser(null)
    sessionStorage.removeItem('meridian-user')
    pushToast('You have been signed out.', 'gold')
  }

  const isWatched = (symbol) => watchlist.includes(symbol)

  const toggleWatchlist = (symbol) => {
    setWatchlist((prev) => {
      if (prev.includes(symbol)) {
        pushToast(`${symbol} removed from watchlist.`, 'gold')
        return prev.filter((s) => s !== symbol)
      }
      pushToast(`${symbol} added to watchlist.`)
      return [...prev, symbol]
    })
  }

  const removeFromWatchlist = (symbol) => {
    setWatchlist((prev) => prev.filter((s) => s !== symbol))
    pushToast(`${symbol} removed from watchlist.`, 'gold')
  }

  const openTrade = (symbol, side = 'buy') => {
    setTrade({ symbol, side })
  }

  const closeTrade = () => setTrade(null)

  const executeTrade = ({ symbol, side, qty, price }) => {
    const quantity = Number(qty)
    const px = Number(price)
    const notional = quantity * px
    const stock = getStock(symbol)

    if (!quantity || quantity <= 0) {
      pushToast('Enter a valid quantity.', 'loss')
      return false
    }

    if (side === 'buy') {
      if (notional > cash) {
        pushToast('Insufficient buying power.', 'loss')
        return false
      }
      setCash((c) => c - notional)
      setHoldings((prev) => {
        const existing = prev.find((h) => h.symbol === symbol)
        if (!existing) return [...prev, { symbol, qty: quantity, avgCost: px }]
        const totalQty = existing.qty + quantity
        const avgCost = (existing.avgCost * existing.qty + notional) / totalQty
        return prev.map((h) => (h.symbol === symbol ? { ...h, qty: totalQty, avgCost } : h))
      })
      pushToast(`Bought ${quantity} ${symbol} @ ${px.toFixed(2)}`)
    } else {
      const existing = holdings.find((h) => h.symbol === symbol)
      if (!existing || existing.qty < quantity) {
        pushToast('Not enough shares to sell.', 'loss')
        return false
      }
      setCash((c) => c + notional)
      setHoldings((prev) =>
        prev
          .map((h) => (h.symbol === symbol ? { ...h, qty: h.qty - quantity } : h))
          .filter((h) => h.qty > 0),
      )
      pushToast(`Sold ${quantity} ${symbol} @ ${px.toFixed(2)}`)
    }

    if (stock && !watchlist.includes(symbol) && side === 'buy') {
      setWatchlist((prev) => [...prev, symbol])
    }

    setTrade(null)
    return true
  }

  const enrichedHoldings = useMemo(
    () =>
      holdings.map((h) => {
        const stock = getStock(h.symbol)
        const price = stock?.price ?? h.avgCost
        const marketValue = price * h.qty
        const cost = h.avgCost * h.qty
        const pnl = marketValue - cost
        const pnlPct = cost ? (pnl / cost) * 100 : 0
        const dayPnl = ((stock?.change ?? 0) * h.qty)
        return { ...h, ...stock, price, marketValue, cost, pnl, pnlPct, dayPnl }
      }),
    [holdings],
  )

  const portfolioValue = useMemo(
    () => enrichedHoldings.reduce((sum, h) => sum + h.marketValue, 0) + cash,
    [enrichedHoldings, cash],
  )

  const invested = useMemo(
    () => enrichedHoldings.reduce((sum, h) => sum + h.cost, 0),
    [enrichedHoldings],
  )

  const totalPnl = useMemo(
    () => enrichedHoldings.reduce((sum, h) => sum + h.pnl, 0),
    [enrichedHoldings],
  )

  const todayChange = useMemo(
    () => enrichedHoldings.reduce((sum, h) => sum + h.dayPnl, 0),
    [enrichedHoldings],
  )

  const value = {
    user,
    login,
    signup,
    logout,
    watchlist,
    watchlistStocks: stocks.filter((s) => watchlist.includes(s.symbol)),
    isWatched,
    toggleWatchlist,
    removeFromWatchlist,
    holdings: enrichedHoldings,
    cash,
    portfolioValue,
    invested,
    totalPnl,
    todayChange,
    trade,
    openTrade,
    closeTrade,
    executeTrade,
    toasts,
    newsItem,
    setNewsItem,
  }

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export const useApp = () => {
  const ctx = useContext(AppContext)
  if (!ctx) throw new Error('useApp must be used within AppProvider')
  return ctx
}
