import { motion, useReducedMotion } from 'framer-motion'
import {
  TESTIMONIALS,
  TESTIMONIALS_SUBTITLE,
} from '../../constants/testimonials'
import TestimonialAuthorNav from './TestimonialAuthorNav'
import TestimonialStage from './TestimonialStage'
import { useTestimonialCarousel } from './useTestimonialCarousel'
import './Testimonials.css'

const EASE = [0.22, 1, 0.36, 1] as const

function Testimonials() {
  const prefersReducedMotion = useReducedMotion()
  const carousel = useTestimonialCarousel({
    length: TESTIMONIALS.length,
    prefersReducedMotion,
  })

  const fadeIn = (delay = 0) =>
    prefersReducedMotion
      ? {}
      : {
          initial: { opacity: 0, x: -20 },
          whileInView: { opacity: 1, x: 0 },
          viewport: { once: true, margin: '-72px' },
          transition: { duration: 0.45, delay, ease: EASE },
        }

  const fadeInRight = (delay = 0) =>
    prefersReducedMotion
      ? {}
      : {
          initial: { opacity: 0, x: 24 },
          whileInView: { opacity: 1, x: 0 },
          viewport: { once: true, margin: '-72px' },
          transition: { duration: 0.45, delay, ease: EASE },
        }

  const activeTestimonial = TESTIMONIALS[carousel.activeIndex]

  return (
    <section
      id="testimonials"
      className="testimonials"
      aria-labelledby="testimonials-heading"
    >
      <div className="testimonials__ambient" aria-hidden="true">
        <div className="testimonials__grid-pattern" />
        <div className="testimonials__glow testimonials__glow--center" />
      </div>

      <div className="testimonials__container">
        <div className="testimonials__layout">
          <motion.aside className="testimonials__rail" {...fadeIn(0)}>
            <p className="testimonials__eyebrow">Customer voices</p>

            <h2 id="testimonials-heading" className="testimonials__title">
              What Our{' '}
              <span className="testimonials__title-accent">Customers</span>{' '}
              Say
            </h2>

            <p className="testimonials__subtitle">{TESTIMONIALS_SUBTITLE}</p>

            <div className="testimonials__score" aria-label="5 out of 5 average rating">
              <div className="testimonials__score-stars" aria-hidden="true">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
              </div>
              <p className="testimonials__score-copy">
                <strong>5.0</strong> from teams at FivD
              </p>
            </div>

            <TestimonialAuthorNav
              testimonials={TESTIMONIALS}
              activeIndex={carousel.activeIndex}
              onSelect={(index) =>
                carousel.goTo(index, index > carousel.activeIndex ? 1 : -1)
              }
            />
          </motion.aside>

          <motion.div className="testimonials__stage-wrap" {...fadeInRight(0.08)}>
            <TestimonialStage
              testimonial={activeTestimonial}
              activeIndex={carousel.activeIndex}
              total={TESTIMONIALS.length}
              direction={carousel.direction}
              onNext={carousel.goNext}
              onPrev={carousel.goPrev}
              onGoTo={carousel.goTo}
              onPause={carousel.pause}
              onResume={carousel.resume}
              onTouchStart={carousel.handleTouchStart}
              onTouchEnd={carousel.handleTouchEnd}
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
