import { createContext, useContext, useEffect, useState } from 'react'
import Lenis from 'lenis'

const SmoothContext = createContext(null)

export function SmoothScroll({ children }) {
  const [lenis, setLenis] = useState(null)

  useEffect(() => {
    const instance = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 0.95,
    })

    setLenis(instance)

    let frame = 0
    const raf = (time) => {
      instance.raf(time)
      frame = requestAnimationFrame(raf)
    }
    frame = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(frame)
      instance.destroy()
      setLenis(null)
    }
  }, [])

  return <SmoothContext.Provider value={lenis}>{children}</SmoothContext.Provider>
}

export const useLenis = () => useContext(SmoothContext)
