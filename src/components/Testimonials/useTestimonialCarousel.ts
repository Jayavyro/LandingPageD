import { useCallback, useEffect, useRef, useState } from 'react'

const ROTATION_MS = 5500
const SWIPE_THRESHOLD_PX = 48

interface UseTestimonialCarouselOptions {
  length: number
  prefersReducedMotion?: boolean | null
}

export function useTestimonialCarousel({
  length,
  prefersReducedMotion,
}: UseTestimonialCarouselOptions) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [direction, setDirection] = useState(1)
  const [isPaused, setIsPaused] = useState(false)
  const touchStartX = useRef<number | null>(null)

  const goTo = useCallback(
    (index: number, nextDirection?: number) => {
      if (length <= 1) return

      const normalizedIndex = ((index % length) + length) % length
      if (normalizedIndex === activeIndex) return

      const resolvedDirection =
        nextDirection ??
        (normalizedIndex === (activeIndex + 1) % length
          ? 1
          : normalizedIndex === (activeIndex - 1 + length) % length
            ? -1
            : normalizedIndex > activeIndex
              ? 1
              : -1)

      setDirection(resolvedDirection)
      setActiveIndex(normalizedIndex)
    },
    [activeIndex, length],
  )

  const goNext = useCallback(() => {
    if (length <= 1) return
    setDirection(1)
    setActiveIndex((current) => (current + 1) % length)
  }, [length])

  const goPrev = useCallback(() => {
    if (length <= 1) return
    setDirection(-1)
    setActiveIndex((current) => (current - 1 + length) % length)
  }, [length])

  useEffect(() => {
    if (isPaused || length <= 1 || prefersReducedMotion) return

    const intervalId = window.setInterval(goNext, ROTATION_MS)
    return () => window.clearInterval(intervalId)
  }, [goNext, isPaused, length, prefersReducedMotion])

  const handleTouchStart = (clientX: number) => {
    touchStartX.current = clientX
  }

  const handleTouchEnd = (clientX: number) => {
    if (touchStartX.current === null) return

    const deltaX = clientX - touchStartX.current
    touchStartX.current = null

    if (Math.abs(deltaX) < SWIPE_THRESHOLD_PX) return

    if (deltaX < 0) {
      goNext()
      return
    }

    goPrev()
  }

  const pause = () => setIsPaused(true)
  const resume = () => setIsPaused(false)

  return {
    activeIndex,
    direction,
    goTo,
    goNext,
    goPrev,
    pause,
    resume,
    handleTouchStart,
    handleTouchEnd,
  }
}
