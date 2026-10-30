import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Ensures that whenever the route changes (e.g. entering any project case study page),
 * the window focus/scroll position resets to the very top (Hero section).
 * If a hash anchor is provided (e.g. /#casos), it smoothly scrolls to that element.
 */
export const ScrollToTop = () => {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    } else {
      const element = document.querySelector(hash)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }, [pathname, hash])

  return null
}
