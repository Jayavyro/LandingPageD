import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import type { Testimonial } from '../../constants/testimonials'
import './TestimonialAuthorNav.css'

const EASE = [0.22, 1, 0.36, 1] as const
const TRANSITION_MS = 400

interface TestimonialAuthorNavProps {
  testimonials: Testimonial[]
  activeIndex: number
  onSelect: (index: number) => void
}

function getInitials(name: string) {
  return name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()
}

function TestimonialAuthorNav({
  testimonials,
  activeIndex,
  onSelect,
}: TestimonialAuthorNavProps) {
  const prefersReducedMotion = useReducedMotion()
  const viewportRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const [trackOffset, setTrackOffset] = useState(0)
  const [isMobileTrack, setIsMobileTrack] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 960px)')

    const updateLayout = () => {
      setIsMobileTrack(mediaQuery.matches)
    }

    updateLayout()
    mediaQuery.addEventListener('change', updateLayout)

    return () => {
      mediaQuery.removeEventListener('change', updateLayout)
    }
  }, [])

  useLayoutEffect(() => {
    if (!isMobileTrack) {
      setTrackOffset(0)
      return
    }

    const track = trackRef.current
    const viewport = viewportRef.current
    if (!track || !viewport) return

    const activeItem = track.children.item(activeIndex) as HTMLElement | null
    if (!activeItem) return

    const viewportWidth = viewport.clientWidth
    const itemLeft = activeItem.offsetLeft
    const itemWidth = activeItem.offsetWidth
    const centeredOffset = itemLeft - (viewportWidth - itemWidth) / 2
    const maxOffset = Math.max(0, track.scrollWidth - viewportWidth)
    const nextOffset = Math.min(Math.max(0, centeredOffset), maxOffset)

    setTrackOffset(nextOffset)
  }, [activeIndex, isMobileTrack, testimonials.length])

  const items = testimonials.map((testimonial, index) => {
    const isActive = index === activeIndex

    return (
      <button
        key={testimonial.id}
        type="button"
        role="tab"
        data-author-index={index}
        className={`testimonial-author-nav__item${
          isActive ? ' testimonial-author-nav__item--active' : ''
        }`}
        aria-selected={isActive}
        aria-label={`${testimonial.name}, ${testimonial.role} at ${testimonial.company}`}
        onClick={() => onSelect(index)}
      >
        <span className="testimonial-author-nav__avatar" aria-hidden="true">
          {getInitials(testimonial.name)}
        </span>
        <span className="testimonial-author-nav__copy">
          <span className="testimonial-author-nav__name">{testimonial.name}</span>
          <span className="testimonial-author-nav__role">
            {testimonial.role} &bull; {testimonial.company}
          </span>
        </span>
        <span className="testimonial-author-nav__indicator" aria-hidden="true" />
      </button>
    )
  })

  if (isMobileTrack) {
    return (
      <div className="testimonial-author-nav" role="tablist" aria-label="Choose a testimonial">
        <div ref={viewportRef} className="testimonial-author-nav__viewport">
          <motion.div
            ref={trackRef}
            className="testimonial-author-nav__track"
            animate={{ x: -trackOffset }}
            transition={
              prefersReducedMotion
                ? { duration: 0 }
                : { duration: TRANSITION_MS / 1000, ease: EASE }
            }
          >
            {items}
          </motion.div>
        </div>
      </div>
    )
  }

  return (
    <div className="testimonial-author-nav" role="tablist" aria-label="Choose a testimonial">
      {items}
    </div>
  )
}

export default TestimonialAuthorNav
