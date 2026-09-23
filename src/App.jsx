import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { AppProvider } from './context/AppContext'
import { SmoothScroll } from './components/layout/SmoothScroll'
import Layout from './components/layout/Layout'
import About from './pages/About'
import Auth from './pages/Auth'
import Entry from './pages/Entry'
import Home from './pages/Home'
import Legal from './pages/Legal'
import Markets from './pages/Markets'
import Portfolio from './pages/Portfolio'
import Stocks from './pages/Stocks'
import Watchlist from './pages/Watchlist'

export default function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <SmoothScroll>
          <Routes>
            <Route path="/" element={<Entry />} />
            <Route element={<Layout />}>
              <Route path="/home" element={<Home />} />
              <Route path="/markets" element={<Markets />} />
              <Route path="/stocks" element={<Stocks />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/watchlist" element={<Watchlist />} />
              <Route path="/about" element={<About />} />
              <Route path="/login" element={<Auth mode="login" />} />
              <Route path="/signup" element={<Auth mode="signup" />} />
              <Route path="/privacy" element={<Legal kind="privacy" />} />
              <Route path="/terms" element={<Legal kind="terms" />} />
              <Route path="*" element={<Navigate to="/home" replace />} />
            </Route>
          </Routes>
        </SmoothScroll>
      </BrowserRouter>
    </AppProvider>
  )
}
