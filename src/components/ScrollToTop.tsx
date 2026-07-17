import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { scrollToHashWhenReady } from '../lib/scrollToSection'

function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      scrollToHashWhenReady(hash)
      return
    }

    window.scrollTo(0, 0)
  }, [pathname, hash])

  return null
}

export default ScrollToTop
