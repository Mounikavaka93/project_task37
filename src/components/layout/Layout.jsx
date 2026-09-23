import { AnimatePresence, motion } from 'framer-motion'
import { Outlet, useLocation } from 'react-router-dom'
import TradeModal from '../trade/TradeModal'
import NewsModal from '../news/NewsModal'
import ToastStack from '../ui/ToastStack'
import Footer from './Footer'
import Navbar from './Navbar'
import ScrollToTop from './ScrollToTop'

export default function Layout() {
  const location = useLocation()

  return (
    <div className="flex min-h-svh w-full flex-col bg-void">
      <ScrollToTop />
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          className="w-full flex-1"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>
      <Footer />
      <TradeModal />
      <NewsModal />
      <ToastStack />
    </div>
  )
}
