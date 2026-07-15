import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'
import './GoToTopButton.css'

const SHOW_OFFSET = 320

function GoToTopButton() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > SHOW_OFFSET)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const scrollToTop = () => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
    })
  }

  return (
    <button
      type="button"
      className={`go-to-top${isVisible ? ' go-to-top--visible' : ''}`}
      onClick={scrollToTop}
      aria-label="Go to top"
      tabIndex={isVisible ? 0 : -1}
    >
      <ArrowUp className="go-to-top__icon" aria-hidden="true" />
    </button>
  )
}

export default GoToTopButton
