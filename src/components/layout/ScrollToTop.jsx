import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useLenis } from './SmoothScroll'

export default function ScrollToTop() {
  const { pathname } = useLocation()
  const lenis = useLenis()

  useEffect(() => {
    if (lenis) {
      lenis.scrollTo(0, { immediate: false, duration: 0.9 })
      return
    }
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [pathname, lenis])

  return null
}
